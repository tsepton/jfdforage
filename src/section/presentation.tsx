import Profile from "@/components/profile";
import SectionCard from "@/components/section_card";
import Section from "../components/section";
import trans from "@/translations/translator";

export default function PresentationSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className="text-left text-2xl text-gray-900 dark:text-white mb-5">
          {trans.get("sections.presentation.title")}
        </h1>
        <div className="flex flex-row text-justify">
          <p
            className="m-auto  flex-auto  w-3/5"
            dangerouslySetInnerHTML={{
              __html: trans.get("sections.presentation.content"),
            }}
          ></p>
          <img
            className="flex-auto p-5 w-1/5 h-fit	"
            src="/img/logo.png"
            alt="Logo JFD forage"
          />
        </div>
        <div className="flex flex-row justify-center content-center pt-20 p-10 gap-[20%]">
          <Profile
            src="/img/jean-francois.jpg"
            name="Jean-François"
            alt="Picture of Jean-François"
          ></Profile>
          <Profile
            src="/img/marie.jpg"
            name="Marie"
            alt="Picture of Marie"
          ></Profile>
        </div>
      </SectionCard>
    </Section>
  );
}
