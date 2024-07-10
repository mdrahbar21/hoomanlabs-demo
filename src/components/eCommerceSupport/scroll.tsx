import './styles.css'
import React, { useRef, useCallback } from "react";
import { LuArrowRight } from "react-icons/lu";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ section }: { section: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);
  const pathname = usePathname();
  const router = useRouter();

  const handleButtonClick = useCallback(() => {
    router.push('/dashboard');
  }, [router]);

  return (
    <section className="h-[100vh] scroll-snap-align-start" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-10 md:max-w-[1440px] mx-auto">
        <div className="md:col-span-3 bg-gradient-to-b from-[#A37C5B]/5 to-[#3D2E22]/5 flex  items-center justify-center">
          <div className='max-w-[50vw] md:max-w-[1440px] flex'>
            <div className="flex justify-center items-center align-middle">
              <img src={section.image} className='py-2' alt="image" />
            </div>
          </div>
        </div>
        <motion.div className="md:col-span-4 flex flex-col ml-12" style={{ y }}>
          <div className="h-12 w-12 hidden md:flex">
            <img src={section.icon} className="" alt="" />
          </div>
          <div className="mt-6 md:mt-10">
            {section.title}
            <ul className="list-disc text- mt-10 md:mt-20 ml-8">
              {section.points.map((point: any, i: any) => (
                <React.Fragment key={i}>
                  <li className="text-text-secondary py-4">{point}</li>
                  {i < section.points.length - 1 && (
                    <div className="border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                  )}
                </React.Fragment>
              ))}
            </ul>
            <button
              style={{ zIndex: 50 }}
              onClick={handleButtonClick}
              className="flex items-center mt-20 bg-white cursor-pointer text-black rounded-full px-4 py-3 hover:bg-red-800">
              <span className='pl-2 text-xs font-bold pr-1'>Book a demo</span>
              <LuArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Scroll: React.FC = () => {
  const sections = [
    {
      title: (
        <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{ lineHeight: "4rem" }}>
          Operate Round the clock for your customers, Cost Effectively
        </h3>
      ),
      image: "/roundTheClockPC.svg",
      icon: "/roundTheClock.svg",
      points: ["24x7 availability", "Cost Effective", "60% saving on team"],
    },
    {
      title: (
        <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{ lineHeight: "4rem" }}>
          Boost Automation & Maintain Personal Touch to Enhance Customer Interactions
        </h3>
      ),
      image: "/boostAutomationPhone.svg",
      icon: "/boostAutomation.svg",
      points: ["Human Like Conversation", "Automated Assistance", "Interruption Handling"],
    },
    {
      title: (
        <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{ lineHeight: "4rem" }}>
          Rapid setup and multilingual flexibility for effortless business expansion
        </h3>
      ),
      image: "/rapidSetupPC.svg",
      icon: "/rapidSetup.svg",
      points: ["Fast Setup", "Multilingual Support", "Easy Updates"],
    },
  ];

  return (
    <div className='no-scrollbar'>
      <div className='relative flex flex-col items-start'>
        <div className="sm:mx-4 border border-[#F80759] mt-20 flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit bg-[#AA093F]/10">
          <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
            What we provide
          </h3>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-3 w-full max-w-[1440px] gap-10 mx-auto py-10">
        <h2 className="md:text-start md:col-span-2 md:mb-36 md:px-0">
          Revolutionary AI Voice Agents for <br />
          Effortless E-Commerce Support
        </h2>
      </div>
      <div className='grid-cols-1 w-full max-w-[1440px] gap-10 mx-auto py-4 md:hidden'>
        <h2 className='text-start md:hidden'>
        Revolutionary AI Voice Agents for
        Effortless <br/> E-Commerce Support
        </h2>
      </div>
      <div className='scroll-snap-container no-scrollbar'>
        {sections.map((section, index) => (
          <Image section={section} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Scroll;
