import { useNavigate } from "react-router-dom"
import Icon from "./Icon"

interface Props {
  page: string
}

const PageNavigatorButton = ({iconFileName, pathTo} : {iconFileName: string, pathTo: string}) => {

  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${pathTo}`);
  }
  
  return (
    <button onClick={onClickHandler} className="bg-secondary-700 w-12 h-12 rounded-full flex justify-center items-center">
      <Icon iconFileName={iconFileName}/>
    </button>
  )
}

const PageNavigator = ({page}: Props) => {
  
  return (
    page == 'clicker' ?
    <div className="flex flex-col gap-4">
      <PageNavigatorButton  iconFileName="store" pathTo="../store"/>
      <PageNavigatorButton  iconFileName="scale" pathTo="../trade"/>
      <PageNavigatorButton  iconFileName="trophy" pathTo="../leaderboard"/>
    </div> :
    <PageNavigatorButton  iconFileName="chevron-left" pathTo="../clicker"/>
  )
}

export default PageNavigator