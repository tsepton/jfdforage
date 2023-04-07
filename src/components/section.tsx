import { Card } from "flowbite-react";

export default function Section(props: any) {
  return (
    <div
      id={props.id}
      className={
        "p-7 sm:10 md:p-20 flex flex-row justify-center " + props.className
      }
    >
      {props.children}
    </div>
  );
}
