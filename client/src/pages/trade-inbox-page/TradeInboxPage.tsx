import PageNavigator from '../base.components/PageNavigator'
import InboxContainer from './components/InboxContainer'
import PendingTradeItem from './components/PendingTradeItem'
import ReceivedTradeItem from './components/ReceivedTradeItem'

const TradeInboxPage = () => {
  
  return (
    <div className='h-screen bg-secondary-800 flex'>
      <div className="w-[10%] flex justify-center items-center">
      <PageNavigator page=""/>
    </div>
    <div className="w-[80%] flex flex-col gap-5 justify-center items-center">
      <InboxContainer label='Pending' >
        <PendingTradeItem />
      </InboxContainer>
      
      <InboxContainer label='Received' >
        <ReceivedTradeItem />
      </InboxContainer>

    </div>
    <div className="w-[10%] flex justify-center items-center">
    </div>
  </div>
  )
}

export default TradeInboxPage