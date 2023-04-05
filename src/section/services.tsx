import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function ServiceSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>Service</SectionCard>
    </Section>
  );
}
