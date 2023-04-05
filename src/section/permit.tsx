import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import Section from "../components/section";

export default function PermitSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className="text-left text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-5 lg:mb-10">
          {trans.get("sections.permit.title")}
        </h1>
        {trans.get("sections.permit.motivation")}
        {trans.get("sections.permit.belgium")}
        {trans.get("sections.permit.belgiumAnswer")}
        {trans.get("sections.permit.luxembourg")}
        {trans.get("sections.permit.luxembourgAnswer")}
        {trans.get("sections.permit.end")}
      </SectionCard>
    </Section>
  );
}
