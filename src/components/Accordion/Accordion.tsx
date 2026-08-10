import React from "react";
import "./Accordion.css";

export type AccordionVariant = "bordered" | "flush";

export interface AccordionItem {
  /** The title of the accordion item, which is always visible */
  id: string;
  title: string;
  content: React.ReactNode;
}
export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return (
    <div className={`a11y-accordion ${className || ""}`}>{children}</div>
  );
}
