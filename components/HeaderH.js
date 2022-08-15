import TextAnimation from "react-text-animations";
import Button from './Reusable/Button'
import { useState, useEffect } from "react";


export default function HeaderH() {
  const [add, setAdd] = useState()
  useEffect(()=>{
    setAdd(localStorage.getItem('user_data'))
  })
  return (
    <div>
      <div className="  bg-[url('../public/home.jpg')] w-full h-[700px]  bg-cover bg-center bg-no-repeat">
        <div className=" w-full h-full bg-black bg-opacity-30 flex  flex-col justify-center items-center sm:justify-start">
          <div className=" text-white w-fit sm:w-[60%] text-5xl md:text-3xl font-bold p-9 h-[40%] flex items-center ">
            <TextAnimation.Flip
              target="Merciful"
              text={["MISSED PERSON", "FOUND PERSON", "COMMENT TO HELP"]}
              animation={{
                duration: 1000,
                delay: 3000,
                timingFunction: "ease-in",
              }}
              loop={true}
            >
              ADD A Merciful
            </TextAnimation.Flip>
          </div>
  {add?
   
  <Button backgroundColor="rgb(247 246 246 / 0.3)" text="Add A Post" color="white" border="2px solid white" width="200px" fontSize="25px" href="/Add"/>:
  <Button backgroundColor="rgb(247 246 246 / 0.3)" text="Add A Post" color="white" border="2px solid white" width="200px" fontSize="25px" href="/Login"/>

  }
        </div>
      </div>
    </div>
  );
}
