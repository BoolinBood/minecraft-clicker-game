import ItemCard from "./components/ItemCard"
import PageNavigator from "../base.components/PageNavigator";
import { useEffect, useState } from "react";
import { ItemCardType, User } from "../../types";
import axios from "axios";
import MenuBar from "./components/MenuBar";
import { axiosClient } from "../../lib/axios";

const StorePage = () => {
    const API_URL = 'http://10.4.53.25:9996';
    const [items, setItems] = useState<ItemCardType[]>([]);

    useEffect(() => {
      const user: User = JSON.parse(sessionStorage.getItem('user') || '');
      const url = `${API_URL}/inventory?filter=getItems&id=${user.id}`;
      axios.get(url).then(res => {
        console.log(res.data);
        setItems([...res.data]);
      });
    }, []);
    
      return (
        <div className="h-screen bg-secondary-800 flex items-center">
          <div className="w-[10%] flex justify-center items-center">
            <PageNavigator page="" />
          </div>
          <div className="w-[80%] h-[600px] flex flex-col justify-center gap-5">
            <MenuBar />
            <div className="grid overflow-y-auto grid-cols-6 gap-5">
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