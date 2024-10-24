import React from "react";
import tv from '../assets/images/tv.png'
import video from '../assets/images/video.mp4'

function Section2net() {
  return (
    <>
      <section className="w-[100%] border-t-[8px] border-t-[#6c6969] bg-black sm:py-[80px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px] ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-14">
            <div className="text-white">
              <h2 className="sm:text-[40px] text-[30px] font-bold">Enjoy on your TV</h2>
              <p className="sm:text-[25px] text-[20px] pt-[20px]">Watch on smart TVs, PlaStation, Xbox, Chromacast,<br />Apple TV,Blu-ray Players and more.</p>
            </div>
            <figure className="relative">
              <video className="absolute sm:w-[330px] sm:bottom-[90px] sm:left-[62px] w-[250px] bottom-[90px] left-[41px]" controls>
                <source src={video} />
              </video>
             <img src={tv} alt="" className="sm:h-[350px] h-[290px] w-[450px] sm:w-[450px] " />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2net;
