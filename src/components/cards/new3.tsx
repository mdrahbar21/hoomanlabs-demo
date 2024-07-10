"use client";
import React, { useState, useEffect } from "react";
import ExpandingCard from "./card3";
import { motion } from "framer-motion";

const agents = [
  {
    name: "Danielle",
    role: "Outbound Agent",
    imageSrc: "/agent3.svg", // Replace with actual image path
    backgroundColor: "#FF6B6B", // Replace with actual color
  },
  {
    name: "Susan",
    role: "Shopify Agent",
    imageSrc: "/agent4.svg", // Replace with actual image path
    backgroundColor: "#FFD93D", // Replace with actual color
  },
  {
    name: "Riya",
    role: "Booking Agent",
    imageSrc: "/agent5.svg", // Replace with actual image path
    backgroundColor: "#6BFF6B", // Replace with actual color
  },
  {
    name: "Kajal",
    role: "Hoomanlabs Agent",
    imageSrc: "/agent6.svg", // Replace with actual image path
    backgroundColor: "#6B6BFF", // Replace with actual color
  },
];

const CardGrid: React.FC = () => {
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const [callStatus, setCallStatus] = useState<string>("startCall");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is the default breakpoint for md in Tailwind
    };
    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (index: number) => {
    setClickedCard(index === clickedCard ? null : index);
    setCallStatus("startCall");
  };

  const handleStartCall = () => {
    setCallStatus("connecting...");
  };

  const handleEndCall = () => {
    setClickedCard(null);
    setCallStatus("call ended");
  };

  return (
      <>
        {/* For md and above screens */}
      <div className="hidden md:flex gap-3 w-full h-[260px] justify-between items-center relative">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            animate={{
              width: clickedCard === index ? 300 : 140,
              opacity: clickedCard !== null && clickedCard !== index ? 0.5 : 1,
              scale: clickedCard !== null && clickedCard !== index ? 0.8 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <ExpandingCard
              isClicked={clickedCard === index}
              onClick={() => handleCardClick(index)}
              onStartCall={handleStartCall}
              onEndCall={handleEndCall}
              isDisabled={clickedCard !== null && clickedCard !== index}
              imgSrc={agent.imageSrc}
              name={agent.name}
              role={agent.role}
              status={callStatus}
              isSmallScreen={isSmallScreen}
            />
          </motion.div>
        ))}
      </div>

      {/* For sm and smaller screens */}
      <div className="md:hidden grid grid-cols-2 gap-3 w-full">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            animate={{
              opacity: clickedCard !== null && clickedCard !== index ? 0.5 : 1,
              scale: clickedCard !== null && clickedCard !== index ? 0.8 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <ExpandingCard
              isClicked={clickedCard === index}
              onClick={() => handleCardClick(index)}
              onStartCall={handleStartCall}
              onEndCall={handleEndCall}
              isDisabled={clickedCard !== null && clickedCard !== index}
              imgSrc={agent.imageSrc}
              name={agent.name}
              role={agent.role}
              status={callStatus}
              isSmallScreen={isSmallScreen}
            />
          </motion.div>
        ))}
      </div>
            {/* <div
              className="gap-3"
              style={{
                width: "full",
                height: 260, 
                display: "flex ",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              {agents.map((agent: any, index: any) => (
                <motion.div
                  key={index}
                  animate={{
                    width: clickedCard === index ? 300 : 140,
                    opacity:
                      clickedCard !== null && clickedCard !== index ? 0.5 : 1,
                    scale:
                      clickedCard !== null && clickedCard !== index ? 0.8 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ExpandingCard
                    isClicked={clickedCard === index}
                    onClick={() => handleCardClick(index)}
                    onStartCall={handleStartCall}
                    onEndCall={handleEndCall}
                    isDisabled={clickedCard !== null && clickedCard !== index}
                    imgSrc={agent.imageSrc}
                    name={agent.name}
                    role={agent.role}
                    status={callStatus}
                  />
                </motion.div>
              ))}
            </div> */}
      </>
  );
};

export default CardGrid;

