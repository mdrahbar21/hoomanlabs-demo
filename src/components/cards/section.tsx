import React from "react";
import { motion } from "framer-motion";

import SectionWrapper  from "@/hoc/SectionWrapper";
import { fadeIn, textVariant } from "@/utils/motion";
import CardGrid2 from "./useCases";

const FeedbackCard = ({
}) => (
  <motion.div
    variants={fadeIn("", "spring", 1 * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    {/* <p className='text-text-primary font-black text-[48px]'>"</p> */}
    <div className='mt-1'>
    {/* <CardGrid2/> */}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
            <CardGrid2 />
        </motion.div>
      </div>
      {/* <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");