import React, { FC } from "react";

type TextSize = "tiny" | "small" | "medium" | "large";

interface TextProps {
  text: string;
  size?: TextSize;
  type?: "p" | "h1" | "h2" | "h3" | "h4";
  bold?: boolean;
  thin?: boolean;
  italic?: boolean;
  longLine?: boolean;
}

const Text: FC<TextProps> = ({
  text,
  size = "medium",
  type = "p",
  thin = false,
  longLine = false,
  bold = false,
  italic = false,
}: TextProps) => {
  const textSizeMap: Record<TextSize, number> = {
    tiny: 11,
    small: 13,
    medium: 16,
    large: 18,
  };

  const headingSizeMap = {
    h1: 38,
    h2: 32,
    h3: 24,
    h4: 20,
  };

  const defaultTextSize = textSizeMap[size];
  const fontSize =
    type === "p" ? `${defaultTextSize}px` : `${headingSizeMap[type]}px`;

  const textStyle: React.CSSProperties = {
    fontWeight: bold ? "bold" : thin ? 300 : "normal",
    fontStyle: italic ? "italic" : "normal",
    lineHeight: longLine ? "26px" : "",
    fontSize,
    margin: "8px 0",
    color: "#03221b",
  };

  const Element = type as keyof JSX.IntrinsicElements;

  return React.createElement(Element, { style: textStyle }, text);
};

export default Text;
