import { useState } from "react";
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
    <div className="w-full flex flex-col">
      <div className="w-full min-h-[50%] bg-secondary-700 rounded-lg">
        hell
      </div>
    </div>
  );
};

export default Inventory;
