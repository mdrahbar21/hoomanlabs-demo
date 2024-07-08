import React, { useState, useEffect, useRef } from "react";
import { LuArrowRight } from "react-icons/lu";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";


const Scroller:React.FC = () =>{

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    
    return (
        <>
        <div className="flex flex-col justify-center w-full">
            <div className="sm:mx-4 border border-[#F80759] flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit  bg-[#AA093F]/10 ">
                <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
                    What we provide
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1440px] gap-10 mx-auto py-10">
                <h2 className="md:text-start md:col-span-2 text-center mb-8">
                    Revolutionary AI Voice Agents for <br />
                    Effortless E-Commerce Support
                </h2>
            </div>
            <div className="flex flex-col mb-10">
                <div className="grid grid-cols-7">
                    <div className="col-span-3 ">
                        <div className=" flex bg-gradient-to-b from-[#A37C5B]/5 to-[#3D2E22]/5 items-center justify-center h-full">
                            <div className="justify-center">
                                <img src="/roundTheClockPC.svg" className='' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col ml-12">
                        <div className="h-12 w-12">
                            <img src="/roundTheClock.svg" className="" alt=""  />
                        </div>
                        <div className="mt-10">
                            <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{lineHeight:"4rem"}}>
                                Operate Round the <br /> clock for your <br /> customers, Cost <br /> Effectively
                            </h3>
                            <ul className="list-disc mt-20 ml-8">
                                <li className="text-text-secondary py-4">24x7 availability</li>
                                <div className=" border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                                <li className="text-text-secondary py-4">Cost Effective</li>
                                <div className=" border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                                <li className="text-text-secondary py-4  w-full">60% saving on team</li>
                            </ul>
                            <button className="flex items-center mt-20 bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200">
                                <span className='pl-2 text-xs font-bold pr-1'>Book a demo</span>
                                <LuArrowRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-10">
                <div className="grid grid-cols-7">
                    <div className="col-span-3 ">
                        <div className=" flex bg-gradient-to-b from-[#A37C5B]/5 to-[#3D2E22]/5 items-center justify-center h-full">
                            <div className="justify-center">
                                <img src="/boostAutomationPhone.svg" className='' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col ml-12">
                        <div className="h-12 w-12">
                            <img src="/boostAutomation.svg" className="" alt=""  />
                        </div>
                        <div className="mt-10">
                            <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{lineHeight:"4rem"}}>
                                Boost Automation & <br/> Maintain Personal <br/> Touch to Enhance <br/> Customer Interactions
                            </h3>
                            <ul className="list-disc mt-20 ml-8">
                                <li className="text-text-secondary py-4">Human Like Conversation</li>
                                <div className=" border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                                <li className="text-text-secondary py-4">Automated Assistance</li>
                                <div className=" border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                                <li className="text-text-secondary py-4  w-full">Interruption Handling</li>
                            </ul>
                            <button className="flex items-center mt-20 bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200">
                                <span className='pl-2 text-xs font-bold pr-1'>Book a demo</span>
                                <LuArrowRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-10">
                <div className="grid grid-cols-7">
                    <div className="col-span-3 ">
                        <div className=" flex bg-gradient-to-b from-[#A37C5B]/5 to-[#3D2E22]/5 items-center justify-center h-full">
                            <div className="justify-center">
                                <img src="/rapidSetupPC.svg" className='' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col ml-12">
                        <div className="h-12 w-12">
                            <img src="/rapidSetup.svg" className="" alt=""  />
                        </div>
                        <div className="mt-10">
                            <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{lineHeight:"4rem"}}>
                                Rapid setup and <br /> multilingual flexibility <br /> for effortless business <br /> expansion
                            </h3>
                            <ul className="list-disc mt-20 ml-8">
                                <li className="text-text-secondary py-4">Fast Setup</li>
                                <div className=" border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                                <li className="text-text-secondary py-4">Multilingual Support</li>
                                <div className=" border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                                <li className="text-text-secondary py-4  w-full">Easy Updates</li>
                            </ul>
                            <button className="flex items-center mt-20 bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200">
                                <span className='pl-2 text-xs font-bold pr-1'>Book a demo</span>
                                <LuArrowRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Scroller;