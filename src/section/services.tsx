import SectionCard from "@/components/section_card";
import Section from "../components/section";
import trans from "@/translations/translator";
import { content, title } from "./shared_classes";

export default function ServiceSection(props: any) {
  const contentTemp = true
    ? trans.get("sections.photo.content")
    : <div>
      {trans.get("sections.service.motivation")}
      {trans.get("sections.service.endMotivation")}
      {trans.get("sections.service.subtitle")}
      {trans.get("sections.service.services")}

    </div>;
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className={title}>
          {trans.get("sections.service.title")}
        </h1>
        <div className={content}>
          {contentTemp}
        </div>
      </SectionCard>
    </Section>
  );
}
