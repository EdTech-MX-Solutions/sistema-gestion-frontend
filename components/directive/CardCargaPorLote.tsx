import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";

interface CardCargaPorLoteProps {
  title: string;
}

export const CardCargaPorLote = ({ title }: CardCargaPorLoteProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <>
      <div className="grid grid-rows-5 grid-flow-col gap-4 p-5 bg-green-100">
        <div className="text-center row-span-1">
          <h4 className="font-bold pb-5"> {title} </h4>
        </div>
        <></>

        <div className="text-center row-span-4">
          <div className="">
            <div className="text-center"></div>
            <form className="mt-8 " action="#" method="POST">
              <div className="grid grid-cols-1 ">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Agregar Archivo CSV
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                      <p className="pointer-none text-gray-500 ">
                        <span className="text-sm">
                          Arrastra y suelta tu archivo
                        </span>{" "}
                        <br /> o{" "}
                        <a
                          href=""
                          id=""
                          className="text-blue-600 hover:underline"
                        >
                          selecciona un archivo
                        </a>{" "}
                        de tu computadora
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span>Descargar Archivo de Ejemplo</span>
              </p>
              <div className="my-5 w-full flex justify-center">
                <ButtonComponent
                  title={"Cargar"}
                  color={"blue"}
                ></ButtonComponent>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCargaPorLote;
