import Icon from '../../base.components/Icon'

const SearchBar = () => {
    return (
        <div className="h-[40px] p-1 rounded-md mt-16 bg-secondary-700  inline-flex justify-between items-center gap-[350px]">
          <div className="flex items-center text-primary-100 text-xs font-bold bg-secondary-600 mr-4 rounded-md px-2 py-1">
            10,000 
            <span className='w-6 h-6 ml-2'>
              <Icon iconFileName='coin-20x20'></Icon>    
            </span>
          </div>
         
            <div className="relative inline-flex items-center">
              <span className="absolute left-2 ">
                 <Icon iconFileName='search'></Icon>
              </span>
             <input type="text" name='search' placeholder="Search" className="pl-8 w-[360px] h-8 rounded bg-secondary-600 text-primary-100" />
          </div>
        </div>
      );
};

export default SearchBar;