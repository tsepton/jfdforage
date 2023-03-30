import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import { Carousel } from "flowbite-react";
import Section from "../components/section";

export default function PhotoSection(props: any) {
  const underConstruction = true;

  const content = underConstruction ? (
    <p className="text-justify">{trans.get("sections.photo.content")}</p>
  ) : (
    <Carousel>
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
    </Carousel>
  );

  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className="text-left text-2xl text-gray-900 dark:text-white mb-5">
          {trans.get("sections.photo.title")}
        </h1>
        {content}
      </SectionCard>
    </Section>
  );
}
