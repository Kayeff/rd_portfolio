import { splitText } from "@/animations/SplitText";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  className: string;
  text: string | ReactNode;
  variants?: any;
};

export default function Heading({ className, text, variants }: HeadingProps) {
  return (
    <div className="">
      <h1 className={twMerge("w-full tracking-tighter", className)}>{text}</h1>
    </div>
  );
}

{
  /* {splitText(text, variants)} */
}
