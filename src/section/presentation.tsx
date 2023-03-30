import SectionCard from "@/components/section_card";
import Section from "../components/section";

export default function PresentationSection(props: any) {
  return (
    <Section id={props.id}>
      <SectionCard>
        <h1 className="text-left text-2xl  tracking-tight text-gray-900 dark:text-white">
          Qui sommes-nous ? Plus de transparence…
        </h1>
        <p className="text-justify">
          Derrière ce nom, se cache un couple motivé de changer leur avenir
          professionnel. Au cœur des opérations et de ce projet un peu fou :
          Jean-François Deldeffe. Fort de <b>12 années d’expérience</b> dans le
          domaine, de caractère indépendant et entrepreneur, Jean-François n’a
          pas peur du travail. Connaissant bien son métier, il est sérieux et
          efficace. Passionné, cela fait de nombreuses années qu’il souhaite
          franchir le pas et s’investir à son compte. C’est chose faite ! En ce
          début d’année 2023, la société est née. Son soutien ? Sa compagne,
          Marie. Professionnelle et impliquée dans le projet de Jean-François,
          elle est présente pour l’aider dans les nombreuses démarches
          administratives.
        </p>
      </SectionCard>
    </Section>
  );
}
