import { useEffect } from "react";
import { Close } from "./icons";

/**
 * Full-screen image viewer. Rendered when `src` is set; closes on overlay
 * click, the close button, or Escape.
 */
export default function Lightbox({
  src,
  alt = "Photo chantier",
  onClose,
}: {
  src: string | null;
  alt?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo agrandie"
      onClick={onClose}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(8,20,24,0.9)] p-6 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
      >
        <Close className="h-6 w-6" />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[86vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
      />
    </div>
  );
}
