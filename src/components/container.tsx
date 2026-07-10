import { ReactNode } from "react";

export default function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
