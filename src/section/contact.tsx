import { ReactNode } from "react";
import trans from "@/translations/translator";
import Section from "@/components/section";
import Container from "@/components/container";
import SectionHeader from "@/components/section_header";
import Reveal from "@/components/reveal";
import Button from "@/components/button";
import { Envelope, MapPin, Phone } from "@/components/icons";
import { CONTACT } from "@/config/site";

type ContactItem = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export default function ContactSection({ id }: { id?: string }) {
  const items: ContactItem[] = [
    {
      icon: <Phone className="h-[21px] w-[21px]" />,
      label: "Téléphone",
      value: CONTACT.phoneDisplay,
      href: CONTACT.phoneHref,
    },
    {
      icon: <Envelope className="h-[21px] w-[21px]" />,
      label: "E-mail",
      value: CONTACT.email,
      href: CONTACT.emailHref,
    },
    {
      icon: <MapPin className="h-[21px] w-[21px]" />,
      label: "Adresse",
      value: CONTACT.addressLines.join(", "),
      href: CONTACT.mapsUrl,
      external: true,
    },
  ];

  return (
    <Section id={id} wash>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={trans.get("sections.contact.title")}
            title={trans.get("sections.contact.title")}
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-jfd-lg border border-jfd-line bg-jfd-surface p-7 shadow-jfd-md md:p-10">
              <p className="mb-2 font-heading text-lg font-bold text-jfd-ink">
                {trans.get("sections.contact.content1")}
              </p>
              <p className="text-jfd-ink-soft">
                {trans.get("sections.contact.content2")}
              </p>

              <ul className="mt-6 flex flex-col gap-1.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-4 rounded-jfd p-4 text-jfd-ink transition hover:bg-jfd-wash"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-jfd-wash text-jfd-teal">
                        {item.icon}
                      </span>
                      <span>
                        <small className="block font-heading text-[12.5px] font-semibold uppercase tracking-[0.09em] text-jfd-ink-faint">
                          {item.label}
                        </small>
                        <b className="font-heading text-[16.5px] font-bold">
                          {item.value}
                        </b>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-jfd-lg bg-gradient-to-br from-jfd-teal-deep via-[#0c3540] to-[#0d4250] p-7 text-white md:p-10">
              <span
                className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(9,164,195,.4), transparent 70%)",
                }}
              />
              <div className="relative">
                <span className="mb-4 inline-flex items-center gap-2.5 font-heading text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7FE0F0]">
                  <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-jfd-teal-bright to-jfd-orange" />
                  {trans.get("sections.contact.asideEyebrow")}
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
                  {trans.get("sections.contact.asideTitle")}
                </h3>
                <p className="mt-3.5 text-[#CDE3E6]">
                  {trans.get("sections.questions")}
                </p>
              </div>
              <Button
                href={CONTACT.emailHref}
                variant="primary"
                arrow
                className="relative self-start"
              >
                {trans.get("sections.quote")}
              </Button>
            </aside>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
