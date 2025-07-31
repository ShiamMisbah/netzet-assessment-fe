import Image from "next/image";
import React from "react";
import { Menu } from "lucide-react";
import main_logo from "@/app/assets/main_logo.png";

type Props = {};

const DesktopNavbar = (props: Props) => {
  return (
    <>
      <Image
        className=""
        alt="main_logo"
        width={175}
        height={46}
        src={main_logo.src}
      />
      <div className="flex gap-11 text-[18px] pr-2">
        <h3>About us</h3>
        <h3>Contact</h3>
      </div>
    </>
  );
};

export default DesktopNavbar;
