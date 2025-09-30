import { fireEvent, render, screen } from "@testing-library/react";

import { TheoryTopicsContent } from "../../pages/teoria";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }) => <a href={href}>{children}</a>,
}));

describe("TheoryTopicsContent", () => {
  it("shows all items by default", () => {
    render(<TheoryTopicsContent />);

    expect(screen.getByText("Valore attuale atteso e criteri di equivalenza")).toBeInTheDocument();
    expect(screen.getByText("Leggi di mortalità (Makeham, Gompertz)")).toBeInTheDocument();
    expect(screen.getByText("Probabilità congiunte e copule per rischi multipli")).toBeInTheDocument();
  });

  it("filters items to the selected difficulty", () => {
    render(<TheoryTopicsContent />);

    fireEvent.click(screen.getByRole("tab", { name: /intermedio/i }));

    expect(screen.getByText("Leggi di mortalità (Makeham, Gompertz)")).toBeInTheDocument();
    expect(
      screen.queryByText("Valore attuale atteso e criteri di equivalenza"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Probabilità congiunte e copule per rischi multipli"),
    ).not.toBeInTheDocument();
  });

  it("permits switching to advanced topics", () => {
    render(<TheoryTopicsContent />);

    fireEvent.click(screen.getByRole("tab", { name: /avanzato/i }));

    expect(screen.getByText("Probabilità congiunte e copule per rischi multipli")).toBeInTheDocument();
    expect(
      screen.queryByText("Valore attuale atteso e criteri di equivalenza"),
    ).not.toBeInTheDocument();
  });
});
