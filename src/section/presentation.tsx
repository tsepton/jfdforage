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
        <div className="flex flex-col md:flex-row-reverse sm:justify-center  text-justify">
          <img
            className="flex-auto m-auto p-5 sm:w-[90%] md:w-[40%] lg:w-1/5 lg:max-h-[20em] lg:max-w-[20em] h-fit	"
            src="/img/logo.png"
            alt="Logo JFD forage"
          />
          <p
            className="m-auto  flex-auto  lg:w-3/5"
            dangerouslySetInnerHTML={{
              __html: trans.get("sections.presentation.content"),
            }}
          ></p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center content-center  pt-20 p-5 md:p-10 gap-[3em] sm:gap-[20%]">
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
