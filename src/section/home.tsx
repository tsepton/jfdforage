import FooterSection from "@/components/footer_section";
import trans from "@/translations/translator";
import React, { useEffect, useState } from "react";

export default function HomeSection(props: any) {

  return (
    <div
      id={props.id}
      // TODO `h-[calc(100vh - ${height}px)]` not working - what the fuck
      className={
        `relative h-screen bg-slate-100 p-5 pb-10 md:p-10 flex justify-center content-center overflow-hidden ` +
        props.className
      }
    >
      <img
        src="/img/cover.webp"
        alt="JFD forage logo"
        className="inset-x-0 top-0 absolute brightness-75"
        style={{ zIndex: "0", marginInline: "auto", minWidth: "100vw", minHeight: "100vh", objectFit: "cover", objectPosition: "center" }}
      />

      <div className="-translate-y-10 self-center flex flex-col justify-around md:justify-center p-12">
        <div className="sticky self-center  w-[70vw] md:w-[77vw] md:max-w-[85rem] sm:place-self-end flex justify-center md:justify-start ">
        </div>
        <div className="flex flex-col justify-center w-[70vw] md:w-[77vw] md:max-w-[85rem] h-fit md:h-[35vh] ">
          <div className="flex flex-col justify-end gap-[1em] pt-12">
            <h1 className="text-6xl md:text-7xl text-white text-left md:text-left">
              JFD forage
            </h1>
            <h2 className="text-xl md:text-2xl text-left md:text-left text-white">
              Entreprise spécialisée dans la réalisation de forages
              géothermiques.
            </h2>
          </div>
          <FooterSection
            className={"pt-[10em] md:pt-[15em]"}
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
