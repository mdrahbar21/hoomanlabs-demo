import React from "react";


const Integrations: React.FC = () => {
    return(
        <>
        <div className='relative flex flex-col items-center'>
            <div className="sm:mx-4 border border-[#F80759] mt-20 flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit  bg-[#AA093F]/10">
                <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
                    Integrations
                </h3>
            </div>
            <h2 className="md:text-start text-center py-8"> Connect your entire E-commerce tech stack</h2>
            <div className=" ">
                <a href="#ContactUs">
                <img src="/integration.svg" alt="integrations" className="" />
                </a>
            </div>
        </div>
        </>
    )
};

export default Integrations;