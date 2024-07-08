import ItemCard from "./components/ItemCard"
import PageNavigator from "../base.components/PageNavigator";
import { useEffect, useState } from "react";
import { ItemCardType } from "../../types";
import MenuBar from "./components/MenuBar";
import { axiosClient } from "../../lib/axios";

const StorePage = () => {
    const [items, setItems] = useState<ItemCardType[]>([]);

    useEffect(() => {
      const url = `/inventory?filter=getItems`;
      axiosClient.get(url).then(res => {
        setItems([...res.data]);
      });
    }, []);
    
      return (
        <div className="h-screen bg-secondary-800 flex">
          <div className="w-[10%] flex justify-center items-center">
            <PageNavigator page="" />
          </div>
          <div className="w-[80%] flex flex-col justify-center gap-5">
            <MenuBar />
            <div className="grid grid-flow-row auto-rows-min grid-cols-6 gap-5">
              {
                items.map((item, idx) => {
                  return <ItemCard key={idx} itemCard={item} />
                })
              }
            </div>
          </div>
          <div className="w-[10%] flex justify-center items-center">
          </div>
        </div>
      );
}

export default StorePage;