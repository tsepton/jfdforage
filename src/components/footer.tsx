import trans from "@/translations/translator";
import { CONTACT, CREDIT, NAV_SECTIONS } from "@/config/site";
import Container from "./container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-jfd-teal-deep text-[#B7CDD1]">
      <Container className="py-14">
        <div className="grid gap-9 border-b border-white/10 pb-9 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center" aria-label="JFD forage — accueil">
              <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-jfd-sm">
                <img
                  src="/img/logo.webp"
                  alt="JFD forage — forage géothermique"
                  className="h-7 w-auto"
                />
              </span>
            </a>
            <p className="mt-4 max-w-[36ch] text-[14.5px] text-[#9FBAC0]">
              Entreprise spécialisée dans la réalisation de forages géothermiques
              verticaux en Belgique et au Luxembourg.
            </p>
          </div>

          <div>
            <h5 className="mb-4 font-heading text-[13px] font-bold uppercase tracking-[0.1em] text-white">
              Navigation
            </h5>
            <ul className="space-y-2.5">
              {NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[14.5px] text-[#9FBAC0] transition hover:text-white"
                  >
                    {trans.get(section.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-heading text-[13px] font-bold uppercase tracking-[0.1em] text-white">
              Contact
            </h5>
            <ul className="space-y-2.5 text-[14.5px] text-[#9FBAC0]">
              <li>
                <a href={CONTACT.phoneHref} className="transition hover:text-white">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="transition hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="pt-1">
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[13.5px] text-[#7E9AA0]">
          <span>© {year} JFD forage. Tous droits réservés.</span>
          <span>
            Made with ♥ by{" "}
            <a
              href={CREDIT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9FBAC0] transition hover:text-white"
            >
              {CREDIT.name}
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
