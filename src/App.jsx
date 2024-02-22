import React from 'react'
import PageLayouts from './components/layouts/PageLayouts'
import ImgMobile from './assets/images/mobile-1.png'
import Button from './components/elements/Button'

const App = () => {
  return (
    <div>
      <PageLayouts>
        <div className='container mx-auto md:grid md:grid-cols-2'>
          <div className='mx-6 flex flex-col justify-center'>
            <h1 className='font-extrabold text-2xl tracking-wide md:text-4xl md:leading-normal md:tracking-wider'>
              Bantu Kesembuhanmu <br />
              Mari Eliminasi TBC mulai <br />
              dari Diri Sendiri
            </h1>
            <p className='text-sm my-3 md:text-base'>
              Temukan sesama pejuang TBC, gabung bersama kami komunitas Pejuang TB
            </p>
            <Button variant="bg-[#292929] text-white text-sm hover:bg-[#191919] md:text-base">Gabung</Button>
          </div>

          <div className='w-full bg-blue-500 h-32 flex items-end justify-end mt-[230px] md:hidden'>
            <div className='container my-8 px-6 w-full flex justify-center'>
              <img src={ImgMobile} className='w-2/5' alt="tampilan mobile" />
            </div>
          </div>


          <div className='container my-8 px-6 w-full md:flex justify-center hidden'>
            <img src={ImgMobile} className='w-1/3' alt="tampilan mobile" />
          </div>

          <div className='container px-6 my-8 flex justify-center md:hidden'>
            <div className='grid grid-cols-5 md:grid-cols-none md:flex justify-items-center'>
              <div className='col-span-2 w-full'>
                <img src={ImgMobile} className='w-full' alt="tampilan mobile" />
              </div>
              <div className='col-span-3 px-6 pb-7 md:hidden flex flex-col justify-end'>
                <h1 className='font-bold text-base text-primary'>What’s Pejuang TB Apps</h1>
                <p className=' text-xs'>
                  Menemani proses kesembuhan dan membantu
                  temukan teman seperjuangan untuk sembuh TB
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageLayouts>
    </div>

  )
}

export default App