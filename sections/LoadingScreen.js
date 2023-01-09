import utn from "../public/utn.svg";
import Image from "next/image";
import { useState } from "react";
export default function LoadingScreen() {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      style={{ height: "100vh" }}
    >
      <Image
        src="./utnDark.svg"
        height={180}
        width={180}
        className="animate-pulse"
      />
      <div className="flex items-center pt-4">
        <h2 className="font-bold text-3xl">Loading</h2>
        <div
          className={`${circleCommonClasses} mr-1 animate-bounce self-end`}
        ></div>
        <div
          className={`${circleCommonClasses} mr-1 animate-bounce200 self-end`}
        ></div>
        <div
          className={`${circleCommonClasses} animate-bounce400 self-end`}
        ></div>
      </div>
    </div>
  );
}
