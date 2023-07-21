import React from "react";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import "../app.css";

const Questions = ({ id, title, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  const ToggleShowInfoHandler = () => {
    setShowInfo((prevShow) => !prevShow);
  };
  return (
    <div>
      <div
        className="flex flex-col w-full px-4 py-2 mb-2 bg-white border rounded-lg drop-shadow-lg hover:cursor-pointer active:"
        key={id}
        onClick={ToggleShowInfoHandler}
      >
        <div className="flex items-center justify-between ">
          <p className="items-center inline-block m-0 text-lg font-semibold">
            {title}
          </p>
          <button className="items-center p-3 text-center bg-gray-200 rounded-full ">
            {showInfo ? <IoMdRemove /> : <MdAdd />}
          </button>
        </div>
        {showInfo && (
          <div className="mt-2" id="scale-up-ver-center">
            <p className="text-base font-semibold text-gray-600 ">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
