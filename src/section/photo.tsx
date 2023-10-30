import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Section from "../components/section";
import static_asset_listing from "../gallerie_files.json";
import { content as contentClass, title } from "./shared_classes";
import FooterSection from "@/components/footer_section";
import { useState } from "react";

export default function PhotoSection(props: any) {
  // TODO - refactor this mess

  const images = static_asset_listing.map((file) => {
    const uri = `/img/gallerie/${file}`;
    return (
      <img
        onClick={(e) => showFullScreen(e)}
        key={uri}
        src={uri}
        alt="Photo chantier"
        style={{
          cursor: "pointer",
        }}
      />
    );
  });

  const previewContent = (
    <div
      className={contentClass + "pb-[3em]"}
      style={{ height: "50vh !important" }}
    >
      <Carousel>{images}</Carousel>
    </div>
  );

  const [selected, setSelectedImg] = useState(undefined);

  const showFullScreen = (e) => {
    setSelectedImg(e.target);
  };

  const hideFullScreen = () => {
    setSelectedImg(undefined);
  };

  // The full screen picture should be in its own component 
  const fullScreenContent = (
    <div
      className={contentClass + "pb-[3em]"}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        background: "rgb(0,0,0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={hideFullScreen}
    >
      <img
        style={{
          height: "75vh",
          width: "75vw",
          objectFit: "scale-down",
        }}
        src={selected?.currentSrc}
        alt="Photo chantier"
      ></img>
    </div>
  );

  return (
    <>
      <Section id={props.id} className={props.className}>
        <SectionCard>
          <h1 className={title}>{trans.get("sections.photo.title")}</h1>
          {previewContent}
        </SectionCard>
      </Section>
      {!!selected && fullScreenContent}
    </>
  );
}
