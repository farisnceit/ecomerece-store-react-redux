import React from "react";
import { Text, Heading, Img } from "./..";

export default function HomepageColumnjuly({
  userimage = "images/img_rectangle_142_306x381.png",
  datetext = "July 23, 2023",
  brandname = "BRANDNAME",
  followustext = "Follow Us On Instagram",
  descriptiontext = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full gap-[29px]`}>
      <Img src={userimage} alt="july_232023" className="h-[306px] w-full rounded-md object-cover md:h-auto" />
      <div className="flex flex-col gap-2.5 self-stretch">
        <div className="flex items-start gap-4">
          <Text as="p" className="!text-gray-800_01">
            {datetext}
          </Text>
          <div className="h-[16px] w-px bg-blue_gray-700" />
          <Text as="p" className="!text-gray-800_01">
            {brandname}
          </Text>
        </div>
        <div className="flex flex-col items-start gap-[13px]">
          <Heading as="h6">{followustext}</Heading>
          <Text size="lg" as="p" className="w-full leading-7 !text-gray-800_01">
            {descriptiontext}
          </Text>
        </div>
      </div>
    </div>
  );
}
