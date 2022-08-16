import Image from "next/image";
import logo from "../public/mylogo.png";
import { Navl } from "./nav/Navl";
import Link from "next/link";
import Popup from '../components/Reusable/Popup'
import { useRouter } from "next/router";
import Button from "./Reusable/Button";
import Input from "./Reusable/Input";
import emailjs from '@emailjs/browser';
import {useRef, useState } from "react";

export default function Footer() {
  let router = useRouter();
  const [mouseIn, setMouseIn] = useState(false);
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const form = useRef();
  const onIn = () => {
    setMouseIn(true);
  };
  const onOut = () => {
    setMouseIn(false);
  };
  const handleSubmit = (e) =>{
    setSent(true)
    e.preventDefault();
    emailjs.sendForm('service_7t8dkcp', 'template_h4shwmb', form.current, 'pJwIzZeW45XFNWPpw')
    .then((result) =>{
      console.log(result.text);
    },
    (error)=>{
      setOpen(true)
      console.log(error.text)
    })
    // e.target.reset()
    form.current
    .reset();
  }

  const style = { boxShadow: mouseIn ? "0px 0px 10px 2px #9e0404" : "" }
  return (
    <div className="bg-[url('../public/footer.jpg')] bg-cover bg-center ">
    <div className="bg-opacity-80 bg-secondary text-white">
      <div className=" flex justify-evenly p-2 flex-wrap md:px-6">
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

        <div className=" w-1/4 md:w-1/2 sm:w-full md:text-center sm:my-5">
          <h1 className=" text-xl font-bold whitespace-nowrap">Get In Touch</h1>
          <form className=" w-full p-0" ref={form} onSubmit={handleSubmit}>
            <div className=" flex justify-between w-full md:flex-col">
            <div className="w-[48%]  md:w-full ">
              <Input
                name="name"
                width="100%"
                type="text"
                placeholder="Name"
                required="required"
              />
            </div>
            <div className="w-[48%]  md:w-full ">
              <Input
                name="email"
                width="100%"
                type="email"
                placeholder="Email"
                required="required"
              />
            </div>
            </div>
            <textarea
              required
              style={{style}}
              placeholder="Message"
              name="message"
              rows={4}
              onBlur={onOut}
              onFocus={onIn}
              className="bg-[#DDD] placeholder-primary px-2 w-full rounded-none outline-none text-black my-2"
            />
            <Button type="submit" text="Submit" border=" 2px solid white" />
          </form>
        </div>
        <div className="w-1/4 text-center place-self-center md:w-full">
          <div>
            <Image src={logo} alt="missed and found" width={150} height={130}/>
          </div>
        </div>
      </div>
      <div className=" bg-primary text-white text-center py-1">
        Copyright © {new Date().getFullYear()} Missed & Found
      </div>
    </div>
    <Popup trigger={open} onBlur={() => setOpen(false)}>
        <h1 className=" text-xl mt-11">Please Check Your Connection And Try Again.</h1>
       </Popup>
       <Popup trigger={sent} onBlur={() => setSent(false)}>
        <h1 className="w-[70%] mx-auto text-xl mt-11 capitalize">your message has sent successfully.<br/>will get back to you as soon as possible. pleasee be patient  &#128525;</h1>
       </Popup>
    </div>
  );
}
