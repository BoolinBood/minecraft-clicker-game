import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxItems, { IBox } from "./BoxItems";
import BookMagic from "../../../../public/assets/store.png";
import Icon from "../../base.components/Icon";
import ConfirmPage from "../../confirm-page/ConfirmPage"
const Inventory = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const items: IBox[] = new Array(34).fill({
    image: BookMagic,
  });

  const handleItemClick = (index: number) => {
    const isSelected = selectedItems.includes(index);
    setSelectedItems(
      isSelected
        ? selectedItems.filter((i) => i !== index)
        : [...selectedItems, index]
    );
  };

  const[state, setState] = useState(0);
  const navigate = useNavigate();

  const tradeClicke = () => {
    setState(1);
    setTimeout(() => {
      navigate("/confirm");
    }, 100);
  }

  if(state == 1){
    return <ConfirmPage/>
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="bg-secondary-700 w-[580px] h-[280px] rounded-lg flex items-center justify-center">
          <div className="flex items-center justify-center h-auto rounded-lg overflow-auto">
            <div className="bg-secondary-600 w-full grid grid-cols-9 gap-2 p-2 rounded">
              {items.map((item, index) => {
                return (
                  <div
                    onClick={() => handleItemClick(index)}
                    className={`cursor-pointer ${
                      selectedItems.includes(index)
                        ? "border-2 border-red-alert rounded"
                        : ""
                    }`}
                  >
                    <BoxItems key={index} item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-4">
          <div className="flex justify-between text-primary-100 font-bold text-xs">
            Trade value 7500
            <span className="ml-2">
              <Icon iconFileName="coin-20x20"></Icon>
            </span>
            <button className="ml-2 bg-accent-500 hover:bg-accent-100 hover:text-accent-600 w-16 h-5 rounded" onClick={tradeClicke}>
              Trade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
