import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative mx-auto max-w-2xl px-4 pb-8 lg:max-w-6xl">
      <div className="hidden items-center justify-center pt-10 text-center text-sm font-medium uppercase leading-relaxed tracking-[0.16em] sm:flex">
        <p>
          LEVEL <span className="font-bold text-white">2</span> SELLER ON FIVERR
        </p>
        <div className="mx-6 h-[0.1875rem] w-[0.1875rem] rounded-full bg-white xl:mx-16"></div>
        <p>
          <span className="font-bold text-white">5.00</span> OVERALL RATING
        </p>
        <div className="mx-6 h-[0.1875rem] w-[0.1875rem] rounded-full bg-white xl:mx-16"></div>
        <p>
          COMPLETED <span className="font-bold text-white">330</span> ORDERS
        </p>
      </div>
      <div className="grid grid-cols-1 items-center gap-14 pt-20 pb-8 lg:grid-cols-2 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-4xl leading-tight tracking-tighter text-transparent md:text-6xl md:leading-tight">
            Make your website look awesome.
          </h1>
          <p className="mt-6 text-xl leading-normal tracking-tight  sm:text-2xl sm:leading-10">
            Hi, I'm Huy 👋 FE Developer. I can build awesome website from your
            design files.
          </p>
          <a
            href="https://www.fiverr.com/huykim12356"
            target="blank"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-sky-500 py-3 px-6 text-sm font-bold uppercase text-white sm:py-3.5 sm:px-8 sm:text-base"
          >
            Inbox me
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex max-w-sm items-center justify-center p-10 sm:max-w-md lg:-mb-16 lg:max-w-xs lg:p-0"
        >
          <motion.img
            src="/man-hero.png"
            alt="Man"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
            className="pl-10 lg:p-0"
          />
          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
            src="/controller-hero.png"
            alt="Controller"
            className="absolute -top-2 right-8 w-10 sm:w-12 lg:-top-20 lg:right-4 lg:w-14"
          />
          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
            src="/phone-hero.png"
            alt="Phone"
            className="absolute bottom-10 right-10 w-6 sm:w-8 lg:-bottom-2 lg:right-0"
          />
          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
            src="/airplane-hero.png"
            alt="Airplane"
            className="absolute top-6 left-10 w-10 sm:w-12 lg:-top-4 lg:-left-10"
          />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <a href="#works">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#38bdf8"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
