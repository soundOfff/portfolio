import Proyect from "../components/Proyect";
import useSWR from "swr";
import Spinner from "../components/Proyects/Spinner";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Proyects() {
  const { data, error } = useSWR("/api/staticproyectdata", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <Spinner size="h-16 w-16" />;

  const parsedData = JSON.parse(data);

  return (
    <section className="my-10 w-full h-fit" id="proyects">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100 ">
          Proyects
        </h2>
        <ul className="pt-10 grid grid-cols-1 gap-8 w-full h-full space-y-10">
          {parsedData.proyects.map(
            ({ proyectName, description, tech, src }) => {
              return (
                <Proyect
                  name={proyectName}
                  description={description}
                  tech={tech}
                  src={src}
                />
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
}
