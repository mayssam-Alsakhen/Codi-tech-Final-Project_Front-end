import Image from "next/image";
import missed from "../../public/missed.jpg";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import Heading from "../../components/Reusable/Heading";
import { FaTransgender } from "react-icons/fa";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import Comment from "../../components/Comment";
import axios from "axios";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:8000/api/post");
  const fetch = res.data.data;
  const paths = fetch.map((m) => {
    return {
      params: { profile: m.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // const userData = await res.json()
  const profile = context.params.profile;
  const res = await axios.get(`http://localhost:8000/api/post/${profile}`);
  // const response = await res[id]
  return {
    props: {
      dataFetched: res.data.data,
    },
  };
};

const Profile = ({ dataFetched }) => {
  const [postdata, setPostdata] = useState(dataFetched);

  return (
    <div className="pb-20">
      <Heading text="profile" />
      <div className=" flex items-center justify-center md:flex-col">
        <div className="w-1/4 mr-10 flex md:w-1/2 sm:w-[90%] md:mr-0 md:mb-6 flex-col">
          <Image
            src={missed}
            alt="missed or found people  image"
            width={300}
            height={300}
          />
          <Comment />
        

        </div>
        <div className="py-12 border-l-2 border-secondary  w-[65%] md:border-l-0 md:border-t-2 md:w-[90%] md:py-4 ">
          <div className=" text-justify text-lg leading-9 w-[85%] md:w-full mx-auto">
            <div>
            {postdata.description}
            </div>
          </div>
          <div className=" flex justify-around md:justify-between w-[85%] md:w-full mx-auto my-9 ">
            <div className="w-1/4 text-secondary md:w-1/3 sm:w-1/2 flex flex-col items-start">
              <div className="flex justify-around items-center my-3">
                {" "}
                <MdPersonRemoveAlt1 className=" text-3xl mx-2" />{" "}
                <p className=" text-lg"> {postdata.status}</p>
              </div>
              <div className="flex justify-around items-center my-3">
                {" "}
                <FaTransgender className=" text-3xl mx-2" />{" "}
                <p className=" text-lg"> {postdata.gender}</p>
              </div>
              <div className="flex justify-around items-center my-3">
                {" "}
                <FaUsers className=" text-3xl mx-2" />{" "}
                <p className=" text-lg"> {postdata.age} Years</p>
              </div>
            </div>
            <div className="w-1/4 text-secondary md:w-1/3 sm:w-1/2 flex flex-col items-start">
              <div className="flex justify-around items-center my-3">
                {" "}
                <ImLocation2 className=" text-3xl mx-2" />{" "}
                <p className=" text-lg"> {postdata.address}</p>
              </div>
              <div className="flex justify-around items-center my-3">
                {" "}
                <MdEmail className=" text-3xl mx-2" />{" "}
                <p className=" text-lg"> {postdata.user.email}</p>
              </div>
              <div className="flex justify-around items-center my-3">
                {" "}
                <AiFillPhone className=" text-3xl mx-2" />{" "}
                <p className=" text-lg"> {postdata.user.phone_number}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
