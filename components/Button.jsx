import React from "react";
export default function Button({ children, onClick, ...props }) {
  return (
    <button
      type="button"
      className={
        "shadow-[5px_5px_0px_-1px_rgba(0,0,0,1)] bg-white active:shadow-[3px_3px_0px_-1px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:bg-purple-400 py-3 border-black  border-solid border-2 lg:py-4 px-6 lg:px-16 text-white-500 font-semibold rounded-lg mt-4 w-auto text-justify transition-all outline-none"
      }
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
