import React from 'react'
import main_logo from '@/app/assets/main_logo.png'
import hero_img from '@/app/assets/hero_img.jpg'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className=" px-5 md:px-20 py-4 pb-10 relative max-w-[1440px] mx-auto">
      <div className="relative flex justify-center items-center z-10">
        <Image alt="main_logo" width={108} height={46} src={main_logo.src} />
        <div className="absolute right-[6px] top-[10px] text-white cursor-pointer z-10">
          <Menu />
        </div>
      </div>

      <div className="relative w-full lgl:w-1/2 flex justify-center lgl:flex-col -mt-19 z-0">
        <Image
          alt="hero_logo"
          src={hero_img}
          width={500} // your desired width
          height={0} // use style for height instead
          style={{ height: "auto", width: "88%" }} // width 100% of parent, auto height
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
      <div className="relative w-full -mt-22">
        <div>
          <div
            className="font-extrabold text-[25px] text-white text-center"
            style={{ lineHeight: 1.2 }}
          >
            Want to Turn Social Media Into a Profitable Career?{" "}
          </div>
          <div
            className="font-extrabold text-[var(--textIndigo)] text-[25px] text-center text-shadow-[0_4px_4px_var(--primaryRed)]"
            style={{ lineHeight: 1.2 }}
          >
            Discover your way to success with Fametonic:{" "}
          </div>
        </div>
        <div className="text-white mt-6">
          <ul>
            <li className="flex justify-start items-center gap-3 mb-1">
              <div>✨</div>{" "}
              <h3>
                Start growing your influence right away—no waiting required!
              </h3>
            </li>
            <li className="flex justify-start items-center gap-3 mb-1">
              <div>✨</div>{" "}
              <h3>
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </h3>
            </li>
            <li className="flex justify-start items-center gap-3 mb-1">
              <div>✨</div>{" "}
              <h3>Use a Personal AI Worker to boost your content</h3>
            </li>
            <li className="flex justify-start items-center gap-3 mb-1">
              <div>✨</div>{" "}
              <h3>
                Learn from expert-led courses designed for aspiring influencers
              </h3>
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center text-[var(--textGray)] max-w-[281px] mx-auto">
          <div className="text-[12px] mb-4" style={{ lineHeight: 1.2 }}>
            <h3>
              By clicking &#34;Get Started&#34;, you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </h3>
          </div>
          <div className="text-[10px]">
            <h3>Fametonic 2025 ©All Rights Reserved.</h3>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <button className="w-full max-w-[350px] mx-auto h-10 text-white font-bold flex justify-center items-center bg-[var(--primaryRed)] rounded-[10px] drop-shadow-[3px_3px_7px_var(--textIndigo)]">
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
          </div>
          <div className="text-white text-center text-[12px] mt-2">
            <h3>1-minute quiz for personalized Insights</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard