import React, { FC } from "react";

interface TextProps {
  text: string;
  size?: string | number;
  type?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bold?: boolean;
  thin?: boolean;
  italic?: boolean;
}

const Text = ({
  text,
  size = "16",
  type = "p",
  thin = false,
  bold = false,
  italic = false,
}: TextProps) => {
  const textStyle: React.CSSProperties = {
    fontWeight: bold ? "bold" : thin ? 300 : "normal",
    fontStyle: italic ? "italic" : "normal",
    fontSize: `${size}px`,
    margin: "8px 0",
    color: "#03221b",
  };

  const Element = type as keyof JSX.IntrinsicElements;

  return React.createElement(Element, { style: textStyle }, text);
};

export default Text;
