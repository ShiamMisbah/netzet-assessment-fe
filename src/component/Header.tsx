import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return ( 
    <div className="relative w-full h-[76px] bg-linear-to-r from-[var(--primaryRed)] to-[var(--primaryIndigo)] flex justify-center items-center text-center z-10">
      <div
        className="max-w-[350px] lgd:max-w-[882px] mx-auto"
        style={{ lineHeight: 1 }}
      >
        <span className="text-[16px] lgd:text-[22px] text-[var(--primaryIndigo)] font-extrabold">
          🚀 FRESH BEGINNINGS SALE:
        </span>{" "}
        <span className="text-white font-bold text-[14px] lgd:text-[22px]">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>
    </div>
  );
}

export default Header