import Icon from "../../../base.components/Icon";

interface Props {
  nth: number;
  username: string;
  coins: number;
}

const LeaderCard = ({nth, username, coins}: Props) => {
  return (
    <>
      <tr className="flex items-center p-1 m-2 bg-secondary-600 rounded">
        <td className="w-8 h-8 flex items-center justify-center text-primary-100">{nth}</td>
        <td className="w-8 h-8 flex items-center justify-center"></td>
        <td className="font-segoe-ui max-w-[40%] text-left flex-grow font-normal text-primary-100 text-lg">{username}</td>
        <td className="font-segoe-ui max-w-[40%] flex-grow font-normal text-primary-100 text-xl flex justify-center">
          <span className="mr-1 text-lg">{coins}</span>
          <Icon iconFileName="coin-20x20"/>
        </td>
      </tr>
    </>
  )
}

export default LeaderCard