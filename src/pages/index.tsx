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
    <div
      className="grid min-h-screen bg-black bg-opacity-50 bg-cover text-center"
      style={{
        backgroundImage: `url(/bill.jpg)`,
      }}
    >
      <div className="grid bg-black bg-opacity-50">
        <header className="flex flex-col items-center justify-center ">
          <h1 className="text-3xl font-bold text-white">
            Tu seras la poubelle pour aller danser
          </h1>
        </header>
        <PeopleRandomizer coworkers={coworkers} />
      </div>
    </div>
  );
};

export default Home;
