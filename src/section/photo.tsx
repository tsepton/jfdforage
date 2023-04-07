import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import { Carousel } from "flowbite-react";
import Section from "../components/section";
import { title, content as contentClass } from "./shared_classes";
import Image from "next/image";

export default function PhotoSection(props: any) {
  const underConstruction = true;

  const content = underConstruction ? (
    <p className="text-justify">{trans.get("sections.photo.content")}</p>
  ) : (
    <Carousel>
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt="..."
      />
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="..."
      />
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="..."
      />
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
      />
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
    </Carousel>
  );

  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className={title}>{trans.get("sections.photo.title")}</h1>
        <div className={contentClass}>{content}</div>
      </SectionCard>
    </Section>
  );
}
