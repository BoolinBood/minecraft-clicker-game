import React from "react";
import Icon from "../../base.components/Icon";
import EnderEYE from "../../../../public/assets/EnderEYE.png";

interface CardProps {
  name: string;
  rarity: string;
  price: string;
}

const ItemCard: React.FC<CardProps> = ({ name, rarity, price }) => {
  return (
    <div className="font-segoe-ui bg-secondary-600 p-2 rounded-lg w-[170px] h-[244px] flex flex-col justify-between">
      <div>
        <div className="mb-[20px] rounded bg-secondary-500 w-[154px] h-[104px] flex items-center justify-center">
          <img
            src={EnderEYE}
            alt="Eye of Ender"
            className="w-[94px] h-[64px]"
          />
        </div>
        <div className="text-xs font-segoe-ui not-italic font-bold text-primary-100">
          {name}
        </div>
        <div className="text-xs font-thin text-pretty text-primary-100 flex items-center">
          Rarity:
          <span className="inline ml-1 w-[46px] h-[19px]">
            <Icon iconFileName="mythic" />
          </span>
          {rarity}
        </div>
      </div>
      <div className="mt-2 text-primary-100 flex items-center justify-center space-x-2">
        <span className="flex items-center font-bold text-xs not-italic font-segoe-ui">
          {price}
          <span className="inline w-4 h-4 ml-1">
            <Icon iconFileName="coin-20x20" />
          </span>
        </span>
        <span className="font-bold text-xs not-italic font-segoe-ui">or</span>
        <button className="font-bold text-xs not-italic font-segoe-ui px-4 py-0 text-primary-100 bg-accent-500 hover:bg-accent-600 rounded">
          Trade
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
