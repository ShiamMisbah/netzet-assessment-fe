import Dashboard from '@/component/Dashboard'
import Header from '@/component/Header';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
}

export default page