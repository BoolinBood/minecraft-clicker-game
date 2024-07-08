import { useEffect, useState } from "react"
import { User } from "../../../types";
import Icon from "../../base.components/Icon";
import { axiosClient } from "../../../lib/axios";

const MenuBar = () => {
  const [userData, setUserData] = useState<User>();
  
  useEffect(() => {
    const sessionData: User = JSON.parse(sessionStorage.getItem('user') || '');
    const url = `/users/${sessionData.id}`;
    axiosClient.get(url).then(user => {
      setUserData(user.data);
    });
  }, []);
  
  return (
    <div className="p-1 h-10 flex justify-between rounded-lg bg-secondary-700">
      <div className="bg-secondary-600 rounded min-w-[76px] flex gap-1 justify-center items-center">
        <span className="text-primary-100 font-segoe-ui font-bold">{userData?.stats_coins}</span>
        <Icon iconFileName="coin-20x20"/>
      </div>
      <div className="p-1 bg-secondary-600 rounded w-[360px] flex gap-1 items-center">
        <Icon iconFileName="search"/>
        <input type="text" placeholder="Search" className="w-full bg-secondary-600 font-istok text-secondary-100 focus:outline-none"/>
      </div>
    </div>
  )
}

export default MenuBar