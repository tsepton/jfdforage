import { useState } from "react";
import trans from "@/translations/translator";
import Section from "@/components/section";
import Container from "@/components/container";
import SectionHeader from "@/components/section_header";
import Reveal from "@/components/reveal";
import Lightbox from "@/components/lightbox";
import { ImageStack } from "@/components/icons";
import { GALLERY_PATH } from "@/config/site";
import galleryFiles from "@/gallerie_files.json";

export default function PhotoSection({ id }: { id?: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const images = galleryFiles.map((file) => GALLERY_PATH + file);

  return (
    <Section id={id}>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={trans.get("sections.photo.title")}
            title={trans.get("sections.photo.heading")}
            lead={trans.get("sections.photo.content")}
          />
        </Reveal>

        <Reveal className="mt-9">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {images.map((src) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setSelected(src)}
                  className="group block aspect-[4/3] w-full overflow-hidden rounded-jfd bg-jfd-ground-2 shadow-jfd-sm"
                >
                  <img
                    src={src}
                    alt="Chantier de forage géothermique JFD"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-5 flex items-center gap-2.5 text-[14.5px] text-jfd-ink-soft">
          <ImageStack className="h-[17px] w-[17px] text-jfd-teal" />
          {trans.get("sections.photo.note")}
        </p>
      </Container>

      <Lightbox src={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
