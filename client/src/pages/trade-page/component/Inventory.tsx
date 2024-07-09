import { useEffect, useState } from "react";
import { InventoryType, User } from "../../../types";
import axios from "axios";
import ItemBox from "./ItemBox";
import Icon from "../../base.components/Icon";


const Inventory = () => {

  const API_URL = 'http://10.4.53.25:9996';
  
  const [selectedItems, setSelectedItems] = useState<InventoryType[]>([]);
  const [inventory, setInventory] = useState<InventoryType[]>([]);

  const onClickHandler = () => {
    sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));

    const user: User = JSON.parse(sessionStorage.getItem('user') || '');
    const tradeReq = JSON.parse(sessionStorage.getItem('tradeReq') || '');

    const getLatestIdUrl = `${API_URL}/tradeReq?filter=latestId`;
    axios.get(getLatestIdUrl)
    .then(latestId => {
      selectedItems.map(item => {
        const url = `${API_URL}/tradeReq?tradeId=${latestId.data[0]['MAX(tradeId)']+1}&status=${'pending'}&sentBy=${user.id}&sentTo=${item.ownedBy}&requestItem=${tradeReq.itemId}&exchangeWith=${item.itemId}`;
        axios.post(url);
      })
    })
  }

  const getTotalTradeValue = () => {
    let result = 0;
    selectedItems.forEach(item => result += item.marketInfo_price);
    return result;
  }
  
  useEffect(() => {
    const user: User = JSON.parse(sessionStorage.getItem('user') || '');
    const url = `${API_URL}/inventory/${user.id}`;

    axios.get(url).then(res => setInventory([...res.data]));
  }, []);

  
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row flex-wrap gap-2 p-2 bg-secondary-700 rounded-lg">
        {
          inventory.map((inv, idx) => <ItemBox key={idx} inventory={inv} setState={setSelectedItems}/>)
        }
      </div>
      <div className="self-end flex gap-2 mt-2 justify-center items-center">
        <div className="text-primary-100 font-bold">Trade value {getTotalTradeValue()}</div>
        <Icon iconFileName="coin-20x20"/>
        <button onClick={onClickHandler} className="px-3 text-primary-100 bg-accent-500 font-bold flex items-center justify-center rounded">Trade</button>
      </div>
    </div>
  );
};

export default Inventory;
