import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

function TestHarness() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
        <p>Are you sure?</p>
        <Button onClick={() => setIsOpen(false)}>Confirm</Button>
      </Modal>
    </div>
  );
}

describe("Modal", () => {
  it("moves focus into the dialog when it opens", async () => {
    const user = userEvent.setup();
    render(<TestHarness />);
    await user.click(screen.getByRole("button", { name: "Open modal" }));

    // First focusable element inside the dialog should now have focus
    expect(screen.getByRole("button", { name: "Confirm" })).toHaveFocus();
  });

  it("closes on Escape and restores focus to the trigger", async () => {
    const user = userEvent.setup();
    render(<TestHarness />);
    const trigger = screen.getByRole("button", { name: "Open modal" });
    await user.click(trigger);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("exposes an accessible name via aria-labelledby", async () => {
    const user = userEvent.setup();
    render(<TestHarness />);
    await user.click(screen.getByRole("button", { name: "Open modal" }));

    expect(screen.getByRole("dialog", { name: "Confirm" })).toBeInTheDocument();
  });
});
