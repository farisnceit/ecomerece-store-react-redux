import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-md",
};
const variants = {
  outline: {
    blue_gray_900_01: "border-blue_gray-900_01 border border-solid text-blue_gray-900_01",
  },
  fill: {
    blue_700: "bg-blue-700 text-white-A700",
    black_900: "bg-black-900",
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    white_A700: "bg-white-A700 text-teal-400",
  },
};
const sizes = {
  "4xl": "h-[47px] px-5 text-[22px]",
  "3xl": "h-[46px] px-[31px] text-base",
  xs: "h-[20px] px-[3px]",
  md: "h-[24px]",
  lg: "h-[31px] px-[13px] text-xs",
  "5xl": "h-[50px] px-[35px] text-lg",
  "2xl": "h-[41px] px-6 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "2xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["4xl", "3xl", "xs", "md", "lg", "5xl", "2xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_900_01", "blue_700", "black_900", "white_A700"]),
};

export { Button };
