// Interface for CardProps
interface CardProps {
    name: string;
    rarity: string; 
    price: string;
  }
  
  import Inventory from "./component/Inventory";
  import ItemCard from "../store-page/components/Itemcard";
  const Trade = () => {
    const cardProps: CardProps = {
      name: "Ender of Eye",  
      rarity: "",  
      price: "10,000"       
    };
  
    return (
      <div className="h-screen bg-secondary-800 flex items-center justify-between">
        <ItemCard {...cardProps} />
        <div>
            <Inventory/>  
        </div>
        
      </div>
    );
  };
  
  export default Trade;