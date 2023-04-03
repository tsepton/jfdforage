import Profile from "@/components/profile";
import SectionCard from "@/components/section_card";
import Section from "../components/section";
import trans from "@/translations/translator";

export default function PresentationSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <h1 className="text-left text-3xl lg:text-4xl font-light text-gray-900 dark:text-white  md:mb-10">
          {trans.get("sections.presentation.title")}
        </h1>
        <div className="flex flex-col md:flex-row-reverse sm:justify-center  text-justify">
          <img
            className="flex-auto m-auto p-5 sm:w-[90%] md:w-[40%] lg:w-1/5 lg:w-[20em] h-fit	"
            src="/img/logo.png"
            alt="Logo JFD forage"
          />
          <span className="flex flex-col gap-[2em]">
            <p
              dangerouslySetInnerHTML={{
                __html: trans.get("sections.presentation.content"),
              }}
            ></p>
            <div className="flex flex-col justify-around gap-[1em]">
              <p className="md-auto justify-self-center">
                {trans.get("sections.presentation.keyword")}
              </p>
              <div className="flex flex-row justify-around md:flex-col justify-right pl-[1.5em]">
                <span className="font-semibold">
                  {trans.get("sections.presentation.react")}
                </span>
                <span className="font-semibold">
                  {trans.get("sections.presentation.prof")}
                </span>
                <span className="font-semibold">
                  {trans.get("sections.presentation.eff")}
                </span>
              </div>
            </div>
          </span>
        </div>
        {/* <div className="flex flex-col sm:flex-row justify-center content-center  pt-20 p-5 md:p-10 gap-[3em] sm:gap-[20%]">
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
        </div> */}
      </SectionCard>
    </Section>
  );
}
