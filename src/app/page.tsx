import PeopleRandomizer from "../components/PeopleRandomizer";
import { getCorworkers } from "./actions/coworkers/getCoworkers";

const Home = async () => {
  const coworkers = await getCorworkers();

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
