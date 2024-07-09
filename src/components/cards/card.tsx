import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "assistant";
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatRef = useRef(null);
  const isInView = useInView(chatRef, { once: true });

  const allMessages: Message[] = [
    {
      id: 1,
      text: "Hey, can you help me choose a ring for my friend?",
      sender: "user",
    },
    {
      id: 2,
      text: "Sure! I'll be happy to assist you. Are you looking for something in Silver or Gold and also, do you have a budget in mind?",
      sender: "assistant",
    },
    {
      id: 3,
      text: "Yeah, a silver ring under 10K would be nice.",
      sender: "user",
    },
    {
      id: 4,
      text: "Got it. I've found two options for you that I think you would love.",
      sender: "assistant",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const addMessage = (index: number) => {
        if (index < allMessages.length) {
          setMessages((prev) => [...prev, allMessages[index]]);
          setTimeout(() => addMessage(index + 1), 800); // Adjust timing as needed
        }
      };
      addMessage(0);
    }
  }, [isInView]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen max-w-[1440px] gap-10 mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2 }}
          className="col-span-1 flex flex-col min-w-[320px] sm:min-w-[400px] px-8 sm:px-12"
        >
          <div className="sm:mx-4 border border-[#F80759] flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit  bg-[#AA093F]/10">
            <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
              Other Features
            </h3>
          </div>
          <h1 className="text-start sm:mx-4 font-Gilroy font-semibold text-[48px] sm:text-[72px] tracking-tight">
            Your shopify store now has a voice
          </h1>
          <div className="flex flex-col sm:mx-4 mt-6">
            <div className="flex items-center h-[24px] my-2">
              <img src="/list-star.svg" className="w-[24px] h-[24px]" />
              <h3 className="text-start mx-4 font-Gilroy font-normal text-[16px] leading-6 sm:text-[20px] text-muted-foreground">
                Reduce pre-sales queries
              </h3>
            </div>
            <div className="flex items-center h-[24px] my-2">
              <img src="/list-star.svg" className="w-[24px] h-[24px]" />
              <h3 className="text-start mx-4 font-Gilroy font-normal text-[16px] leading-6 sm:text-[20px] text-muted-foreground">
                Increase conversion
              </h3>
            </div>
            <div className="flex items-center h-[24px] my-2">
              <img src="/list-star.svg" className="w-[24px] h-[24px]" />
              <h3 className="text-start mx-4 font-Gilroy font-normal text-[16px] leading-6 sm:text-[20px] text-muted-foreground">
                A new way of Shopping
              </h3>
            </div>
          </div>
   
        </motion.div>
        <div
          ref={chatRef}
          className=" col-span-1 h-fit  relative rounded-[8px] flex flex-col min-w-[320px] sm:min-w-[400px] w-[36vw] max-h-[90vh] mx-auto text-white"
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
            <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-[#302B28] flex items-center justify-center mr-3">
              <img src="/agent5.svg" />
            </div>
            <h4 className="font-Gilroy font-medium text-lg sm:text-xl text-foreground tracking-normal">
              Shopping Assistant
            </h4>
          </div>

          {/* Chat messages */}
          <div className="flex-1 py-4 px-8 overflow-clip space-y-4 w-full">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-start" : "justify-end"
                  } items-end space-x-2`}
                >
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <img src="/User.svg" className="w-8 h-8 rounded-full" />
                    </div>
                  )}
                  <div
                    className={`w-4/5 sm:w-3/4 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-3 mt-1 opacity-70 border border-[#4d4d4c] ${
                      message.sender === "user"
                        ? "bg-gradient-to-l from-[#F80659] to-[#AA093F] rounded-lg rounded-bl-none"
                        : "bg-gradient-to-r from-[#323232] to-[#141414] rounded-lg rounded-br-none"
                    }`}
                  >
                    <h4 className="font-Gilroy font-light text-xs sm:text-sm text-foreground text-start">
                      {message.text}
                    </h4>
                  </div>
                  {message.sender === "assistant" && (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <img
                        src="/agent5.svg"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Microphone input */}
          <div className="flex justify-center">
            <img
              src="/chat-mic-2.svg"
              className="w-[120px] h-[120px] sm:w-[155px] sm:h-[155px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;