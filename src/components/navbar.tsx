import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import trans from "../translations/translator";

export default function NavBar(props: any) {
  const [currentSection, setCurrentSection] = useState("#");

  useEffect(() => {
    window.location.href = currentSection;
    const position: HTMLElement | null =
      document.getElementById(currentSection);
    // FIXME: scroll is broken for home section 
    const block: ScrollLogicalPosition = currentSection == "#" ? "start" : "center";
    position?.scrollIntoView({ behavior: "smooth", block });
  }, [currentSection]);

  const updateSection = (e: any, maybeSection: string | undefined) => {
    e.preventDefault();
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
    >
      <Navbar.Brand href="/">
        <img
          src="/img/logo.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="JFD forage Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          JFD forage
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <Navbar.Link
          active={isActive("#")}
          href="#"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.home")}
        </Navbar.Link>
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
        <Button
          className="bg-jfd-orange hover:bg-jfd-orange-light"
          onClick={(e) => updateSection(e, "#contact")}
        >
          {trans.get("navbar.contact")}{" "}
        </Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
