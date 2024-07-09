import axios from "axios";
import { useEffect, useState } from "react";
import Icon from "../../base.components/Icon";
import { User } from "../../../types";

interface Props {
  tradeId: number;
}

const TradeItemsReceived = ({tradeId}: Props) => {

  const API_URL = 'http://10.4.53.25:9996';

  const user: User = JSON.parse(sessionStorage.getItem('user') || '');
  const [tradeReqItem, setTradeReqItem] = useState<string>('');
  const [exchangeWithItem, setExchangeWithItem] = useState<{name: string}[]>([]);

  const getTradeReqItem = `${API_URL}/tradeReq?filter=reqItem&reqId=${tradeId}`;
  const getTradeExchangeItem = `${API_URL}/tradeReq?filter=exchangeItem&reqId=${tradeId}`;

  useEffect(() => {
    axios.get(getTradeReqItem).then(result => {
      setTradeReqItem(result.data[0].name);
    });
    axios.get(getTradeExchangeItem).then(result => {
      setExchangeWithItem([...result.data]);
    })
  }, []);

  const acceptHandler = () => {
    const deleteTradeIdUrl = `${API_URL}/tradeReq/${tradeId}`;
    axios.delete(deleteTradeIdUrl);
  }
  const declineHandler = () => {
    const deleteTradeIdUrl = `${API_URL}/tradeReq/${tradeId}`;
    axios.delete(deleteTradeIdUrl);
  }
  
  return (
    <>
      <div className="p-2 flex items-center justify-center gap-3">
        <div className="flex gap-1">{exchangeWithItem.map(item => (<img className="w-8 h-8" src={`/assets/images/items/${item.name}.webp`} alt="" />))}</div>
        <Icon iconFileName="cycle"/>
        <div><img className="w-8 h-8" src={`/assets/images/items/${tradeReqItem}.webp`} alt="" /></div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={acceptHandler}>Accept</button>
        <button onClick={declineHandler}>Decline</button>
      </div>
    </>
    
  )
}

export default TradeItemsReceived