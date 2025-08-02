import React from 'react'

const Header = () => {
  return ( 
    <div className="relative w-full mx-auto h-[76px] lg:h-[47px] bg-linear-to-r from-[var(--primaryRed)] to-[var(--primaryIndigo)] flex justify-center items-center text-center z-10">
      <div
        className="max-w-[350px] lg:max-w-full "
        style={{ lineHeight: 1 }}
      >
        <span className="text-[16px] lg:text-[23px] text-[var(--primaryIndigo)] font-extrabold">
          🚀 FRESH BEGINNINGS SALE:
        </span>{" "}
        <span className="text-white font-bold text-[14px] lg:text-[22px]">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>
    </div>
  );
}

export default Header