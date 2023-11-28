import React from 'react'
import ButtonComponent from '../ButtonComponent'


interface CardCargaPorLoteProps {
    title : string,
}

export const CardCargaPorLote = ({title}: CardCargaPorLoteProps) => {
    return (
        <>
            <div className="grid grid-rows-4 grid-flow-col gap-4 p-5 bg-green-100">
                <div className="text-center row-span-2">
                    <h4 className="font-bold pb-5"> {title} </h4>
                </div>

                <div className="text-center row-span-2">
                    <ButtonComponent title = {"Cargar"} color = {"blue"}></ButtonComponent>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Archivo: carga.csv </label>
                </div>
            </div>
        </>
    )
}

export default CardCargaPorLote;
