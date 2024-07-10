"use client";
import { motion } from "framer-motion";
import React from "react";

interface ExpandingCardProps {
  isClicked: boolean;
  onClick: () => void;
  onStartCall: () => void;
  onEndCall: () => void;
  isDisabled: boolean;
  name: string;
  role: string;
  imgSrc: string;
  status: string;
  isSmallScreen: boolean; // New prop to determine screen size
}

const ExpandingCard: React.FC<ExpandingCardProps> = ({
  isClicked,
  onClick,
  onStartCall,
  onEndCall,
  isDisabled,
  imgSrc,
  name,
  role,
  status,
  isSmallScreen,
}) => {
  const cardVariants = {
    default: {
      width: 140,
      height: 240,
      opacity: isDisabled && !isClicked ? 0.5 : 1,
    },
    clicked: isSmallScreen
      ? {
          width: "100%",
          height: 360,
          opacity: 1,
        }
      : {
          width: 300,
          height: 240,
          opacity: 1,
        },
  };

  const imageVariants = {
    default: {
      borderRadius: "10%",
      width: 132,
      height: 132,
      x: 0,
      y: 0,
    },
    clicked: isSmallScreen
      ? {
          borderRadius: "10%",
          width: 132,
          height: 132,
          x: 0,
          y: 0,
        }
      : {
          borderRadius: "50%",
          width: 90,
          height: 90,
          x: 10,
          y: 10,
        },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="default"
      animate={isClicked ? "clicked" : "default"}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col justify-top items-center p-1 border bg-[#0E0E0E] overflow-hidden"
      style={{
        cursor: isDisabled && !isClicked ? "default" : "pointer",
        borderRadius: 8,
      }}
    >
      <motion.img
        src={imgSrc}
        alt="Avatar"
        layout
        variants={imageVariants}
        initial="default"
        animate={isClicked ? "clicked" : "default"}
        transition={{ duration: 0.3 }}
        style={{
          marginBottom: "10px",
          position: isClicked && !isSmallScreen ? "absolute" : "static",
          left: isClicked && !isSmallScreen ? "10px" : "auto",
          top: isClicked && !isSmallScreen ? "10px" : "auto",
        }}
      />

      {isClicked ? (
        <motion.div
          key="expanded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.35 }}
          className="w-full flex flex-col h-full px-3 items-between"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div className={`flex flex-col w-full ${isSmallScreen ? 'h-auto mt-4' : 'h-[90px] pl-[120px] mt-4'} gap-1 items-start justify-center`}>
              <h4 className="font-Gilroy font-regular text-sm text-foreground text-start">
                On call with {name}
              </h4>
              <h4 className="font-Gilroy font-bold text-xl text-foreground">
                0:00
              </h4>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-background via-border to-background w-full my-6"></div>
            <div className="flex w-full h-hug my-2 items-center justify-between">
              <div className="w-12 h-12 mr-2">
                <img
                  src="/accept.svg"
                  alt="Call"
                  className="w-12 h-12"
                  onClick={onStartCall}
                />
              </div>

              <div className="w-[150px] h-8 md:h-12 flex items-center justify-center bg-[#191919] rounded-lg md:rounded-[24px]">
                <h4 className="font-Gilroy font-medium text-xs md:text-base leading-4 text-gray-400">
                  {status}
                </h4>
              </div>
              <button onClick={onEndCall} className="w-16 h-16 ml-2">
                <img
                  src="/decline.svg"
                  alt="Hang up"
                  className="w-12 h-12"
                />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          style={{ textAlign: "center" }}
          className="w-full flex flex-col h-full gap-[2px]"
        >
          <h4 className="font-Gilroy text-base font-semibold bg-gradient-to-r from-text-secondary via-foreground to-text-secondary bg-clip-text text-transparent text-center px-1">
            {name}
          </h4>
          <h4 className="font-Gilroy text-xs font-regular">
            {role}
          </h4>
          <div
            className="w-full h-wrap flex items-center justify-center p-2 bg-[#191919] mt-3 rounded-[6px]"
            onClick={!isDisabled ? onClick : undefined}
          >
            <h4 className="font-Gilroy font-semibold text-xs text-foreground">
              Let's Talk &gt;&gt;
            </h4>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExpandingCard;