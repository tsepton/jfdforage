import { ReactElement } from "react";

export default function ContactIcon(props: any): ReactElement {
  return (
    <div className="flex flex-row items-center gap-[1em] md:gap-[1em] text-2xl font-light text-gray-900">
      <span>{props.icon}</span>
      <span className="min-w-max">{props.text}</span>
    </div>
  );
}
