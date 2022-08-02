import Image from "next/image";
import img from "../public/missed.jpeg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Link from "next/link";
import axios from "axios";


export default function HomeCarde({res}) {
  const card = [
    {
      id: 1,
      img: img,
      title: "missed",
      gender: "male",
      email: "poster email",
      phone: "090909",
      address: "something",
    },
  ];

  const [show, setShow] = useState(false);
  const more = () => {
    setShow(true);
  };
  const less = () => {
    setShow(false);
  };

  return (
    <div>
      {card.map((m) => (
        <div key={m.id} className="w-72 h-[600px] m-7 sm:mx-auto flex  flex-col items-center">
          <div className="h-fit rounded-3xl">
            <Image
              style={{ borderRadius: "24px" }}
              src={img}
              alt="missed or found person picture "
              width={300}
              height={350}
            />
          </div>
          <div
            style={{ boxShadow: "3px 4px 15px 10px #888888" }}
            className="pt-60 mt-[-230px] w-80 h-fit"
            key={m.id}
          >
            <div className="text-center capitalize bg">
              <span className=" text-3xl "> {m.title}</span>
              <p>{m.gender}</p>
            </div>
            {show ? (
              <div className=" flex justify-end text-xl m-3" onClick={less}>
                <IoIosArrowUp />
              </div>
            ) : (
              <div className=" flex justify-end text-xl m-3" onClick={more}>
                <IoIosArrowDown />
              </div>
            )}
            {show ? (
              <div>
                <div className="mx-[6px] my-4 text-gray-600 flex justify-between items-center">
                  <SiGmail className=" text-2xl" />
                  <p className=" whitespace-nowrap">{m.email}</p>
                </div>

                <div className="mx-[6px] my-4 text-gray-600 flex justify-between items-center">
                  <FaPhoneAlt className=" text-2xl" />
                  <p className=" whitespace-nowrap">{m.phone}</p>
                </div>
                <div className="mx-[6px] my-4 text-gray-600 flex justify-between items-center">
                  <ImLocation2 className="text-2xl" />
                  <p className=" whitespace-nowrap">{m.address}</p>
                </div>
                <Link href="/profile">
                  <div className="cursor-pointer mx-[6px] my-4 text-gray-600 flex justify-between items-center">
                    <FaUserCircle className=" text-2xl" />
                    <p className=" whitespace-nowrap">view profile</p>
                  </div>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}


export async function getStaticProps(){

  const data =await axios.get('localhost:8000/api/post')
  const res = await data.json()
  console.log(res);
  console.log(data);


  return{
    props:{
      res
    }
  }
}
