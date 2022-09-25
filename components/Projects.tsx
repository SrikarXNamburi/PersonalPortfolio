import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="object-cover h-80 w-200"
            viewport={{ once: true }}
            src="huluclone.png"
            alt="S"
          />

          <div className="space-y-10 px-0 md:px-0 max-w-6xl ">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]">
                Project#1 of 3: Hulu Clone
              </span>{' '}
            </h4>
            <p className="text-lg text-center md:text-left">
              Created a NextJS front-end mobile-friendly website that replicates
              the basic view and functionality of Hulu
            </p>
            <p className="text-lg text-center md:text-center">
              <a
                className="underline text-[#F7AB0A]"
                href="https://hulu-clone-ten-gamma.vercel.app/"
              >
                LINK
              </a>
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="object-cover h-80 w-200"
            src="apimage.png"
            alt="S"
          />

          <div className="space-y-10 px-0 md:px-0 max-w-6xl ">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]">
                Project#2 of 3: Airplane Delay Prediction Website
              </span>{' '}
            </h4>
            <p className="text-lg text-center md:text-left">
              Developed interactive python website that predicts whether an
              airplane is likely to be delayed based off of 200,000 data points
            </p>
            <p className="text-lg text-center md:text-center">
              <a
                className="underline text-[#F7AB0A]"
                href="https://airlinedelayprediction.herokuapp.com/"
              >
                LINK
              </a>
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="object-cover h-80 w-200"
            src="GymApp.png"
            alt="S"
          />

          <div className="space-y-10 px-0 md:px-0 max-w-6xl ">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]">
                Project#3 of 3: Personal Gym App
              </span>{' '}
            </h4>
            <p className="text-lg text-center md:text-left">
              Developed easy-to-use IOS App to display GIFS of workouts to
              ensure correct form and number of repetitions
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]"></div>
    </motion.div>
  );
}
