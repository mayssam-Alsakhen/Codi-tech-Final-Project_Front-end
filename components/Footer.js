import Image from "next/image";
import logo from "../public/logo.webp";
import { Navl } from "./nav/Navl";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Reusable/Button";
import Input from "./Reusable/Input";
import { useState } from "react";

export default function Footer() {
  let router = useRouter();
  const [mouseIn, setMouseIn] = useState(false);
  const onIn = () => {
    setMouseIn(true);
  };
  const onOut = () => {
    setMouseIn(false);
  };
  const style = { boxShadow: mouseIn ? "0px 0px 10px 2px #9e0404" : "" }
  return (
    <div className="bg-secondary text-white">
      <div className=" flex justify-evenly p-4 flex-wrap md:px-6 my-5 ">
        <div className="w-1/4 md:w-1/2 md:text-center  sm:w-full">
          <h1 className=" text-xl font-bold whitespace-nowrap">Quick Links</h1>
          <div>
            <ul className="px-3 flex flex-col md:items-center my-3">
              {Navl.map((k) => {
                return (
                  <li
                    key={k.id}
                    className={`${
                      router.pathname == k.link
                        ? "border-b-2 border-primary text-primary"
                        : ""
                    } hover:text-primary w-fit text-center my-1`}
                  >
                    <Link href={k.link}>
                      <a className={`whitespace-nowrap`}>{k.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className=" w-1/4 md:w-1/2 sm:w-full md:text-center my-5">
          <h1 className=" text-xl font-bold whitespace-nowrap">Get In Touch</h1>
          <form className=" w-full p-0">
            <div className=" w-full">
            <Input
              type="text"
              placeholder="Name"
              width="100%"
              required="required"
            />
            </div>
            <div className=" w-full">
            <Input
              type="email"
              placeholder="Email"
              width="100%"
              required="required"
            />
            </div>
            <textarea
              required
              style={{style}}
              placeholder="Message"
              rows={4}
              onBlur={onOut}
              onFocus={onIn}
              className="bg-[#DDD] placeholder-primary px-2 w-full rounded-none outline-none text-black my-2"
            />
            <Button type="submit" text="Submit" border=" 2px solid white" />
          </form>
        </div>
        <div className="w-1/4 text-center place-self-center md:w-full my-5">
          <div>
            <Image src={logo} alt="missed and found" width={150} height={130}/>
          </div>
        </div>
      </div>
      <div className=" bg-primary text-white text-center">
        Copyright © {new Date().getFullYear()} Missed & Found
      </div>
    </div>
  );
}
