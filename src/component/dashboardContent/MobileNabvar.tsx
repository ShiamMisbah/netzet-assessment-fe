import Image from 'next/image'
import React from 'react'
import { Menu } from "lucide-react";
import main_logo from "@/app/assets/main_logo.png";



type Props = {}

const MobileNabvar = (props: Props) => {
  return (
    <div>
        <Image
            className=""
            alt="main_logo"
            width={108}
            height={46}
            src={main_logo.src}
        />
        <div className="absolute lg:relative right-[6px] top-[10px] text-white cursor-pointer z-10">
            <Menu />
        </div>
    </div>
  )
}

export default MobileNabvar