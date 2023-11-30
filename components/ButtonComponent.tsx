import React from 'react'

interface  ButtonComponentProps{
    title : String
    color : String
}

export const ButtonComponent = ({title, color} :  ButtonComponentProps) => {

  const btnClassName = `focus:outline-none text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`;

  return (
    <>
      <div className="mx-auto justify-center p-5 m-3">
        <button type="button" className = {btnClassName}> {title} </button>
      </div>
    </>
  )
}

export default ButtonComponent;
