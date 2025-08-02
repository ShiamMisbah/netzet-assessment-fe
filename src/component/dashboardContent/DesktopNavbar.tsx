import Image from "next/image";
import React from "react";
import main_logo_big from "@/app/assets/main_logo_big.png";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <>
      <Image
        className=""
        alt="main_logo"
        width={173}
        height={46}
        src={main_logo_big.src}
      />
      <div className="flex gap-11 text-[18px] pr-2">
        <h3>
          <Link href="#">About us</Link>
        </h3>
        <h3>
          <Link href="#">Contact</Link>
        </h3>
      </div>
    </>
  );
};

export default DesktopNavbar;
