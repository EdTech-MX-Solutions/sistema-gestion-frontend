import { comment } from "postcss";
import React from "react";

interface TextFieldCardProps{
    comentario : string;
}

export const TextFieldCard = ({comentario} : TextFieldCardProps) => {
  return (
    <>
      <div className="p-4 bg-white">
        <form>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <h5 className="p-2 text-center font-bold text-gray-700">
              Escribir mensaje{" "}
            </h5>
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <textarea
                id="comment"
                rows={4}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                required
              ></textarea>
            </div>
          </div>

          <div className="p-1 text-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Enviar
            </button>
          </div>
        </form>
        <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
          {comentario}
        </p>
      </div>
    </>
  );
};
