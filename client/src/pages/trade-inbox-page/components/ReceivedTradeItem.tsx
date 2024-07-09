import axios from "axios";
import { User } from "../../../types";
import { useEffect, useState } from "react";
import TradeItems from "./TradeItemsPending";
import TradeItemsReceived from "./TradeItemsReceived";
import TradeItem from "./TradeItem";

interface Props {
  tradeId: number, 
  status: string, 
  username: string
}

const ReceivedTradeItem = () => {

  const [tradeReqs, setTradeReqs] = useState<Props[]>([]);
  
  const API_URL = 'http://10.4.53.25:9996';

  const user: User = JSON.parse(sessionStorage.getItem('user') || '');

  const tradeReqUrl = `${API_URL}/tradeReq?filter=receive&sentTo=${user.id}`;
  
  useEffect(() => {
    axios.get(tradeReqUrl).then(tradeReqs => {
      console.log(tradeReqs.data);
      setTradeReqs([...tradeReqs.data])
    })
  }, []);


  
  const tradeCards = tradeReqs.map((req: Props) => {
    
    return (
      <>
        <TradeItem tradeReq={req} />
      </>
    )
    
  });
  
  return (
    tradeCards
  )
}

export default ReceivedTradeItem;