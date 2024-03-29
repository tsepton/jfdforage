import { ReactElement } from "react";

export default function ContactIcon(props: any): ReactElement {
  const href = (!!props.mail ? "mailto:" : "tel:") + props.text;
  return (
    <div className="flex flex-row items-center gap-[1em] md:gap-[1em] text-2xl font-light text-gray-900">
      <span>{props.icon}</span>

      <a className="min-w-max" href={href} target="_blank">
        {props.text}
      </a>
    </div>
  );
}
