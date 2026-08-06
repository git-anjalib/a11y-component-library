import React, { useState } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

/**
 * This App is just a dev-time playground for manually trying out the
 * components with a keyboard and a screen reader — Storybook (npm run
 * storybook) is the real showcase once you're further along. Feel free to
 * add your in-progress Accordion/FormField/Tabs components here too while
 * building them, before they get their own Storybook stories.
 */
export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: 640 }}>
      <h1>a11y-component-library — preview</h1>
      <p>
        Try tabbing through this page, and opening the modal with only your
        keyboard (Tab to the button, Enter to activate, Escape to close).
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Button</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button
            isLoading={isLoading}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 1500);
            }}
          >
            {isLoading ? "Saving..." : "Click to load"}
          </Button>
          <Button accessibleLabel="Close">✕</Button>
        </div>
      </section>

      <section>
        <h2>Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open modal</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example dialog"
        >
          <p>Focus is trapped inside here. Try pressing Tab repeatedly.</p>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal>
      </section>
    </main>
  );
};
