import Link from "next/link";
import React from "react";

export default function Non() {
  return (
    <div className=" my-32">
      <div className=" flex flex-col items-center font-bold text-secondary animate-pulse">
        <h3 className=" text-9xl md:text-7xl mb-4 text-center"> Sorry</h3>
        <h4 className=" text-5xl md:text-4xl my-4 text-center">
          {" "}
          THIS PAGE IS NOT FOUND
        </h4>
        <p>
          {" "}
          Back to the{" "}
          <u className=" uppercase text-primary">
            <Link href="/"> home</Link>
          </u>{" "}
          page
        </p>
      </div>
      <div className=" flex flex-col">
        <div className=" w-60 h-60 rounded-full bg-primary ml-20 animate-bounce self-end"></div>
        <div className=" w-60 h-60 rounded-full bg-primary ml-20 mb-12 animate-bounce"></div>
        <div className="flex flex-col justify-center items-center ">
          <div className=" w-48 h-48 rounded-full bg-primary mr-40 animate-pulse mb-[-300px] self-end"></div>
          <div className=" w-96 h-96 md:hidden rounded-full bg-primary ml-20 mb-[-400px] animate-bounce"></div>
          <h1 className="font-bold text-[500px] text-secondary lg:text-[300px] md:text-[200px] sm:text-[100px] relative z-10">
            404
          </h1>
          <div className=" w-48 h-48 rounded-full bg-primary ml-32 animate-pulse mt-[-320px] self-start"></div>
        </div>
        <div className=" w-48 h-48 rounded-full bg-primary mr-20 animate-bounce self-end"></div>
      </div>
    </div>
  );
}
