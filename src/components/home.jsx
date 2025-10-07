import React from "react";
import bg1 from "../../img/2.svg";
import bg2 from "../../img/3.svg";
import bg3 from "../../img/4.svg";

const Home = () => {
  const handleClick = ()=>{
    console.console("Haider");
  };
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out">
        <img
          className="absolute z-[1] top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-cover"
          src={bg1}
          alt="bg1"
        />

        <img
          className="absolute z-[2] top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] object-cover"
          src={bg2}
          alt="bg2"
        />
        <img
          className="absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[804px] h-[461px] object-cover"
          src={bg3}
          alt="bg3"
        />
      </div>

      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%] z-[5] text-center text-white flex flex-col items-center">
        <h1 className="my-[10px] text-[2rem]" data-i18n="powerful_simplicity">Powerful. Simplicity...</h1>
        <p className="my-[10px] text-[2rem]">
          Just type what's on your mind and we'll get........
        </p>
        <a
          href="#"
          onClick={handleClick}
          className="mt-[500px] px-8 py-4 bg-[#f9bf29] text-[#111] font-bold rounded-lg no-underline 
                     transition-transform duration-300 hover:scale-105" data-i18n="try_for_free"
        >
          Try For Free
        </a>
      </div>
    </section>
  );
};

export default Home;
