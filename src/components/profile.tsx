export default function Profile(props: any) {
  return (
    <div className={props.className}>
      <div className="flex flex-col items-center content-center gap-[1em]">
        <img
          className="rounded-full shadow-xl"
          src={props.src}
          alt={props.alt}
          />
        <p className="text-center text-xl text-gray-900 dark:text-white text-shadow shadow-slate-300">
          {props.name}
        </p>
      </div>
    </div>
  );
}
