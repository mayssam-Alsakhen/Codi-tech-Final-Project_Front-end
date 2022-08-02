import { useState } from "react";
import Button from "./Reusable/Button";
import Heading from './Reusable/Heading'
import Input from "./Reusable/Input";

export default function Contact() {
  const [mouseIn, setMouseIn] = useState(false);
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
        <div className=" w-[35%] h-[580px] bg-secondary md:w-full md:h-[300px] md:border-b-2 md:border-primary"></div>
        <div className=" w-[65%] md:w-full h-fit">
          <form className=" px-7" id="contact">
            <div className="w-full flex justify-between my-3 md:flex-col">
              <div className="w-[48%]  md:w-full ">
                <Input
                  label="First Name"
                  id="fname"
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
                id="address"
                width="100%"
                type="text"
                required="required"
              />
            </div>
            <div className=" mt-3 w-full">
              <label htmlFor="message" className=" block text-primary">
                Message
              </label>
              <textarea
                required
                style={{ boxShadow: mouseIn ? "0px 0px 10px 2px #9e0404" : "" }}
                onBlur={onOut}
                onFocus={onIn}
                id="message"
                className="w-full bg-[#DDD] outline-none p-2 mt-2 resize-none "
                rows={9}
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
      </div>
    </div>
  );
}
