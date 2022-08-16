import Input from "../components/Reusable/Input";
import Image from "next/image";
import { RiCameraOffFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from "../components/Reusable/Button";
import { useRouter } from "next/router";

function Add() {
  let router = useRouter();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData() ;
    formData.append('name', name)
    formData.append('age', age)
    formData.append('gender', gender)
    formData.append('address', address)
    formData.append('status', status)
    formData.append('description', description)
    formData.append('image', image)
    
    const token = localStorage.getItem('user_data');
    const config = {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }

  };

   console.log("formData ",formData)

    //here i mean you need to add the token in the header
    try {
      let res = await axios.post("http://localhost:8000/api/post", formData, config);
      console.log("response ",res)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{

    let token = localStorage.getItem('user_data');
    if(token){
    router.push('/Add')
    }
    else{
    router.push('Login')
    }

  },[])

  /*

    const config = {
      "Authorization" : `Bearer ${localstorage.getItem(user.token)}`
    }

    axios.post('/api/endpoint', {request_body}, config)
  */

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
          noValidate
          onSubmit={handleSubmit}
          style={{ boxShadow: "0px 0px 4px 5px gray" }}
          className="w-[70%] mx-auto p-7 md:w-[85%] sm:w-[95%]"
          encType="multipart/form-data"
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
            >
              {" "}
            </button>
          )}

          <div className=" hidden">
            <input
              name="image"
              required
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
                value={name}
                name="name"
                htmlFor="name"
                width="100%"
                type="text"
                required="required"
                onChange={ (e)=> setName(e.target.value)}
              />
            </div>
            <div className="w-[48%] md:w-full sm:my-3">
              <label className=" text-primary" htmlFor="status">
                Status
              </label>
              <select
                value={status}
                name=" status"
                className="outline-none w-full my-2 h-9 px-2"
                id="status"
                onChange={ (e)=> setStatus(e.target.value)}

              >
                <option></option>
                <option   onChange={ (e)=> setStatus(e.target.value)}>Missed</option>
                <option   onChange={ (e)=> setStatus(e.target.value)}>Found</option>
              </select>

              {/* <Input
                label="Status"
                htmlFor="status"
                id="status"
                width="100%"
                type="text"
                required="required"
              /> */}
            </div>
          </div>
          <div className="w-full flex justify-between my-3 sm:my-0 md:flex-col">
            <div className="w-[48%]  md:w-full ">
              <Input
                label="Age"
                id="age"
                htmlFor="age"
                width="100%"
                value={age}
                type="text"
                required="required"
                name="age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="w-[48%] md:w-full sm:my-3">
              <label className=" text-primary" htmlFor="gender">
                Gender
              </label>
              <select
                name=" gender"
                value={gender}
                className="outline-none w-full my-2 h-9 px-2"
                id="gender"
                onChange={ (e)=> setGender(e.target.value)}

              >
                <option></option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
              {/* <Input
                label="Gender"
                htmlFor="gender"
                id="gender"
                width="100%"
                type="text"
                required="required"
              /> */}
            </div>
          </div>
          {/* <div className="w-full flex justify-between my-3 sm:my-0 md:flex-col">
            <div className=" w-[48%] md:w-full">
              <Input
                label="Email Address"
                htmlFor="email"
                id="email"
                width="100%"
                type="email"
                required="required"
                name="email"
                onChange={handleChange}
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
          </div> */}
          <div className=" w-full my-3">
            <Input
              label="Address"
              htmlFor="address"
              id="address"
              width="100%"
              type="text"
              value={address}
              name="address"
              required="required"
              onChange={ (e)=> setAddress(e.target.value)}

            />
          </div>
          <div className=" my-3 w-full">
            <label htmlFor="description" className=" block text-primary">
              Description
            </label>
            <textarea
              required
              value={description}
              id="description"
              className="w-full bg-[#DDD] outline-none p-2 my-2"
              rows={9}
              name="description"
              onChange={ (e)=> setDescription(e.target.value)}
              
            />
          </div>
          <Button
            text="add"
            backgroundColor="#9e0404"
            color="white"
            type="submit"
            fontSize="20px"
          />
        </form>
      </div>
    </div>
  );
}

export default Add;
