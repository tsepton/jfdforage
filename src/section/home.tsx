import { Button } from 'flowbite-react';
import React from 'react';

export default function HomeSection(props: any) {

  const moveToPresentation = () => window.location.href = "#presentation";

  return (
    <>
      <div
        id={props.id}
        // TODO h-screen  && bg-[url('/img/logo.png')]
        className={"h-screen p-5 bg-gradient-to-b from-jfd-blue to-slate-100 md:p-10 flex flex-col justify-around" + props.className}
      >
        <div className='self-center	sm:place-self-end'>
          <img
            src="/img/logo.png"
            alt="JFD forage logo"
            className="h-[22vh] md:h-[25vh] lg:h-[33vh] w-max "
            // FIXME : the logo goes on the navbar when scrolling
            style={{ 'filter': 'drop-shadow(0 0 0.1rem white)', 'zIndex': '1' }}
          />
        </div>
        <div className='flex flex-col justify-end gap-[2em] h-[35vh]'>
          <h1 className="text-5xl md:text-7xl text-jfd-grey text-left">
            JFD forage
          </h1>
          <h2 className="text-2xl md:text-2xl text-left text-jfd-grey-light">
            Entreprise spécialisée dans la réalisation de forages géothermiques.
          </h2>
          <Button onClick={moveToPresentation}>Découvrir nos services</Button>
        </div>
      </div>
    </>
  );
}

