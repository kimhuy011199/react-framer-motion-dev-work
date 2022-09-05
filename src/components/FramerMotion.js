import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as FramerIcon } from '../assets/framer.svg';

const FramerMotion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="fixed bottom-4 right-4 hidden lg:flex"
    >
      <motion.a
        initial={{ backgroundColor: '#64748b' }}
        animate={{ backgroundColor: '#1e293b' }}
        transition={{ duration: 1, delay: 1.2, repeat: 1 }}
        href="https://www.framer.com/motion/"
        target="blank"
        className="flex items-center gap-2 rounded-md bg-slate-800 p-2 text-sm leading-3 shadow-sm"
      >
        <FramerIcon className="h-4 fill-white" />
        <span className="font-semibold text-white">Animation</span>
      </motion.a>
    </motion.div>
  );
};

export default FramerMotion;
