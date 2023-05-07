"use client";

import React, { useState } from "react";
import { People } from "../types";
import CoworkerCard from "./CoworkerCard";

const PeopleRandomizer = ({ coworkers }: { coworkers: People[] }) => {
  const [curSelected, setCurSelected] = useState<People | null>(null);
  const [pickedCoworkers, setPickedCoworkers] = useState<People[]>([]);
  const namesPicked: string[] = pickedCoworkers.map((c: People) => c.name);

  const pickRandom = (): void => {
    const toPickCoworkers = coworkers.filter(
      (c: People) => !namesPicked.includes(c.name)
    );

    if (!toPickCoworkers?.length) {
      alert("Tout le monde a été pris !");
      return;
    }

    // Very important line, do not remove, might brake legacy.
    new Audio(`/lezgo.mp3`).play();
    const pickedIndex =
      Math.floor(Math.random() * toPickCoworkers.length - 1) + 1;
    const newPicked = toPickCoworkers[pickedIndex];
    setCurSelected(newPicked);
    removeUser(newPicked);
  };

  let pickedName: string = "";
  if (curSelected) {
    pickedName = curSelected.name;
  }

  const removeUser = (coworker: People) => {
    setPickedCoworkers([...pickedCoworkers, coworker]);
  };

  return (
    <div className="h-full">
      <h2 className="m-0 mb-2.5 text-white">La roue de la fortune</h2>
      <div className="grid items-center self-center">
        <div className="grid grid-cols-3 items-center gap-5 p-5">
          {coworkers.map((c: People) => {
            const name: string = c.name;
            const isActive: boolean = pickedName === name;
            const isInactive: boolean = namesPicked.includes(c.name);

            return (
              <CoworkerCard
                isActive={isActive}
                isInactive={isInactive}
                coworker={c}
                key={name}
                onRemove={removeUser}
              />
            );
          })}
        </div>

        <div>
          <button
            className="mr-2 mb-2 rounded-lg bg-blue-700 px-10 py-5 text-lg font-medium text-white hover:bg-blue-800 focus:outline-none  focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
            onClick={pickRandom}
          >
            On fait tourner la roue lezgoooo !
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleRandomizer;
