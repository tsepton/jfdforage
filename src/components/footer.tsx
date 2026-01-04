import { Footer as TailwindFooter } from "flowbite-react";

export default function FooterM(props: any) {

  const year: number = new Date().getFullYear();

  return (
    <TailwindFooter className={props.className} container={true}>
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <TailwindFooter.Brand
          href="/"
          src="img/logo.webp"
          alt="JFD forage Logo"
        />
        <TailwindFooter.Copyright
          href="http://tsepton.be"
          by="Made with ❤	by tsepton"
          year={year}
        />
      </div>
    </TailwindFooter>
  );
}