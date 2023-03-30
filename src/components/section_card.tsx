import { Card } from "flowbite-react";

export default function SectionCard(props: any) {
  return (
    <Card className="max-w-screen-lg min-w-[77vw] min-h-[25vh]">
      {props.children}
    </Card>
  );
}
