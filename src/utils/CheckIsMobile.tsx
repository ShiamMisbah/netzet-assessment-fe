"use client"
import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Avoid using window on server
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Initial check
    checkScreenSize();

    // Event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
}
