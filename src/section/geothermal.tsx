import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import Section from "../components/section";

export default function PhotoSection(props: any) {

  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className="text-left text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-5 lg:mb-10">
          {trans.get("sections.geothermal.title")}
        </h1>
        {trans.get("sections.geothermal.content1")}
        {trans.get("sections.geothermal.content2")}
        {trans.get("sections.geothermal.subtitle1")}
        {trans.get("sections.geothermal.content3")}
        {trans.get("sections.geothermal.content4")}
        {trans.get("sections.geothermal.subtitle2")}
        {trans.get("sections.geothermal.advantages")}
        {trans.get("sections.geothermal.conclusion")}
      </SectionCard>
    </Section>
  );
}
