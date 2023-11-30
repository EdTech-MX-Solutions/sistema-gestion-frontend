import React from "react";

interface SelectComponentProps {
    options : Array<{
        value : string;
        label : string;
    }>,

    title : string;
}

export const SelectComponent = ({options, title}: SelectComponentProps) => {
  return (
    <>
      <form>
        <div className="p-2">
          <label
            htmlFor="periodo"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {title}
          </label>
          <select
            name="periodo"
            id="periodo"
            className="w-full p-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option disabled selected> Selecciona.... </option>
            {options.map((opcion, index) => (
              <option key={index} value = {opcion.value}> {opcion.label} </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
};

export default SelectComponent;
