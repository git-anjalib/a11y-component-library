import React from "react";
import { useAccordionContext } from "./AccordionContext";

interface AccordionHeaderProps {
  title: string;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({title}) => {
  const { isOpen, contentId, headingId, toggle } = useAccordionContext();

  return (
    <button
      id={headingId}
      type="button"
      className="a11y-accordion__header"
      aria-expanded={isOpen}
      aria-controls={`${contentId}`}
      onClick={() => toggle()}
    >
      {title}
    </button>
  );
};