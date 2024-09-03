import React from 'react'
import smg3 from "../assets/fifth.jpg"
import img3 from "../assets/work.jpg"

const FifthSection = () => {
  return (
    <section className='section-5 h-screen bg-[#eef7fe] flex items-center justify-center'>
      <div 
        className='bg-5 h-[500px] w-[950px] flex items-center justify-around gap-4 rounded' 
        style={{
            backgroundImage:`url(${smg3})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}>
        <div className='side-1'>
            <h1 className='text-white text-4xl font-bold mb-10'>Our Works</h1>
            <img className='h-28 w-96 object-cover' src={img3} alt="" />
        </div>
        <div className='side-2'>
            <p className='w-72 text-xs text-gray-200 leading-6 mb-10'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, numquam. Perspiciatis dolorum vel unde similique laborum reprehenderit ipsam? Quas quasi possimus non tempore eligendi ipsam quae quos. Totam, porro veritatis.
            </p>
            <button className='bg-gray-200 text-navy_blue font-bold px-6 py-3 rounded'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default FifthSection
