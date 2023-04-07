export default function Profile(props: any) {
  return (
    <div className="flex flex-col items-center content-center gap-[1em]">
      <img
        className="rounded-full w-[12em] h-[12em] shadow-md"
        src={props.src}
        alt={props.alt}
      />
      <p className="text-center text-xl text-gray-900 dark:text-white ">
        {props.name}
      </p>
    </div>
  );
}
