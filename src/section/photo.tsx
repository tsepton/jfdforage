import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function PhotoSection(props: any) {
  return (
    <Section id={props.id}>
      <SectionCard>
        <h1 className="text-left text-2xl  tracking-tight text-gray-900 dark:text-white">
          Gallerie photos
        </h1>
        <p className="text-justify">En cours de construction… </p>
      </SectionCard>
    </Section>
  );
}
