import FooterSection from '@/components/footer_section';
import { Button } from 'flowbite-react';
import React from 'react';

export default function HomeSection(props: any) {

  const moveToPresentation = () => window.location.href = "#presentation";

  return (
    <>
      <div
        id={props.id}
        // TODO 150px - get it from the navbar
        className={"h-[calc(100vh-110px)] p-5 bg-gradient-to-b from-slate-300 to-slate-100 md:p-10 flex justify-center content-center" + props.className}
      >
        <div
          className=" w-[90vw] md:w-[77vw] max-w-[80rem] flex flex-col justify-around">
          <div className='self-center	sm:place-self-end'>
            <img
              src="/img/logo.png"
              alt="JFD forage logo"
              className="h-[22vh] md:h-[25vh] lg:h-[33vh] w-max "
              // FIXME : the logo goes on the navbar when scrolling
              style={{ 'filter': 'drop-shadow(0 0 0.4rem grey)', 'zIndex': '1' }}
            />
          </div>
          <div
            className='grow flex flex-col justify-end gap-[1em] h-[35vh]'>
            <h1 className="text-5xl md:text-7xl text-jfd-grey text-left text-shadow-lg shadow-slate-400">
              JFD forage
            </h1>
            <h2 className="text-2xl md:text-2xl text-left text-jfd-grey-light">
              Entreprise spécialisée dans la réalisation de forages géothermiques.
            </h2>
          </div>
          <FooterSection className={'pt-[5em]'} currentSection={'#'} moreInfo={true} showContact={false} showText={false}></FooterSection>
        </div>
      </div>
    </>
  );
}

