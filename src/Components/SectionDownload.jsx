import React from 'react'
import mobile from '../assets/images/mobile2.png'
import img from '../assets/images/img4.jpeg'
import { MdSecurityUpdateGood } from "react-icons/md";
import gif from '../assets/images/gif.gif'

function SectionDownload() {
  return (
    <>
       <section className="w-[100%] border-t-[8px] border-t-[#6c6969] bg-black sm:py-[80px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px] ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-14 ">
           
            <figure className="relative">
              {/* <video className="absolute sm:w-[330px] sm:bottom-[90px] sm:left-[62px] w-[250px] bottom-[90px] left-[41px]" controls>
                <source src={video} />
              </video> */}
              <div className='grid grid-cols-[20%_auto_10%] border-[#ccc] border-[1px] rounded-[8px] overflow-hidden p-[6px] items-center w-[200px] absolute bottom-[15%] sm:left-[52%] left-[15%] bg-black z-[2]'>
                <div>
                  <img src={img} alt="" className='h-[60px]' />
                </div>
                 <div>
                  <h1 className='text-white'>Stranger Things</h1>
                  <h3 className='text-[#5a5af2] text-[10px] text-start ml-[10%]'>Downloading....</h3>
                 </div>
                 <div className='text-[#10499a]'>
                    <MdSecurityUpdateGood />
                 </div>
              </div>
             <img src={mobile} alt="" className="sm:ml-[55%] ml-[20%] hover:scale-125 duration-1000 relative z-[1]" />
            </figure>
            <div className="text-white sm:mr-[80px] sm:text-start">
              <h2 className="sm:text-[30px] text-[25px] font-bold">Download your shows <br />to watch offline</h2>
              <p className="sm:text-[15px] text-[12px] pt-[20px]">Save your favourites easily and always have something <br /> to watch</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionDownload
