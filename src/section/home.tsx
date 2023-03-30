import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function HomeSection(props: any) {
  return (
    <Section id={props.id}>
      <SectionCard>Home</SectionCard>
    </Section>
  );
}
