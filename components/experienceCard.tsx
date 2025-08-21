"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image from "next/image";

export const PRIMARY_COLOR = "#ff7011";

export type ExperienceItem = {
  id: number;
  title: string;
  des: string;
  img: string;
 // iconLists: string[];
  points: string[];
  link?: string;
};

type Props = {
  experience: ExperienceItem;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#fff",
        color: "#333",
        borderTop: `4px solid ${PRIMARY_COLOR}`,
      }}
      contentArrowStyle={{ borderRight: `7px solid ${PRIMARY_COLOR}` }}
      iconStyle={{ background: PRIMARY_COLOR, color: "#fff" }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={experience.img}
            alt={experience.title}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="flex flex-col gap-3 rounded-full shadow-3xl"
      >
        <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider">
             {point}
            </li>
          ))}
        </ul>

       {/*  <div className="flex flex-wrap gap-2 mt-2">
          {experience.iconLists.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`tech-${index}`}
              width={20}
              height={20}
              className="object-contain"
            />
          ))}
        </div> */}

        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-[#ff7011] font-semibold underline"
          >
            Learn more
          </a>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
