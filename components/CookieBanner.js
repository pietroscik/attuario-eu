import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "attuarioeu_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== "accepted") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Informativa su cookie e dati"
    >
      <p className="cookie-banner__text">
        attuario.eu utilizza cookie tecnici e, tramite Google Analytics e Google AdSense, strumenti di misurazione e pubblicità di terze parti.
        Continuando la navigazione accetti l&apos;uso di questi cookie nel rispetto della nostra informativa.
      </p>
      <div className="cookie-banner__actions">
        <Link href="/privacy" className="button secondary">
          Scopri di più
        </Link>
        <button type="button" className="button" onClick={handleAccept}>
          Accetta
        </button>
      </div>
      <style jsx>{`
        .cookie-banner {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 100;
          background: rgba(15, 23, 42, 0.98);
          color: #f9fafb;
          padding: 12px 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          justify-content: center;
        }

        .cookie-banner__text {
          margin: 0;
          max-width: 640px;
          font-size: 0.9rem;
        }

        .cookie-banner__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cookie-banner :global(.button.secondary) {
          background: transparent;
          border-color: #e5e7eb;
          color: #e5e7eb;
        }

        @media (max-width: 600px) {
          .cookie-banner {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}

