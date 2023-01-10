import SkillGroup from "../components/SkillsPage/SkillGroup";
import useSWR from "swr";

const showAnimation = ["-100%", "0%", "100%"];

const fetcher = (url) => fetch(url).then((res) => res.json());

// const convertedData = JSON.parse(skillData).map((data) => {});

export default function Skills() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  const parsedData = JSON.parse(data);

  return (
    <section id="skills" className="block" style={{ minHeight: "100vh" }}>
      <div className="w-full h-full flex flex-col justify-center items-center pt-10 space-y-10">
        <h2 className="text-2xl text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100 ">
          My Skills
        </h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 w-full h-fit justify-items-center">
          {parsedData.skills.map((subSkill, index) => {
            return (
              <SkillGroup
                name={subSkill.name}
                skills={subSkill.skills}
                animationX={showAnimation[index]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
