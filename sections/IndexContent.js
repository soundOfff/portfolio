import { ArrowDownIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IndexContent({ colors, temas }) {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center space-y-5 pt-20 pb-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="-z-10">
        <Image src="/bg2.svg" fill={true} className="object-cover" />
      </div>
      {/* Headlines */}
      <h2 className="text-4xl flex flex-row w-fit text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100">
        Welcome to my Portfolio
        <Image src="/hand.svg" height={64} width={64} className="ml-4" />
      </h2>
      <div className="w-full grid grid-cols-1 pt-6">
        <div className="flex flex-row justify-center items-center space-x-10">
          <p className="text-sm sm:text-lg text-left text-gray-500 dark:text-gray-200 w-2/5 py-2">
            <b className="text-blue-500">
              Software Developer | System Engenieer
            </b>
            <br />
            Welcome to my portfolio! On this page, you will find a selection of
            projects that I have worked on, both personal and professional. Each
            project includes a brief description of the work that I did and any
            relevant technologies or skills that were used. I hope you enjoy
            exploring my portfolio and learning more about my work. Please feel
            free to contact me if you have any questions or would like to
            discuss a potential project.
          </p>
          <div className="border-2 relative border-black dark:border-white rounded-full h-64 w-64">
            <Image
              src="/pict.jpg"
              height={256}
              width={256}
              className="rounded-full"
            />
            <a className="absolute top-0 -right-6" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                className="w-10 h-10 text-gray-400"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>
            </a>
            <a
              className="absolute top-1/3 pt-5 -right-16"
              href="https://www.linkedin.com/in/tomasbrasca/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-10 h-10 text-gray-400"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </a>
            <a
              className="absolute bottom-0 -right-6"
              href="https://github.com/soundOfff"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-10 h-10 text-gray-400"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-10 w-fit grid grid-cols-1 gap-y-2 gap-x-2 grid-rows-1 lg:grid-cols-3 md:gap-y-4 md:gap-x-10 md:grid-rows-2 sm:grid-cols-2 ">
        {/* Componente tipo icon que te lleve a la seccion correspondiente para no repetir */}
        {temas.map((tema, i) => {
          return (
            <button className="sm:w-72 w-52  btn text-ellipsis  relative inline-flex items-center justify-start overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 group">
              <span
                className={`w-0 h-0 rounded absolute ${colors[i]} top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1`}
              ></span>
              <span className="w-full text-ellipsis truncate text-black transition-colors dark:text-gray-400 duration-300 ease-in-out group-hover:text-white z-10">
                {tema}
              </span>
            </button>
          );
        })}
      </div>
      <a className=" text-white mx-auto" type="button" onClick={null}>
        <Image
          height={128}
          width={128}
          src="/scrollAn.gif"
          className="bg-transparent"
        />
        <div className="w-32">
          <h3 className="font-bold float-left px-2 dark:text-white text-black">
            Scroll Down
          </h3>
          <ArrowDownIcon className="h-5 w-5" />
        </div>
      </a>
    </section>
  );
}
