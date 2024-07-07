import Icon from "../../../base.components/Icon"
import LeaderCard from "./LeaderCard"
import TablePagination from "./TablePagination"

const LeaderTable = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-full bg-secondary-700 rounded-lg">
        <tr className="flex items-center p-1 m-2">
          <th className="w-8 h-8 flex items-center justify-center"><Icon iconFileName="hashtag"/></th>
          <th className="w-8 h-8 flex items-center justify-center"></th>
          <th className="font-istok max-w-[40%] text-left flex-grow font-normal text-secondary-500 text-lg">Username</th>
          <th className="font-istok max-w-[40%] flex-grow font-normal text-secondary-500 text-lg">Score</th>
        </tr>
        <LeaderCard nth={4} username="finn" coins={1000}/>
      </table>
      <TablePagination />
    </div>
  )
}

export default LeaderTable