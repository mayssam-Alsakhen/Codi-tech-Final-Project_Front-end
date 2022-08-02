import Link from "next/link";
import { Navl } from "./Navl";
import Image from "next/image";
import logo from "../../public/logo.webp";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";
import { useState } from "react";
import UseReadingProgress from "../Hooks/UseReadingProgress";
import Button from "../Reusable/Button";
import Input from "../Reusable/Input";

export default function Nav() {
  var primary = "#9e0404";
  const [Menu, setMenu] = useState(false);
  const completion = UseReadingProgress();
  const router = useRouter();
  return (
    <div>
    <div className="fixed right-0 left-0 top-0 z-50 ">
      <div className="  flex justify-between bg-black bg-opacity-60 px-5">
        <div className="flex mr-3">
          <Image src={logo} alt="missed and found" width={120} height={60} />
        </div>
        <nav className=" md:hidden flex items-center ml-7">
          <ul className=" flex items-center text-white">
            {Navl.map((k) => {
              return (
                <li key={k.id}>
                  <Link href={k.link}>
                    <a
                      className={`${
                        router.pathname == k.link
                          ? "border-b-2 border-primary text-primary"
                          : ""
                      }  mx-7 lg:mx-4 whitespace-nowrap hover:text-primary font-bold`}
                    >
                      {k.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className=" flex justify-between items-center">
          <div className="flex items-center justify-end">
            {Menu ? null : (
              <div className="flex justify-center items-center md:hidden">
                <input
                  id="search"
                  className="w-[70%] outline-none pl-2 focus:border-b-2 focus:border-white bg-transparent text-white"
                  type="text"
                />
                <label htmlFor="search">
                  <VscSearch className=" w-7 h-7 text-[25px] sm:text-[20px] text-white" />
                </label>
              </div>
            )}
          </div>

          <div className="flex items-center">
            <div>
              <Button
                text="Login"
                href="/Login"
                backgroundColor={primary}
                color="white"
              />
            </div>
            {Menu ? null : (
              <div
                className={`hidden w-10 h-10 sm:h-7  sm:w-7 justify-center  md:inline-flex items-center rounded-full border-2 border-white`}
                onClick={() => {
                  setMenu(true);
                }}
              >
                <AiOutlineMenu className="text-white cursor-pointer text-3xl sm:text-xl" />
              </div>
            )}
          </div>
        </div>
      </div>
      <span
        style={{ transform: ` translateX(${completion - 100}%)` }}
        className=" w-full h-1 absolute bottom-0 bg-primary "
      />
</div>
{Menu ? (
        <div className="flex mt-16 right-0 z-30 fixed justify-end ">
          <div className=" bg-gradient-to-l from-secondary to-[#49b1e9] w-[500px] h-[500px] rounded-b-[50%] sm:w-[400px] rounded-l-[50%] flex-col flex items-center ml-7">
            <div
              className="flex justify-end  w-full"
              onClick={() => {
                setMenu(false);
              }}
            >
              {" "}
              <IoIosCloseCircleOutline className=" text-4xl m-3 text-white" />
            </div>
            <div className=" flex justify-end w-full">
              <Input
                type="text"
                marginTop="28px"
                width="80%"
                id="side search"
              />
              <label htmlFor="side search">
                <VscSearch className=" w-7 h-7 text-[25px] sm:text-[20px] text-white mt-7 mx-9" />
              </label>
            </div>
            <ul className=" flex flex-col content-between justify-between h-60 self-center mt-9">
              {Navl.map((k) => {
                return (
                  <li key={k.id} >
                    <Link href={k.link}>
                      <a
                        className={`${
                          router.pathname == k.link
                            ? "border-2 border-b-white"
                            : ""
                        } py-3 px-7 lg:px-4 whitespace-nowrap hover:border-2 hover:border-b-white text-white`}
                      >
                        {k.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
