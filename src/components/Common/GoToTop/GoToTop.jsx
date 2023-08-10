import React from "react";

function GoToTop() {
  return (
    <div
      className="fixed flex justify-center items-center w-[50px] h-[50px]  
    bottom-0 mb-[3rem] ml-[3rem] z-40 rounded-full bg-slate-700
    border-2 border-emerald-600 shadow-emerald-500/50 shadow-lg hover:cursor-pointer
    hover:-translate-0.5 hover:scale-110 duration-100"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <i className="fa-solid fa-arrow-up text-slate-300 text-[1.5rem] "></i>
    </div>
  );
}

export default GoToTop;
