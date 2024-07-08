import Icon from "../../../base.components/Icon"
import { useState } from "react"
const TablePagination = () => {
 
  const [pages,setPages] = useState(1);

  const handleNext = () => {
    setPages((prevPage) => prevPage + 1)
  }

  const handlePrevious = () => {
    setPages((prevPage) => Math.max(1,prevPage - 1))
  }
 
  return (
    <div>
        <div className="flex items-center justify-center gap-4 ">
          <button className="bg-secondary-700 w-10 h-10 rounded-full mx-auto flex justify-center items-center" onClick={handlePrevious}><Icon iconFileName="chevron-left"></Icon></button>
          <div className="bg-secondary-600 w-8 h-8 rounded-full text-primary-100 text-lg text-center my-a">{pages}</div>
          <button className="bg-secondary-700 w-10 h-10 rounded-full mx-auto flex justify-center items-center" onClick={handleNext}><Icon iconFileName="chevron-right"></Icon></button>

        </div>
    </div>
  )
}

export default TablePagination