import { IoMdSend } from "react-icons/io";
import {useRouter} from "next/router";
import axios from 'axios'
import {GoKebabVertical} from 'react-icons/go'
import Popup from '../components/Reusable/Popup'
import { useEffect, useState, useRef} from "react";
export default function Comment() {
  const [comments, setComments] = useState([])
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [ deleted, setDeleted] = useState(false)
  const [ unDeleted, setUnDeleted] = useState(false)
  const [your, setYour] = useState(false)
  const [name, setName] = useState('')
  const [namee, setNamee] = useState()
  const { query } = useRouter();
  const form  = useRef();

  useEffect(()=>{
    let userid = localStorage.getItem('id')
    let id = comments.map((co)=>{co.comment_id})
    console.log('coo', id)
   
    if(userid == id){
      setYour(true)
      console.log('true..')
    }
    else{
      console.log('no..')
      setYour(false)
    }
  },[])

  useEffect(()=>{
    getAllComments();
    let value = localStorage.getItem('name')
    
     setName(value)
     
    
  },[])

  const getAllComments = async() =>{
         await axios.get(`http://localhost:8000/api/post/${query.profile}`)
        .then(res =>{
          setComments(res.data.data.comment)
        
          
        })
        .catch(err => { console.log(err.message)})
  }

  const deletePost = async(id) =>{
    try{
      await axios.delete(`http://localhost:8000/api/comment/${id}`)
      setDeleted(true)
       router.push('/')
    }catch(err){
      setUnDeleted(true)
     console.log(err)
    }}

 const handleSubmit = async (e) =>{
   try{
    e.preventDefault();
   let response= await axios.post("http://localhost:8000/api/comment", {
      message: message,
      post_id: query.profile,
      user_id:localStorage.getItem('id')
    });
    console.log('success')
    if(response.status == 200){
      getAllComments();
      
    }
   
  }
  catch (error) {
   setOpen(true);
    console.log('faild')
    console.log(error);
    console.log(localStorage.getItem('id'))
  }
 }
return (
  <div>
      <div
        id="comment"
        style={{ boxShadow: "0px 5px 50px rgba(0,0,0,.2)" }}
        className=" w-full mx-auto h-fit my-5 py-5 px-2"
      >
        <div className=" flex items-center justify-around">
          {name ? 
          <div className="capitalize  w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-secondary flex justify-center items-center">
           {name[0]}
          </div>  : ''}
          <input
          ref={form}
            type="text"
            placeholder="comment..."
            className="w-60 lg:w-40 md:w-60 sm:w-52  bg-[#e0e0e0] rounded-full outline-none px-3 py-2"
            name="message"
            onChange={(e)=> {(setMessage(e.target.value))}}
         
          />
          <button type="submit" 
          onClick={handleSubmit}
         
          >
            <IoMdSend className=" text-xl" />
          </button>
        </div>
   <div className="mt-4">
        {comments.map((comment)=> {
          let co = comment.created_at;
          let time = co.substring(11,16);
          let date = co.substring(0, 10);
          let name = comment.user_name.name;
          let char = name.charAt(0)
         
          return(
      
          
    <div key={comment.id} className=" flex justify-around my-2">
  <div className=" capitalize w-9 h-9 rounded-full bg-secondary flex justify-center items-center">
       
        {char}
      </div>

      <div className="  w-[75%] bg-slate-200 flex flex-col py-2 px-5 text-sm h-fit">
        {" "}

        <div className=" flex justify-between capitalize text-gray-500 text-xs pb-2">
          {" "}
          <div> {comment.user_name.name}</div>
          <div>
          {your?
       <GoKebabVertical/> : ''}
          </div>
         
        </div>
        
        <div key={comment.id}>
          <div >
       {comment.message}
       
        </div>{" "}
        <div className=" text-gray-500 text-xs pt-1 flex justify-between">
          {" "}
          <div>
        {date}
        </div>
        <div>
         {time}
         </div>
        </div></div> 
      </div>
    </div>
        )})}
  </div>
  
      </div>
      <Popup trigger={open} onBlur={() => setOpen(false)}>
      <h1 className="text-xl  mt-11"> Please Login Before Adding A Comment</h1>
     </Popup>
    </div>
  );
}
