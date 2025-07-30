import React from 'react'
import main_logo from '@/app/assets/main_logo.png'
import hero_img from '@/app/assets/hero_img.jpg'
import Image from 'next/image'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="bg-black px-5 py-4">
      <div className="w-full flex justify-center">
        <Image alt="main_logo" width={108} height={46} src={main_logo.src} />
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center lg:flex-col">
        <Image
          alt="hero_logo"
          src={hero_img}
          width={500} // your desired width
          height={0} // use style for height instead
          style={{ height: "auto", width: "100%" }} // width 100% of parent, auto height
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
    </div>
  );
}

export default Dashboard