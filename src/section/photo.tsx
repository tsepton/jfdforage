import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function PhotoSection(props: any) {
  return (
    <Section id={props.id}>
      <SectionCard>Photo</SectionCard>
    </Section>
  );
}
