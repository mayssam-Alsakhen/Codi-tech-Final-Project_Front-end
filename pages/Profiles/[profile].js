import Image from "next/image";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import Heading from "../../components/Reusable/Heading";
import { FaTransgender } from "react-icons/fa";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import Comment from "../../components/Comment";
import Popup from "../../components/Reusable/Popup";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/Reusable/Button";

// export const getStaticPaths = async () => {
//   const res = await axios.get("http://localhost:8000/api/post");
//   const fetch = res.data.data;
//   const paths = fetch.map((m) => {
//     return {
//       params: { profile: m.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   // const userData = await res.json()
//   const profile = context.params.profile;
//   const res = await axios.get(`http://localhost:8000/api/post/${profile}`);
//   // const response = await res[id]
//   return {
//     props: {
//       dataFetched: res.data.data,
//     },
//   };
// };


const Profile = ({ dataFetched }) => {
  const [ deleted, setDeleted] = useState(false)
  const [ unDeleted, setUnDeleted] = useState(false)
  let router= useRouter();
  const deletePost = async(id) =>{
    try{
      await axios.delete(`http://localhost:8000/api/post/${id}`)
      setDeleted(true)
    
      //  router.push('/')
    }catch(err){
      setUnDeleted(true)
     console.log(err)
    }
  
  }
  const [postdata, setPostdata] = useState(dataFetched);
  const [your, setYour] = useState(false)
  useEffect(()=>{
    let userid = localStorage.getItem('id')
    let id = dataFetched.user.id
    console.log('hhhh', postdata)
    
    if(userid == id){
      setYour(true)
      console.log('true..')
    }
    else{
      console.log('no..')
      setYour(false)
    }
  },[])
  return (
    <div className="pb-20">
      {your?
      <div className=" mt-16 ">
      <Button onClick={()=>{deletePost(postdata.id)}} text="Delete" border="2px solid #9e0404" color="#9e0404"/> </div>: ''}
      <Heading text="profile" />
      <div className=" flex items-center justify-center md:flex-col">
        <div className="w-1/4 mr-10 flex md:w-1/2 sm:w-[90%] md:mr-0 md:mb-6 flex-col">
        
          <Image
            src={`http://localhost:8000/uploads/posts/${postdata.image}`}
            alt="missing or found people  image"
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
                <p className=" text-lg">{ postdata.user.phone_number}</p>
              </div>
            </div>
          </div>
        </div>
        <Popup trigger={deleted} onBlur={() => {router.push('/'), setDeleted(false)}}>
      <h1 className="text-xl  mt-11 capitalize"> The post was deleted successfully.</h1>
      
     </Popup>

     <Popup trigger={unDeleted} onBlur={() => setUnDeleted(false)}>
      <h1 className="text-xl  mt-11 capitalize"> The post did not delete, please try again.</h1>
     </Popup>
     
      </div>
    </div>
  );
};

export default Profile;
