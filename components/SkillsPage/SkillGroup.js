import Skill from "./Skill";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function SkillGroup({ name, skills, animationX }) {
  const [ref, inView] = useInView();
  const [width, setWidth] = useState(window.innerWidth);
  const control = useAnimation();
  const sortedSkills = skills
    .sort((a, b) => {
      if (a.level === "Advanced") return 1;
      else if (a.level === "Intermediate") return 1;
      else if (a.level === "Conceptual") return 1;
      else return -1;
    })
    .reverse();

  let boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      x: [animationX, "0%"],
      transition: { duration: 1.5, type: "spring", bounce: 0.3 },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div
      ref={ref}
      initial="hidden"
      variants={boxVariant}
      animate={control}
      className="p-2 md:grid-cols-1 grid grid-cols-2 gap-2 lg:p-6 w-3/4 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="mb-2 pt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="md:block hidden border-b my-6 dark:border-gray-300 border-black w-full"></div>
      {sortedSkills.map((skill, index) => {
        return (
          <Skill
            name={skill.name}
            level={skill.level}
            description={skill.description}
          />
        );
      })}
      {/* <p className="font-normal text-gray-700 dark:text-gray-400"></p> */}
    </div>
  );
}
