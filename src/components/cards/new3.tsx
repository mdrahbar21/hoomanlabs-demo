"use client";
import React, { useState } from "react";
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

  const handleCardClick = (index: number) => {
    setClickedCard(index === clickedCard ? null : index);
    setCallStatus("startCall");
  };

  const handleStartCall = () => {
    setCallStatus("connecting...");
    // Add logic for starting the call if necessary
  };

  const handleEndCall = () => {
    setClickedCard(null);
    setCallStatus("call ended");
  };

  return (
    // <div className="flex flex-col items-center z-10 flex-1 bg-popover p-8 rounded-3xl shadow-lg border-2 border-double">
    //   <div className="flex flex-col justify-center pt-20 pl-28 pb-10 pr-28 border rounded-3xl">
        <div>
          {/* <div className="relative flex gap-4"> */}
            <div
              className="gap-3"
              style={{
                width: "full",
                height: 260, // Adjust to accommodate card height and spacing
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
                //   style={{ display: "inline-block" }}
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
            </div>
           </div>
        // </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default CardGrid;

