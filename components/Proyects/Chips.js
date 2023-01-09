const colors = {
  JavaScript: "bg-yellow-400",
  "Next JS": "bg-gray-500",
  "Tailwind CSS & HTML": "bg-red-600",
  Express: "bg-blue-600",
  JWT: "bg-blue-700",
  SWR: "bg-blue-800",
  Auth0: "bg-blue-900",
  React: "bg-blue-400",
  "CSS & HTML": "bg-red-400",
  ".NET Framework": "bg-gray-900",
  "Windows Forms": "bg-green-800",
  "C#": "bg-green-400",
  "ASP.NET": "bg-orange-400",
};

export default function Chips({ name }) {
  return (
    <div className="float-right cursor-pointer px-2">
      <span
        className={`px-4 py-2 rounded-full text-white font-semibold text-sm flex align-center w-max ${colors[name]}  active:bg-gray-300 transition duration-300 ease`}
      >
        {name}
      </span>
    </div>
  );
}
