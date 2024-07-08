interface Props {
  sentTo: string,
  status: string
}

const PendingTradeItem = ({sentTo, status}: Props) => {
  return (
    <div className="bg-secondary-600 flex justify-between items-center p-1 rounded-[4px]">
      <div className="text-primary-100">{sentTo}</div>
      <div className="flex gap-3 items-center">
        <div className="text-primary-100">Status: {status}</div>
        <button className="text-primary-100 font-bold bg-accent-500 px-3 py-1 rounded">View Request</button>
      </div>
    </div>
  )
}

export default PendingTradeItem