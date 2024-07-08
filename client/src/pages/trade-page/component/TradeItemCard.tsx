import React from "react";
import Icon from "../../base.components/Icon";
import { ItemCardType } from "../../../types";
import { useNavigate } from "react-router-dom";

interface CardProps {
  itemCard: ItemCardType
}

const TradeItemCard: React.FC<CardProps> = ({itemCard}: CardProps) => {

  const navigate = useNavigate();
  
  const onClickHandler = () => {
    sessionStorage.setItem('tradeReq', JSON.stringify(itemCard));
    navigate(`./trade`);
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
        <div className="">Trade value</div>
        <div className="bg-secondary-600 rounded min-w-[76px] flex gap-1 justify-end items-center">
          <span className="text-primary-100 font-segoe-ui font-bold">{itemCard.tradeValue}</span>
          <Icon iconFileName="coin-20x20"/>
      </div>
      </div>
    </div>
  );
};

export default TradeItemCard;
