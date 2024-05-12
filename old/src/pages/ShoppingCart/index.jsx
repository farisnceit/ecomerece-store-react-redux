import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import Header from "../../components/Header";
import HomepageProductcard from "../../components/HomepageProductcard";
import ShoppingCartProduct from "../../components/ShoppingCartProduct";

const data = [
  {
    image: "images/img_rectangle_136_5.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_6.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
  {
    image: "images/img_rectangle_136_7.png",
    buttontext: "25% OFF",
    title: "Trendy t-shirt",
    brand: "H&M",
    rating: "4.8",
    price: "$75.00",
    price1: "$75.00",
  },
];
const data1 = [
  {
    trendyBlack: "images/img_rectangle_145_149x118.png",
    trendyblack: "Trendy Black Jacket",
    price: "Sold by:GENUS APPARELS LTD. ",
    price1: "₹584",
    oldprice: "₹1299.00",
    offer: "(55% OFF)",
  },
  {
    trendyBlack: "images/img_rectangle_145_2.png",
    trendyblack: "Trendy Black Jacket",
    price: "Sold by:GENUS APPARELS LTD. ",
    price1: "₹584",
    oldprice: "₹1299.00",
    offer: "(55% OFF)",
  },
  {
    trendyBlack: "images/img_rectangle_145_3.png",
    trendyblack: "Trendy Black Jacket",
    price: "Sold by:GENUS APPARELS LTD. ",
    price1: "₹584",
    oldprice: "₹1299.00",
    offer: "(55% OFF)",
  },
  {
    trendyBlack: "images/img_rectangle_145_4.png",
    trendyblack: "Trendy Black Jacket",
    price: "Sold by:GENUS APPARELS LTD. ",
    price1: "₹584",
    oldprice: "₹1299.00",
    offer: "(55% OFF)",
  },
];

export default function ShoppingCartPage() {
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
              <div className="flex flex-wrap items-center self-start">
                <Text size="lg" as="p" className="capitalize tracking-[-0.20px] !text-gray-500">
                  Home
                </Text>
                <Img
                  src="images/img_arrow_right_gray_600.svg"
                  alt="arrowright"
                  className="ml-1.5 h-[24px] w-[24px] self-start"
                />
                <Heading as="h1" className="ml-[9px] self-end capitalize tracking-[-0.20px]">
                  Shopping Cart
                </Heading>
              </div>
            </div>
            <div className="container-xs flex gap-6 md:flex-col md:p-5">
              <div className="flex flex-1 flex-col gap-[23px] md:self-stretch">
                <div className="flex flex-col gap-[23px]">
                  <div className="flex justify-between gap-5 sm:flex-col">
                    <div className="flex items-center gap-4">
                      <Button size="xs" className="w-[20px] self-start rounded">
                        <Img src="images/img_checkmark_white_a700.svg" />
                      </Button>
                      <Heading as="h2">4/4 ITEMS SELECTED</Heading>
                    </div>
                    <div className="flex gap-4">
                      <Heading as="h3">REMOVE</Heading>
                      <div className="h-full w-px bg-blue_gray-900_01" />
                      <Heading as="h4">MOVE TO WISHLIST</Heading>
                    </div>
                  </div>
                  <div className="h-px bg-blue_gray-100" />
                </div>
                <div className="flex flex-col gap-4">
                  {data1.map((d, index) => (
                    <ShoppingCartProduct {...d} key={"productlist1" + index} />
                  ))}
                </div>
              </div>
              <div className="flex w-[42%] items-start gap-[23px] md:w-full sm:flex-col">
                <div className="h-full w-px bg-gray-300 sm:h-px sm:w-full" />
                <div className="flex flex-1 flex-col gap-8 rounded-lg bg-white-A700 sm:self-stretch">
                  <div className="flex flex-col items-start gap-[22px]">
                    <Heading as="h5">PRICE DETAILS (2 items)</Heading>
                    <div className="flex flex-col gap-[15px] self-stretch">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text size="lg" as="p" className="!text-gray-600">
                          Total MRP
                        </Text>
                        <Text size="lg" as="p" className="!text-blue_gray-900_01">
                          ₹2598
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text size="lg" as="p" className="!text-gray-600">
                          Discount on MRP
                        </Text>
                        <Text size="lg" as="p" className="!text-green-600_01">
                          -₹1430
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text size="lg" as="p" className="self-end !text-gray-600">
                          Coupon Discount
                        </Text>
                        <Text size="lg" as="p" className="self-start !text-green-600_01">
                          -₹179
                        </Text>
                      </div>
                      <div className="flex justify-between gap-5">
                        <Text size="lg" as="p" className="self-end !text-gray-600">
                          Shipping Fee
                        </Text>
                        <div className="flex flex-wrap gap-1 self-start">
                          <Text size="lg" as="p" className="!text-blue_gray-900_01 line-through">
                            ₹100
                          </Text>
                          <Text size="lg" as="p" className="!text-green-600_01">
                            FREE
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[23px] self-stretch">
                      <div className="h-px bg-gray-300" />
                      <div className="flex flex-wrap justify-between gap-5">
                        <Heading as="h6">Total Amount</Heading>
                        <Heading as="h6">$992</Heading>
                      </div>
                    </div>
                  </div>
                  <Button size="5xl" shape="round" className="w-full font-medium sm:px-5">
                    PLACE ORDER
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs flex flex-col gap-12 md:p-5">
          <div className="flex flex-col items-start gap-3.5">
            <Heading as="h2" className="!text-gray-800_01">
              Related Product
            </Heading>
            <Heading size="4xl" as="h3">
              Discover Related Products
            </Heading>
          </div>
          <div className="flex gap-12 md:flex-col">
            {data.map((d, index) => (
              <HomepageProductcard {...d} key={"productlist" + index} />
            ))}
          </div>
        </div>
        <footer className="self-stretch">
          <div className="flex justify-center bg-blue_gray-900_01 py-10 sm:py-5">
            <div className="container-xs flex justify-center md:p-5">
              <div className="flex w-full flex-col gap-[107px] md:gap-20 sm:gap-[53px]">
                <div className="flex w-[95%] items-start justify-between gap-5 md:w-full md:flex-col">
                  <div className="flex w-[47%] flex-col gap-[37px] md:w-full">
                    <Img
                      src="images/img_footer_logo.svg"
                      alt="footerlogo"
                      className="h-[32px] object-contain md:w-[544px]"
                    />
                    <div className="flex flex-col gap-[18px]">
                      <Text as="p" className="leading-[26px] !text-white-A700">
                        The fastest and simple way to generate growing business solutions with our products
                      </Text>
                      <div className="flex items-center gap-2.5 self-start">
                        <Img src="images/img_lock_white_a700.svg" alt="lock" className="h-[24px] w-[24px]" />
                        <Text as="p" className="self-end !text-white-A700">
                          FashionFlow@Gmail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[43%] items-start justify-between gap-5 md:w-full sm:flex-col">
                    <div className="flex flex-col gap-[15px]">
                      <Heading size="md" as="h6" className="!text-white-A700">
                        Product
                      </Heading>
                      <ul className="flex flex-col gap-4">
                        <li>
                          <a href="#">
                            <Text as="p">Landing pages</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Shop</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Women</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Men</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Accessories</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-[42%] flex-col gap-[15px] sm:w-full">
                      <Heading size="md" as="h6" className="!text-white-A700">
                        Company
                      </Heading>
                      <ul className="flex flex-col gap-4">
                        <li>
                          <a href="#">
                            <Text as="p">About</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Privacy Policy</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="leading-[26px]">
                            <Text as="p">Terms & Conditions</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Partners</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Contact</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start gap-[15px]">
                      <Heading size="md" as="h6" className="!text-white-A700">
                        Resources
                      </Heading>
                      <ul className="flex flex-col items-start gap-4">
                        <li>
                          <a href="#">
                            <Text as="p">Blog</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Tools</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Support</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <Text as="p" className="self-end !text-white-A700_cc">
                    © 2020 All Right Reserved
                  </Text>
                  <div className="flex w-[11%] justify-between gap-5">
                    <Img src="images/img_bx_bxl_instagram_alt.svg" alt="bxbxl" className="h-[24px] w-[24px]" />
                    <Img src="images/img_akar_icons_twitter_fill.svg" alt="akaricons" className="h-[24px] w-[24px]" />
                    <Img src="images/img_akar_icons_linkedin_fill.svg" alt="akaricons" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
