import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionContent } from "./AccordionContent";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    a11y: { disable: false },
  },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem>
        <AccordionHeader title="What is web accessibility?" />
        <AccordionContent>
          Web accessibility means designing and building sites so people with
          disabilities can perceive, understand, navigate, and interact with
          them — including people using screen readers or keyboard-only
          navigation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader title="Why does keyboard support matter?" />
        <AccordionContent>
          Many users can't use a mouse at all, whether due to a disability,
          a broken trackpad, or simply preference. Every interactive element
          here works with Tab, Enter, and Space alone.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader title="What does aria-expanded do?" />
        <AccordionContent>
          It tells assistive technology whether a collapsible section is
          currently open or closed, so a screen reader user gets the same
          state information a sighted user gets visually.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleOpenIndependently: Story = {
  name: "Each item opens independently",
  render: () => (
    <Accordion>
      {["First", "Second", "Third"].map((label) => (
        <AccordionItem key={label}>
          <AccordionHeader title={`${label} section`} />
          <AccordionContent>
            Content for the {label.toLowerCase()} section. Try opening more
            than one at once — each AccordionItem holds its own state
            independently, via its own Context provider.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};