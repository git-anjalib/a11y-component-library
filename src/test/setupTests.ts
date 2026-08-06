import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";

// Extends Jest's expect with axe's accessibility violation matcher,
// so every component test can assert: expect(results).toHaveNoViolations()
expect.extend(toHaveNoViolations);
