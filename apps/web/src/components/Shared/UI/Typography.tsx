import cn from "@/helpers/cn";
import { createElement, forwardRef } from "react";
import type { JSX, ReactNode } from "react";
interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}

export const H4 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ as = "h4", children, className = "" }, ref) =>
    createElement(
      as,
      { className: cn("text-xl font-bold", className), ref },
      children
    )
);