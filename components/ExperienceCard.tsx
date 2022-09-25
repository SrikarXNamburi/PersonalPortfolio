import React from 'react';
import { motion } from 'framer-motion';
interface Props {
  imageSource: string;
  titlePosition: string;
  workPlace: string;
  workTime: string;
  firstSummaryPoint: string;
  secondSummaryPoint: string;
  thirdSummaryPoint: string;
  fSource: string;
  tSource: string;
  sSource: string;
}

export default function ExperienceCard({
  imageSource,
  titlePosition,
  workPlace,
  workTime,
  firstSummaryPoint,
  secondSummaryPoint,
  thirdSummaryPoint,
  fSource,
  tSource,
  sSource,
}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-3 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={imageSource}
        alt="Qualcomm logo"
      />
      <div className=" px-0 md:px-10">
        <h4 className="text-4xl font-light">{titlePosition}</h4>
        <p className="font-bold text-2xl mt-1">{workPlace}</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={fSource} />
          <img className="h-10 w-10 rounded-full" src={sSource} />
          <img className="h-10 w-10 rounded-full" src={tSource} />
          {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-300 ">{workTime}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>{firstSummaryPoint}</li>
          <li>{secondSummaryPoint}</li>
          <li>{thirdSummaryPoint}</li>
        </ul>
      </div>
    </article>
  );
}
