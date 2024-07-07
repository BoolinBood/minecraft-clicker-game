import Icon from "../../../base.components/Icon"
import LeaderCard from "./LeaderCard"
import TablePagination from "./TablePagination"

const LeaderTable = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-full bg-secondary-700 rounded-lg">
        <thead>
          <tr className="flex items-center gap-4 p-1 m-2">
            <th className="w-8 h-8 flex items-center justify-center"><Icon iconFileName="hashtag"/></th>
            <th className="w-8 h-8 flex items-center justify-center"></th>
            <th className="font-istok max-w-[40%] text-left flex-grow font-normal text-secondary-500 text-lg">Username</th>
            <th className="font-istok max-w-[40%] flex-grow font-normal text-secondary-500 text-lg">Score</th>
          </tr>
        </thead>
        <tbody>
          <LeaderCard nth={4} username="finn" coins={1000}/>
          <LeaderCard nth={5} username="finn" coins={1000}/>
          <LeaderCard nth={6} username="finn" coins={1000}/>
          <LeaderCard nth={7} username="finn" coins={1000}/>
          <LeaderCard nth={8} username="finn" coins={1000}/>
          <LeaderCard nth={9} username="finn" coins={1000}/>
          <LeaderCard nth={10} username="finn" coins={1000}/>
        </tbody>
      </table>
      <TablePagination />
    </div>
  )
}

export default LeaderTable