import axios from "axios";
import { TradeReq, User } from "../../../types"
import { useState } from "react";

interface Props {
  tradeReq: TradeReq[]
}

const PendingTradeItem = ({tradeReq}: Props) => {

  const API_URL = 'http://10.4.53.25:9996';

  const components = tradeReq.map((req) => {

    return (
      <>
        <div key={req.tradeId} className="bg-secondary-600 flex justify-between items-center p-1 rounded-[4px]">
          <div className="text-primary-100">{req.sentTo}</div>
          <div className="flex gap-3 items-center">
            <div className="text-primary-100">Status: {req.status}</div>
            <button className="text-primary-100 font-bold bg-accent-500 px-3 py-1 rounded">View Request</button>
          </div>
        </div>
      </>
    )
    
  })
  
  return (
    components
  )
}

export default PendingTradeItem