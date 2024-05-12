import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, Input } from "../../components";
import Header from "../../components/Header";
import HomepageColumnjuly from "../../components/HomepageColumnjuly";
import HomepageImage from "../../components/HomepageImage";
import HomepageProductcard from "../../components/HomepageProductcard";
import HomepageProductcard1 from "../../components/HomepageProductcard1";
import HomepageRowfree from "../../components/HomepageRowfree";
import MyAccountFAQsFaq from "../../components/MyAccountFAQsFaq";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const data = [
  { womenone: "images/img_rectangle_145.png", womentwo: "WOMEN" },
  { womenone: "images/img_rectangle_145_485x369.png", womentwo: "MEN" },
  { womenone: "images/img_rectangle_146_485x369.png", womentwo: "KIDS" },
];
const data1 = [
  { title: "Free Shipping", description: "Free Shipping for order above $180" },
  { title: "Flexible Payment", description: "Multiple secure payment options" },
  { title: "24*7 Support", description: "We Support Online all days" },
];
const data2 = [
  {
    womensDenim: "images/img_rectangle_142.png",
    womensdenim: "Womens Denim Jacket",
    price: "ZARA",
    fortyfour: "4.4",
    rscounter: "Rs. 700",
    rscounter1: "Rs. 1000",
    offer: "(30% off)",
  },
  {
    womensDenim: "images/img_rectangle_145_350x369.png",
    womensdenim: "Womens Denim Jacket",
    price: "ZARA",
    fortyfour: "4.4",
    rscounter: "Rs. 700",
    rscounter1: "Rs. 1000",
    offer: "(30% off)",
  },
  {
    womensDenim: "images/img_rectangle_145_1.png",
    womensdenim: "Womens Denim Jacket",
    price: "ZARA",
    fortyfour: "4.4",
    rscounter: "Rs. 700",
    rscounter1: "Rs. 1000",
    offer: "(30% off)",
  },
];
const data3 = [
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
const data4 = [
  { image: "images/img_rectangle_139.png" },
  { image: "images/img_rectangle_141.png" },
  { image: "images/img_rectangle_137.png" },
  { image: "images/img_rectangle_138.png" },
];
const data5 = [
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

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Clothing Store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[90px] bg-white-A700 md:gap-[67px] sm:gap-[45px]">
        <div className="flex flex-col items-end self-stretch bg-gray-50">
          <Header className="self-stretch" />
          <div className="flex w-[92%] items-center gap-12 md:w-full md:flex-col md:p-5">
            <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
              <Button
                size="4xl"
                leftIcon={<Img src="images/img_icon_blue_gray_900_01.svg" alt="icon" className="h-[27px] w-[27px]" />}
                className="min-w-[531px] gap-2.5 rounded-[23px] font-bold !text-blue_gray-900_01"
              >
                Enjoy 50% OFF in Our Summer Super Sale!
              </Button>
              <Heading size="6xl" as="h1" className="w-full leading-[73px]">
                <>
                  Step into Fashion at Your <br />
                  Ultimate Style Destination!
                </>
              </Heading>
              <Text size="lg" as="p" className="w-full !font-medium leading-7 !text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy
              </Text>
              <Button
                size="3xl"
                shape="round"
                rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]" />}
                className="min-w-[176px] gap-2.5 font-bold sm:px-5"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="images/img_close_up_portra.png"
              alt="closeupportra"
              className="h-[637px] w-[41%] object-cover md:w-full"
            />
          </div>
        </div>
        <div className="flex justify-center self-stretch">
          <div className="container-xs flex gap-[134px] md:flex-col md:p-5">
            {data1.map((d, index) => (
              <HomepageRowfree {...d} key={"partners" + index} className="flex-1" />
            ))}
          </div>
        </div>
        <div className="container-xs flex gap-12 md:flex-col md:p-5">
          {data.map((d, index) => (
            <div key={"listwomenone" + index} className="relative h-[485px] w-full md:h-auto">
              <Img src={d.womenone} alt="women" className="h-[485px] w-full rounded-md object-cover" />
              <Heading
                size="4xl"
                as="h2"
                className="absolute bottom-[9%] left-0 right-0 m-auto w-max !font-extrabold tracking-[15.00px] !text-white-A700"
              >
                {d.womentwo}
              </Heading>
            </div>
          ))}
        </div>
        <div className="flex justify-center self-stretch bg-white-A700">
          <Tabs
            className="container-xs flex flex-col gap-12 bg-white-A700 md:p-5"
            selectedTabClassName="!text-white-A700 bg-blue_gray-900_01 rounded-md"
            selectedTabPanelClassName="relative tab-panel--selected"
          >
            <div className="flex w-[49%] flex-col items-start gap-[15px] md:w-full">
              <Heading as="h2" className="!text-gray-600">
                Our Products
              </Heading>
              <Heading size="4xl" as="h3">
                Our Bestselling Products
              </Heading>
              <TabList className="flex flex-wrap justify-between gap-[104px] self-stretch py-[15px] pl-[57px] pr-[50px] md:gap-5 md:px-5">
                <Tab className="h-[20px] w-[20px] text-base font-medium text-white-A700">All</Tab>
                <Tab className="text-base font-medium text-blue_gray-900_01">Women</Tab>
                <Tab className="text-base font-medium text-blue_gray-900_01">Men</Tab>
                <Tab className="text-base font-medium text-blue_gray-900_01">Kids</Tab>
              </TabList>
            </div>
            {[...Array(4)].map((_, index) => (
              <TabPanel key={`tab-panel${index}`} className="absolute">
                <div className="w-full">
                  <div className="flex gap-12 md:flex-col">
                    {data5.map((d, index) => (
                      <HomepageProductcard {...d} key={"productlist1" + index} />
                    ))}
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
        <div className="flex justify-center self-stretch bg-gray-50">
          <div className="container-xs flex items-center justify-center gap-[50px] md:flex-col md:p-5">
            <Img
              src="images/img_young_women_pos.png"
              alt="youngwomenpos"
              className="h-[487px] w-[47%] object-cover md:w-full"
            />
            <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
              <Heading size="xl" as="h2">
                Limited Time Offers
              </Heading>
              <Heading size="5xl" as="h3" className="w-full leading-[66px]">
                Get 50% Off All Fashion - Limited Time Offer!
              </Heading>
              <Text size="lg" as="p" className="w-full !font-medium leading-7 !text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy
              </Text>
              <Button
                size="3xl"
                shape="round"
                rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]" />}
                className="min-w-[176px] gap-2.5 font-bold sm:px-5"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="container-xs flex gap-12 md:flex-col md:p-5">
          {[...Array(2)].map((d, index) => (
            <HomepageImage
              offer="Flat 20% Discount"
              explorethe="<>Explore the Latest<br />in Men&#39;s Fashion</>"
              loremipsumis="Lorem Ipsum is simply dummy text of the printing."
              shopNow="Shop Now"
              image="images/img_portrait_man_we.png"
              key={"discount" + index}
              className="pr-5"
            />
          ))}
        </div>
        <div className="container-xs flex flex-col gap-[47px] md:p-5">
          <div className="flex flex-col items-start gap-[15px]">
            <Heading as="h2" className="!text-gray-800_01">
              Today Deals
            </Heading>
            <Heading size="4xl" as="h3">
              Deals of thr Day
            </Heading>
          </div>
          <div className="flex gap-12 md:flex-col">
            {data2.map((d, index) => (
              <HomepageProductcard1 {...d} key={"productlist" + index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center self-stretch bg-blue_gray-900_01 py-[90px] md:py-5">
          <div className="container-xs flex flex-col items-center gap-[46px] md:p-5">
            <div className="flex flex-col items-center gap-[18px]">
              <Heading as="h2" className="!text-white-A700">
                Follow Us
              </Heading>
              <Heading size="4xl" as="h3" className="!text-white-A700">
                Follow Us On Instagram
              </Heading>
            </div>
            <div className="flex w-full gap-[30px] md:flex-col">
              {data4.map((d, index) => (
                <div key={"accountlist" + index} className="flex w-full flex-col">
                  <Img src={d.image} alt="image" className="h-[313px] rounded-md object-cover" />
                </div>
              ))}
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
            {data3.map((d, index) => (
              <HomepageColumnjuly {...d} key={"bloglist" + index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center self-stretch bg-gray-50 py-[90px] md:py-5">
          <div className="container-xs flex flex-col items-center gap-[49px] md:p-5">
            <div className="flex flex-col items-center gap-[15px]">
              <Heading as="h2" className="!text-gray-600">
                FAQ
              </Heading>
              <Heading size="4xl" as="h3">
                Have Queries? Refer Here
              </Heading>
            </div>
            <Accordion preExpanded={[0]} className="flex flex-col gap-6 self-stretch">
              {[...Array(6)].map((_, i) => (
                <AccordionItem uuid={i} key={`faqs${i}`}>
                  <MyAccountFAQsFaq
                    headingtext=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    expandicon="images/img_arrow_up_black_900.svg"
                  />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <footer className="self-stretch">
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
                <Text size="lg" as="p" className="!font-medium !text-gray-600">
                  Get 20% off on your first order just by subscribing to our newsletter
                </Text>
                <Input
                  shape="round"
                  type="email"
                  name="businessemail"
                  placeholder={`Your business email`}
                  className="w-[78%] sm:pr-5"
                />
              </div>
              <Img
                src="images/img_two_fashion_lau.png"
                alt="twofashionlau"
                className="h-[509px] w-[36%] object-cover md:w-full"
              />
            </div>
          </div>
          <div>
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
          </div>
        </footer>
      </div>
    </>
  );
}
