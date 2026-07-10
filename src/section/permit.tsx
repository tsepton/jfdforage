import trans from "@/translations/translator";
import Section from "@/components/section";
import Container from "@/components/container";
import SectionHeader from "@/components/section_header";
import Reveal from "@/components/reveal";
import { ExternalLink } from "@/components/icons";

const FLAG_BE = "linear-gradient(90deg,#111 33%,#FAE042 33% 66%,#E8112D 66%)";
const FLAG_LU = "linear-gradient(180deg,#ED2939 33%,#fff 33% 66%,#00A1DE 66%)";

function RegionLabel({ flag, children }: { flag: string; children: string }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2.5 font-heading text-[13px] font-bold uppercase tracking-[0.1em] text-jfd-teal">
      <span
        className="block h-[17px] w-[26px] shrink-0 rounded-[3px] shadow-[0_0_0_1px_rgba(11,42,49,0.1)]"
        style={{ background: flag }}
      />
      {children}
    </span>
  );
}

export default function PermitSection({ id }: { id?: string }) {
  return (
    <Section id={id} wash>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={trans.get("navbar.permit")}
            title={trans.get("sections.permit.title")}
            lead={trans.get("sections.permit.motivation")}
          />
        </Reveal>

        <Reveal className="mt-9">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="flex flex-col rounded-jfd-lg border border-jfd-line bg-jfd-surface p-7 shadow-jfd-sm">
              <RegionLabel flag={FLAG_BE}>
                {trans.get("sections.permit.belgiumRegion")}
              </RegionLabel>
              <h3 className="mb-3 font-heading text-lg font-extrabold leading-snug text-jfd-ink">
                {trans.get("sections.permit.belgium")}
              </h3>
              <p className="text-[15.5px] leading-relaxed text-jfd-ink-soft">
                {trans.get("sections.permit.belgiumContent")}
              </p>
              <p className="mt-3.5 border-t border-jfd-line pt-3.5 text-[14.5px] leading-relaxed text-jfd-ink-soft">
                {trans.get("sections.permit.belgiumAnswer")}
              </p>
            </article>

            <article className="flex flex-col rounded-jfd-lg border border-jfd-line bg-jfd-surface p-7 shadow-jfd-sm">
              <RegionLabel flag={FLAG_LU}>
                {trans.get("sections.permit.luxembourgRegion")}
              </RegionLabel>
              <h3 className="mb-3 font-heading text-lg font-extrabold leading-snug text-jfd-ink">
                {trans.get("sections.permit.luxembourg")}
              </h3>
              <p className="text-[15.5px] leading-relaxed text-jfd-ink-soft">
                {trans.get("sections.permit.luxembourgContent")}
              </p>
              <a
                href={trans.get("sections.permit.luxembourgAnswer")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-heading text-[14.5px] font-bold text-jfd-teal transition hover:text-jfd-teal-bright"
              >
                {trans.get("sections.permit.linkLabel")}
                <ExternalLink className="h-[15px] w-[15px]" />
              </a>
            </article>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
