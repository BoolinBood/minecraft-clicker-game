import ItemCard from "./components/Itemcard"
import SearchBar from "./components/Search";
import PageNavigator from "../base.components/PageNavigator";



const StorePage = () => {
    const cards = new Array(20).fill({
        name: "Eye of Ender",
        price: "10,000"
      });
      return (
        <div className="h-screen bg-fixed bg-secondary-800 text-white flex flex-col items-center">
          <span className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <PageNavigator page="store" />
          </span>
          <div className="bg-local mt-16">
            <SearchBar />
            <div
              className="max-h-[70vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
            >
              {cards.map((card, index) => (
                <ItemCard key={index} name={card.name} rarity={card.rarity} price={card.price} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default StorePage;