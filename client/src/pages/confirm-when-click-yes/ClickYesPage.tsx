
import Icon from '../base.components/Icon';

function ClickYesPage() {  
  return (
    <div className='flex items-center justify-center h-screen bg-secondary-800'>
         <div className='flex items-center justify-center'>
              <span className="bg-green-alert rounded-lg w-[698px] h-[192px] flex items-center justify-center">
                <Icon iconFileName='correctWhite'></Icon>
              </span>
         </div>
    </div>
  );
}

export default ClickYesPage;