import React, { useState } from "react"
import { InventoryType, User } from "../../../types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  onclick: (state: InventoryType[]) => void,
  state: InventoryType[]
}

const TradeConfirmButton = ({onclick, state}: Props) => {

  const API_URL = 'http://10.4.53.25:9998';
  const navigate = useNavigate();
  
  const onClickHandler = () => {
    onclick(state);
    setButtonState(state => !state);
  }

  const confirmClick = () => {
    const selectedItems: InventoryType[] = JSON.parse(sessionStorage.getItem('selectedItem') || '');
    console.log(selectedItems);
    const tradeReqItem: InventoryType  = JSON.parse(sessionStorage.getItem('tradeReq') || '');
    const user: User = JSON.parse(sessionStorage.getItem('user') || '');
    axios.get(`${API_URL}/tradeReq?filter=latestId`).then(
      res => res.data
    ).then(latestId => {
      selectedItems.map(item => {
        const url = `${API_URL}/tradeReq?tradeId=${latestId.id+1}&status=pending&sentBy=${user.id}&sentTo=${tradeReqItem.ownedBy}&requestItem=${tradeReqItem.itemId}&exchangeWith=${item.itemId}`;
        axios.post(url);
      });
    });
  }

  const [buttonState, setButtonState] = useState<boolean>(false);
  

  
  return (
    <>
      {
        buttonState == true 
        ?
        <div className="flex gap-3">
          <button onClick={confirmClick} className="text-primary-100  px-4 rounded bg-[#24BA2A] font-bold">Confirm</button>
          <button onClick={onClickHandler} className="text-primary-100 px-4 rounded bg-[#EC3219] font-bold">Cancel</button>
        </div>
        : <button onClick={onClickHandler} className="text-primary-100 font-bold bg-accent-500 px-4 rounded">Trade</button>
      }
    </>
  )
}

export default TradeConfirmButton