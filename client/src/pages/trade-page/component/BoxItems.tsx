export interface IBox {
  image: string;
}

interface IProps {
  item: IBox;
}

const BoxItems = ({ item }: IProps) => {
  return (
    <div className="bg-accent-200 w-[500px] h-[300px] m-2 flex items-center">
      <img src={item.image} alt="item" />
    </div>
  );
};

export default BoxItems;
