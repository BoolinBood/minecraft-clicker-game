import React, { SetStateAction, useEffect, useState } from "react";
import { Block } from "../../../types";
import {motion} from 'framer-motion';
import axios from "axios";

interface Props {
  currentState: Block | undefined,
  setState: React.Dispatch<SetStateAction<Block | undefined>>
}

const MinecraftBlock = ({currentState, setState}: Props) => {
  
  const API_URL = 'http://10.4.53.25:9999';

  const setNewBlock = async () => {
    const getBlockUrl = `${API_URL}/blocks?filter=random&limit=1`;
    await axios.get(getBlockUrl).then(res => {
      setState(res.data[0]);
    });
  }
  
  useEffect(() => {
    setNewBlock();
  }, []);

  const onClickHandler = () => {
    if (!currentState) {
      return;
    }
    currentState.health -= 1;
    if (currentState.health <= 0) {
      setNewBlock();
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
