import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function PresentationSection(props: any) {
  return (
    <Section id={props.id}>
      <SectionCard>Presentation</SectionCard>
    </Section>
  );
}
