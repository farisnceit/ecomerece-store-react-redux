import React from "react";
import { Heading, Text, Img } from "./..";

export default function HomepageProductcard1({
  womensDenim = "images/img_rectangle_142.png",
  womensdenim = "Womens Denim Jacket",
  price = "ZARA",
  fortyfour = "4.4",
  rscounter = "Rs. 700",
  rscounter1 = "Rs. 1000",
  offer = "(30% off)",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full border-gray-200_01 border border-solid rounded-md`}
    >
      <Img
        src={womensDenim}
        alt="womens_denim"
        className="h-[350px] w-full rounded-tl-md rounded-tr-md object-cover md:h-auto"
      />
      <div className="flex flex-col items-start gap-[7px] px-4 pb-[15px] pt-4">
        <Text size="lg" as="p" className="!font-medium !text-blue_gray-900_01">
          {womensdenim}
        </Text>
        <div className="flex gap-[9px]">
          <Text as="p" className="!font-medium !text-gray-600_01">
            {price}
          </Text>
          <div className="flex items-center gap-[3px]">
            <Text as="p" className="!text-gray-600_01">
              {fortyfour}
            </Text>
            <Img src="images/img_signal.png" alt="image" className="h-[16px] w-[16px] object-cover" />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-[15px]">
          <Heading size="2xl" as="h4">
            {rscounter}
          </Heading>
          <Text size="lg" as="p" className="!text-gray-600_01 line-through">
            {rscounter1}
          </Text>
          <Heading as="h6" className="self-end !font-bold !text-green-900_01">
            {offer}
          </Heading>
        </div>
      </div>
    </div>
  );
}
