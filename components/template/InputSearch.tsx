import React from "react";

interface InputSearchProps {
    comment : string
}

export const InputSearch = ({comment}: InputSearchProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 row-span-1">
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Busqueda
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
          />
          <p className="ml-auto text-xs text-gray-500 dark:text-gray-400 p-2">
            {comment}
          </p>
        </div>
      </div>
    </>
  );
};

export default InputSearch;
