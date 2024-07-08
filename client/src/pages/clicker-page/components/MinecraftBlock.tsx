import React, { SetStateAction, useEffect, useState } from "react";
import { Block } from "../../../types";
import { motion } from "framer-motion";
import { axiosClient } from "../../../lib/axios";

interface Props {
  currentState: Block | undefined;
  setState: React.Dispatch<SetStateAction<Block | undefined>>;
}

const MinecraftBlock = ({ currentState, setState }: Props) => {
  const [blockName, setBlockName] = useState<string>("");

  const setNewBlock = async () => {
    await axiosClient.get("/blocks?filter=random&limit=1").then((res) => {
      setState(res.data[0]);
      setBlockName(res.data[0].name);
    });
  };

  useEffect(() => {
    setNewBlock();
  });

  const onClickHandler = () => {
    if (!currentState) {
      return;
    }
    currentState.health -= 1;
    if (currentState.health <= 0) {
      setNewBlock();
      // currentState.health = 1;
    }
  };

  return (
    <div onClick={onClickHandler}>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src={`/assets/images/blocks/${blockName}.webp`}
      />
    </div>
  );
};

export default MinecraftBlock;
