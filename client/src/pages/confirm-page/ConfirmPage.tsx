import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNavigator from "../base.components/PageNavigator";
import ClickYesPage from "../confirm-when-click-yes/ClickYesPage";
import Trade from "../trade-page/Trade";
function Confirm() {
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  const [backState, setBackState] = useState(0);
  const navigateClick = useNavigate();
 
  const onClickIcon = () => {
  setBackState(1);
  
  setTimeout(() => {
    navigateClick("/trade");
  },100);
}

if(backState ===1){
  return <Trade/>
}

  const onConfirm = () => {
    setState(1);

    setTimeout(() => {
      navigate("/store");
    }, 3000);
  };

  const onCancel = () => {
    navigate("/trade");
  };

  if (state === 1) {
    return <ClickYesPage />;
  }

  return (
    <>
      <button onClick={onClickIcon} className="absolute top-1/2 left-20 transform -translate-y-1/2">
        <PageNavigator page="" />
      </button>
      <div className="font-segoe-ui text-primary-100 flex items-center justify-center h-screen bg-secondary-800">
        <div className="flex flex-col items-center justify-center text-center bg-accent-800 w-[954px] h-auto py-8 rounded-lg">
          <span className="text-3xl mb-4">
            Are you certain you wish to proceed with the trade?
          </span>
          <div className="inline-block">
            <button
              className="bg-accent-300 w-20 h-9 rounded hover:bg-green-alert mr-2"
              onClick={onConfirm}
            >
              Yes
            </button>
            <button
              className="bg-accent-300 w-20 h-9 rounded hover:bg-red-alert"
              onClick={onCancel}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirm;
