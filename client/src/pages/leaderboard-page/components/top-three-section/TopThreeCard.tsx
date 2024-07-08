import React, { useState, useEffect } from "react";
import Icon from "../../../base.components/Icon";
const TopThreeCard = () => {
  const [users, setUsers] = useState([
    { name: "NoobMasterSam", score: "888,888,888" },
    { name: "NoobMasterFin", score: "888,888,888" },
    { name: "NoobMasterKong", score: "777,777,777" },
  ]);

  useEffect(() => {}, []);

  return (
    <div className=" flex  justify-center items-center mx-auto">
      {users.map((user, index) => (
        <div key={index} className={`mx-4 relative flex flex-col items-center ${ index === 1 ? "-mt-32" : ""}`}>
          <div className="relative">
            {index === 1 && (
              <div className="absolute -top-9 left-1/2 transform -translate-x-1/2">
                <Icon iconFileName="crown"></Icon>
              </div>
            )}
            
            <div
  className={`bg-secondary-500 w-32 h-32 rounded-full flex-shrink flex items-center justify-center mx-auto ${
    index === 1
      ? "border-4 border-yellow-alert w-[200px] h-[200px]"
      : index === 0
      ? "border-4 border-secondary-300 "
      : index === 2
      ? "border-4 border-copper-alert "
      : ""
  }`}
></div>
            
            <div
              className={`bg-secondary-500 rounded-lg w-72 h-32 flex items-center justify-center mt-8 ${
                index === 1 ? "w-96 h-48" : "w-72 h-24"
              }`}>
                <div className="text-center">
                  <div className="font-segoe-ui  text-xl text-primary-100  ">
                    <div className="mb-4">{user.name}</div>
                  <div className={`text-2xl font-semibold`}>{user.score}</div>
                  </div>
                  
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopThreeCard;
