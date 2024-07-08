import { TradeReq } from "../../../types"

interface Props {
  tradeReq: TradeReq[]
}

const ReceivedTradeItem = ({tradeReq}: Props) => {

  const components = tradeReq.map((req, idx) => {
    return (<>
      <div key={idx} className="bg-secondary-600 flex items-center justify-between p-1 rounded-[4px]">
        <div className="text-primary-100">{req.sentTo} wants to trade with you!</div>
        <div className="flex gap-3">
          <button className="text-primary-100 font-bold bg-accent-500 px-3 py-1 rounded">View Request</button>
        </div>
      </div>
    </>)
  })
  
  return (
    components
  )
}

export default ReceivedTradeItem