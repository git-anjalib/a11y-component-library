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
  items: AccordionItem[];
  defaultOpenId?: string;
  variant?: AccordionVariant;
  children?: React.ReactNode;

  onItemToggle(id: string): void;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  variant = "bordered",
  defaultOpenId,
  onItemToggle,
}) => {
  const [openItemId, setOpenItemId] = React.useState<string | null>(defaultOpenId || null);
  const headingsRef = React.useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleItemToggle = (id: string) => {
    const isOpen = openItemId === id;
    const newOpenItemId = isOpen ? null : id;
    setOpenItemId(newOpenItemId);
  };
    return (
    <div className={'a11y-accordion a11y-accordion--' + variant}>
      {items.map((item) => (
        <div key={item.id} className="a11y-accordion__item">
          <button
            type="button"
            aria-expanded={openItemId === item.id}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-heading`}
            ref={(el) => {
              headingsRef.current[item.id] = el;
            }}
            onClick={() => handleItemToggle(item.id)}
          >
            {item.title}
          </button>
          {openItemId === item.id && <div className="a11y-accordion__content"  
          role="region"
          aria-labelledby={`${item.id}-heading`}>
            {item.content}
          </div>}
        </div>
      ))}
    </div>
  );
}
