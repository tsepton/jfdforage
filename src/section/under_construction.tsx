import Section from "@/components/section";

export default function UnderConstructionSection(props: any) {
  return (
    <Section className={props.className}>
      <h1 className="text-4xl font-light text-gray-900">
        Site en construction...
      </h1>
    </Section>
  );
}
