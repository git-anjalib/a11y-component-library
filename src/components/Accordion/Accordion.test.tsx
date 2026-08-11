import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from "./index";

describe("Accordion", () => {
  const renderAccordion = () =>
    render(
      <Accordion>
        <AccordionItem>
          <AccordionHeader title="Section 1" />
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

  test("starts closed", () => {
    renderAccordion();

    const button = screen.getByRole("button", { name: /Section 1/i });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  test("clicking the header opens it", async () => {
    const user = userEvent.setup();
    renderAccordion();

    const button = screen.getByRole("button", { name: /Section 1/i });
    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  test("clicking twice closes it again", async () => {
    const user = userEvent.setup();
    renderAccordion();

    const button = screen.getByRole("button", { name: /Section 1/i });
    await user.click(button);
    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  test("has no detectable accessibility violations", async () => {
    const { container } = renderAccordion();
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});