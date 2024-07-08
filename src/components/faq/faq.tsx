import React, { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

const Faq = () => {
  const [openId, setOpenId] = useState(null); // State to keep track of the open FAQ item

  const toggleFaq = (id:any) => {
    // Toggle FAQ open state: if clicked again, it closes; if another one, it opens
    setOpenId(openId === id ? null : id);
  };

  const faqEntries = [
    {
      question: "What is Voice AI for E-Commerce?",
      answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
      id: "animated-collapse-1"
    },
    {
      question: "What problems does Voice AI for E-commerce solve?",
      answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
      id: "animated-collapse-2"
    },
    {
      question: "What are the features of AI Phone Agents?",
      answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
      id: "animated-collapse-3"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-background via-popover to-background w-screen grid grid-cols-1 md:grid-cols-2 gap-10 py-[15vh] px-[8vw] md:px-[15vw]">
      <div className="flex flex-col justify-center w-full">
        <div className="sm:mx-4 border border-[#F80759] flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit  bg-[#AA093F]/10">
          <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
            FaQ
          </h3>
        </div>
        <h2 className="md:text-start text-center py-8">
          Frequently asked
          <br />
          Questions
        </h2>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="my-6 px-6 list-disc [&>li]:mt-2">
          {faqEntries.map((faq) => (
            <div className="relative mb-3" key={faq.id}>
              <h6 className="mb-0">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex justify-between items-center w-full p-4 font-semibold transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-text-primary rounded-t-1 text-dark-500"
                >
                  <span className="text-left">{faq.question}</span>
                  <div className={`transform ${openId === faq.id ? 'rotate-180' : ''}`}
                    style={{transition: 'max-height 0.5s ease-in-out'}}>
                    <IoChevronDownOutline />
                  </div>
                </button>
              </h6>
              <div
                style={{ maxHeight: openId === faq.id ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}
                className="w-full"
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
