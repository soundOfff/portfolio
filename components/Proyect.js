import { PlayIcon, PauseIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Spinner from "./Proyects/Spinner";
import Chips from "./Proyects/Chips";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Proyect({ name, description, tech, src }) {
  const [hidden, setHidden] = useState(true);
  const [loaded, setLoaded] = useState(true);
  const control = useAnimation();
  const [ref, inView] = useInView();

  const handleClick = () => {
    setHidden(!hidden);
    setLoaded(true);
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const handleOnLoad = () => {
    if (!hidden) setLoaded(true);
  };
  const splited = src.split("/");

  const staticSrc =
    "/" +
    splited[1] +
    "/Frame" +
    splited[2].slice(9, splited[2].length - 4) +
    ".png";

  const pauseIconRef = useRef();

  return (
    <motion.li
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <li
        className="flex flex-row w-full mx-auto dark:bg-gray-800 bg-white shadow-xl rounded-lg px-4 py-8 relative justify-center space-x-20 items-center"
        style={{ height: "45vh" }}
      >
        <div className="w-1/3 text-left h-3/4 overflow-y-auto mt-10">
          <h4 className="text-lg md:text-2xl pb-5 text-center font-medium text-gray-900 dark:text-gray-100 self-end">
            {name}
          </h4>
          <p className="text-lg dark:text-gray-400 text-black overflow-y-auto">
            {description}
          </p>
        </div>
        <a
          className="w-2/4 transform hover:scale-[1.01] transition-all rounded-xl h-full  bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          onMouseOver={(e) => {
            if (!hidden) {
              pauseIconRef.current.style.display = "inline";
            }
          }}
          onMouseOut={(e) => {
            if (!hidden) {
              pauseIconRef.current.style.display = "none";
            }
          }}
        >
          <div className="flex justify-center h-full w-full bg-white dark:bg-gray-900 rounded-lg p-2">
            <Image
              src={!hidden ? src : staticSrc}
              alt="Proyect Gif"
              width={700}
              height={240}
              className="object-cover overflow-hidden rounded-lg brightness-75"
              onLoadingComplete={handleOnLoad}
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 25vw,
            33vw"
            />
            {hidden && loaded && (
              <div className="absolute flex items-center top-0 bottom-0">
                <PlayIcon
                  height={128}
                  width={128}
                  onClick={handleClick}
                  className="text-gray-600  pt-5 opacity-75 cursor-pointer"
                />
              </div>
            )}
            {!hidden && (
              <div className="absolute flex items-center top-0 bottom-0">
                <PauseIcon
                  height={128}
                  width={128}
                  ref={pauseIconRef}
                  onClick={handleClick}
                  className="text-gray-600  pt-5 opacity-75 cursor-pointer"
                  style={{ display: "none" }}
                />
              </div>
            )}
            {!hidden && !loaded && <Spinner size="h-8 w-8" />}
          </div>
        </a>
        <div className="h-9 absolute top-5 -left-20">
          {tech.map((name) => {
            return <Chips name={name} />;
          })}
        </div>
      </li>
    </motion.li>
  );
}
