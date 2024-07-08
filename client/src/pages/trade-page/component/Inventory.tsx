import { useEffect, useState } from "react";
import { InventoryType, User } from "../../../types";
import axios from "axios";
import ItemBox from "./ItemBox";
import Icon from "../../base.components/Icon";


const Inventory = () => {

  const API_URL = 'http://10.4.53.25:9998';
  
  const [selectedItems, setSelectedItems] = useState<InventoryType[]>([]);
  const [inventory, setInventory] = useState<InventoryType[]>([]);

  useEffect(() => {
    const user: User = JSON.parse(sessionStorage.getItem('user') || '');
    const url = `${API_URL}/inventory/${user.id}`;

    axios.get(url).then(res => setInventory([...res.data]));
  }, []);

  
  return (
    <div className="w-full flex flex-col">
      <div className="h-[244px] flex flex-row flex-wrap gap-2 p-2 bg-secondary-700 rounded-lg">
        {
          inventory.map((inv, idx) => <ItemBox key={idx} inventory={inv} setState={setSelectedItems}/>)
        }
      </div>
      <div className="self-end flex gap-2 justify-center items-center">
        <div className="text-primary-100 font-bold">Trade value {}</div>
        <Icon iconFileName="coin-20x20"/>
      </div>
    </div>
  );
};

export default Inventory;
