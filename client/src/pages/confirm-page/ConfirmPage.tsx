import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ClickYesPage from "../confirm-when-click-yes/ClickYesPage";

function Confirm() {
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  const onConfirm = () => {
    setState(1);

    setTimeout(() => {
      navigate("/store");
    }, 3000);
  };

  const onCancel = () => {
    navigate("/");
  };

  if (state === 1) {
    return <ClickYesPage />;
  }

  return (
    <>
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
            </button>{" "}
            {/* เพิ่ม onClick event handler สำหรับปุ่ม No */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirm;
