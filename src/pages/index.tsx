import React from "react";
import PeopleRandomizer from "../components/PeopleRandomizer";
import { people } from "../enums/people";
import { Coworker, Job } from "../types/index";

interface RawCoworker {
  emoji: string;
  firstname: string;
  lastname: string;
  age: number;
  job: string;
}

const Home = () => {
  const coworkers: Coworker[] = people.map((p: RawCoworker) => {
    let job: Job | undefined = undefined;
    if (Object.keys(Job).includes(p.job)) {
      job = Job[p.job as keyof typeof Job];
    }

    return {
      ...p,
      job,
    };
  });

  return (
    <div className="grid min-h-screen text-center">
      <header className="flex flex-col items-center justify-center bg-green-400">
        <h1 className="text-2xl font-bold text-white">
          Tu seras la poubelle pour aller danser
        </h1>
      </header>
      <div
        className="bg-cover"
        style={{
          backgroundImage: `url(/philippe.jpg)`,
        }}
      >
        <PeopleRandomizer coworkers={coworkers} />
      </div>
    </div>
  );
};

export default Home;
