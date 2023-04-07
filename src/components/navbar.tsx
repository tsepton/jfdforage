import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import trans from "../translations/translator";

export default function NavBar(props: any) {
  const [currentSection, setCurrentSection] = useState("#home");

  useEffect(() => {
    window.location.href = currentSection;
    const position: HTMLElement | null =
      document.getElementById(currentSection);
    // FIXME: scroll is broken for home section
    const block: ScrollLogicalPosition = ["#home", "contact"].includes(
      currentSection
    )
      ? "end"
      : "start";
    position?.scrollIntoView({ behavior: "smooth", block });
  }, [currentSection]);

  useEffect(() => {
    const updateOnUrlChange = () =>
      updateSection(undefined, window.location.href);
    window.addEventListener("popstate", updateOnUrlChange);
    return () => {
      window.removeEventListener("popstate", updateOnUrlChange);
    };
  }, []);

  // FIXME: any | undefined
  const updateSection = (e: any, maybeSection: string | undefined) => {
    e?.preventDefault();
    const href: string = maybeSection ?? e.target.href;
    const section: string = href.slice(href.indexOf("#"), href.length);
    setCurrentSection(section);
  };

  const isActive = (uri: string) => uri === currentSection;

  return (
    <Navbar
      id={process.env.navbarId}
      className={props.className + " fixed w-full shadow-md"}
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
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          JFD forage
        </span> */}
      </div>

      <Navbar.Collapse className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {/* <Navbar.Link
          active={isActive("#")}
          href="#home"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.home")}
        </Navbar.Link> */}
        <Navbar.Link
          active={isActive("#presentation")}
          href="#presentation"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.presentation")}
        </Navbar.Link>
        <Navbar.Link
          active={isActive("#geothermal")}
          href="#geothermal"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.geothermal")}
        </Navbar.Link>
        <Navbar.Link
          active={isActive("#services")}
          href="#services"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.services")}
        </Navbar.Link>
        <Navbar.Link
          active={isActive("#permit")}
          href="#permit"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.permit")}
        </Navbar.Link>
        <Navbar.Link
          active={isActive("#photo")}
          href="#photo"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.pic")}
        </Navbar.Link>
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
