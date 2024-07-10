import './styles.css'
import React, { useState, useEffect, useRef } from "react";
import { LuArrowRight } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

function Section({ section, index, setCurrentSectionIndex }: { section: any, index: number, setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>> }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSectionIndex(index);
    }
  }, [inView, index, setCurrentSectionIndex]);

  return (
    <div className="h-screen scroll-snap-align-start" ref={ref}>
      <div className="bg-gradient-to-b from-[#A37C5B]/5 to-[#3D2E22]/5 flex items-center justify-center h-full">
        <div className='max-w-[50vw] md:max-w-[720px] flex'>
          <div className="flex justify-center items-center align-middle">
            <img src={section.image} className='py-2 max-h-[80vh] w-auto' alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Scroll: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isInternalScrollActive, setIsInternalScrollActive] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { ref: topRef, inView: topInView } = useInView({
    threshold: 0,
  });
  
  const { ref: bottomRef, inView: bottomInView } = useInView({
    threshold: 0,
  });

  const sections = [
    {
      id: 0,
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
      id: 1,
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
      id: 2,
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

  useEffect(() => {
    setIsInternalScrollActive(topInView && bottomInView);
  }, [topInView, bottomInView]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isInternalScrollActive) {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        const newIndex = Math.min(Math.max(currentSectionIndex + direction, 0), sections.length - 1);
        if (newIndex !== currentSectionIndex) {
          setCurrentSectionIndex(newIndex);
          scrollContainerRef.current?.children[newIndex].scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const preventExternalScroll = (e: WheelEvent) => {
      if (isInternalScrollActive) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('wheel', preventExternalScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('wheel', preventExternalScroll);
    };
  }, [isInternalScrollActive, currentSectionIndex, sections.length]);

  useEffect(() => {
    console.log('Top in view:', topInView);
    console.log('Bottom in view:', bottomInView);
    console.log('Internal scroll active:', isInternalScrollActive);
    console.log(`Current section changed to ${currentSectionIndex}`);
  }, [topInView, bottomInView, isInternalScrollActive, currentSectionIndex]);


  
  return (
    <div className="relative h-screen ">
      <div ref={topRef} className="absolute top-0 h-1 w-full"></div>
      <div 
        ref={scrollContainerRef}
        className={`h-full overflow-y-scroll no-scrollbar scroll-snap-type-y mandatory scroll-snap-container ${isInternalScrollActive ? 'overflow-hidden' : 'overflow-y-auto'}`}
      >
        <div className='grid grid-cols-1 md:grid-cols-7 h-[300vh]'>
          <div className='relative col-span-3'>
            {sections.map((section, index) => (
              <Section
                key={index}
                section={section}
                index={index}
                setCurrentSectionIndex={setCurrentSectionIndex}
              />
            ))}
          </div>
              <div className="sticky top-0 h-screen flex flex-col col-span-4 justify-center px-6 md:px-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSectionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-12 w-12 hidden md:flex">
                      <img src={sections[currentSectionIndex].icon} className="" alt="" />
                    </div>
                    <div className="mt-6 md:mt-10">
                      {sections[currentSectionIndex].title}
                      <ul className="list-disc text- mt-10 md:mt-20 ml-8">
                        {sections[currentSectionIndex].points.map((point, i) => (
                          <React.Fragment key={i}>
                            <li className="text-text-secondary py-4">{point}</li>
                            {i < sections[currentSectionIndex].points.length - 1 && (
                              <div className="border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                            )}
                          </React.Fragment>
                        ))}
                      </ul>
                      <button
                        onClick={() => router.push('#contact')}
                        className="flex items-center mt-20 bg-white cursor-pointer text-black rounded-full px-4 py-3 hover:bg-primary hover:text-text-tertiary z-50">
                        <span className='pl-2 text-xs font-bold pr-1'>Book a demo</span>
                        <LuArrowRight />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        <div ref={bottomRef} className="absolute bottom-0 h-1 w-full"></div>
      </div>
  );
}

export default Scroll;