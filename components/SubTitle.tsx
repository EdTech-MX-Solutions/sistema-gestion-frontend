import React from 'react'

interface SubTitleProps{
    title : string
    subtitle : string
}

export const SubTitle = ({title, subtitle} : SubTitleProps) => {
  return (
    <>
        <div className="p-5">
          <h4 className="font-bold text-gray-700"> {subtitle} </h4>
        </div>

        <div className="p-3 bg-green-400 rounded-lg justify-center text-center">
          <h5 className="p-2 text-center font-bold text-gray-700"> {title} </h5>
        </div>
    </>
  )
}

export default SubTitle;
