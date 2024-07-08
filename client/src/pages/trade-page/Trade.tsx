// Interface for CardProps
interface CardProps {
    name: string;
    rarity: string; 
    price: string;
}
import Inventory from "./component/Inventory";
// import ItemCard from "../store-page/components/Itemcard";
import IconTrade from "./component/trading"
import PageNavigator from "../base.components/PageNavigator";
const Trade = () => {
  const cardProps: CardProps = {
    name: "Ender of Eye",  
    rarity: "",  
    price: "10,000"       
  };
  


  return (
    <div className="h-screen bg-secondary-800 flex items-center justify-center space-x-4">
      <span className="absolute top-1/2 left-20 transform -translate-y-1/2">
            <PageNavigator page="store" />
          </span>
      <div className="flex items-center gap-20">
        {/* <ItemCard {...cardProps} /> */}
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

export default Trade;