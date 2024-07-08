import React, { SetStateAction, useEffect, useState } from "react";
import { InventoryType } from "../../../types"
import {motion} from 'framer-motion';

interface Props {
  inventory: InventoryType,
  setState: React.Dispatch<SetStateAction<InventoryType[] | []>>
}

const ItemBox = ({inventory, setState}: Props) => {
  
  const [selected, setSelected] = useState<boolean>(false);
  
  const onClickHandler = () => {
    // const tradeReq = sessionStorage.getItem('tradeReq');
    setSelected(selected => !selected);
  }

  useEffect(() => {
    if (selected) {
      setState(state => [...state, inventory]);
    } else {
      setState(state => {
        const indexToRemove = state.findIndex(e => e.itemId = inventory.itemId);
        let tempArr = [];
        for (let i=0; i<state.length;i++) {
          if (i == indexToRemove) continue;
          tempArr.push(state[i]);
        }
        return tempArr;
      });
    }
    }, [selected]);
  
  return (
    <motion.button 
      className={`p-4 h-fit w-fit bg-secondary-600 rounded-lg ${selected ? 'outline outline-2 outline-accent-500' : ''}`}
      onClick={onClickHandler}
      whileHover={{scale: 1.05}}
      whileTap={{opacity: 0.3}} 
    >
      <img className="h-10 w-10" src={`/assets/images/items/${inventory.itemName}.webp`} />
    </motion.button>
  )
}

export default ItemBox