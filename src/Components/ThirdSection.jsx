import React from 'react'
import mac from '../assets/images/mac.png'
import tab from '../assets/images/tab.png'
import cell from '../assets/images/cellphone.png'
import video from '../assets/images/Netflixvid.mp4'
 

function ThirdSection() {
  return (
    <>
       <section className="w-[100%] border-t-[8px] border-t-[#6c6969] bg-black sm:py-[80px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px] ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-14">
            <div className="text-white">
              <h2 className="sm:text-[40px] text-[30px] font-bold">Watch everywhere</h2>
              <p className="sm:text-[25px] text-[20px] pt-[20px]">Stream Unlimited movies and TV shows on your phone, <br />
              tablet, laptop, and TV</p>
            </div>
            <figure className="relative">
              <video className="absolute sm:w-[330px] sm:bottom-[27%] sm:left-[13%] w-[200px] bottom-[28%] left-[17%]" controls>
                <source src={video} />
              </video>
              <img src={cell} alt="" className='absolute sm:bottom-[-15%] sm:w-[300px] sm:left-[-8%] bottom-[-50%] w-[000px] left-[-27%] sm:list-item hidden ' />
              <img src={tab} alt="" className='absolute sm:bottom-[-28%] sm:left-[47%] bottom-[-90%] left-[30%] sm:list-item hidden '/>
             <img src={mac} alt="" className="sm:h-[280px] h-[160px] w-[450px] sm:w-[470px] " />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default ThirdSection
