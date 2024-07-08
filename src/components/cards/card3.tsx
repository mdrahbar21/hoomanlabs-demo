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
}) => {
  return (
    <motion.div
      initial={{ width: 140 }}
      animate={{
        width: isClicked ? 300 : 140,
        opacity: isDisabled && !isClicked ? 0.5 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col justify-top items-center p-1 border bg-[#0E0E0E] w-[140px] h-[240px] overflow-hidden "
      style={{
        cursor: isDisabled && !isClicked ? "default" : "pointer",
        borderRadius: 8,
      }}
    >
      <motion.img
        src={imgSrc}
        alt="Avatar"
        layout
        initial={{
          borderRadius: "10%",
          width: 132,
          height: 132,
        }}
        animate={{
          borderRadius: isClicked ? "50%" : "10%",
          width: isClicked ? 90 : 132,
          height: isClicked ? 90 : 132,
          x: isClicked ? 10 : 0,
          y: isClicked ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          marginBottom: "10px",
          position: isClicked ? "absolute" : "static",
          left: isClicked ? "10px" : "auto",
          top: isClicked ? "10px" : "auto",
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
            <div className="flex flex-col w-full h-[90px] pl-[120px] mt-4 gap-1 items-start justify-center">
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

              <div className="w-[150px] h-12 flex items-center justify-center bg-[#191919] rounded-[24px]">
                <h4 className="font-Gilroy font-medium text-base leading-4 text-gray-400">
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
