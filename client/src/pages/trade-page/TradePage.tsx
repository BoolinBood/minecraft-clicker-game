import Inventory from "./component/Inventory";
import PageNavigator from "../base.components/PageNavigator";
import TradeItemCard from "./component/TradeItemCard";
import Icon from "../base.components/Icon";
const TradePage = () => {

  const item = JSON.parse(sessionStorage.getItem('tradeReq') || '');

  return (
    <div className="h-screen bg-secondary-800 flex">
          <div className="w-[10%] flex justify-center items-center">
            <PageNavigator page="" />
          </div>
          <div className="w-fit flex flex-col justify-center items-center">
            <TradeItemCard itemCard={item} />
          </div>
          <div className="w-6 flex flex-col justify-center items-center">
            <Icon iconFileName="cycle"/>
          </div>
          <div className="w-[45%] flex justify-center items-center">
            <Inventory/>  
          </div>
    </div>
  );
};

{/* <div className="h-screen bg-secondary-800 flex items-center justify-center space-x-4">
      <span className="absolute top-1/2 left-20 transform -translate-y-1/2">
          <PageNavigator page="store" />
      </span>
      <div className="flex items-center gap-20">
        <TradeItemCard itemCard={item} />
      <div>
        <Icon iconFileName="cycle"/>
      </div>
      <div>
          <Inventory/>  
      </div>
      </div>
    </div> */}

export default TradePage;