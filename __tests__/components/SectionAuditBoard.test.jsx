import { fireEvent, render, screen } from "@testing-library/react";

import SectionAuditBoard from "../../components/SectionAuditBoard";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

const MOCK_SECTIONS = [
  {
    label: "Teoria",
    href: "/teoria",
    status: "verified",
    summary: "Moduli con badge di difficoltà.",
    metrics: [
      { label: "Moduli", value: "3" },
      { label: "Fonti", value: "5" },
    ],
    sources: [
      { label: "Pagina Teoria", href: "/teoria", type: "internal", verified: true },
      {
        label: "Open Actuarial Text",
        href: "https://openacttexts.github.io/LifeContingencies/Intro.html",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: "Community",
    href: "/community",
    status: "needs-review",
    summary: "Canali e iniziative collaborative.",
    statusNote: "Discord in manutenzione.",
    metrics: [
      { label: "Canali", value: "5" },
    ],
    sources: [
      { label: "Calendario eventi", href: "https://cal.attuario.eu/community", type: "external", verified: true },
    ],
  },
];

describe("SectionAuditBoard", () => {
  it("shows all sections by default", () => {
    render(<SectionAuditBoard sections={MOCK_SECTIONS} />);

    expect(screen.getByText("Teoria")).toBeInTheDocument();
    expect(screen.getByText("Community")).toBeInTheDocument();
  });

  it("filters sections by status", () => {
    render(<SectionAuditBoard sections={MOCK_SECTIONS} />);

    fireEvent.click(screen.getByRole("radio", { name: /da verificare/i }));

    expect(screen.queryByText("Teoria")).not.toBeInTheDocument();
    expect(screen.getByText("Community")).toBeInTheDocument();
  });

  it("filters sections by search query", () => {
    render(<SectionAuditBoard sections={MOCK_SECTIONS} />);

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "open actuarial" } });

    expect(screen.getByText("Teoria")).toBeInTheDocument();
    expect(screen.queryByText("Community")).not.toBeInTheDocument();
  });
});
