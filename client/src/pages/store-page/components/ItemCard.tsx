import React from "react";
import Icon from "../../base.components/Icon";
import { ItemCardType } from "../../../types";
import { useNavigate } from "react-router-dom";

interface CardProps {
  itemCard: ItemCardType
}

const ItemCard: React.FC<CardProps> = ({itemCard}: CardProps) => {

  const navigate = useNavigate();
  
  const onClickHandler = () => {
    sessionStorage.setItem('tradeReq', JSON.stringify(itemCard));
    navigate(`../trade`);
  }
  
  return (
    <div className="font-segoe-ui bg-secondary-600 p-2 rounded-lg max-w-[180px] h-[244px] flex flex-col justify-between">
      <div>
        <div className="mb-[20px] rounded bg-secondary-500  h-[104px] flex items-center justify-center">
          <img
            src={`/assets/images/items/${itemCard.itemName}.webp`}
            width={76}
            height={76}
          />
        </div>
        <div className="text-sm font-segoe-ui not-italic font-bold text-primary-100">
          {itemCard.itemName}
        </div>
        <div className="text-xs font-thin text-pretty text-primary-100 flex items-center">
          Rarity:
          <span className="inline ml-1 w-16 ">
            {itemCard.rarity_name}
          </span>
        </div>
      </div>
      <div className="mt-2 text-primary-100 flex items-center justify-between">
        <div className="flex gap-1 flex-grow items-center justify-center font-bold text-xs not-italic font-segoe-ui">
          <div>{itemCard.marketInfo_price}</div>
          <Icon iconFileName="coin-20x20" />
        </div>
        <div className="font-bold flex-grow text-center text-xs not-italic font-segoe-ui">or</div>
        <button onClick={onClickHandler} className="font-bold flex-grow text-xs not-italic font-segoe-ui px-2 py-1 text-primary-100 bg-accent-500 hover:bg-accent-600 rounded">
          Trade
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
