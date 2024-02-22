import React from 'react'
import Button from '../elements/Button'

import Playstore from '/src/assets/icons/playstore.svg'

export const Footer = () => {
    return (
        <div className='bg-primary'>
            <div className='container mx-auto py-10 grid md:grid-cols-7 gap-3 text-white'>
                <div className='col-span-2 mx-auto md:mx-0'>
                    <h1 className='text-2xl font-bold mb-3'>Pejuang <span className='text-black'>TB</span></h1>
                    <p className='text-sm leading-relaxed'>
                        Aplikasi Pejuang TB menemani proses kesembuhan <br />
                        TB Anda dan membantu temukan teman <br />
                        seperjuangan untuk sembuh TB
                    </p>
                </div>

                <div className='flex flex-col items-center'>
                    <h1>SiteMap</h1>
                </div>

                <div className='col-span-2 flex flex-col items-center'>
                    <h1 className='font-bold text-lg mb-4'>Temukan Sesama PejuangTB</h1>
                    <Button variant="bg-[#292929] text-white text-sm hover:bg-[#191919]">Gabung Bersama Kami</Button>
                </div>

                <div className='col-span-2 flex flex-col items-center'>
                    <h1 className='font-bold text-lg mb-4'>Temukan Sesama PejuangTB</h1>
                    <img src={Playstore} alt="" className='w-1/3' />
                </div>
            </div>
        </div>
    )
}
