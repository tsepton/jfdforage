export default function SectionHeader({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-[70ch] ${className}`}>
      <span className="mb-4 inline-flex items-center gap-2.5 font-heading text-[13px] font-semibold uppercase tracking-[0.16em] text-jfd-teal">
        <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-jfd-teal to-jfd-teal-bright" />
        {eyebrow}
      </span>
      <h2 className="mb-4 font-heading text-3xl font-extrabold leading-[1.08] text-jfd-ink md:text-[2.75rem]">
        {title}
      </h2>
      {lead && (
        <p className="text-lg leading-relaxed text-jfd-ink-soft md:text-xl">
          {lead}
        </p>
      )}
    </div>
  );
}
