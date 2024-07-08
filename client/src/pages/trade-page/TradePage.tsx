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
          <div className="flex flex-grow justify-center">
            <div className="w-fit flex flex-col justify-center items-center">
              <TradeItemCard itemCard={item} />
            </div>
            <div className="w-6 flex flex-col justify-center items-center">
              <Icon iconFileName="cycle"/>
            </div>
            <div className="w-[45%] flex flex-col justify-center">
              <Inventory/>
            </div>
          </div>
    </div>
  );
};

export default TradePage;