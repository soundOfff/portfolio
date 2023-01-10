import {
  BriefcaseIcon,
  SupportIcon,
  AcademicCapIcon,
  DocumentDownloadIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full flex" style={{ minHeight: "100vh" }}>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl flex flex-row w-fit text-gray-800 leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100">
          About Me
        </h1>
        <div className="text-center pt-10">
          <h3 className="text-white dark:text-gray-400 text-lg ">
            Introduction
          </h3>
        </div>
        <div className="pt-10 grid grid-cols-3 gap-x-10 sm:gap-x-20">
          <motion.div
            whileHover={{
              scale: [1, 1.2],
              transition: { duration: 0.4 },
              textShadow: "2px 2px 6px white",
            }}
            href="#"
            className="block max-w-sm p-6 text-center bg-white border
            border-gray-200 rounded-lg shadow-md hover:bg-gray-100
            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <BriefcaseIcon className="h-8 w-8 mx-auto" />
            <h5 className="mb-2 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Proyects Completed
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              48 + Proyects.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: [1, 1.2],
              transition: { duration: 0.4 },
              textShadow: "2px 2px 6px white",
            }}
            href="#"
            className="block max-w-sm p-6 text-center bg-white border
            border-gray-200 rounded-lg shadow-md hover:bg-gray-100
            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <SupportIcon className="h-8 w-8 mx-auto" />
            <h5 className="mb-2 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Support
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Online 24/7.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: [1, 1.2],
              transition: { duration: 0.4 },
              textShadow: "2px 2px 6px white",
            }}
            href="#"
            className="block max-w-sm p-6 text-center bg-white border
            border-gray-200 rounded-lg shadow-md hover:bg-gray-100
            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <AcademicCapIcon className="h-8 w-8 mx-auto" />
            <h5 className="mb-2 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Experience
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              1/2 Year.
            </p>
          </motion.div>
        </div>
        <p className="pt-20 w-1/2 text-xl dark:text-gray-400 text-black">
          I am a highly motivated software developer with a business orientation
          and a strong background in complex systems. Currently, I am pursuing a
          degree in System Engineering, which has further enhanced my technical
          skills and knowledge. I am always looking for new challenges and
          opportunities to learn and grow as a developer and as a future
          professional. I am constantly seeking out opportunities to learn about
          and work with new technologies, as I am deeply passionate about
          staying current in the field of software development.
        </p>
        <a href="assets/resume_tomasBrasca.pdf" download>
          <button className="btn dark:bg-blue-800 hover:bg-blue-700 mt-10">
            Download CV
            <DocumentDownloadIcon className="h-8 w-8 ml-4 float-right" />
          </button>
        </a>
      </div>
    </section>
  );
}
