import SectionCard from "@/components/section_card";
import Section from "../components/section";
import trans from "@/translations/translator";
import { content, subtitle, title } from "./shared_classes";
import FooterSection from "@/components/footer_section";

export default function ServiceSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className={title}>{trans.get("sections.service.title")}</h1>
        <div className="flex flex-col justify-start items-start text-left">
          <div className={content}>
            {trans.get("sections.service.motivation")}
          </div>
          <div className={content}>
            {trans.get("sections.service.endMotivation")}
          </div>

          <div className={subtitle + " mt-10"}>
            {trans.get("sections.service.subtitle")}
          </div>
          <div className={content}>
            {(trans.get("sections.service.services") as string[]).map(
              (elem, i) => (
                <div key={i}> - {elem}</div>
              )
            )}
          </div>
        </div>
        <FooterSection
          className={"pt-[3em]"}
          currentSection={"#services"}
          moreInfo={true}
          showContact={true}
          showText={false}
        />
      </SectionCard>
    </Section>
  );
}
