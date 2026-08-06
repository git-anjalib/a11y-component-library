import React, { useEffect, useRef } from "react";
import "./Modal.css";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Accessible name for the dialog, read by screen readers on open */
  title: string;
  children: React.ReactNode;
}

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * An accessible modal dialog.
 *
 * Accessibility notes (the parts that are easy to get wrong):
 * - role="dialog" + aria-modal="true" + aria-labelledby tell assistive
 *   tech this is a dialog and what its name is.
 * - Focus is moved into the dialog on open, and trapped there with a
 *   Tab/Shift+Tab handler so keyboard users can't tab out to content
 *   behind the modal while it's open.
 * - Escape closes the dialog, matching the platform convention every
 *   screen reader user expects.
 * - On close, focus is restored to whatever element opened the modal,
 *   instead of being lost to <body> (a very common real-world bug).
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    triggerElementRef.current = document.activeElement as HTMLElement;

    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialog) return;

      const nodes = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore focus to whatever triggered the modal, so keyboard
      // and screen-reader users aren't dropped back at the top of the page.
      triggerElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="a11y-modal__overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="a11y-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="a11y-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="a11y-modal-title" className="a11y-modal__title">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};
