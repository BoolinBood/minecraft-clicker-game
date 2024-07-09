import { useEffect, useState } from 'react'
import { TradeReq, User } from '../../types'
import PageNavigator from '../base.components/PageNavigator'
import InboxContainer from './components/InboxContainer'
import PendingTradeItem from './components/PendingTradeItem'
import ReceivedTradeItem from './components/ReceivedTradeItem'
import axios from 'axios'

const TradeInboxPage = () => {

  const API_URL = 'http://10.4.53.25:9996';
  
  const [pendingRequests, setPendingRequests] = useState<TradeReq[]>([]);
  const [recevingRequests, setRecevingRequests] = useState<TradeReq[]>([]);
  
  const user: User = JSON.parse(sessionStorage.getItem('user') || '');

  useEffect(() => {
    const getPendingURL = `${API_URL}/tradeReq?filter=pending&sentBy=${user.id}`;
    const getReceivingURL = `${API_URL}/tradeReq?filter=receive&sentBy=${user.id}`;

    axios.get(getPendingURL).then(res => setPendingRequests([...res.data]));
    axios.get(getReceivingURL).then(res => setRecevingRequests([...res.data]));
  }, []);
  
  return (
    <div className='h-screen bg-secondary-800 flex'>
      <div className="w-[10%] flex justify-center items-center">
      <PageNavigator page=""/>
    </div>
    <div className="w-[80%] flex flex-col gap-5 justify-center items-center">
      <InboxContainer label='Pending' >
        <PendingTradeItem tradeReq={pendingRequests} />
      </InboxContainer>
      
      <InboxContainer label='Received' >
        <ReceivedTradeItem tradeReq={recevingRequests}/>
      </InboxContainer>

    </div>
    <div className="w-[10%] flex justify-center items-center">
    </div>
  </div>
  )
}

export default TradeInboxPage