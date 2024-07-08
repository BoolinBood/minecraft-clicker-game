import React, { SetStateAction, useEffect, useState } from "react";
import { Block, Item, User } from "../../../types";
import {motion} from 'framer-motion';
import axios from "axios";

interface Props {
  currentState: Block | undefined,
  setState: React.Dispatch<SetStateAction<Block | undefined>>
}

const MinecraftBlock = ({currentState, setState}: Props) => {
  
  const API_URL = 'http://10.4.53.25:9998';

  const [item, setItem] = useState<Item>();

  const setNewBlock = async () => {
    const getBlockUrl = `${API_URL}/blocks?filter=random&limit=1`;
    await axios.get(getBlockUrl).then(res => {
      setState(res.data[0]);
    });
  }

  const setNewItem = async () => {
    axios.get(`${API_URL}/items?filter=chance&chance=${Math.random()}`).then(res => {
      console.log(res.data);
      setItem(res.data);
    });
  }

  const addItemToInventory = async () => {
    if (!item) return;
    const user: User = JSON.parse(sessionStorage.getItem('user') || '');
    const url = `${API_URL}/inventory?ownedBy=${user.id}&itemId=${item.id}&itemName=${item.name}&amount=1&marketInfo_onMarket=0&marketInfo_price=${0}`
    await axios.post(url);
  }
  
  useEffect(() => {
    setNewBlock();
    setNewItem();
  }, []);

  const onClickHandler = () => {
    if (!currentState || !item) {
      return;
    }
    currentState.health -= 1;
    const blockDestroyed = currentState.health <= 0;
    if (blockDestroyed) {
      setNewBlock();
      setNewItem();

      const itemWillDrop = Math.random() < item.rarity_chance;
      if (itemWillDrop) {
        console.log(`ITEM DROPPED: ${item.name}`)
        addItemToInventory()
      };
    };
  }
  
  return (
    <div onClick={onClickHandler}>
      <motion.img 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} 
        src={`/assets/images/blocks/${currentState?.name}.webp`}
      />
      <span className="text-primary-100">{currentState?.health}</span>
    </div>
  )
}

export default MinecraftBlock;