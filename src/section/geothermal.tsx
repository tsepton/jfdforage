import trans from "@/translations/translator";
import Section from "@/components/section";
import Container from "@/components/container";
import SectionHeader from "@/components/section_header";
import Reveal from "@/components/reveal";
import DepthGauge from "@/components/depth_gauge";
import { Check } from "@/components/icons";

export default function GeothermalSection({ id }: { id?: string }) {
  const advantages = trans.getList("sections.geothermal.advantages");

  return (
    <Section id={id} wash>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={trans.get("navbar.geothermal")}
            title={trans.get("sections.geothermal.title")}
            lead={`${trans.get("sections.geothermal.content1")} ${trans.get(
              "sections.geothermal.content2"
            )}`}
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-16">
            <DepthGauge />
            <div className="self-center">
              <h3 className="mb-3.5 font-heading text-2xl font-extrabold text-jfd-ink md:text-[1.6rem]">
                {trans.get("sections.geothermal.subtitle1")}
              </h3>
              <p className="leading-relaxed text-jfd-ink-soft">
                {trans.get("sections.geothermal.content3")}
              </p>
              <p className="mt-4 leading-relaxed text-jfd-ink-soft">
                {trans.get("sections.geothermal.content4")}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <h3 className="mb-6 font-heading text-xl font-extrabold text-jfd-ink md:text-2xl">
            {trans.get("sections.geothermal.subtitle2")}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-5">
            {advantages.map((advantage) => (
              <li
                key={advantage}
                className="flex items-start gap-3.5 rounded-jfd border border-jfd-line bg-jfd-surface p-4 shadow-jfd-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-jfd-wash text-jfd-teal">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15.5px] leading-snug text-jfd-ink">
                  {advantage}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-7 font-heading text-xl font-bold text-jfd-teal md:text-[1.4rem]">
            {trans.get("sections.geothermal.conclusion")}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
