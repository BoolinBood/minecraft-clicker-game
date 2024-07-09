import React from "react";
import Icon from "../../base.components/Icon";
import { ItemCardType, User } from "../../../types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface CardProps {
  itemCard: ItemCardType
}

const ItemCard: React.FC<CardProps> = ({itemCard}: CardProps) => {

  const API_URL = 'http://10.4.53.25:9996';
  const navigate = useNavigate();
  
  const onClickTradeHandler = () => {
    sessionStorage.setItem('tradeReq', JSON.stringify(itemCard));
    navigate(`../trade`);
  }

  const onClickBuyHandler = () => {
    const user: User = JSON.parse(sessionStorage.getItem('user') || '');
    const getUserUrl = `${API_URL}/users/${user.id}`;
    axios.get(getUserUrl).then(user => {
      const userCanBuyItem = user.data.stats_coins > itemCard.marketInfo_price;
      if (!userCanBuyItem) return;
      const updateInventory = `${API_URL}/inventory/${itemCard.itemId}?ownedBy=${user.data.id}`;
      const updateUser = `${API_URL}/users/${user.data.id}?stats_coins=${user.data.stats_coins - itemCard.marketInfo_price}`;
      axios.put(updateInventory);
      axios.put(updateUser);
    })
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
        <button onClick={onClickBuyHandler} className="flex gap-1 flex-grow items-center justify-center rounded py-1 font-bold text-xs not-italic font-segoe-ui hover:bg-secondary-700">
          <div>{itemCard.marketInfo_price}</div>
          <Icon iconFileName="coin-20x20" />
        </button>
        <div className="font-bold flex-grow text-center text-xs not-italic font-segoe-ui">or</div>
        <button onClick={onClickTradeHandler} className="font-bold flex-grow text-xs not-italic font-segoe-ui px-2 py-1 text-primary-100 bg-accent-500 hover:bg-accent-600 rounded">
          Trade
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
