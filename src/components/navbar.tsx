import { Navbar } from "flowbite-react";
import trans from "../translations/translator";

export default function NavBar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="/img/logo.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          JFD forage
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home">{trans.get("navbar.home")}</Navbar.Link>
        <Navbar.Link href="/contact">{trans.get("navbar.contact")}</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
