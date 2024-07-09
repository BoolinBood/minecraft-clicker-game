import axios from "axios";
import { User } from "../../../types";
import { useEffect, useState } from "react";
import TradeItems from "./TradeItems";

interface Props {
  tradeId: number, 
  status: string, 
  username: string
}

const ReceivedTradeItem = () => {

  const [tradeReqs, setTradeReqs] = useState<Props[]>([]);
  const [hidden, setHidden] = useState<boolean>(true);
  
  const API_URL = 'http://10.4.53.25:9996';

  const user: User = JSON.parse(sessionStorage.getItem('user') || '');

  const tradeReqUrl = `${API_URL}/tradeReq?filter=receive&sentTo=${user.id}`;
  
  useEffect(() => {
    axios.get(tradeReqUrl).then(tradeReqs => {
      console.log(tradeReqs.data);
      setTradeReqs([...tradeReqs.data])
    })
  }, []);

  const onClickHandler = () => {
    setHidden(state => !state);
  }
  
  const tradeCards = tradeReqs.map((req: Props) => {
    
    return (
      <>
        <div key={req.tradeId} className="bg-secondary-600 flex justify-between items-center p-1 rounded-[4px]">
          <div className="text-primary-100">{req.username}</div>
          <div className="flex gap-3 items-center">
            <div className="text-primary-100">Status: {req.status}</div>
            <button onClick={onClickHandler} className="text-primary-100 font-bold bg-accent-500 px-3 py-1 rounded">View Request</button>
          </div>
        </div>
        {
          hidden ? <></> : <div className="rounded bg-secondary-600"><TradeItems tradeId={req.tradeId} /></div>
        }
      </>
    )
    
  });
  
  return (
    tradeCards
  )
}

export default ReceivedTradeItem;