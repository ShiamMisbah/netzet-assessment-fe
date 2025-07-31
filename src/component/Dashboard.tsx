"use client"
import React from 'react'
import main_logo from '@/app/assets/main_logo.png'
import hero_img from '@/app/assets/hero_img.jpg'
import Image from 'next/image'
import useIsMobile from '@/utils/CheckIsMobile'
import MainHeadline from './dashboardContent/MainHeadline'
import BodyContent from './dashboardContent/BodyContent'
import TermsAndConditions from './dashboardContent/TermsAndConditions'
import CtaContent from './dashboardContent/CtaContent'
import HeroImage from './dashboardContent/HeroImage'
import MobileNabvar from './dashboardContent/MobileNabvar'
import DesktopNavbar from './dashboardContent/DesktopNavbar'

const Dashboard = () => {
  const isMobile = useIsMobile();  
  return (
    <div className=" px-5 md:px-20 py-4 lg:py-8 pb-10 lg:pb-20 relative max-w-[1440px] mx-auto overflow-hidden">
      <div className="lg:max-w-[1020px] md:mx-auto relative flex justify-center md:justify-between items-center md:items-start z-10">
        {isMobile && <MobileNabvar />}
        {!isMobile && <DesktopNavbar />}
      </div>

      <div className=" lg:ml-[136px] lg:flex-row-reverse xl:flex-row lg:flex">
        <HeroImage />
        <div className="relative w-full lg:w-[520px] -mt-22 lg:mt-[58px]">
          <MainHeadline />
          <BodyContent />
          {isMobile ? (
            <>
              <TermsAndConditions />
              <CtaContent />
            </>
          ) : (
            <>
              <CtaContent />
              <TermsAndConditions />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard