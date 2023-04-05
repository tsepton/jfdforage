import SectionCard from "@/components/section_card";
import trans from "@/translations/translator";
import Section from "../components/section";
import { title, content, subtitle, ending } from "./shared_classes";

export default function PhotoSection(props: any) {


  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className={title}>
          {trans.get("sections.geothermal.title")}
        </h1>
        <div className="flex flex-col justify-start items-start text-left">
          <div className={content}>
            {trans.get("sections.geothermal.content1")}
          </div>
          <div className={content}>
            {trans.get("sections.geothermal.content2")}
          </div>

          <div className={subtitle + " mt-10"}>
            {trans.get("sections.geothermal.subtitle1")}
          </div>
          <div className={content}>
            {trans.get("sections.geothermal.content3")}
          </div>
          <div className={content}>
            {trans.get("sections.geothermal.content4")}
          </div>

          <div className={subtitle + " mt-10"}>
            {trans.get("sections.geothermal.subtitle2")}
          </div>
          <div className={content}>
            {(trans.get("sections.geothermal.advantages") as string[])
              .map((elem, i) => <div key={i}> - {elem}</div>)}
          </div>
          <div className={ending + " pt-5"}>
            {trans.get("sections.geothermal.conclusion")}
          </div>

        </div>
      </SectionCard>
    </Section>
  );
}
