import { ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";

interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { isOpen, contentId, headingId } = useAccordionContext();
  const hiddenClass = (isOpen ? "" : "--hidden");

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={headingId}
      aria-hidden={!isOpen}
      className={`a11y-accordion__content ${hiddenClass}`}
    >
      <p>{children}</p>
    </div>
  );
};
