export interface IBox {
  image: string;
}
interface IProps {
  item: IBox;
}

import BookMagic from "../../../../public/assets/store.png"


const BoxItems = ({ item }:IProps) => {
  return (
    <div className='bg-accent-200 w-9 h-9 m-2 flex items-center justify-center rounded'>
        <div>
          <img src={BookMagic} alt="" />
        </div>
    </div>
  )
}

export default BoxItems