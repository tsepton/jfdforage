import { Navbar } from "flowbite-react";
import trans from "../translations/translator";

export default function NavBar(props: any) {
  return (
    <Navbar className={props.className} fluid={true} rounded={true} >
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
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">{trans.get("navbar.home")}</Navbar.Link>
        <Navbar.Link href="/presentation">{trans.get("navbar.presentation")}</Navbar.Link>
        <Navbar.Link href="/geothermal">{trans.get("navbar.geothermal")}</Navbar.Link>
        <Navbar.Link href="/services">{trans.get("navbar.services")}</Navbar.Link>
        <Navbar.Link href="/pic">{trans.get("navbar.pic")}</Navbar.Link>
        <Navbar.Link href="/contact">{trans.get("navbar.contact")}</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
