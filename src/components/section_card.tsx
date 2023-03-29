import { Card } from "flowbite-react";

export default function SectionCard(props: any) {
    return (
        <Card className="max-w-screen-lg min-h-[50vh]">{props.children}</Card>
    );
}