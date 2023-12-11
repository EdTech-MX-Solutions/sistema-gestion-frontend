import React from "react";

export const CheckBoxSocialMedia = ({socialMediaState,handleCheckboxChange}: any) => {
  const socialMedia = [
    "Facebook",
    "Whatsapp",
    "Instagram",
    "Twitter",
    "Tiktok",
    "Telegram",
  ];

  return (
    <>
    <div>
      <label
        htmlFor=""
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        ¿Cuenta con alguna red social?
      </label>
      {socialMedia.map((media, index) => (
        <div key={index} className="flex items-center mb-4">
          <input
            id={media.toLowerCase()}
            type="checkbox"
            checked={socialMediaState[media]}
            onChange={(e) => handleCheckboxChange(media, e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor={media.toLowerCase()}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {media}
          </label>
        </div>
      ))}
    </div>
    </>
  );
};
