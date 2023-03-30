import { Card } from "flowbite-react";

export default function SectionCard(props: any) {
  return (
    <div className="max-w-screen-lg w-[90vw] md:w-[77vw] min-h-[33vh] 2xl:max-w-[50%]">
      {props.children}
    </div>
  );
}
