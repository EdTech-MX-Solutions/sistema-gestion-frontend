import React from "react";

interface ButtonComponentBiColorProps {
  title: string;
  color1: string;
  color2 : string;
  onClick ?: () => void;
}

export const ButtonComponentBiColor = ({title,color1,color2,onClick}: ButtonComponentBiColorProps) => {
  const btnClassName = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-${color2}-600 to-${color1}-500 group-hover:from-${color1}-600 group-hover:to-${color2}-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-${color1}-300`;

  return (
    <>
      <div className="mx-auto justify-center m-3">
        <button 
          className = {btnClassName}
          onClick = {onClick}
        >
          <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            {title}
          </span>
        </button>
      </div>
    </>
  );
};

export default ButtonComponentBiColor;
