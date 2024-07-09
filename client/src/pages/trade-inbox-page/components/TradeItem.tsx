import { useState } from "react";
import TradeItemsReceived from "./TradeItemsReceived"

interface Props {
  tradeReq: {
    tradeId: number,
    username: string,
  }
}

const TradeItem = ({tradeReq}: Props) => {

  const [hidden, setHidden] = useState<boolean>(true);

  const onClickHandler = () => {
    setHidden(state => !state);
  }
  
  return (
    <>
        <div key={tradeReq.tradeId} className="bg-secondary-600 flex justify-between items-center p-1 rounded-[4px]">
        <div className="text-primary-100">{tradeReq.username}</div>
        <div className="flex gap-3 items-center">
          <button onClick={onClickHandler} className="text-primary-100 font-bold bg-accent-500 px-3 py-1 rounded">View Request</button>
        </div>
        </div>
        {
          hidden ? <></> : <div className="rounded bg-secondary-600 flex items-center flex-col"><TradeItemsReceived tradeId={tradeReq.tradeId} /></div>
        }
    </>
  )
}

export default TradeItem