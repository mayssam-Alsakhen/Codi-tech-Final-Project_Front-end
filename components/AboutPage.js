import Heading from "./Reusable/Heading";
import Image from "next/image";
import login from '../public/login.png'
import register from '../public/register.png'
import add from '../public/add.png'
import form from '../public/form.png'

export default function AboutPage() {
  return (
    <div className=" my-32">
<div>
  <Heading text="About" text2="Missed" text3="and" text4="Found"/>
<div className=" w-[50%] md:w-[80%] text-lg mx-auto text-justify leading-8">
    <span className=" block my-3">We always hear about persons who left their home in order to do something or to visit someone in a usual way without any problems, then they never back or appear in mysterious circumstances, also no one can call them, know where are they or get any information about them.</span>
    <span className=" block my-3">In the other hand we have know a lot of people who found young persons who lost their memory by accident or maybe some kind of torture or a little kids so they do not have the ability to share their name, family name, home address or any information that can help bring them back to their families.</span>
    <span className=" block my-3 ">And all these cases were present before but now it has doubled or more especially in the countries that has bad security conditions.
 posted on different social media sites </span>
</div>
</div>
<div className=" mt-9">
  <Heading text="how" text2="to" text3="use" text4="it"/>
<div className="w-[80%] mx-auto text-lg ">
  <div className=" gap-32 flex  items-center md:flex-col md:gap-5 py-3">
    <div className=" border-primary border-2 flex w-[30%] md:w-[70%] mx-auto">
  <Image src={login} alt="login button for missed and found" width={320} height={70} />
  </div>
  <p className=" text-start w-[60%] md:w-[95%] mx-auto">
- Click on login button to login or register
</p>
</div>
<div className=" gap-32 flex  items-center md:flex-col md:gap-5 py-3">
  <div className=" border-primary border-2 flex w-[30%] md:w-[70%] mx-auto">
  <Image src={register} alt="login button for missed and found" width={500} height={300} />
  </div>
  <p className=" text-start w-[60%] md:w-[95%] mx-auto">
- Fill the form to log in, If you do not have an account click on 'register' button and submit it.
</p>
</div>
<div className=" gap-32 flex  items-center md:flex-col md:gap-5 py-3">
  <div className=" border-primary border-2 flex w-[30%] md:w-[70%] mx-auto">
  <Image src={add} alt="add button for missed and found" width={300} height={150} />
  </div>
  <p className=" text-start w-[60%] md:w-[95%] mx-auto">
- After that you can click on 'Add A Post' button below.
</p>
</div>
<div className=" gap-32 flex  items-center md:flex-col md:gap-5 py-3">
  <div className=" border-primary border-2 flex w-[30%] md:w-[70%] mx-auto">
  <Image src={form} alt="add form missed and found" width={300} height={150} />
  </div>
  <p className=" text-start w-[60%] md:w-[95%] mx-auto">
- Fill all the form to the end and add it by clicking 'Add' button.
</p>
</div>
</div>
</div>
    </div>
  )
}
