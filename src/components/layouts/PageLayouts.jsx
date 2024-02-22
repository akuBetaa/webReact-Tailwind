import React from 'react'
import Navbar from '../fragments/Navbar'
import { Footer } from '../fragments/Footer';

const PageLayouts = ( props ) => {
  const { children } = props;

  return (
    <div className='min-h-screen w-full'>
      <Navbar />
      <div className='container mx-auto my-10'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default PageLayouts