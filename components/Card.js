import Image from "next/image";
import { AiOutlineComment } from "react-icons/ai";
import missed from "../public/missed.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card = (props) => {
  useEffect(() => {
    console.log(props)
  
  }, [])
  
  const [show, setShow] = useState(false);
  return (
    <div className=" my-40">
      <div className=" flex justify-center items-center md:flex-col w-full">
        <div
          style={{ boxShadow: "0px 0px 30px 1px rgb(100 100 100)" }}
          className="flex w-60 sm:w-52 relative z-10 mr-[-10%] md:mr-0 md:mb-[-15%] sm:mb-[-24%]"
        >
          <Image
            src={props.image}
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
          className=" rounded-2xl w-[50%] md:w-[90%] md:items-end flex  min-h-[300px] bg-white border-primary border-4 justify-end p-9"
          style={{ boxShadow: "0px 0px 30px 1px rgb(100 100 100)" }}
        >
          <div className="w-[80%] md:w-full flex-col flex justify-between ">
            <h1 className=" text-3xl capitalize text-center"> {props.date}</h1>
            <div
              className={`block rounded-xl w-[60%] mx-auto h-[6px] bg-primary`}
            />
            <div className={`${show ? "block" : "hidden"} p-5`}>
              {props.description}{" "}
            </div>
            {/* <div
              className={`block rounded-xl w-[60%] mx-auto h-[6px] bg-primary`}
            /> */}
            <div className="my-2 flex justify-between items-center">
              <div>
                <Link href={`/Profiles/`+ props.id}>view profile </Link>
              </div>
              <Link href={`/Profiles/`+ props.id + `#comment`} >
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
};

export default Card;
