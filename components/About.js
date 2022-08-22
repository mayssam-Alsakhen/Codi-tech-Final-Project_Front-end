import Link from 'next/link'
import Image from "next/image";
import about from "../public/abouts.webp";
import Heading from "./Reusable/Heading";
export default function About() {
  return (
    <div className="my-40">
      <Heading text="about" text2="us"/>
      <div className=" flex  w-[85%] mx-auto items-center justify-between flex-wrap">
        <div className=" w-[47%] text-xl leading-8 md:w-full text-justify md:text-base">
          This site is for people who have lost a family member, friend or
          anyone they know It is also for anyone who finds a young child or an
          adult who has lost his/her memory by accident or maybe some kind of
          torture or lost consciousness and they do not have the ability to say
          anything about their background, family name, home address or any
          information that can help bring them back to their families and their
          home.
          <u className=" cursor-pointer py-3 w-56 text-primary"><Link href="/about">Read More</Link></u>

        </div>

        <div className=" w-[47%] md:w-full mt-4 ">
          <Image src={about} alt=" about missig and found person website" style={{borderRadius:"20px"}} />
        </div>
      </div>
    </div>
  );
}
