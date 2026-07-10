import { useEffect, useState } from "react";
import trans from "@/translations/translator";
import { ALL_SECTION_IDS, NAV_SECTIONS } from "@/config/site";
import Container from "./container";
import Button from "./button";
import { Close, Menu } from "./icons";

const LINKS = [{ id: "home", labelKey: "navbar.home" }, ...NAV_SECTIONS];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[68px] backdrop-blur-md backdrop-saturate-150 transition-colors duration-300 ${
        scrolled
          ? "border-b border-jfd-line bg-jfd-ground/80 shadow-jfd-sm"
          : "border-b border-transparent bg-jfd-ground/70"
      }`}
    >
      <Container className="flex h-full items-center justify-between gap-5">
        <a
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="JFD forage — accueil"
        >
          <img
            src="/img/logo.webp"
            alt="JFD forage — forage géothermique"
            className="h-9 w-auto"
          />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`whitespace-nowrap rounded-full px-3.5 py-2 font-heading text-[14.5px] font-semibold transition ${
                activeId === link.id
                  ? "text-jfd-teal"
                  : "text-jfd-ink-soft hover:bg-jfd-teal/[0.07] hover:text-jfd-ink"
              }`}
            >
              {trans.get(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <div className="hidden lg:block">
            <Button href="#contact" variant="primary">
              {trans.get("sections.quote")}
            </Button>
          </div>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-jfd-line text-jfd-ink lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-b border-jfd-line bg-jfd-surface shadow-jfd-md lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-3 font-heading text-base font-semibold ${
                  activeId === link.id ? "text-jfd-teal" : "text-jfd-ink-soft"
                }`}
              >
                {trans.get(link.labelKey)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-jfd-orange px-5 py-3 text-center font-heading font-bold text-[#3a1d00]"
            >
              {trans.get("sections.quote")}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
