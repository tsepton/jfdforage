import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import trans from "../translations/translator";

export default function NavBar(props: any) {
  const [currentSection, setCurrentSection] = useState<undefined | string>(
    undefined
  );

  useEffect(() => {
    if (!currentSection) return;
    if (window.location.href !== currentSection)
      window.location.href = currentSection;
    const position: HTMLElement | null =
      document.getElementById(currentSection);
    const block: ScrollLogicalPosition = ["#home", "contact"].includes(
      currentSection
    )
      ? "end"
      : "start";
    position?.scrollIntoView({ behavior: "smooth", block });
    setCurrentSection(undefined);
  }, [currentSection]);

  useEffect(() => {
    const updateOnUrlChange = () =>
      updateSection(undefined, window.location.href);
    window.addEventListener("popstate", updateOnUrlChange);
    return () => {
      window.removeEventListener("popstate", updateOnUrlChange);
    };
  }, []);

  // FIXME typing
  const updateSection = (e: any, maybeSection: string | undefined) => {
    e?.preventDefault();
    const href: string = maybeSection ?? e.target.href;
    const section: string = href.slice(href.indexOf("#"), href.length);
    setCurrentSection(section);
  };

  return (
    <Navbar
      id={process.env.navbarId}
      className={props.className + " sticky top-0 w-full shadow-md "}
      fluid={true}
      rounded={true}
      style={{ zIndex: "100" }}
    >
      <div>
        <a href="#home">
          <img
            src="/img/logo.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="JFD forage Logo"
          />
        </a>
      </div>

      <Navbar.Collapse className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <a
          className="hover:text-jfd-orange"
          href="#presentation"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.presentation")}
        </a>
        <a
          className="hover:text-jfd-orange"
          href="#geothermal"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.geothermal")}
        </a>
        <a
          className="hover:text-jfd-orange"
          href="#services"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.services")}
        </a>
        <a
          className="hover:text-jfd-orange"
          href="#permit"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.permit")}
        </a>
        <a
          className="hover:text-jfd-orange"
          href="#photo"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.pic")}
        </a>
      </Navbar.Collapse>

      <div className="flex md:order-2 p-0">
        <a
          href="#contact"
          className="inline-flex justify-center items-center py-2 px-3 text-base text-center text-white bg-jfd-orange hover:bg-jfd-grey focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          {trans.get("sections.getInTouch")}
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
