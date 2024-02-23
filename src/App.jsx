import React from 'react'
import PageLayouts from './components/layouts/PageLayouts'
import ImgMobile from './assets/images/mobile-1.png'
import Button from './components/elements/Button'

const Card = (props) => {
  const { image, title } = props;

  return (
    <div className='flex flex-col p-2 justify-center items-center text-center text-white border border-blue-300 bg-blue-400 rounded'>
      <img src={image} className='w-1/4 my-1' alt="" />
      <h1 className='font-semibold text-xs tracking-wider'>{title}</h1>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <PageLayouts>
        {/* header  */}
        <div className='container mx-auto md:grid md:grid-cols-2'>
          <div className='px-6 flex flex-col justify-center'>
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

          {/* tampilan mobile  */}
          <div className='md:hidden'>
            <div className='w-full bg-primary h-24 flex flex-col items-end justify-end mt-[250px]'>
              <div className='container my-8 px-6 flex justify-center items-end gap-3'>
                <img src={ImgMobile} className='w-2/5' alt="tampilan mobile" />
                <img src={ImgMobile} className='w-1/3 h-3/4' alt="tampilan mobile" />
              </div>
            </div>
            <div className='bg-primary px-6 py-5'>
              <div className='text-center text-white pb-3'>
                <p className='text-lg font-bold tracking-wide'>
                  {/* Pejuang TB menemani proses kesembuhan dan membantu temukan teman seperjuangan untuk sembuh TB */}
                  Fitur Pejuang TB
                </p>
              </div>
              <div className='grid grid-cols-3 gap-3'>
                <Card image="src/assets/icons/capsule-white.svg" title="Pengingat Minum Obat" />
                <Card image="src/assets/icons/capsule-white.svg" title="Pengingat Minum Obat" />
                <Card image="src/assets/icons/capsule-white.svg" title="Pengingat Minum Obat" />
              </div>
            </div>
          </div>


          {/* tampilan dekstop */}
          <div className='container my-8 px-6 w-full md:flex justify-center hidden gap-3'>
            <img src={ImgMobile} className='w-1/3' alt="" />
            <img src={ImgMobile} className='w-1/3' alt="" />
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

        {/* konten fitur  */}
        <div className='container mx-auto hidden md:block'>
          <div className='px-6 text-center mt-24'>
            <h1 className='font-extrabold text-2xl'>What’s Pejuang TB Apps</h1>
            <p className='py-3'>
              Aplikasi Pejuang TB menemani proses kesembuhan TB Anda dan membantu <br />
              temukan teman seperjuangan untuk sembuh TB
            </p>
          </div>
          <div className='grid grid-cols-3 gap-8 py-5 px-[100px]'>
            <Card image="src/assets/icons/capsule-white.svg" title="Pengingat Minum Obat" />
            <Card image="src/assets/icons/book-add.svg" title="Pengingat Minum Obat" />
            <Card image="src/assets/icons/capsule-white.svg" title="Pengingat Minum Obat" />
          </div>
        </div>
      </PageLayouts>
    </div>

  )
}

export default App