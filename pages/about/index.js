import React, { useState } from "react";

const aboutData = [
  {
    title: 'Theme 1',
    info: [
      {
        title: 'Healthcare',
      },
    ],
  },
  {
    title: 'Theme 2',
    info: [
      {
        title: 'Fintech',
      },
    ],
  },
  {
    title: 'Theme 3',
    info: [
      {
        title: 'Web 3',
      },
    ],
  },
  {
    title: 'Theme 4',
    info: [
      {
        title: 'Change Visible????',
      },
    ],
  },
  {
    title: 'Theme 5',
    info: [
      {
        title: 'Open Innovation',
      },
    ],
  },
];

const aboutDataCopy = [
  {
    title: 'Theme 1',
    info: [
      {
        title: 'Healthcare',
      },
    ],
  },
  {
    title: 'Theme 2',
    info: [
      {
        title: 'Fintech',
      },
    ],
  },
  {
    title: 'Theme 3',
    info: [
      {
        title: 'Web 3',
      },
    ],
  },
  {
    title: 'Theme 4',
    info: [
      {
        title: 'Change Visible????',
      },
    ],
  },
  {
    title: 'Theme 5',
    info: [
      {
        title: 'Open Innovation',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary pt-40 text-center xl:text-left">
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      ></motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2"> 
            Where Creativity Meets <span className="text-accent">Code</span>
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            HackX: Manipal University Jaipur's global hackathon. A 36-hour challenge for students worldwide, igniting talent and creativity. Juries shape mesmerizing ideas into perfect projects, boosting confidence and innovation.
          </p>
          <div>
            <div className="inline:block relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={200000} duration={3} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Prize Pool</div>
            </div>
            <div className="inline:block relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={1000} duration={3} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Participants</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] pt-10">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 
                  after:left-0`}
                onClick={() => setIndex(itemIndex)}
              > 
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
