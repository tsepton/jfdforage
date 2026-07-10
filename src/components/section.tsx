import { ReactNode } from "react";

export type SectionProps = {
  id?: string;
  /** Tinted background (alternates with the default ground). */
  wash?: boolean;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  wash = false,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 md:py-24 lg:py-28 ${
        wash ? "bg-jfd-ground-2" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
