import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { Table, type Column } from "./Table";

interface TestData {
  id: number;
  name: string;
  role: string;
}

const users: TestData[] = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "User" },
];

const columns: Column<TestData>[] = [
  { id: 1, accessorKey: "id", header: "ID" },
  { id: 2, accessorKey: "name", header: "Name" },
  { id: 3, accessorKey: "role", header: "Role" },
];

const renderTable = () =>
  render(
    <Table
      data={users}
      columns={columns}
      caption="User directory"
    />
  );

describe("Table Component", () => {
  test("renders the table with its caption and column headers", () => {
    renderTable();

    expect(
      screen.getByRole("table", { name: "User directory" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: "ID" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: "Name" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: "Role" })
    ).toBeInTheDocument();
  });

  test("renders all user rows and their values", () => {
    renderTable();

    const table = screen.getByRole("table", {
      name: "User directory",
    });

    const rows = within(table).getAllByRole("row");

    // One header row and three data rows
    expect(rows).toHaveLength(4);

    expect(within(rows[1]).getByText("Alice")).toBeInTheDocument();
    expect(within(rows[1]).getByText("Admin")).toBeInTheDocument();

    expect(within(rows[2]).getByText("Bob")).toBeInTheDocument();
    expect(within(rows[3]).getByText("Charlie")).toBeInTheDocument();
  });

  test("has no detectable accessibility violations", async () => {
    const { container } = renderTable();
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test("renders an empty table when there is no data", () => {
    render(
      <Table<TestData>
        data={[]}
        columns={columns}
        caption="Empty user directory"
      />
    );

    expect(
      screen.getByRole("table", { name: "Empty user directory" })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("columnheader")).toHaveLength(3);
    expect(screen.getAllByRole("row")).toHaveLength(1);
  });
});