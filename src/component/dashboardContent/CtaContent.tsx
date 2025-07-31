import React from 'react'

type Props = {}

const CtaContent = (props: Props) => {
  return (
    <div className="mt-8 lg:mt-5">
      <div className="w-full max-w-[350px] lg:max-w-[310px] mx-auto lg:mx-0 ">
        <button className="w-full h-10 text-white font-bold flex justify-center items-center bg-[var(--primaryRed)] rounded-[10px] drop-shadow-[3px_3px_7px_var(--textIndigo)]">
          <div className="text-[20px]">GET STARTED</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
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