"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import {Experience} from "@/data";
import SectionWrapper from "@/components/SectionWrapper";
import ExperienceCard from "@/components/experienceCard";
import { motion } from 'framer-motion';
import {styles} from '@/styles';
import { textVariant } from '@/lib/motion';
const PRIMARY_COLOR = "#ff7011";

// Define the TypeScript type for each experience item
type ExperienceItem = {
  id: number;
  title: string;
  des: string;
  img: string;
  //iconLists: string[];
  points: string[];
  link?: string;
};

const ExperienceTimeline = () => {
    return (
      <div className="">
        <motion.div variants={textVariant()}>
      <h2 className="section-title">Our Awesome Services</h2>
      </motion.div>
      <div className="mt-10 flex flex-col">
        
    <VerticalTimeline  lineColor="#ff7011">
      {Experience.map((exp: ExperienceItem) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </VerticalTimeline>
    </div>
    </div >
  );
};

export default  SectionWrapper(ExperienceTimeline, "work");
