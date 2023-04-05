import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import Section from "../components/section";
import { content, highlight, subtitle, title } from "./shared_classes";
import FooterSection from "@/components/footer_section";

export default function PermitSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className={title}>
          {trans.get("sections.permit.title")}
        </h1>
        <div className="flex flex-col justify-start items-start text-center md:text-left">
          <div className={content}>
            {trans.get("sections.permit.motivation")}
          </div>
          <div >
            <div className={subtitle + " mt-10"}>
              {trans.get("sections.permit.belgium")}
            </div>
            <div className={content}>
              {trans.get("sections.permit.belgiumContent")}
            </div>
            <div className={content}>
              {trans.get("sections.permit.belgiumAnswer")}
            </div>
            <div className={subtitle + " mt-10"}>
              {trans.get("sections.permit.luxembourg")}
            </div>
            <div className={content}>
              <a className="hover:underline" href={trans.get("sections.permit.luxembourgAnswer") as string}>
                {trans.get("sections.permit.luxembourgContent")}
              </a>
            </div>
          </div>
        </div>
        <FooterSection className="pt-[3em]" moreInfo={true} showContact={true} currentSection={"#permit"} showText={true} />
      </SectionCard>
    </Section>
  );
}
