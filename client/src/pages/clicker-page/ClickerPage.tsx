import PageNavigator from "../base.components/PageNavigator"

const ClickerPage = () => {
  return (
    <div className='h-screen bg-secondary-800 flex'>
    <div className="w-[10%] flex justify-center items-center">
      <PageNavigator page="clicker"/>
    </div>
    <div className="w-[80%] flex flex-col justify-center items-center"></div>
    <div className="w-[10%] flex justify-center items-center"></div>
  </div>
  )
}

export default ClickerPage