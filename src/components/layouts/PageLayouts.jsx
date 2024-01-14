import React from 'react'
import Navbar from '../fragments/Navbar'

const PageLayouts = ( props ) => {
  const { children } = props;

  return (
    <div className='min-h-screen w-full'>
      <div className='justify-center content-center'>
        <Navbar />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default PageLayouts