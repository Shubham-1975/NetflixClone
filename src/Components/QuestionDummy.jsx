import { useState } from "react";
import questions from "./QuestionData";
import { HiXMark } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";

const QuestionDummy = () => {
  const [id, setId] = useState(null);

  return (
    <section className="w-[100%] border-t-[8px] border-t-[#6c6969] bg-black sm:py-[80px] py-[50px] text-white">
      <div className="w-[75%] mx-auto text-start">
        <h1 className=" text-[25px] font-bold py-[10px]">
          Frequently Asked Questions
        </h1>
        {questions.map((val, index) => {
          return (
            <>
              <div
                key={index}
                className="bg-[#3e3d3d] py-[20px] px-[15px] sm:text-[25px] mt-[8px]"
              >
                <div className="flex items-center justify-between">
                  <h1>{val.question}</h1>
                  <button
                    className="text-end text-[40px] "
                    onClick={() => {
                      setId(index);
                      if (id === index) setId(null);
                    }}
                  >
                    {id === index ? <HiXMark /> : <FiPlus />}
                  </button>
                </div>
              </div>

              {id === index ? (
                <div
                  key={index}
                  className="bg-black py-[20px] px-[15px] sm:text-[25px] mt-[8px]"
                >
                  <div className="flex items-center justify-between">
                    <h1>👉{val.answer}</h1>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default QuestionDummy;
