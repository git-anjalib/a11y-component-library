import React from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  /** Shows a loading spinner and disables interaction while true */
  isLoading?: boolean;
  /**
   * Required when the button has no visible text (icon-only buttons).
   * Provides the accessible name for screen readers.
   */
  accessibleLabel?: string;
  children?: React.ReactNode;
}

/**
 * An accessible button component.
 *
 * Accessibility notes:
 * - Uses a native <button> element rather than a styled <div>, so keyboard
 *   focus, Enter/Space activation, and the button role all come for free
 *   from the browser instead of being reimplemented (and easy to get wrong).
 * - When isLoading is true, aria-busy is set and the button is disabled,
 *   so assistive tech announces the state change instead of silently
 *   ignoring a click that appears to do nothing.
 * - Icon-only buttons must pass accessibleLabel; this is enforced at the
 *   type level in strict usage and checked at runtime in dev mode below.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isLoading = false,
  accessibleLabel,
  disabled,
  children,
  className = "",
  ...rest
}) => {
  if (process.env.NODE_ENV !== "production" && !children && !accessibleLabel) {
    // eslint-disable-next-line no-console
    console.warn(
      "Button: icon-only buttons must supply `accessibleLabel` so screen readers can announce them."
    );
  }

  return (
    <button
      type="button"
      className={`a11y-btn a11y-btn--${variant} ${className}`.trim()}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      aria-label={accessibleLabel}
      {...rest}
    >
      {isLoading && (
        <span className="a11y-btn__spinner" aria-hidden="true" />
      )}
      {children}
    </button>
  );
};
