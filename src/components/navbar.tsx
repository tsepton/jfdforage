import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import trans from "../translations/translator";

export default function NavBar(props: any) {
  const [currentSection, setCurrentSection] = useState("#presentation");

  useEffect(() => {
    window.location.href = currentSection;
    const position: HTMLElement | null =
      document.getElementById(currentSection);
    position?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [currentSection]);

  const updateSection = (e: any, maybeSection: string | undefined) => {
    e.preventDefault();
    const href: string = maybeSection ?? e.target.href;
    const section: string = href.slice(href.indexOf("#"), href.length);
    setCurrentSection(section);
  };

  // TODO
  const isActive = (uri: string) => uri === currentSection;

  return (
    <Navbar
      className={props.className + " fixed w-full shadow-md"} // FIXME: content goes under the navbar (added a temporary padding on the parent for now)
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
        {/* <Navbar.Link
          active={isActive("#")}
          href="#"
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
        {/* <Navbar.Link
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
        </Navbar.Link> */}
        <Navbar.Link
          active={isActive("#photo")}
          href="#photo"
          onClick={(e) => updateSection(e, undefined)}
        >
          {trans.get("navbar.pic")}
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2 p-0">
        <Button onClick={(e) => updateSection(e, "#contact")}>
          {trans.get("navbar.contact")}{" "}
        </Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
