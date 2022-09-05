import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Works = () => {
  const heading = "Some Things I've Built.";
  const desc = 'Some of my creative and eye-catching landing pages.';
  const worksList = [
    {
      id: 1,
      preview: '/sm-tw-lp-taxpal.jpg',
      title: 'Landing page: Taxpal',
      desc: 'A clean and professional currency template fit for any tax application.',
      link: 'https://tw-lp-taxpal.netlify.app/',
    },
    {
      id: 2,
      preview: '/sm-tw-lp-storm.jpg',
      title: 'Landing page: Storm',
      desc: 'Educate any users in a creative style with this documentation template.',
      link: 'https://tw-lp-storm.netlify.app/',
    },
    {
      id: 3,
      preview: '/sm-sass-lp-vultripe.jpg',
      title: 'Landing page: Vultripe',
      desc: 'A beautiful SaaS landing page to announce the next big idea for hosting.',
      link: 'https://sass-lp-vultripe.netlify.app/',
    },
    {
      id: 4,
      preview: '/sm-sass-lp-xbox.jpg',
      title: 'Landing page: XBOX One',
      desc: 'A minimal, dark theme for XBOX One, including 3D controller model.',
      link: 'https://sass-lp-xbox.netlify.app/',
    },
    {
      id: 5,
      preview: '/sm-sass-lp-windyjs.jpg',
      title: 'Landing page: WindyJS',
      desc: 'Launch the next node package with a splash with this eye-catching template.',
      link: 'https://sass-lp-windyjs.netlify.app/',
    },
    {
      id: 6,
      preview: '/sm-sass-lp-fend.jpg',
      title: 'Landing page: Fend',
      desc: 'A stunning and creative landing page for the ultimate Frontend course.',
      link: 'https://sass-lp-fend.netlify.app/',
    },
    {
      id: 7,
      preview: '/sm-sass-lp-watch.jpg',
      title: 'Landing page: Watch',
      desc: 'The perfect starting point for the first product project with modern template.',
      link: 'https://sass-lp-watch.netlify.app/',
    },
    {
      id: 8,
      preview: '/sm-sass-lp-travelight.jpg',
      title: 'Landing page: Travelight',
      desc: 'Make a difference in the world of the travel industry with a bang using Travelight.',
      link: 'https://sass-lp-travelight.netlify.app/',
    },
  ];

  return (
    <Section heading={heading} desc={desc} id="works">
      <div className="mt-10 sm:mt-14 lg:mt-16">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
          {worksList.map((item) => (
            <li key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <a href={item.link} target="blank">
                  <div className="rounded-3xl bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] p-4 sm:p-5">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={item.preview}
                        alt={item.title}
                        className="transition-all hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-5 mb-2 text-xl font-medium text-white">
                      {item.title}
                    </h3>
                    <p>{item.desc}</p>
                  </div>
                </a>
              </motion.div>
            </li>
          ))}
        </ul>
        <p className="mx-2 mt-12 text-center text-2xl sm:mt-16 lg:mt-20">
          🎯 Visit my landing pages design&nbsp;
          <a
            href="https://bit.ly/psdwebsitedesign"
            target="blank"
            className="text-sky-400 transition-all hover:text-blue-500"
          >
            here
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Works;
