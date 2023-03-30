import { Button, Navbar } from "flowbite-react";
import trans from "../translations/translator";

export default function NavBar(props: any) {
  const getCurrentSection = () => {
    // FIXME : window is only available at runtime => Use useState from react
    // const uri = location.href.split("#");
    // console.assert(uri.length === 2);
    // return uri[1];
    return "#";
  };

  // TODO update url as user scroll, and update isActive inside the navbar
  // TODO also keep the navbar visible when scrolling

  const scrollHandle = (e: any) => {
    e.preventDefault();

    const href: string = e.target.href;
    const id: string = href.slice(href.indexOf("#"), href.length);
    const position: HTMLElement | null = document.getElementById(id);

    window.location.href = id; // TODO => Set it as reactive
    position?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // TODO
  const isActive = (uri: string) => getCurrentSection() === uri;

  return (
    <Navbar className={props.className} fluid={true} rounded={true}>
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
        <Navbar.Link active={isActive("#")} href="#" onClick={scrollHandle}>
          {trans.get("navbar.home")}
        </Navbar.Link>
        <Navbar.Link
          active={isActive("#presentation")}
          href="#presentation"
          onClick={scrollHandle}
        >
          {trans.get("navbar.presentation")}
        </Navbar.Link>
        <Navbar.Link
          active={isActive("#geothermal")}
          href="#geothermal"
          onClick={scrollHandle}
        >
          {trans.get("navbar.geothermal")}
        </Navbar.Link>
        <Navbar.Link
          active={isActive("#services")}
          href="#services"
          onClick={scrollHandle}
        >
          {trans.get("navbar.services")}
        </Navbar.Link>
        <Navbar.Link
          active={isActive("#photo")}
          href="#photo"
          onClick={scrollHandle}
        >
          {trans.get("navbar.pic")}
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2 p-0">
        <Button href="#contact" onClick={scrollHandle}>
          {trans.get("navbar.contact")}{" "}
        </Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
