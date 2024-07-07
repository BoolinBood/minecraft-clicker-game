// Interface for CardProps
interface CardProps {
    name: string;
    rarity: string; 
    price: string;
}
import Inventory from "./component/Inventory";
import ItemCard from "../store-page/components/Itemcard";
import IconTrade from "./component/trading"
import PageNavigator from "../base.components/PageNavigator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StorePage from "../store-page/StorePage";
const Trade = () => {
  const cardProps: CardProps = {
    name: "Ender of Eye",  
    rarity: "",  
    price: "10,000"       
  };
  
  const [state, setState] = useState(0);
const navigate = useNavigate();
const onClickIcon = () => {
  setState(1);
  
  setTimeout(() => {
    navigate("/store");
  },100);
}

if(state ===1){
  return <StorePage/>
}


  return (
    <div className="h-screen bg-secondary-800 flex items-center justify-center space-x-4">
      <button className="absolute top-1/2 left-20 transform -translate-y-1/2" onClick={onClickIcon}>
            <PageNavigator page="store" />
          </button>
      <div className="flex items-center gap-20">
        <ItemCard {...cardProps} />
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