import React from 'react';
import Section from './Section';
import Circle from './Circle';
import { motion } from 'framer-motion';

const Features = () => {
  const heading = 'Build Whatever You Want.';
  const desc =
    'Getting the most performance out of your project, ready to deploy to any hosting.';
  const featuresList = [
    'HTML CSS hand-typed code',
    'Fully responsive design',
    'Cross-browser compatibility',
    'SEO friendly optimized code',
    'Fast loading and optimized images',
    'W3C validated code',
    'CSS animation and effect',
    'Ready-production files to deploy',
  ];

  return (
    <Section heading={heading} desc={desc}>
      <div className="mx-auto mt-10 grid grid-cols-1 items-center gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-12 lg:mt-24 lg:grid-cols-3">
        <ul className="ml-6 flex flex-col gap-6 sm:ml-0 lg:gap-8 lg:text-right">
          {featuresList.slice(0, 4).map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <span className="text-lg lg:text-xl">{item}</span>
            </motion.li>
          ))}
        </ul>
        <div className="hidden justify-center lg:flex">
          <img src="/man.png" alt="Man" className="z-10 w-[10rem]" />
        </div>
        <ul className="ml-6 flex flex-col gap-6 sm:ml-0 lg:gap-8">
          {featuresList.slice(4, 8).map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <span className="text-lg lg:text-xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        className="absolute bottom-12 left-1/2 hidden lg:flex"
        style={{ translateX: '-50%' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Circle />
      </motion.div>
    </Section>
  );
};

export default Features;
