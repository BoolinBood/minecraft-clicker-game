import Icon from "../../../base.components/Icon"

interface Props {
  userCoins: number | undefined;
}

const UserBar = ({userCoins}: Props) => {
  
  return (
    <div className="max-w-[330px] w-full py-4 px-4 flex flex-col items-center gap-3 bg-secondary-700 rounded-3xl">
      <div className="w-24 h-24 bg-secondary-600 rounded-full"></div>

      <div className="w-full flex justify-center bg-secondary-600 p-3 rounded-xl">
        <div><Icon iconFileName="coin-24x24" /></div>
        <div className="text-primary-100 flex-grow flex justify-center">{userCoins}</div>
      </div>
      
      <div className="w-full flex justify-center bg-secondary-600 p-3 rounded-xl">
        
      </div>
    </div>
  )
}

export default UserBar