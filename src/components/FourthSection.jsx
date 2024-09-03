import React from 'react'

import smg4 from "../assets/img1.jpg"
import img1 from "../assets/four.jpg"
import img2 from "../assets/img2.jpg"
const FourthSection = () => {
  return (
    <section className='section-4 h-screen'>
      <div className="h-full [&>*]:flex-1 flex">
        <div className='flex items-center justify-center'>
            <div className='h-[500px] w-[400px] '>
                <div
                className='bg-4 h-[380px] p-10 flex flex-col gap-4'
                style={{
                    backgroundImage:`url(${smg4})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                }}>
                    <div className='txt-1 flex flex-col gap-4'>
                        <h1 className='text-xl text-white'>Next Generation</h1>
                        <p className='w-72 text-sm leading-6 text-gray-200'>
                            Lorem ipsum dolor sit adipisicing elit, odit magnam voluptates ab cumque adipisci ducimus aliquam 
                        </p>
                    </div>
                    <div className='self-end translate-x-20 translate-y-16 flex flex-col gap-4'>
                        <img className='img_1 w-64 h-48' src={img1} alt="" />
                        <div className='txt-2'>
                            <h4 className='font-bold'>Lorem ipsum dolsr Itaque</h4>
                            <p className='text w-52'>Lorem ipsum, dolor sit amet consectet veniam icta!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='h-[500px] w-[400px]'>
                <div className='flex flex-col gap-[4.79rem] p-10'>
                    <h1 className='text-8xl text-navy_blue font-bold txt-3'>Notive</h1>
                    <div className='flex flex-col gap-4'>
                        <img className='img_2 w-96 h-48' src={img2} alt="" />
                        <div className='txt-4'>
                            <h4 className='font-bold'>Lorem, ipsum dolor sit </h4>
                            <p className='w-52 text'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis niet ollitia aliquid,  odio recusandae maiores?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FourthSection
