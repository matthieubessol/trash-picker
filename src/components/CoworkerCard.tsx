import { People } from "../types";

interface CoworkerCardProps {
  coworker: People;
  isActive: boolean;
  isInactive: boolean;
  onRemove: (coworker: People) => void;
}

const CoworkerCard = ({
  coworker,
  isActive,
  isInactive,
  onRemove,
}: CoworkerCardProps) => (
  <div
    className={`relative grid origin-center scale-100 gap-1.5 overflow-hidden rounded-lg border border-gray-200 bg-white p-2.5  shadow-lg duration-300 ${
      isInactive && !isActive ? "scale-90 opacity-20" : ""
    } ${
      isActive
        ? "scale-120 animate-spin-twice bg-opacity-100 opacity-100 shadow-2xl "
        : ""
    }`}
  >
    <span
      className="absolute top-2.5 right-2.5 cursor-pointer text-red-500"
      onClick={() => onRemove(coworker)}
    >
      Enlever
    </span>
    <div className={`text-4xl ${isActive ? "animate-spin" : ""}`}>
      {coworker.emoji}
    </div>
    <p
      className={`text-xl font-bold text-black transition-colors ${
        isActive ? "text-color-change text-2xl " : ""
      }`}
    >
      {coworker.name}
    </p>
    <p className="text-md">
      {coworker.job} -{" "}
      {`${coworker.age >= 30 ? "👴 <- vieux" : `${coworker.age} ans`}`}
    </p>
  </div>
);

export default CoworkerCard;
