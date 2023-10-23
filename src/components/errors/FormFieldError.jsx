import React from "react";

const FormFieldError = ({ title }) => {
  return (
    <div className="mt-1">
      <p className=" text-red-500 md:text-base text-sm">{title}</p>
    </div>
  );
};

export default FormFieldError;
