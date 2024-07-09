import { useEffect, useState } from "react";
import PageNavigator from "../base.components/PageNavigator"
import UserBar from "./components/userBar/UserBar"
import { Block, User } from "../../types";
import MinecraftBlock from "./components/MinecraftBlock";
import axios from "axios";



const ClickerPage = () => {

  const API_URL = 'http://10.4.53.25:9996';
  const user: User = JSON.parse(sessionStorage.getItem('user') || '');
  const [userCoins, setUserCoins] = useState<number>();
  
  useEffect(() => {
    axios.get(`${API_URL}/users/${user.id}`).then(user => setUserCoins(user.data.stats_coins));
  }, []);
  
  const [currentBlock, setCurrentBlock] = useState<Block>();
  
  return (
    <div className='h-screen bg-secondary-800 flex'>
      <div className="w-[10%] flex justify-center items-center">
        <PageNavigator page="clicker"/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center">
        <MinecraftBlock currentState={currentBlock} setState={setCurrentBlock} setCoinState={setUserCoins}/>
      </div>
      <div className="w-[30%] flex justify-center items-center">
        <UserBar userCoins={userCoins}/>
      </div>
    </div>
  )
}

export default ClickerPage