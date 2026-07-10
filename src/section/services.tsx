import trans from "@/translations/translator";
import Section from "@/components/section";
import Container from "@/components/container";
import SectionHeader from "@/components/section_header";
import Reveal from "@/components/reveal";
import Button from "@/components/button";

export default function ServiceSection({ id }: { id?: string }) {
  const services = trans.getList("sections.service.services");

  return (
    <Section id={id}>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={trans.get("navbar.services")}
            title={trans.get("sections.service.title")}
            lead={trans.get("sections.service.motivation")}
          />
          <p className="mt-6 font-heading text-xl font-bold text-jfd-ink md:text-2xl">
            {trans.get("sections.service.subtitle")}
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <ol className="grid border-t border-jfd-line sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5 sm:gap-x-[clamp(24px,4.5vw,60px)]">
            {services.map((service, i) => (
              <li
                key={service}
                className="flex items-center gap-4 rounded-lg border-b border-jfd-line px-2 py-3.5 transition hover:bg-jfd-wash"
              >
                <span className="tnum flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-br from-jfd-teal to-jfd-teal-bright font-heading text-[13px] font-extrabold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14.5px] leading-snug text-jfd-ink">{service}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-jfd-lg bg-gradient-to-br from-jfd-teal-deep to-[#0c333c] px-8 py-7 text-white">
            <b className="max-w-[24ch] font-heading text-lg font-extrabold md:text-[1.4rem]">
              {trans.get("sections.service.endMotivation")}
            </b>
            <Button href="#contact" variant="primary" arrow>
              {trans.get("sections.quote")}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
