import React from 'react'

const MainHeadline = () => {
  return (
    <div className="text-center lg:text-left">
      <div
        className="font-extrabold text-[25px] lg:text-[34.5px] text-white"
        style={{ lineHeight: 1.2 }}
      >
        Want to Turn Social Media Into a Profitable Career?{" "}
      </div>
      <div
        className="font-extrabold text-[var(--textIndigo)] text-[25px] lg:text-[34.5px] text-shadow-[0_4px_4px_var(--primaryRed)]"
        style={{ lineHeight: 1.2 }}
      >
        Discover your way to success with Fametonic:{" "}
      </div>
    </div>
  );
}

export default MainHeadline