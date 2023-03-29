import { Card } from "flowbite-react";

export default function Section(props: any) {
  return (
    // FIXME content-center not working
    <div className="p-2 content-evenly">
      {props.children}
    </div>
  );
}