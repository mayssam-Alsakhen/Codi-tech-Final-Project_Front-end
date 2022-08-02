import Image from "next/image";
import { AiOutlineComment } from "react-icons/ai";
import missed from "../public/missed.jpg";
import Link from "next/link";
import { useState } from "react";

export default function Card() {
  const [show, setShow] = useState(false);

  return (
    <div className=" my-40">
      <div className=" flex justify-center items-center md:flex-col w-full">
        <div
          style={{ boxShadow: "0px 0px 30px 1px rgb(100 100 100)" }}
          className="flex w-60 sm:w-52 relative z-10 mr-[-10%] md:mr-0 md:mb-[-15%] sm:mb-[-24%]"
        >
          <Image
            src={missed}
            alt=" missed or found person"
            width={270}
            height={240}
          />
        </div>
        <div
          onMouseOver={() => {
            setShow(true);
          }}
          onMouseOut={() => {
            setShow(false);
          }}
          className=" rounded-2xl w-[50%] md:w-[90%] md:items-end flex  min-h-[300px] bg-secondary justify-end p-9"
        >
          <div className="w-[80%] md:w-full flex-col flex justify-between ">
            <h1 className=" text-3xl capitalize text-center"> 19/8/2022</h1>
            <div className={`${show ? "block" : "hidden"} p-5`}>
              description for the post but not all of it if it too long just
              about 15 to 20 words but it short a little bit so maybe it needs
              to be about 30 to 35 words{" "}
            </div>
            <div
              className={`${
                !show ? "block" : "hidden"
              } mt-5 rounded-xl w-full mx-auto h-[6px] bg-primary`}
            />
            <div className="my-2 flex justify-between items-center">
              <div>
                <Link href="/profile">view profile </Link>
              </div>
              <Link href="/profile/#comment">
                <div>
                  {" "}
                  <AiOutlineComment className="mx-2 text-3xl sm:text-2xl cursor-pointer" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
