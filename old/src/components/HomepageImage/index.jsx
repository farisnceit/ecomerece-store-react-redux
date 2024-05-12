import React from "react";
import { Img, Button, Text, Heading } from "./..";

export default function HomepageImage({
  offer = "Flat 20% Discount",
  explorethe = (
    <>
      Explore the Latest
      <br />
      in Men&#39;s Fashion
    </>
  ),
  loremipsumis = "Lorem Ipsum is simply dummy text of the printing.",
  shopNow = "Shop Now",
  image = "images/img_portrait_man_we.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-full pl-[37px] sm:pl-5 bg-blue_gray-900_01 rounded-md`}
    >
      <div className="relative z-[1] flex w-[48%] flex-col items-start gap-4 sm:w-full">
        <Text size="lg" as="p" className="!font-medium !text-white-A700">
          {offer}
        </Text>
        <Heading size="4xl" as="h3" className="w-full !font-bold leading-[47px] !text-white-A700">
          {explorethe}
        </Heading>
        <Text size="lg" as="p" className="w-full !font-medium leading-7 !text-white-A700">
          {loremipsumis}
        </Text>
        <Button
          size="3xl"
          shape="round"
          rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]" />}
          className="min-w-[176px] gap-2.5 font-bold sm:px-5"
        >
          {shopNow}
        </Button>
      </div>
      <Img src={image} alt="image" className="relative ml-[-54px] h-[355px] w-[52%] object-cover sm:ml-0 sm:w-full" />
    </div>
  );
}
