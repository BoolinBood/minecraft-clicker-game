import { useState } from "react";
import PageNavigator from "../base.components/PageNavigator"
import UserBar from "./components/userBar/UserBar"
import { Block, User } from "../../types";
import MinecraftBlock from "./components/MinecraftBlock";



const ClickerPage = () => {

  const rawUserData = JSON.parse(sessionStorage.getItem('user') || '');
  const [userData, setUserData] = useState<User>(rawUserData);
  
  const [currentBlock, setCurrentBlock] = useState<Block>();
  
  return (
    <div className='h-screen bg-secondary-800 flex'>
      <div className="w-[10%] flex justify-center items-center">
        <PageNavigator page="clicker"/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center">
        <MinecraftBlock currentState={currentBlock} setState={setCurrentBlock}/>
      </div>
      <div className="w-[30%] flex justify-center items-center">
        <UserBar userData={userData}/>
      </div>
    </div>
  )
}

export default ClickerPage