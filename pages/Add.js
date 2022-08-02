import Input from "../components/Reusable/Input";
import Image from "next/image";
import { RiCameraOffFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Reusable/Button";
export default function Add() {
  const [mouseIn, setMouseIn] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const onIn = () => {
    setMouseIn(true);
  };
  const onOut = () => {
    setMouseIn(false);
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview("");
    }
  }, [image]);

  const fileInputRef = useRef();

  return (
    <div>
      <div className=" py-32">
        <form
          style={{ boxShadow: "0px 0px 4px 5px gray" }}
          className=" w-[70%] mx-auto p-7 md:w-[85%] sm:w-[95%]"
        >
          <h1 className=" my-4 sm:mb-9 text-primary text-5xl sm:text-3xl font-bold">
            {" "}
            Add A Post
          </h1>
          {preview ? (
            <div className="my-7 flex flex-col items-center">
              <div className=" w-40 h-40 rounded-full">
                <Image
                  src={preview}
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
              <div
                className=" relative z-10 text-xl w-8 h-8 mt-[-35px] ml-[55%] bg-primary rounded-full flex justify-center items-center"
                onClick={() => {
                  setImage(null);
                }}
              >
                <RiCameraOffFill className=" text-white" />
              </div>
            </div>
          ) : (
            <button
              className="my-7 w-40 h-40 rounded-full bg-[url('../public/prof.png')] bg-cover"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
              required
            >
              {" "}
            </button>
          )}

          <div className=" hidden">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
          </div>
          <div className="w-full flex justify-between my-3 sm:my-0 md:flex-col">
            <div className="w-[48%]  md:w-full ">
              <Input
                label=" Name"
                id="name"
                htmlFor="name"
                width="100%"
                type="text"
                required="required"
              />
            </div>
            <div className="w-[48%] md:w-full sm:my-3">
              <Input
                label="Status"
                htmlFor="status"
                id="status"
                width="100%"
                type="text"
                required="required"
              />
            </div>
          </div>
          <div className="w-full flex justify-between my-3 sm:my-0 md:flex-col">
            <div className="w-[48%]  md:w-full ">
              <Input
                label="Age"
                id="age"
                htmlFor="age"
                width="100%"
                type="text"
                required="required"
              />
            </div>
            <div className="w-[48%] md:w-full sm:my-3">
              <Input
                label="Gender"
                htmlFor="gender"
                id="gender"
                width="100%"
                type="text"
                required="required"
              />
            </div>
          </div>
          <div className="w-full flex justify-between my-3 sm:my-0 md:flex-col">
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
            <div className="w-[48%] md:w-full sm:my-3">
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
          <div className=" my-3 w-full">
            <label htmlFor="description" className=" block text-primary">
              Description
            </label>
            <textarea
              required
              style={{ boxShadow: mouseIn ? "0px 0px 10px 2px #9e0404" : "" }}
              onBlur={onOut}
              onFocus={onIn}
              id="description"
              className="w-full bg-[#DDD] outline-none p-2 my-2"
              rows={9}
            />
          </div>
          <Button text="add" backgroundColor="#9e0404" color="white" type="submit" fontSize="20px"/>
        </form>
      </div>
    </div>
  );
}
