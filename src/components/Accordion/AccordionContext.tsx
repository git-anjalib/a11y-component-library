import { createContext, useContext } from "react";

interface AccordionContextValue {
  isOpen: boolean;
  toggle: () => void;
  headingId: string;
  contentId: string;
}

export const AccordionContext = createContext<AccordionContextValue | null>(null);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be used within an AccordionItem");
  }
  return context;
}