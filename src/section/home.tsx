import FooterSection from "@/components/footer_section";
import React, { useEffect, useState } from "react";
import BackgroundCarousel from "@/components/background_carousel";

export default function HomeSection(props: any) {
  // const [height, setHeight] = useState(0);

  // const handleSize = () => {
  //   setHeight(getNavbarHeight());
  // };

  // useEffect(handleSize, []);

  // useEffect(() => {
  //   window.addEventListener("resize", handleSize, false);
  // }, []);

  return (
    <div
      id={props.id}
      // TODO `h-[calc(100vh - ${height}px)]` not working - what the fuck
      className={
        `h-screen p-5 pb-10 bg-gradient-to-b from-transparent to-slate-100 md:p-10 flex justify-center content-center ` +
        props.className
      }
    >
      <BackgroundCarousel></BackgroundCarousel>
      <div className="-translate-y-10 self-center flex flex-col justify-around md:justify-center backdrop-blur-xl bg-white/30 rounded-md p-12">
        <div className="sticky self-center  w-[70vw] md:w-[77vw] md:max-w-[85rem] sm:place-self-end flex justify-center md:justify-end ">
          <img
            src="/img/logo.webp"
            alt="JFD forage logo"
            className="md:h-[25vh] lg:h-[28vh] w-max "
            style={{ filter: "drop-shadow(0 0 0.4rem grey)", zIndex: "1" }}
          />
        </div>
        <div className="flex flex-col justify-center w-[70vw] md:w-[77vw] md:max-w-[85rem] h-fit md:h-[35vh] ">
          <div className="flex flex-col justify-end gap-[1em] pt-12">
            <h1 className="text-4xl md:text-7xl text-jfd-grey text-center md:text-left text-shadow-lg shadow-slate-400">
              JFD forage
            </h1>
            <h2 className="text-xl md:text-2xl text-center md:text-left text-jfd-grey-light">
              Entreprise spécialisée dans la réalisation de forages
              géothermiques.
            </h2>
          </div>
          <FooterSection
            className={"pt-[1em] md:pt-[5em]"}
            currentSection={"#"}
            moreInfo={true}
            showContact={false}
            showText={false}
          ></FooterSection>
        </div>
      </div>
    </div>
  );
}

function getNavbarHeight() {
  if (!process.env.navbarId)
    throw new Error(
      "No navbar id. Check next config file for the navbarId variable."
    );
  const navbarRef = document.getElementById(process.env.navbarId);
  if (!navbarRef)
    throw new Error(
      "No navbar element. Did you forget to include it inside the project?"
    );
  return navbarRef.clientHeight;
}
