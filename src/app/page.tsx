import Dashboard from '@/component/Dashboard'
import Header from '@/component/Header';
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <div className="w-full bg-black">
        <Dashboard />
      </div>
    </div>
  );
}

export default page