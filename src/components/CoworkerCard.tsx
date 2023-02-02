import { Coworker } from "../types";

const CoworkerCard = ({
  coworker,
  isActive,
  isInactive,
  onRemove,
}: {
  coworker: Coworker;
  isActive: boolean;
  isInactive: boolean;
  onRemove: (coworker: Coworker) => void;
}) => (
  <div
    className={`relative origin-center scale-100 rounded-xl bg-white bg-opacity-70 p-2.5 duration-300 ${
      isInactive && !isActive ? "scale-90 opacity-20" : ""
    } ${
      isActive
        ? "scale-110 animate-spin-twice bg-opacity-100 opacity-100 shadow-lg"
        : ""
    }`}
  >
    <span
      className="absolute top-2.5 right-2.5 cursor-pointer text-red-500"
      onClick={() => onRemove(coworker)}
    >
      Enlever
    </span>
    <div className={`text-3xl ${isActive ? "animate-spin" : ""}`}>
      {coworker.emoji}
    </div>
    <p
      className={`text-xl text-black transition-colors ${
        isActive ? "text-color-change text-2xl font-bold" : ""
      }`}
    >
      {coworker.firstname} {coworker.lastname}
    </p>
    <p className="text-lg">
      {coworker.job} -{" "}
      {`${coworker.age >= 30 ? "👴 <- vieux" : `${coworker.age} ans`}`}
    </p>
  </div>
);

CoworkerCard.defaultProps = {
  isActive: false,
  isInactive: false,
};

export default CoworkerCard;
