import { IoMdSend } from "react-icons/io";
import {useRouter} from "next/router";
import axios from 'axios'
import Popup from '../components/Reusable/Popup'
import { useEffect, useState, useRef} from "react";
export default function Comment() {
  const [comments, setComments] = useState([])
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const { query } = useRouter();
  const form  = useRef();

  useEffect(()=>{
    getAllComments();
  },[])

  const getAllComments = async() =>{
         await axios.get(`http://localhost:8000/api/post/${query.profile}`)
        .then(res =>{
          setComments(res.data.data.comment)
          console.log(res.data.data.user.id)
        
          
        })
        .catch(err => { console.log(err.message)})
  }
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
      console.log(response.status)
    // }else{(
     
    //   // 
    

    // )
      
    }
   
  }
  catch (error) {
   setOpen(true);
    // <Popup trigger={open} >
    //   <h1 className="  mt-11"> hello popup</h1>
    //  </Popup>
      
    console.log('faild')
    console.log(error);
    console.log(query.profile)
    // let id = response.data.id
    console.log(localStorage.getItem('id'))
  }
  //  form.current.reset()
 
 }

 


 


//  const handleSubmitComment = async () => {
//     let data={post_id: query.profile, message: comment, user_id: }
//  }

return (
  <div>
      <div
        id="comment"
        style={{ boxShadow: "0px 5px 50px rgba(0,0,0,.2)" }}
        className=" w-full mx-auto h-fit my-5 py-5 px-2"
      >
        <div className=" flex items-center justify-around">
          <div className=" w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-secondary flex justify-center items-center">
            MR
          </div>
          <input
          ref={form}
            type="text"
            placeholder="comment..."
            className="w-60 lg:w-40 md:w-60 sm:w-52  bg-secondary rounded-full outline-none px-3 py-2"
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
        {comments.map((comment)=> { return(
    <div className=" flex justify-around my-2">
  <div className=" w-9 h-9 rounded-full bg-secondary flex justify-center items-center">
        MR
      </div>

      <div className="  w-[75%] bg-slate-200 flex flex-col py-2 px-5 text-sm h-fit">
        {" "}

        <div className="  capitalize text-gray-500 text-xs pb-2">
          {" "}
         nmae 
        </div>
        
        <div key={comment.id}>
          <div >
       {comment.message}
       
        </div>{" "}
        <div className=" text-gray-500 text-xs pt-2 self-end">
          {" "}
        {comment.created_at}
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
