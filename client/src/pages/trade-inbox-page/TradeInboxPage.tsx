import PageNavigator from '../base.components/PageNavigator'
import InboxContainer from './components/InboxContainer'
import PendingTradeItem from './components/PendingTradeItem'
import ReceivedTradeItem from './components/ReceivedTradeItem'

const TradeInboxPage = () => {

  const API_URL = 'http://10.4.53.25:9998';
  
  return (
    <div className='h-screen bg-secondary-800 flex'>
      <div className="w-[10%] flex justify-center items-center">
      <PageNavigator page=""/>
    </div>
    <div className="w-[80%] flex flex-col gap-5 justify-center items-center">
      <InboxContainer label='Pending' >
        <PendingTradeItem sentTo='NoobMaster' status='pending'/>
        {
          // getTradeReqs.map((req) => {
          // })
        }
      </InboxContainer>
      
      <InboxContainer label='Received' >
        <ReceivedTradeItem sentBy='NoobMaster'/>
      </InboxContainer>

    </div>
    <div className="w-[10%] flex justify-center items-center">
    </div>
  </div>
  )
}

export default TradeInboxPage