import InterfaceParent from "@/data/interfaces/parent";
import React from "react";

interface CheckBoxSocialMediaProps {
  formData: InterfaceParent;
  setFormData: React.Dispatch<React.SetStateAction<InterfaceParent>>;
}

export const CheckBoxSocialMedia = ({
  formData,
  setFormData,
}: CheckBoxSocialMediaProps) => {
  const handleInputChange = (media: string) => {
    const updatedRedesSociales = formData.redesSociales.includes(media)
      ? formData.redesSociales.filter((item) => item !== media)
      : [...formData.redesSociales, media];

    setFormData({
      ...formData,
      redesSociales: updatedRedesSociales,
    });
  };

  const socialMedia = [
    "Facebook",
    "Whatsapp",
    "Instagram",
    "Twitter",
    "TikTok",
    "Telegram",
  ];

  return (
    <>
      <div className="">
        <label
          htmlFor=""
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          ¿Cuenta con alguna de estas redes sociales? (puede seleccionar más de
          una si es el caso):
        </label>

        {socialMedia.map((media, index) => (
          <div key={index} className="items-center mb-4 text-center">
            <input
              id={`si-${index}`}
              type="checkbox"
              name={`checkbox-${index}`}
              value={media}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={formData.redesSociales.includes(media)}
              onChange={() => handleInputChange(media)}
            />
            <label
              htmlFor={`si-${index}`}
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

export default CheckBoxSocialMedia;