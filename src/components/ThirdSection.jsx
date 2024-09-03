import React from 'react'
import third from "../assets/third.jpg";

const ThirdSection = () => {
  return (
    <section className="section-3 h-screen">
        <div className='h-full flex items-center justify-center '>
            
            <div className="overflow-hidden ms-5 ps-5 pe-5 text-end">
                <div className="text-content_s3 flex flex-col gap-4 w-80 items-center">
                  <span className='text-8xl font-bold text-navy_blue'>new</span>
                  <p className='text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum laudantium accusamus nam facilis nihil blanditiis eum exercitationem iusto, laboriosam ducimus cupiditate. Natus harum similique atque obcaecati distinctio! Similique, modi.
                  </p>
                  <p className='text'>Lorem ips fbek eiujfvbioeuhrou ekjbnrfvikeujbn jehrfui liquam.</p>
                  <button className='btn'>More</button>
                </div>
            </div>



            <div className='h-full flex items-center justify-center ps-5'>
            <div
            className='bg-3 h-[500px] w-[480px] flex items-center'
             style={{
                backgroundImage: `url(${third})`, 
                backgroundPosition:"center", 
                backgroundSize:"contain", 
                backgroundRepeat:"no-repeat" 
                }}>

                    <div className='white-box bg-white w-[calc(100%-4.5rem)] h-[calc(100%-9rem)]'>
                      <div className="white-box-content">
                        <h1 className='text-xl font-bold text-navy_blue'>Statitics</h1>
                        <p className='w-72 text'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ccusantium nostrum atque cum!
                        </p>
                        <div className='flex gap-6'>
                          <div>
                            <p className='font-bold text-navy_blue text-xl'>216</p>
                            <span className='text-gray-500 text-xs'>Income</span>
                            <div className='h-1 w-8 bg-light_blue mt-1'></div>
                          </div>
                          <div>
                            <p className='font-bold text-navy_blue text-xl'>647</p>
                            <span className='text-gray-500 text-xs'>Expense</span>
                            <div className='h-1 w-8 bg-fuchsia mt-1'></div>
                          </div>
                        </div>
                      </div>
                    </div>

            </div>
            </div>
        </div>
    </section>
  )
}

export default ThirdSection
