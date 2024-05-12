import React from "react";
import { Text, Img, Heading } from "./..";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";

export default function MyAccountFAQsFaq({
  headingtext = " Lorem Ipsum is simply dummy text of the printing.",
  expandicon,
  text1 = "Lorem Ipsum is simply dummy text.",
  text2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s stand dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col gap-6 p-6 sm:p-5 border-blue_gray-900_01 border border-solid bg-white-A700 shadow-xs flex-1 rounded-[12px]`}
    >
      <AccordionItemHeading className="w-full">
        <AccordionItemButton>
          <AccordionItemState>
            {(props) => (
              <>
                <div className="flex items-center justify-between gap-5 self-stretch pl-[5px] sm:flex-col">
                  <Heading as="h6" className="self-end">
                    {headingtext}
                  </Heading>
                  {!!expandicon ? (
                    <Img src={expandicon} alt="arrowup" className="h-[24px] w-[24px] self-start sm:w-full" />
                  ) : null}
                </div>
              </>
            )}
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="flex flex-col items-start gap-[9px] self-stretch">
          <Text size="lg" as="p" className="!text-gray-600">
            {text1}
          </Text>
          <Text size="lg" as="p" className="w-full leading-[21px] !text-gray-600">
            {text2}
          </Text>
        </div>
      </AccordionItemPanel>
    </div>
  );
}
