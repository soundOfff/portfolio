// Crear obj con colores, se renderiza
const colors = {
  Intermediate: "text-Intermediate",
  Basic: "text-Basic",
  Advanced: "text-Advanced",
  Conceptual: "text-Conceptual",
};

import { CheckCircleIcon } from "@heroicons/react/solid";
export default function Skill({ name, level, description }) {
  return (
    <div className="flex flex-col py-2 px-2 text-center  hover:bg-gray-700 rounded-xl">
      <div className="">
        <p className="text-xl font-bold ">{name}</p>
        <CheckCircleIcon className={` h-6 w-6 float-left  text-${level} `} />
      </div>
      <b className={`${colors[level]} text-center`}>{level}</b>
      {description !== "" ? `:${description}` : null}
    </div>
  );
}
