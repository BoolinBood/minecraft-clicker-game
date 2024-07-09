import React, { SetStateAction, useEffect, useState } from "react";
import { Block, Item, User } from "../../../types";
import {motion} from 'framer-motion';
import { axiosClient } from "../../../lib/axios";

interface Props {
  currentState: Block | undefined,
  setState: React.Dispatch<SetStateAction<Block | undefined>>
  setCoinState: React.Dispatch<SetStateAction<number | undefined>>
}

const MinecraftBlock = ({currentState, setState, setCoinState}: Props) => {
  
  const API_URL = 'http://10.4.53.25:9996';

  const [item, setItem] = useState<Item>();
  const [label, setLabel] = useState<string>();

  const setNewBlock = async () => {
    await axiosClient.get('/blocks?filter=random&limit=1').then(res => {
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
    const url = `${API_URL}/inventory?ownedBy=${user.id}&itemId=${item.id}&itemName=${item.name}&amount=1&marketInfo_onMarket=0&marketInfo_price=${item.tradeValue}`
    await axios.post(url);
  }

  const setCoinsToUser = async (amount: number) => {
    const user: User = JSON.parse(sessionStorage.getItem('user') || '');
    axios.get(`${API_URL}/users/${user.id}`).then((user) => {
      const newAmount = user.data.stats_coins + amount;
      axios.put(`${API_URL}/users/${user.data.id}?stats_coins=${newAmount}`)
      setCoinState(newAmount);
    })
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
        setLabel(`Dropped: ${item.name}`);
        setCoinsToUser(item.rarity_chance * 100);
        addItemToInventory();
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
      <span className="text-primary-100">{label}</span>
    </div>
  )
}

export default MinecraftBlock;
