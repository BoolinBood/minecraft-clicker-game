import Icon from "./Icon"

interface Props {
  page: string
}

const PageNavigatorButton = ({iconFileName} : {iconFileName: string}) => {
  return (
    <div className="bg-secondary-700 w-12 h-12 rounded-full flex justify-center items-center">
      <Icon iconFileName={iconFileName}/>
    </div>
  )
}

const PageNavigator = ({page}: Props) => {
  
  return (
    page == 'clicker' ?
    <div className="flex flex-col gap-4">
      <PageNavigatorButton  iconFileName="store"/>
      <PageNavigatorButton  iconFileName="scale"/>
      <PageNavigatorButton  iconFileName="trophy"/>
    </div> :
    <PageNavigatorButton  iconFileName="chevron-left"/>
  )
}

export default PageNavigator