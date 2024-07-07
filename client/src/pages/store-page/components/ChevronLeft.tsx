import React from 'react';
import Icon from '../../base.components/Icon'
interface ChevronLeftButtonProps {
  className?: string;
}

const ChevronLeft: React.FC<ChevronLeftButtonProps> = ({ className }) => {
  return (
    <button
      className={`bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
    >
     <Icon iconFileName='chevron-left'></Icon>
    </button>
  );
};

export default ChevronLeft;