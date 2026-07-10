import trans from "@/translations/translator";
import Button from "@/components/button";
import Container from "@/components/container";
import { Check, Phone } from "@/components/icons";
import { CONTACT, heroHighlights } from "@/config/site";

const OVERLAY =
  "linear-gradient(180deg, rgba(11,42,49,.35) 0%, rgba(11,42,49,.15) 30%, rgba(11,42,49,.55) 72%, rgba(11,42,49,.9) 100%), linear-gradient(105deg, rgba(6,107,127,.62) 0%, rgba(6,107,127,.12) 55%, rgba(9,164,195,.05) 100%)";

export default function HomeSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative flex min-h-[min(92vh,860px)] items-end overflow-hidden pt-[68px] text-white"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/img/cover.webp"
          alt="Chantier de forage géothermique JFD"
          className="h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0" style={{ background: OVERLAY }} />
      </div>

      <Container className="relative z-10 py-12 md:py-20 lg:py-24">
        <span className="mb-5 inline-flex items-center gap-2.5 font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-[#CDECF2]">
          <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-jfd-teal-bright to-jfd-orange" />
          JFD forage · Belgique &amp; Luxembourg
        </span>

        <h1 className="max-w-[16ch] font-heading text-[clamp(2.1rem,6.2vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
          {trans.get("sections.home.tagline")}
        </h1>

        <p className="mt-5 max-w-[46ch] text-[clamp(1.05rem,2.2vw,1.375rem)] leading-snug text-[#DCEAEC]">
          {trans.get("sections.home.sub")}
        </p>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <Button href="#contact" variant="primary" arrow>
            {trans.get("sections.quote")}
          </Button>
          <Button
            href={CONTACT.phoneHref}
            variant="call"
            leadingIcon={<Phone className="h-[17px] w-[17px]" />}
          >
            {trans.get("sections.call")}
          </Button>
          <Button href="#geothermal" variant="ghost" onDark>
            {trans.get("sections.info")}
          </Button>
        </div>

        <p className="mt-5 flex items-center gap-2.5 text-sm text-[#B9D2D6]">
          <Check className="h-[17px] w-[17px] shrink-0 text-jfd-orange" />
          {trans.get("sections.devis")}
        </p>

        <div
          className="mt-10 grid overflow-hidden rounded-jfd border border-white/15 backdrop-blur-sm sm:grid-cols-3 md:mt-14"
          style={{ gap: "1px", background: "rgba(255,255,255,.14)" }}
        >
          {heroHighlights().map((item) => (
            <div key={item.value} className="bg-[rgba(11,42,49,0.34)] px-5 py-4">
              <b className="block font-heading text-[15px] font-extrabold text-white">
                {item.value}
              </b>
              <small className="text-[13px] text-[#B9D2D6]">{item.label}</small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
