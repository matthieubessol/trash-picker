import React, { useState } from "react";
import { Coworker } from "../types";
import CoworkerCard from "./CoworkerCard";

const PeopleRandomizer = ({ coworkers }: { coworkers: Array<Coworker> }) => {
  const [curSelected, setCurSelected] = useState<Coworker | null>(null);
  const [pickedCoworkers, setPickedCoworkers] = useState<Array<Coworker>>([]);
  const namesPicked: string[] = pickedCoworkers.map(
    (c: Coworker) => `${c.firstname} ${c.lastname}`
  );

  const pickRandom = (): void => {
    const toPickCoworkers = coworkers.filter(
      (c: Coworker) => !namesPicked.includes(`${c.firstname} ${c.lastname}`)
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
    pickedName = `${curSelected.firstname} ${curSelected.lastname}`;
  }

  const removeUser = (coworker: Coworker) => {
    setPickedCoworkers([...pickedCoworkers, coworker]);
  };

  return (
    <div className="h-full">
      <div className="bg-blue-400">
        <h2 className="m-0 p-2.5 text-white">La roue de la fortune</h2>
      </div>
      <div className="grid items-center self-center">
        <div className="grid grid-cols-3 items-center gap-5 p-5">
          {coworkers.map((c: Coworker) => {
            const name: string = `${c.firstname} ${c.lastname}`;
            const isActive: boolean = pickedName === name;
            const isInactive: boolean = namesPicked.includes(
              `${c.firstname} ${c.lastname}`
            );

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
            className="cursor-pointer rounded-xl bg-blue-400 p-2.5 font-bold text-white shadow-lg"
            onClick={pickRandom}
          >
            On fait tourner la roue lezgoooo !
          </button>
          <p>J'ai pas eu le temps de faire une roue de la fortune tmtc</p>
        </div>
      </div>
    </div>
  );
};

export default PeopleRandomizer;
