import React from 'react';
import './App.css';
import PeopleRandomizer from './components/PeopleRandomizer';
import { people } from './enums/people';
import { Coworker, Job } from './types/index';

interface RawCoworker {
  emoji: string,
  firstname: string,
  lastname: string,
  age: number,
  job: string
}

const App = () => {
  const coworkers: Coworker[] = people.map((p: RawCoworker) => {
    let job: Job | undefined = undefined
    if(Object.keys(Job).includes(p.job)){
        job = Job[p.job as keyof typeof Job]
    }
    
    return {
        ...p,
        job
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tu seras la poubelle pour aller danser
        </h1>
      </header>
      <div className="content" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/philippe.jpg)`
      }}>
        <PeopleRandomizer coworkers={coworkers} />
      </div>
    </div>
  );
}

export default App;
