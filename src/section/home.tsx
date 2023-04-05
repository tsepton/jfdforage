import React from 'react';

export default function HomeSection(props: any) {
  return (
    <div
      id={props.id}
      // TODO h-screen
      className={"h-screen p-10 pt-10 flex flex-row justify-center " + props.className}
    >
      <h1 className="text-xl font-light text-gray-900">
        Entreprise spécialisée dans la réalisation de forages géothermiques.
      </h1>
    </div>

  );
}

