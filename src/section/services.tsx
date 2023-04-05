import SectionCard from "@/components/section_card";
import Section from "../components/section";
import trans from "@/translations/translator";

export default function ServiceSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className="text-left text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-5 lg:mb-10">
          {trans.get("sections.service.title")}
        </h1>
        {trans.get("sections.service.motivation")}
        {trans.get("sections.service.endMotivation")}
        {trans.get("sections.service.subtitle")}
        {trans.get("sections.service.services")}
      </SectionCard>
    </Section>
  );
}
