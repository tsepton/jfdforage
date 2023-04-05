import { highlight } from "@/section/shared_classes";
import trans from "@/translations/translator";
import { useEffect, useState } from "react";

export default function FooterSection(props: {
  className: string,
  currentSection: string,
  moreInfo: boolean,
  showContact: boolean;
  showText: boolean;
}) {
  const [nextSection, setNextSection] = useState("");

  const sections: string[] = [
    "#",
    "#presentation",
    "#geothermal",
    "#services",
    "#permit",
    "#photo",
    "#contact",
  ];

  const handleNextSection = () => {
    const index = sections.findIndex(section => section === props.currentSection);
    if (index > sections.length) return setNextSection(props.currentSection);
    else return setNextSection(sections[index + 1]);
  };

  useEffect(handleNextSection, []);

  const text = props.showText
    ? <div className={highlight + "w-[100%] text-center"}> {trans.get("sections.questions")}</div>
    : <></>;

  const contact = props.showContact
    ? <a href="#contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-jfd-orange hover:bg-jfd-grey focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
      {trans.get("sections.getInTouch")}
      <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </a>
    : <></>;

  const info = props.moreInfo
    ? <a href={nextSection} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">  {trans.get("sections.info")}  </a>
    : <></>;

  return (
    <div className={"w-[100%] flex flex-col gap-[2em] " + props.className} >
      {text}
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        {contact}
        {info}
      </div>
    </div >
  );
}