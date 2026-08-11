import React from "react";
import "./Accordion.css";

export type AccordionVariant = "bordered" | "flush";

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return (
    <div className={`a11y-accordion ${className || ""}`}>{children}</div>
  );
}
