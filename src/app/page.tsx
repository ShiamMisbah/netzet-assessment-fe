import Dashboard from '@/component/Dashboard'
import Header from '@/component/Header';
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Header />
      <div className="w-full max-w-[1440px] mx-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default page