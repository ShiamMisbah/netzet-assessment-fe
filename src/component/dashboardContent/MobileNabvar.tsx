import Image from 'next/image'
import React from 'react'
import { Menu } from "lucide-react";
import main_logo from "@/app/assets/main_logo.png";

const MobileNabvar = () => {
  return (
    <div>
        <Image
            className=""
            alt="main_logo"
            width={108}
            height={46}
            src={main_logo.src}
        />
        <button className="absolute lg:relative right-[6px] top-[10px] text-white cursor-pointer z-10">
            <Menu />
        </button>
    </div>
  )
}

export default MobileNabvar