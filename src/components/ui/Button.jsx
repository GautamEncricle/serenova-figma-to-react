import React from "react";

const Button = ({ buttonText = "Click Me", onClick, className = "" }) => {
  return (
    <button
      className={`
        font-medium bg-transparent p-2 border-2 border-brand-accent text-brand-accent 
        hover:bg-stone-700 hover:text-white transition-colors duration-300 cursor-pointer
        ${className}
      `}
      {...(onClick && { onClick })}
    >
      {buttonText}
    </button>
  );
};

export default Button;
