import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomepageColumnjuly from "../../components/HomepageColumnjuly";
import ProductListProductcard from "../../components/ProductListProductcard";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const data = [
  {
    userimage: "images/img_rectangle_142_306x381.png",
    datetext: "July 23, 2023",
    brandname: "BRANDNAME",
    followustext: "Follow Us On Instagram",
    descriptiontext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy",
  },
  {
    userimage: "images/img_rectangle_142_1.png",
    datetext: "July 23, 2023",
    brandname: "BRANDNAME",
    followustext: "Follow Us On Instagram",
    descriptiontext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy",
  },
  {
    userimage: "images/img_rectangle_142_2.png",
    datetext: "July 23, 2023",
    brandname: "BRANDNAME",
    followustext: "Follow Us On Instagram",
    descriptiontext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy",
  },
];
const data1 = [
  {
    image: "images/img_rectangle_136_341x273.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_8.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_9.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_10.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_11.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_12.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_13.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_14.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_15.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_16.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_17.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_18.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
];

export default function ProductlistPage() {
  return (
    <>
      <Helmet>
        <title>Clothing Store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[90px] bg-white-A700 md:gap-[67px] sm:gap-[45px]">
        <div className="flex flex-col gap-6 self-stretch">
          <Header />
          <div className="flex flex-col items-center gap-[46px]">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center gap-1.5 self-start">
                <Text size="lg" as="p" className="capitalize tracking-[-0.20px] !text-gray-500">
                  Home
                </Text>
                <Img
                  src="images/img_arrow_right_gray_600.svg"
                  alt="arrowright"
                  className="h-[24px] w-[24px] self-start"
                />
                <Heading as="h1" className="self-end capitalize tracking-[-0.20px]">
                  Shop
                </Heading>
              </div>
            </div>
            <div className="container-xs flex items-start gap-12 md:flex-col md:p-5">
              <div className="flex w-[21%] flex-col gap-1.5 md:w-full">
                <div className="flex self-start pb-[7px] pt-2">
                  <Heading as="h2" className="!font-bold">
                    Filters
                  </Heading>
                </div>
                <Accordion preExpanded={[0]} className="flex flex-col gap-1.5">
                  {[...Array(6)].map((_, i) => (
                    <AccordionItem uuid={i} key={`expandablelistc${i}`}>
                      <div className="flex flex-1 flex-col gap-1.5">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {(props) => (
                                <>
                                  <div className="flex flex-wrap items-center justify-between gap-5 border-t border-solid border-gray-300_01 py-3">
                                    <Heading size="md" as="h3" className="self-start !font-semibold !text-gray-600">
                                      Category
                                    </Heading>
                                    {props?.expanded ? (
                                      <Img
                                        src="images/img_arrow_up_blue_gray_300.svg"
                                        alt="arrowup"
                                        className="h-[24px] w-[24px]"
                                      />
                                    ) : (
                                      <Img
                                        src="images/img_arrow_up_blue_gray_300.svg"
                                        alt="arrowdown"
                                        className="h-[24px] w-[24px]"
                                      />
                                    )}
                                  </div>
                                </>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="flex flex-col items-start pb-[5px]">
                            <div className="flex py-[7px]">
                              <Text as="p" className="!text-gray-800">
                                Jacket
                              </Text>
                            </div>
                            <div className="mt-1.5 flex py-[7px]">
                              <Text as="p" className="!text-gray-800">
                                T-Shirt
                              </Text>
                            </div>
                            <div className="mt-1.5 flex py-[7px]">
                              <Text as="p" className="!text-gray-800">
                                Jeans
                              </Text>
                            </div>
                            <div className="mt-1.5 flex pb-1.5 pt-2">
                              <Text as="p" className="!text-gray-800">
                                Panty
                              </Text>
                            </div>
                            <a href="#" className="mt-[15px]">
                              <Text as="p" className="!text-blue_gray-900_01 underline">
                                See all
                              </Text>
                            </a>
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex flex-1 flex-col items-end gap-12 md:self-stretch">
                <div className="grid grid-cols-3 gap-12 self-stretch md:grid-cols-2 sm:grid-cols-1">
                  {data1.map((d, index) => (
                    <ProductListProductcard {...d} key={"productlist" + index} />
                  ))}
                </div>
                <div className="flex w-[36%] items-center gap-5 md:w-full">
                  <div className="flex items-center gap-1">
                    <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
                    <Text size="s" as="p" className="self-start !text-blue_gray-900_01">
                      Previous
                    </Text>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-5">
                    <Button className="min-w-[40px] rounded-[10px] font-medium">1</Button>
                    <Text size="s" as="p" className="!text-blue_gray-900_01">
                      2
                    </Text>
                    <Text size="s" as="p" className="!text-blue_gray-900_01">
                      3
                    </Text>
                    <Text size="s" as="p" className="!text-blue_gray-900_01">
                      4
                    </Text>
                  </div>
                  <div className="flex items-center gap-1">
                    <Text size="s" as="p" className="self-start !text-blue_gray-900_01">
                      Next
                    </Text>
                    <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs flex flex-col items-center gap-12 md:p-5">
          <div className="flex flex-col items-center gap-4">
            <Heading as="h2" className="!text-gray-600">
              News & Blog
            </Heading>
            <Heading size="4xl" as="h3">
              Our Latest News & Blogs
            </Heading>
          </div>
          <div className="flex w-full gap-[30px] md:flex-col">
            {data.map((d, index) => (
              <HomepageColumnjuly {...d} key={"bloglist" + index} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
