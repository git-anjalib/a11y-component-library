import React, { useId,  useState } from "react";
import { AccordionContext } from "./AccordionContext";

export interface AccordionItemProps {
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({children}) => {
  const baseId = useId();
  const headingId = `${baseId}-heading`;
  const contentId = `${baseId}-content`;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle, headingId, contentId }}>
      <div className="a11y-accordion__item">{children}</div>
    </AccordionContext.Provider>
  );
}