import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function GeothermalSection(props: any) {
  return (
    <Section id={props.id}>
      <SectionCard>Geothermal</SectionCard>
    </Section>
  );
}
