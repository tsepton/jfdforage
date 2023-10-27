import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Section from "../components/section";
import static_asset_listing from "../gallerie_files.json";
import { content as contentClass, title } from "./shared_classes";
import FooterSection from "@/components/footer_section";

export default function PhotoSection(props: any) {
  const images = static_asset_listing.map((file) => {
    const uri = `/img/gallerie/${file}`;
    return <img key={uri} src={uri} alt="photo chantier" />;
  });

  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        {/* <h1 className={title}>{trans.get("sections.photo.title")}</h1> */}
        <div className={contentClass + "pb-[3em]"} style={{ height: "100% !important" }}>
          <Carousel>{images}</Carousel>
        </div>
      </SectionCard>
    </Section>
  );
}
