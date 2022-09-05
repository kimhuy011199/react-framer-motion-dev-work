import React from 'react';
import { motion } from 'framer-motion';

const Section = (props) => {
  return (
    <section className="section" id={props.id}>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="sectionHeading"
      >
        {props.heading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="sectionDesc"
      >
        {props.desc}
      </motion.p>
      {props.children}
    </section>
  );
};

export default Section;
