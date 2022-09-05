import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ReactComponent as HtmlIcon } from '../assets/html5.svg';
import { ReactComponent as CssIcon } from '../assets/css3.svg';
import { ReactComponent as TailwindIcon } from '../assets/tailwindcss.svg';
import { ReactComponent as SassIcon } from '../assets/sass.svg';
import { ReactComponent as JsIcon } from '../assets/javascript.svg';
import { ReactComponent as ViteIcon } from '../assets/vite.svg';

const Stacks = () => {
  const heading = 'Optimizing For Production.';
  const desc =
    'Build your production-ready website using HTML5, CSS3, Javascript, TailwindCSS, Sass and Vite.';

  const iconsList = [
    { comp: <HtmlIcon className="stackIcon" />, text: 'HTML5' },
    { comp: <CssIcon className="stackIcon" />, text: 'CSS3' },
    { comp: <JsIcon className="stackIcon" />, text: 'Javascript' },
    { comp: <TailwindIcon className="stackIcon" />, text: 'Tailwind' },
    { comp: <SassIcon className="stackIcon" />, text: 'Sass' },
    { comp: <ViteIcon className="stackIcon" />, text: 'Vite' },
  ];
  return (
    <Section heading={heading} desc={desc}>
      <div className="mx-auto mt-10 sm:mt-14">
        <ul className="flex justify-center gap-4 sm:gap-10">
          {iconsList.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative cursor-pointer"
            >
              {item.comp}
              <span className="invisible absolute -bottom-10 left-1/2 -translate-x-1/2 text-white lg:group-hover:visible">
                {item.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Stacks;
