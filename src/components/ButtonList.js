import React from "react";
import { BUTTON_LIST_ITEMS } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="overflow-x-auto whitespace-no-wrap mb-8 mt-4">
      {BUTTON_LIST_ITEMS.map((btn) => (
        <button
          key={btn.key}
          className="bg-gray-200 mr-5 mt-2 text-xs font-bold p-1 rounded-md hover:bg-black hover:text-white"
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
