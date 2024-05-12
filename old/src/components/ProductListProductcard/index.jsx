import React from "react";
import { Text, Heading, Img, Button } from "./..";

export default function ProductListProductcard({
  image = "images/img_rectangle_136_341x273.png",
  buttontext = "25% OFF",
  title = "Trendy t-shirt",
  brand = "H&M",
  rating = "4.8",
  price = "$75.00",
  price1 = "$75.00",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full gap-[11px]`}>
      <div className="relative h-[341px] self-stretch md:h-auto">
        <Img src={image} alt="trendy_tshirt" className="h-[341px] w-full object-cover" />
        <Button size="lg" shape="square" className="absolute left-[9.97px] top-[10.00px] m-auto min-w-[78px] font-bold">
          {buttontext}
        </Button>
      </div>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Heading as="h6">{title}</Heading>
        <div className="flex gap-4">
          <Heading size="s" as="p" className="!text-gray-400">
            {brand}
          </Heading>
          <div className="flex gap-2 pt-px">
            <Img src="images/img_frame_amber_500.svg" alt="image" className="h-[16px] w-[16px]" />
            <Heading size="s" as="p">
              {rating}
            </Heading>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Heading as="h6" className="!font-bold">
            {price}
          </Heading>
          <Text size="lg" as="p" className="!text-gray-400 line-through">
            {price1}
          </Text>
        </div>
      </div>
    </div>
  );
}
