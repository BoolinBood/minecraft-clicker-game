import Inventory from "./component/Inventory";
import IconTrade from "./component/trading"
import PageNavigator from "../base.components/PageNavigator";
import TradeItemCard from "./component/TradeItemCard";
const TradePage = () => {

  const item = JSON.parse(sessionStorage.getItem('tradeReq') || '');

  return (
    <div className="h-screen bg-secondary-800 flex items-center justify-center space-x-4">
      <span className="absolute top-1/2 left-20 transform -translate-y-1/2">
            <PageNavigator page="store" />
          </span>
      <div className="flex items-center gap-20">
        <TradeItemCard itemCard={item} />
      <div>
        <IconTrade/>
      </div>
      <div>
          <Inventory/>  
      </div>
      </div>
      
    </div>
  );
};

export default TradePage;