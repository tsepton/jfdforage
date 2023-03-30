import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import Section from "../components/section";

export default function PhotoSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className="text-left text-2xl text-gray-900 dark:text-white mb-5">
          {trans.get("sections.photo.title")}
        </h1>
        <p className="text-justify">{trans.get("sections.photo.content")}</p>
      </SectionCard>
    </Section>
  );
}
