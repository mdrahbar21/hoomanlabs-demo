import React, { useRef, useState, useEffect, useCallback } from "react";
import { LuArrowRight } from "react-icons/lu";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { usePathname} from "next/navigation";
import { useRouter } from 'next/navigation'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Scroller2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const pathname = usePathname()
  const router = useRouter()


  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const y = useParallax(scrollYProgress, 300);

  const sections = [
    {
      title: (
        <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{ lineHeight: "4rem" }}>
          Operate Round the  clock for your  customers, Cost  Effectively
        </h3>
      ),
      image: "/roundTheClockPC.svg",
      icon: "/roundTheClock.svg",
      points: ["24x7 availability", "Cost Effective", "60% saving on team"],
    },
    {
      title: (
        <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{ lineHeight: "4rem" }}>
          Boost Automation & Maintain Personal  Touch to Enhance  Customer Interactions
        </h3>
      ),
      image: "/boostAutomationPhone.svg",
      icon: "/boostAutomation.svg",
      points: ["Human Like Conversation", "Automated Assistance", "Interruption Handling"],
    },
    {
      title: (
        <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{ lineHeight: "4rem" }}>
          Rapid setup and  multilingual flexibility  for effortless business  expansion
        </h3>
      ),
      image: "/rapidSetupPC.svg",
      icon: "/rapidSetup.svg",
      points: ["Fast Setup", "Multilingual Support", "Easy Updates"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight;

      const newActiveSection = Math.floor(scrollPosition / sectionHeight);
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = useCallback(() => {
    router.push('/dashboard');
  }, [router]);

  return (
    <>
      <div className="sm:mx-4 border border-[#F80759] flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit bg-[#AA093F]/10">
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
      <div ref={containerRef} className="relative">
        {sections.map((section, index) => {
          const translateYImage = useTransform(
            scrollYProgress,
            [index / sections.length, (index + 1) / sections.length],
            index === sections.length - 1 ? ["100%", "0%"] : ["100%", "-40%"]
          );
          const translateYText = useTransform(
            scrollYProgress,
            [index / sections.length, (index + 1) / sections.length],
            ["0%", "0%"]
          );

          return (
            <motion.div
              key={index}
              className="sticky top-4 h-screen flex items-center justify-center"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [index / sections.length, (index +0.5) / sections.length, (index +1) / sections.length],
                  index === sections.length -1 ? [1, 1, 1] : [0, 1, 0]
                ),
                pointerEvents: activeSection === index ? "auto" : "none",
              }}
            >
              <div className="grid grid-cols-7 gap-10 max-w-[1440px] mx-auto">
                <motion.div className="col-span-3" style={{y:translateYImage}}>
                  <div className="flex bg-gradient-to-b from-[#A37C5B]/5 to-[#3D2E22]/5 items-center justify-center h-full">
                    <img src={section.image} className="" alt="" />
                  </div>
                </motion.div>
                <motion.div className="col-span-4 flex flex-col ml-12" style={{ y: translateYText }}>
                  <div className="h-12 w-12">
                    <img src={section.icon} className="" alt="" />
                  </div>
                  <div className="mt-10">
                    {/* <h3 className="font-semibold font-Gilroy text-left sm:text-lg md:text-4xl" style={{ lineHeight: "4rem" }}> */}
                      {section.title}
                    {/* </h3> */}
                    <ul className="list-disc mt-20 ml-8">
                      {section.points.map((point, i) => (
                        <React.Fragment key={i}>
                          <li className="text-text-secondary py-4">{point}</li>
                          {i < section.points.length - 1 && (
                            <div className="border-b border-solid border-text-secondary/20 w-full -ml-8"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                    <button 
                      style={{ zIndex: 1000 }}
                      onClick={handleButtonClick}
                      // onClick={(e) => {e.stopPropagation();
                      // router.push('/dashboard');
                      // }} 
                      className="flex items-center mt-20 bg-white cursor-pointer text-black rounded-full px-4 py-3 hover:bg-red-800">
                      <span className='pl-2 text-xs font-bold pr-1'>Book a demo</span>
                      <LuArrowRight />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Scroller2;
