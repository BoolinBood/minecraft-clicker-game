import ItemCard from "./components/Itemcard"
import SearchBar from "./components/Search";
import PageNavigator from "../base.components/PageNavigator";
import { useEffect, useState } from "react";
import { Inventory } from "../../types";
import axios from "axios";



const StorePage = () => {
    const API_URL = 'http://10.4.53.25:9999';
    const [items, setItems] = useState<Inventory[]>([]);

    useEffect(() => {
      const url = `${API_URL}/inventory`;
      axios.get(url).then(res => {
        setItems([...res.data]);
        console.log(res);
      });
    }, []);
    
      return (
        <div className="h-screen bg-fixed bg-secondary-800 text-white flex flex-col items-center">
          <span className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <PageNavigator page="store" />
          </span>
          <div className="bg-local mt-16">
            <SearchBar />
            <div
              className="max-h-[70vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
            >
              {items.map((item, index) => (
                <ItemCard key={index} name={item.itemName} rarity={item.itemName} price={item.marketInfo_price} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default StorePage;