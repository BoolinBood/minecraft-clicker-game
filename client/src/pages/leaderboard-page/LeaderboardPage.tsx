import { useEffect, useState } from "react"
import PageNavigator from "../base.components/PageNavigator"
import LeaderTable from "./components/leader-table/LeaderTable"
import TopThreeSection from "./components/top-three-section/TopThreeSection"
import { User } from "../../types"
import axios from "axios"

const LeaderboardPage = () => {

  const [users, setUsers] = useState<User>();

  useEffect(() => {
    const url = "http://10.4.53.25:9998/users";
    axios.get(url).then(response => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);
  
  return (
    <div className='h-screen bg-secondary-800 flex'>
      <div className="w-[10%] flex justify-center items-center">
        <PageNavigator page=''/>
      </div>
      <div className="w-[80%] flex flex-col justify-center items-center">
        <TopThreeSection />
        <LeaderTable />
      </div>
      <div className="w-[10%] flex justify-center items-center">
      </div>
    </div>
  )
}

export default LeaderboardPage