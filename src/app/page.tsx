"use client"
import React, {Suspense} from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar/navbar';
import CardGrid from '@/components/cards/new3';
import CardGrid2 from '@/components/cards/useCases';
import ParentCard from '@/components/cards/parentCard'; // Import the new ParentCard component
import Faq from '@/components/faq/faq';
import { motion } from 'framer-motion';
import ChatInterface from '@/components/cards/card';
import Carousel from '@/components/carousel/carousel';
import LogoSlider from '@/components/carousel/logoSlider';
import Integrations from '@/components/integrations/integration';
import Contact from '@/components/cards/contact';
import Scroller from '@/components/eCommerceSupport/scroller';
import Scroller2 from '@/components/eCommerceSupport/scroll2';
import AutomationStats from '@/components/eCommerceSupport/automationStats';
import Analytics from '@/components/cards/analytics';
import Scroll from '@/components/eCommerceSupport/scroll';

import StarsCanvas from '@/components/star';

const VideoComponent = dynamic(() => import('@/components/cards/videoComponent'), {
  suspense: true,
});

// const Wave = dynamic(() => import('@/components/wave'), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <div className='relative bg-popover min-h-screen overflow-x-hidden'>
      <motion.div initial={{opacity:0 }} animate={{opacity:100}} transition={{duration:1.0, delay:1.2 }}>
      <div className='absolute inset-0 bottom-0 w-full h-1/3 opacity-50 z-0'>
        {/* <Wave className='w-full h-full' /> */}
        <StarsCanvas/>
      </div>
      </motion.div>

      <div className='relative flex flex-col items-center min-h-screen'>
        <div className='mt-7 mb-7'>
          <Navbar />
        </div>
        <motion.div initial={{opacity:0, y:10 }} animate={{opacity:100, y:0}} transition={{duration:0.3}}>
          <div className="sm:mx-4 border border-[#F80759] mt-20 flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit  bg-[#AA093F]/10">
            <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
            Built for modern retail
            </h3>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, y:10 }} animate={{opacity:100, y:0}} transition={{duration:0.3}}>
        <h1 className='text-center  pb-2 mt-9'>
          Customer calls re-imagined <br />
          with AI agents that feel human
        </h1>
        </motion.div>
        <motion.div initial={{opacity:0, y:10 }} animate={{opacity:100, y:0}} transition={{duration:0.3}}>
        <div className='relative flex flex-col items-center mt-24 z-50'>
        <div
          className="relative rounded-[28px] flex flex-col items-center justify-center z-10  text-white pt-20 pl-28 pb-10 pr-28"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(109, 108, 107, 1), rgba(211, 209, 207, 0))",
              padding: "1.5px",
              borderRadius: "28px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          />
        <h3 className="text-center pb-12 pt-4 -mt-12 z-50">Talk to your personalised hoomans</h3>
        <div className="flex flex-col md:w-full  items-center ">
            <CardGrid />
        </div>
        </div>
        </div>
        </motion.div>

        <div className="bg-popover relative overflow-y-clip w-full z-0">
          <div className="w-full flex flex-col justify-center py-8">
            <LogoSlider />
          </div>
        </div>
        <div className="bg-popover relative w-full z-0">
          <div className="w-full flex flex-col justify-center">
            <Scroll />
          </div>
        </div>
        <div className="bg-popover relative overflow-y-clip w-full z-0">
          <div className=" w-screen  px-[8vw] md:px-[15vw]">
              <div className="w-full flex flex-col justify-center py-8">
                <CardGrid2 />
              </div>
          </div>
        </div>
        <div className="bg-popover relative overflow-y-clip w-full z-0">
          <div className="py-8 w-screen ">
              <div className="w-full flex flex-col justify-center">
              <AutomationStats />
              </div>
          </div>
        </div>
        <div className="bg-popover relative  w-full z-0">
          <div className=" w-screen ">
            <div className="w-full flex flex-col justify-center">
              <ChatInterface />
            </div>
          </div>
        </div>
        <div className="bg-popover relative overflow-y-clip w-full z-0">
          <div className="w-screen ">
            <ParentCard> 
              <div className="w-full flex flex-col justify-center">
                <Analytics />
              </div>
            </ParentCard>
          </div>
        </div>
        <div className="bg-popover relative overflow-y-clip w-full z-0">
          <div className=" w-screen">
            <ParentCard> 
              <div className="w-full flex flex-col justify-center">
                <Carousel />
              </div>
            </ParentCard>
          </div>
        </div>
        <div className=" bg-popover relative overflow-y-clip w-full z-0">
          <div className="w-screen">
            <ParentCard> 
              <div className="w-full flex flex-col justify-center">
                <Integrations />
              </div>
            </ParentCard>
          </div>
        </div>
        <div className=" bg-popover relative overflow-y-clip w-full z-0">
          <div className="w-screen">
            <ParentCard> 
              <div className="w-full flex flex-col justify-center items-center">
                <div className="sm:mx-4 border border-[#F80759] mt-20 flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit  bg-[#AA093F]/10">
                  <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
                    Demo
                  </h3>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">See hoomans in action</h2>
                <Suspense fallback={<p>Loading video...</p>}>
                  <VideoComponent videoUrl="https://www.youtube.com/embed/v65BGlmaGSo?rel=0" />
                </Suspense>
              </div>
            </ParentCard>
          </div>
        </div>

        <div className=" relative w-fit h-screen overflow-y-clip z-0">
          <div>
            <Faq />
          </div>
        </div>
        <div className=" bg-popover relative w-fit z-0">
          <div className=" flex flex-col justify-center">
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
