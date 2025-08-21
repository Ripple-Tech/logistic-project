"use client"

import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Logo from '@/assets/logosaas.png';
import moment from "moment";

export const PRIMARY_COLOR = "#ff7011";

interface TimelineItem {
  id: string;
  text: string;
  createDate: string;
}

interface InvoiceTimelineProps {
  timeline: TimelineItem[];
}

interface InvoiceTimelineCardProps {
  text: string;
  createDate: string;
}

const InvoiceTimelineCard = ({ text, createDate }: InvoiceTimelineCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#fff",
        color: "#333",
        borderTop: `1px solid ${PRIMARY_COLOR}`,
        paddingTop: "2px",
        paddingBottom: "2px",
      }}
      contentArrowStyle={{ borderRight: `4px solid ${PRIMARY_COLOR}` }}
      iconStyle={{ background: PRIMARY_COLOR, color: "#000" }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={Logo}
            alt="logo"
            width={16}
            height={16}
            className="object-contain"
          />
        </div>
      }
    >
      <div className="flex flex-col space-y-[2px]">
        <p className="text-xs text-gray-500 m-0">{text}</p>
        <p className="text-[8px] text-gray-400 m-0">{moment(createDate).format("Do MMM YYYY, h:mm A")}</p>
      </div>
    </VerticalTimelineElement>
  );
};

export const InvoiceTimeline = ({ timeline }: InvoiceTimelineProps) => {
  return (
    <div className="flex flex-col gap-2 py-2 px-1">
      <VerticalTimeline layout="1-column" lineColor={PRIMARY_COLOR}>
        {timeline?.map((item) => (
          <InvoiceTimelineCard key={item.id} text={item.text} createDate={item.createDate} />
        ))}
      </VerticalTimeline>
    </div>
  );
};
