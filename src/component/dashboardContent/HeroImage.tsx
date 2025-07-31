import Image from 'next/image';
import React from 'react'
import hero_img from "@/app/assets/hero_img.jpg";


type Props = {}

const HeroImage = (props: Props) => {
  return (
    <div className="relative xl:absolute xl:right-26 w-full xl:w-[663px] flex justify-center xl:flex-col -mt-19 xl:-mt-[188px] z-0">
      <Image
        alt="hero_logo"
        src={hero_img}
        width={500} // your desired width
        height={0} // use style for height instead
        style={{ height: "auto", width: "100%" }} // width 100% of parent, auto height
        sizes="100vw, 500px"
      />
    </div>
  );
}

export default HeroImage