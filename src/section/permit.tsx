import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function PermitSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>Permis et authorisation</SectionCard>
    </Section>
  );
}
