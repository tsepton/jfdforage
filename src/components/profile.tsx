export default function Profile(props: any) {
  return (
    <div className="flex flex-col gap-[1em]">
      <img
        className="rounded-full w-[12em] h-[12em]"
        src={props.src}
        alt="image description"
      />
      <p className="text-center text-xl text-gray-900 dark:text-white">
        {props.name}
      </p>
    </div>
  );
}
