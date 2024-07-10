import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Hanna Iubin',
    role: 'Director',
    company: 'Shopify',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis molestie ex quis gravida. Ut ut ligula finibus nisi ultricies aliquam.',
    avatarUrl: '/agent2.svg',
  },
  {
    name: 'Rahbar haha',
    role: 'Director',
    company: 'Shopify',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis molestie ex quis gravida. Ut ut ligula finibus nisi ultricies aliquam.',
    avatarUrl: '/agent3.svg',
  },
  // Add more testimonials here
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setDirection(1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
};

return (
    <div className='h-full'>  
      <div className='bg-popover relative flex flex-col items-center -mt-10'>
          <div className="sm:mx-4 border border-[#F80759] mt-20 flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit  bg-[#AA093F]/10">
              <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
                  Testimonials
              </h3>
          </div>
      </div>
      <div className=" text-text-primary p-4 sm:p-6 md:p-8 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-24 text-center">What others are saying</h2>
        <div className="relative" style={{ height: `${contentHeight}px` }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              ref={contentRef}
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 ">
                <div className="h-20 w-20 sm:w-24 sm:h-24 md:w-40 md:h-40 flex-shrink-0 relative mb-4 sm:mb-0">
                  <Image
                    src={testimonials[currentIndex].avatarUrl}
                    alt={testimonials[currentIndex].name}
                    layout="fill"
                    // objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{testimonials[currentIndex].name}</h3>
                  <p className="text-text-secondary text-sm sm:text-base mb-2">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  <p className="text-xs sm:text-sm">{testimonials[currentIndex].content}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
            
          {/* <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full sm:-translate-x-full  text-text-primary rounded-full p-2 focus:outline-none "
            aria-label="Previous testimonial"
            disabled={currentIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-full sm:translate-x-full  text-text-primary rounded-full p-2 focus:outline-none "
            aria-label="Next testimonial"
            disabled={currentIndex === testimonials.length - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto text-text-primary rounded-full p-2 md:-mx-20 focus:outline-none hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
              disabled={currentIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto text-text-primary rounded-full p-2 md:-mx-20 focus:outline-none hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
              disabled={currentIndex === testimonials.length - 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
);
};

export default Carousel;
