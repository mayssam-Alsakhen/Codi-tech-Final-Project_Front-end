import { useState } from "react"
export default function Input({onChange, name,type, value, htmlFor, label, id, width, height, placeholder, required, marginTop}) {
  const [mouseIn, setMouseIn] = useState(false);
  const onIn = () =>{
    setMouseIn(true)
  };
  const onOut = () =>{
    setMouseIn(false)
  }
  const style = { boxShadow: mouseIn ? '0px 0px 10px 2px #9e0404' : ''}
  return (
    <div>
        <label htmlFor={htmlFor} className="block text-primary">{label}</label>
        <input 
        style={{ style, width, height, marginTop}}
        onBlur={onOut}
        onFocus={onIn}
        className=" capitalize bg-[#e0e0e0] outline-none h-9 px-2 my-2 placeholder-primary text-black"
        type={type}
        placeholder={placeholder}
        required={required}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        
        />
    </div>
  )
}
