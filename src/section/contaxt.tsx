import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function ContactSection(props: any) {
  return (
    <Section id={props.id}>
      <SectionCard>Contact</SectionCard>
    </Section>
  );
}
