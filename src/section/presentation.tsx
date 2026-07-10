import trans from "@/translations/translator";
import Section from "@/components/section";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import { BarChart, Bolt, ShieldCheck } from "@/components/icons";
import { yearsOfExperience } from "@/config/site";

const VALUES = [
  { key: "react", label: "Réactivité", Icon: Bolt },
  { key: "prof", label: "Professionnalisme", Icon: ShieldCheck },
  { key: "eff", label: "Efficacité", Icon: BarChart },
];

export default function PresentationSection({ id }: { id?: string }) {
  return (
    <Section id={id}>
      <Container>
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[68px]">
          <Reveal>
            <div className="relative">
              <img
                src="/img/jean-francois.webp"
                alt="Jean-François, fondateur de JFD forage"
                className="aspect-[4/5] w-full rounded-jfd-lg object-cover shadow-jfd-lg"
              />
              <div className="absolute -left-3.5 bottom-6 flex items-center gap-3 rounded-jfd border border-jfd-line bg-jfd-surface px-4 py-3.5 shadow-jfd-md">
                <b className="tnum font-heading text-[26px] font-extrabold leading-none text-jfd-teal">
                  {yearsOfExperience()}
                </b>
                <span className="max-w-[15ch] text-[13px] leading-tight text-jfd-ink-soft">
                  années d’expérience dans le forage
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2.5 font-heading text-[13px] font-semibold uppercase tracking-[0.16em] text-jfd-teal">
              <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-jfd-teal to-jfd-teal-bright" />
              {trans.get("navbar.presentation")}
            </span>
            <h2 className="mb-5 font-heading text-3xl font-extrabold leading-[1.1] text-jfd-ink md:text-[2.5rem]">
              {trans.get("sections.presentation.title")}
            </h2>
            <p className="text-lg leading-relaxed text-jfd-ink-soft">
              {trans
                .get("sections.presentation.content")
                .replace("{years}", String(yearsOfExperience()))}
            </p>

            <p className="mb-3 mt-8 font-heading text-sm font-semibold text-jfd-ink-soft">
              {trans.get("sections.presentation.keyword")}
            </p>
            <div className="grid gap-3.5 sm:grid-cols-3">
              {VALUES.map(({ key, label, Icon }) => (
                <div
                  key={key}
                  className="rounded-jfd border border-jfd-line bg-jfd-surface p-4 shadow-jfd-sm"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[10px] bg-jfd-wash text-jfd-teal">
                    <Icon className="h-5 w-5" />
                  </div>
                  <b className="font-heading text-base font-bold text-jfd-ink">
                    {label}
                  </b>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
