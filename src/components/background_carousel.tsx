import static_asset_listing from "../gallerie_files.json";

export default function BackgroundCarousel() {
  const images = static_asset_listing.map((file) => {
    const uri = `/img/gallerie/${file}`;
    return (
      <span key={uri}>
        <img src={uri} alt="Photo chantier" />
      </span>
    );
  });

  return (
    <div className="inset-x-0 top-0 absolute w-screen overflow-hidden	">
      <div className="scroll">
        <div className="m-scroll">{images}</div>
      </div>
    </div>
  );
}
