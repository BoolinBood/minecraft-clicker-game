import BoxItems, { IBox } from "./BoxItems";

const Inventory = () => {
  const data: IBox[] = [
    {
      image: "/assets/EnderEYE.png",
    },
  ];

  console.log(data);
  return (
    <div className="flex items-center justify-center bg-secondary-700 w-[742px] h-[310px] rounded-lg">
      <div className="bg-secondary-600 w-[710px] h-[280px] rounded">
        {data.map((item, index) => {
          return <BoxItems key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Inventory;
