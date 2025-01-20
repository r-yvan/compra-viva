import React from "react";
import { IconSearch } from "@tabler/icons-react";

interface Props {
  inputType: string;
  icon: JSX.Element;
  placeholder: string;
}
const InputField = ({ inputType, icon, placeholder }: Props) => {
  return (
    <div className="flex relative">
      <input
        type={inputType}
        placeholder={placeholder}
        className="bg-[#151515] rounded-lg py-2 px-3 border border-white border-opacity-10"
      />
      {icon}
    </div>
  );
};

export default InputField;
