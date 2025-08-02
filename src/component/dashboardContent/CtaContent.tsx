import { ChevronRight } from 'lucide-react';
import React from 'react'

const CtaContent = () => {
  return (
    <div className="mt-8 lg:mt-5">
      <div className="w-full max-w-[350px] lg:max-w-[310px] mx-auto lg:mx-0 ">
        <button className="cursor-pointer w-full h-10 text-white font-bold flex justify-center items-center bg-[var(--primaryRed)] rounded-[10px] drop-shadow-[3px_3px_7px_var(--textIndigo)]">
          <div className="text-[20px]">GET STARTED</div>
          <div>
            <ChevronRight />
          </div>
        </button>
        <div className="text-white text-center text-[12px] mt-2">
          <h3>1-minute quiz for personalized Insights</h3>
        </div>
      </div>
    </div>
  );
}

export default CtaContent