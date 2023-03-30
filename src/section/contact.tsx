import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function ContactSection(props: any) {
  return (
    <Section id={props.id}>
      <SectionCard>
        <h1 className="text-left text-2xl  tracking-tight text-gray-900 dark:text-white">
          Nous contacter
        </h1>
        <p className="text-justify">
          Vous souhaitez un devis ou tout simplement de plus amples informations
          ? <br />
          N’hésitez pas à nous contacter, nous nous efforcerons de vous répondre
          dans les plus brefs délais. <br />
          Nos devis sont gratuits.
        </p>
      </SectionCard>
    </Section>
  );
}
