import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, Input } from "../../components";
import Header from "../../components/Header";
import HomepageProductcard1 from "../../components/HomepageProductcard1";
import HomepageRowfree from "../../components/HomepageRowfree";

const data = [
  {
    womensDenim: "images/img_rectangle_420.png",
    womensdenim: "Womens Denim Jacket",
    price: "ZARA",
    fortyfour: "4.4",
    rscounter: "Rs. 700",
    rscounter1: "Rs. 1000",
    offer: "(30% off)",
  },
  {
    womensDenim: "images/img_rectangle_137_350x369.png",
    womensdenim: "Womens Denim Jacket",
    price: "ZARA",
    fortyfour: "4.4",
    rscounter: "Rs. 700",
    rscounter1: "Rs. 1000",
    offer: "(30% off)",
  },
  {
    womensDenim: "images/img_rectangle_142_350x369.png",
    womensdenim: "Womens Denim Jacket",
    price: "ZARA",
    fortyfour: "4.4",
    rscounter: "Rs. 700",
    rscounter1: "Rs. 1000",
    offer: "(30% off)",
  },
];
const data1 = [
  { title: "Free Shipping", description: "Free Shipping for order above $180" },
  { title: "Flexible Payment", description: "Multiple secure payment options" },
  { title: "24*7 Support", description: "We Support Online all days" },
];

export default function ProductDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Clothing Store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-[89px] bg-white-A700 md:gap-[66px] sm:gap-11">
        <div className="flex flex-col gap-6">
          <Header />
          <div className="flex flex-col items-center gap-[46px]">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center gap-1.5 self-start sm:flex-col">
                <Text size="lg" as="p" className="capitalize tracking-[-0.20px] !text-gray-500">
                  Home
                </Text>
                <Img
                  src="images/img_arrow_right_gray_500.svg"
                  alt="arrowright"
                  className="h-[24px] w-[24px] self-start sm:w-full"
                />
                <Text size="lg" as="p" className="self-end capitalize tracking-[-0.20px] !text-gray-500">
                  Shop
                </Text>
                <Img
                  src="images/img_arrow_right_gray_500.svg"
                  alt="arrowright"
                  className="h-[24px] w-[24px] self-start sm:w-full"
                />
                <Text size="lg" as="p" className="capitalize tracking-[-0.20px] !text-gray-500">
                  Coats
                </Text>
                <Img
                  src="images/img_arrow_right_gray_600.svg"
                  alt="arrowright"
                  className="h-[24px] w-[24px] self-start sm:w-full"
                />
                <Heading as="h1" className="capitalize tracking-[-0.20px]">
                  Product Details
                </Heading>
              </div>
            </div>
            <div className="container-xs flex items-center gap-12 md:flex-col md:p-5">
              <div className="flex flex-1 gap-4 md:flex-col md:self-stretch">
                <div className="flex w-[18%] flex-col gap-5 md:w-full md:flex-row sm:flex-col">
                  <Img
                    src="images/img_rectangle_1217.png"
                    alt="rectangle"
                    className="h-[127px] w-full flex-1 rounded-md object-cover md:h-auto sm:w-full"
                  />
                  <Img
                    src="images/img_rectangle_1219.png"
                    alt="rectangle"
                    className="h-[127px] w-full flex-1 rounded-md object-cover md:h-auto sm:w-full"
                  />
                  <Img
                    src="images/img_rectangle_1218.png"
                    alt="rectangle"
                    className="h-[127px] w-full flex-1 rounded-md object-cover md:h-auto sm:w-full"
                  />
                  <div className="relative h-[127px] flex-1 md:h-auto sm:w-full sm:flex-none">
                    <Img
                      src="images/img_rectangle_1218_127x107.png"
                      alt="image"
                      className="h-[127px] w-full rounded-md object-cover"
                    />
                    <Heading
                      as="h2"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !text-white-A700"
                    >
                      +4
                    </Heading>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle_145_571x480.png"
                  alt="image"
                  className="h-[571px] w-[82%] rounded-md object-cover md:w-full"
                />
              </div>
              <div className="flex w-[48%] flex-col items-start gap-[35px] md:w-full">
                <div className="flex flex-col items-start gap-[3px] self-stretch">
                  <Heading size="2xl" as="h3">
                    Trendy Black Jacket
                  </Heading>
                  <Text as="p" className="w-full leading-[166.8%] !text-gray-600">
                    <>
                      Stay stylish and warm in our Trendy Black Jacket, crafted with high-
                      <br />
                      quality materials to ensure lasting comfort and durability.
                    </>
                  </Text>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Heading size="2xl" as="h4">
                    ₹584
                  </Heading>
                  <Text size="2xl" as="p" className="!text-gray-500_01 line-through">
                    ₹1299.00
                  </Text>
                  <Heading size="2xl" as="h5" className="!text-teal-400">
                    (55% OFF)
                  </Heading>
                </div>
                <div className="flex flex-col gap-4 self-stretch">
                  <div className="flex items-center gap-[34px] self-start">
                    <Heading as="h6">SELECT SIZE</Heading>
                    <div className="flex items-center gap-1.5 self-end">
                      <Text as="p" className="!font-light !text-blue-700">
                        SIZE CHART
                      </Text>
                      <Img src="images/img_arrow_right_blue_700.svg" alt="arrowright" className="h-[18px] w-[18px]" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Heading
                      as="h6"
                      className="flex h-[62px] w-[62px] items-center justify-center rounded-[31px] border border-solid border-blue_gray-100_01 text-center"
                    >
                      SX
                    </Heading>
                    <Heading
                      as="h6"
                      className="flex h-[62px] w-[62px] items-center justify-center rounded-[31px] border border-solid border-blue_gray-100_01 text-center"
                    >
                      S
                    </Heading>
                    <Heading
                      as="h6"
                      className="flex h-[62px] w-[62px] items-center justify-center rounded-[31px] border border-solid border-blue_gray-100_01 text-center"
                    >
                      M
                    </Heading>
                    <Heading
                      as="h6"
                      className="flex h-[62px] w-[62px] items-center justify-center rounded-[31px] border border-solid border-blue_gray-100_01 text-center"
                    >
                      L
                    </Heading>
                    <Heading
                      as="h6"
                      className="flex h-[62px] w-[62px] items-center justify-center rounded-[31px] border-2 border-solid border-blue_gray-900_01 text-center"
                    >
                      XL
                    </Heading>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="5xl" shape="round" className="min-w-[379px] font-medium sm:px-5">
                    ADD TO CART
                  </Button>
                  <Button
                    size="5xl"
                    variant="outline"
                    shape="round"
                    color="undefined_undefined"
                    leftIcon={<Img src="images/img_favorite.svg" alt="favorite" className="h-[24px] w-[24px]" />}
                    className="min-w-[158px] gap-2 font-medium"
                  >
                    WISHLIST
                  </Button>
                </div>
                <div className="h-px w-full self-stretch bg-gray-300" />
                <div className="flex flex-col items-start gap-[11px] self-stretch">
                  <Heading as="h6" className="!font-bold">
                    BEST OFFERS
                  </Heading>
                  <div className="flex flex-wrap gap-2.5">
                    <Text as="p" className="self-end !text-gray-600">
                      Special offer get 25% off
                    </Text>
                    <Text as="p" className="self-start !text-blue-700">
                      T&C
                    </Text>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <Text as="p" className="self-end !text-gray-600">
                      Bank offer get 30% off on Axis Bank Credit card
                    </Text>
                    <Text as="p" className="self-start !text-blue-700">
                      T&C
                    </Text>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Text as="p" className="self-end !text-gray-600">
                      Special offer get 25% off
                    </Text>
                    <Text as="p" className="self-start !text-blue-700">
                      T&C
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="container-xs flex border-b border-solid border-blue_gray-100_01 md:p-5">
            <div className="flex w-[48%] items-start justify-between gap-5 md:w-full sm:flex-col">
              <div className="flex w-[71%] items-start justify-between gap-5 sm:w-full">
                <div className="flex w-[36%] flex-col items-center gap-[7px]">
                  <Text as="p" className="!font-medium uppercase !text-blue_gray-900_01">
                    Description
                  </Text>
                  <div className="h-[3px] w-full self-stretch rounded-tl-[1px] rounded-tr-[1px] bg-blue_gray-900_01" />
                </div>
                <Text as="p" className="!font-medium uppercase !text-blue_gray-400">
                  ADDITIONAL INFORMATION
                </Text>
              </div>
              <Text as="p" className="!font-medium uppercase !text-blue_gray-400">
                Review (40)
              </Text>
            </div>
          </div>
          <div className="container-xs flex flex-col gap-4 md:p-5">
            <div className="flex flex-col items-start gap-[15px]">
              <Heading as="h2" className="!text-blue_gray-900">
                Product Details
              </Heading>
              <Text as="p" className="w-full leading-7 !text-gray-600">
                Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket
                offers both style and comfort. Featuring timeless design elements such as button closures and chest
                pockets, it&#39;s perfect for layering over any outfit.
              </Text>
              <Text as="p" className="w-full leading-7 !text-gray-600">
                <>
                  Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure
                  lasting comfort and durability.
                  <br />
                  Its versatile design makes it suitable for various occasions, whether you&#39;re heading out for a
                  casual outing with friends or a night on the town.
                  <br />
                  The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to
                  your wardrobe.
                  <br />
                  With multiple pockets for added convenience, you can keep your essentials close at hand wherever you
                  go.
                  <br />
                  Elevate your style effortlessly with this chic and fashionable jacket that combines comfort,
                  functionality, and trendiness in one versatile piece.
                </>
              </Text>
            </div>
            <div className="flex gap-2 md:flex-col">
              <Img
                src="images/img_rectangle_145_643x508.png"
                alt="image"
                className="h-[643px] w-[42%] object-cover md:w-full"
              />
              <div className="flex flex-1 flex-col gap-2 md:self-stretch">
                <Img src="images/img_rectangle_146_317x340.png" alt="image" className="h-[317px] object-cover" />
                <Img src="images/img_rectangle_150.png" alt="image" className="h-[317px] object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-2 md:self-stretch">
                <Img src="images/img_rectangle_146_3.png" alt="image" className="h-[317px] object-cover" />
                <Img src="images/img_rectangle_150_317x340.png" alt="image" className="h-[317px] object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="container-xs flex flex-col items-start gap-[47px] md:p-5">
            <Heading size="4xl" as="h2">
              Similar Products
            </Heading>
            <div className="flex w-full gap-12 md:flex-col">
              {data.map((d, index) => (
                <HomepageProductcard1 {...d} key={"similar" + index} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[90px] md:gap-[67px] sm:gap-[45px]">
          <div className="flex justify-center">
            <div className="container-xs flex gap-[134px] md:flex-col md:p-5">
              {data1.map((d, index) => (
                <HomepageRowfree {...d} key={"partners" + index} className="flex-1" />
              ))}
            </div>
          </div>
          <footer>
            <div className="flex justify-center bg-white-A700">
              <div className="container-xs flex items-center justify-center gap-[50px] md:flex-col md:p-5">
                <div className="flex flex-1 flex-col items-start gap-[26px] md:self-stretch">
                  <Heading size="xl" as="h5" className="!text-gray-600">
                    Our Newsletter
                  </Heading>
                  <Heading size="5xl" as="h1" className="w-full leading-[66px]">
                    <>
                      Subscribe to Our <br />
                      Newsletter for Updates on
                      <br />
                      Our Latest Collection
                    </>
                  </Heading>
                  <div className="flex w-[78%] flex-col gap-6 md:w-full">
                    <Text size="lg" as="p" className="!font-medium !text-gray-600">
                      Get 20% off on your first order just by subscribing to our newsletter
                    </Text>
                    <Input
                      shape="round"
                      type="email"
                      name="businessemail"
                      placeholder={`Your business email`}
                      className="sm:pr-5"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_two_fashion_lau.png"
                  alt="twofashionlau"
                  className="h-[509px] w-[36%] object-cover md:w-full"
                />
              </div>
            </div>
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
                      <Button size="md" shape="square" className="w-[24px] px-px">
                        <Img src="images/img_akar_icons_linkedin_fill_white_a700.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
