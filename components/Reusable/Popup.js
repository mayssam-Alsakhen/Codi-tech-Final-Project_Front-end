import {AiFillCloseCircle} from 'react-icons/ai'

export default function Popup(props) {
  return (props.trigger) ? ( 
    <div className=" z-50 fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-20 flex justify-center items-center">
    
        <div className=" relative p-8 rounded-2xl mx-auto w-[50%] bg-white flex-col flex items-center min-h-fit h-80">
        <button className=" self-end"><AiFillCloseCircle onClickCapture={props.onBlur} className=' text-3xl text-primary'/></button>
      {props.children}
        </div>

        </div>
  )
  : ''
}
