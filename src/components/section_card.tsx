import { Card } from "flowbite-react";

export default function SectionCard(props: any) {
  return (
    <div className="max-w-screen-lg min-w-[77vw] min-h-[33vh] ">
      {props.children}
    </div>
  );
}
