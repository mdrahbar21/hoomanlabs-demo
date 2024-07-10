import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";


const Analytics: React.FC = () => {
  const chatRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Stop observing once in view
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (chatRef.current) {
      observer.observe(chatRef.current);
    }

    return () => {
      if (chatRef.current) {
        observer.unobserve(chatRef.current);
      }
    };
  }, []);

  return (
    <div className="h-full md:mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full  max-w-[1440px] gap-10 mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2 }}
          className="col-span-1 flex flex-col min-w-[320px] sm:min-w-[400px] px-8 sm:px-12"
        >
          <h3 className="text-start sm:mx-4 font-Gilroy font-semibold tracking-tight">
            <span className="text-primary">Conversation Analytics Suite</span> <br/> gains insights to improve <br /> decision and service quality.
          </h3>
          <div className="flex flex-col sm:mx-4 mt-6">
            <div className="flex items-center h-[24px] my-2">
              <img src="/list-star.svg" className="w-[24px] h-[24px]" />
              <h3 className="text-start mx-4 font-Gilroy font-normal text-[16px] leading-6 sm:text-[20px] text-muted-foreground">
                Training of Agents
              </h3>
            </div>
            <div className="flex items-center h-[24px] my-2">
              <img src="/list-star.svg" className="w-[24px] h-[24px]" />
              <h3 className="text-start mx-4 font-Gilroy font-normal text-[16px] leading-6 sm:text-[20px] text-muted-foreground">
                Store quality rating
              </h3>
            </div>
            <div className="flex items-center h-[24px] my-2">
              <img src="/list-star.svg" className="w-[24px] h-[24px]" />
              <h3 className="text-start mx-4 font-Gilroy font-normal text-[16px] leading-6 sm:text-[20px] text-muted-foreground">
                Analysis of calls
              </h3>
            </div>
          </div>
   
        </motion.div>
        <div
          ref={chatRef}
          className=" col-span-1 relative rounded-[8px] flex flex-col min-w-[320px] sm:min-w-[400px] w-[36vw] max-h-[70vh] mx-auto text-white"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(109, 108, 107, 1), rgba(211, 209, 207, 0))",
              padding: "1px",
              borderRadius: "8px",
              content: "''",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient( to bottom right, rgba(218, 136, 67, 1) 0%, rgba(150, 94, 46, 0.9) 55%, rgba(130, 81, 40, 0.8) 75%, rgba(116, 73, 36, 0) 100%)",
              borderRadius: "inherit",
              opacity: "0.08",
            }}
          ></div>
          {/* Header */}
          <div className="flex items-center p-4 border-b">
            <div className="w-14 h-14 rounded-full overflow-hidden  border-[#302B28] flex items-center justify-center mr-3">
              <img src="/LooperGroup.svg" />
            </div>
            <h4 className="font-Gilroy font-medium text-lg sm:text-xl text-foreground tracking-normal">
              Customer Trends
            </h4>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0 }}
            className="flex-1 py-4 px-8 overflow-clip space-y-4 w-full"
          >
            <img src="/chart.svg" alt="Chart" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;