interface Props {
  sentBy: string,
}

const ReceivedTradeItem = ({sentBy}: Props) => {
  return (
    <div className="bg-secondary-600 flex items-center justify-between p-1 rounded-[4px]">
      <div className="text-primary-100">{sentBy} wants to trade with you!</div>
      <div className="flex gap-3">
        <button className="text-primary-100 font-bold bg-accent-500 px-3 py-1 rounded">View Request</button>
      </div>
    </div>
  )
}

export default ReceivedTradeItem