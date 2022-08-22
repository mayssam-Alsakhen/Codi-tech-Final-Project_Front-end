import {useRef, useState, SyntheticEvent } from "react";
import Button from "./Reusable/Button";
import Heading from './Reusable/Heading'
import Input from "./Reusable/Input";
import Popup from '../components/Reusable/Popup'

import Image from "next/image";
import illustration from '../public/Service.gif'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [mouseIn, setMouseIn] = useState(false);
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const form = useRef()
  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_7t8dkcp', 'template_pwcye9r', form.current, 'pJwIzZeW45XFNWPpw')
    .then((result) =>{
      console.log(result.text);
      setSent(true)
    },
    (error)=>{
      setOpen(true)
      console.log(error.text)
    })
    form.current.reset()
  }

  const onIn = () => {
    setMouseIn(true);
  };
  const onOut = () => {
    setMouseIn(false);
  };
  return (
    <div className=" my-40">
      <div>
        <Heading text="contact"  text2="us"/>
      </div>
      <div
        style={{ boxShadow: "5px -12px 5px 5px #888888" }}
        className="h-fit w-[70%] sm:w-[85%] mx-auto mt-16 flex md:flex-col border-t-[6px] border-primary"
      >
        <div className="flex items-center justify-center w-[35%] h-[580px] bg-secondary md:w-full md:h-[300px] md:border-b-2 md:border-primary">
        <div className="">
          <Image src={illustration} alt=" contact missing and found" width={400} height={290}/>
          </div>
        </div>
        <div className=" w-[65%] md:w-full h-fit">
          <form className=" px-7" id="contact" ref={form}  onSubmit={handleSubmit}>
            <div className="w-full flex justify-between my-3 md:flex-col">
              <div className="w-[48%]  md:w-full ">
                <Input
                  label="First Name"
                  id="fname"
                  name="fname"
                  htmlFor="fname"
                  width="100%"
                  type="text"
                  required="required"
                />
              </div>
              <div className="w-[48%] md:w-full">
                <Input
                  label="Last Name"
                  htmlFor="lname"
                  id="lname"
                  name="lname"
                  width="100%"
                  type="text"
                  required="required"
                />
              </div>
            </div>
            <div className="w-full flex justify-between my-3 md:flex-col">
              <div className=" w-[48%] md:w-full">
                <Input
                  label="Email Address"
                  htmlFor="email"
                  name= "email"
                  id="email"
                  width="100%"
                  type="email"
                  required="required"
                />
              </div>
              <div className="w-[48%] md:w-full">
                <Input
                  label="Phone Number"
                  htmlFor="phone"
                  name="phone"
                  id="phone"
                  width="100%"
                  type="text"
                  required="required"
                />
              </div>
            </div>
            <div className=" w-full my-3">
              <Input
                label="Address"
                htmlFor="address"
                name="address"
                id="address"
                width="100%"
                type="text"
                required="required"
              />
            </div>
            <div className=" mt-3 w-full">
              <label htmlFor="message"  className=" block text-primary">
                Message
              </label>
              <textarea
                required
                // style={{ boxShadow: mouseIn ? "0px 0px 10px 2px #9e0404" : "" }}
                onBlur={onOut}
                onFocus={onIn}
                id="message"
                className="w-full bg-[#DDD] outline-none p-2 mt-2 resize-none "
                rows={9}
                name="message"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        style={{ boxShadow: "5px 12px 15px 10px #888888" }}
        className=" w-[70%] mx-auto h-20 mt-6 border-b-[6px] flex border-primary"
      >
        <div className=" w-[35%] bg-secondary h-full md:hidden"></div>
        <div className="flex items-center content-center w-[65%] justify-center md:w-full">
          <Button
            form="contact"
            type="submit"
            text="Submit"
            color="white"
            backgroundColor="#9e0404"
            
          />
        </div>
        <Popup trigger={open} onBlur={() => setOpen(false)}>
        <h1 className=" text-xl mt-11">your message has sent successfully.<br/>will get back to you as soon as possible. pleasee be patient  &#128525;</h1>
       </Popup>
       <Popup trigger={sent} onBlur={() => setSent(false)}>
        <h1 className="w-[70%] mx-auto text-xl mt-11 capitalize">your message has sent successfully.<br/>will get back to you as soon as possible. pleasee be patient  &#128525;</h1>
       </Popup>
      </div>
    </div>
  );
}
