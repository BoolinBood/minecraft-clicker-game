import PageNavigator from "../base.components/PageNavigator"
import LeaderTable from "./components/leader-table/LeaderTable"
import TopThreeSection from "./components/top-three-section/TopThreeSection"

const LeaderboardPage = () => {
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