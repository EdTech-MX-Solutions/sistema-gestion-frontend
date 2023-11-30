import React from "react";

interface MessageDescriptionCardProps {}

export const MessageDescriptionCard = ({}: MessageDescriptionCardProps) => {
  return (
    <>
      <div className="p-4">
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            No. de reporte: 1
          </h5>
          da
          <h6 className="mb-5 text-base text-gray-500 sm:text-lg">
            {" "}
            Motivo: Mala conducta
          </h6>
          <p className="mb-5 text-base text-gray-900 sm:text-lg">
            {" "}
            Detalles del mensaje{" "}
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              modi itaque quo ut accusamus ad voluptate quos reiciendis
              consequatur, obcaecati magnam deleniti! Id, dicta! Sapiente eaque
              ipsum ea maxime quos!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageDescriptionCard;
