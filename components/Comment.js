import { IoMdSend } from "react-icons/io";

export default function Comment() {
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
            type="text"
            placeholder="comment..."
            className="w-60 lg:w-40 md:w-60 sm:w-52  bg-secondary rounded-full outline-none px-3 py-2"
          />
          <button type="submit" className="">
            <IoMdSend className=" text-xl" />
          </button>
        </div>
        <div className=" mt-4">
          <div className=" flex justify-around my-2">
            <div className=" w-9 h-9 rounded-full bg-secondary flex justify-center items-center">
              MR
            </div>

            <div className=" w-[75%] bg-slate-200 flex flex-col py-2 px-5 text-sm h-fit">
              {" "}
              <div className=" capitalize text-gray-500 text-xs pb-2">
                {" "}
                mayssam ran
              </div>
              <div>
                {" "}
                save your kids in your home and outside in everywhere just keep
                them away of the danger.
              </div>{" "}
              <div className=" capitalize text-gray-500 text-xs pt-2 self-end">
                {" "}
                12:00 Am
              </div>{" "}
            </div>
          </div>
          <div className=" flex justify-around my-2">
            <div className=" w-9 h-9 rounded-full bg-secondary flex justify-center items-center">
              MR
            </div>
            <div className="w-[75%] bg-slate-200 flex flex-col py-2 px-5 text-sm h-fit">
              {" "}
              <div className=" capitalize text-gray-500 text-xs pb-2">
                {" "}
                mayssam ran
              </div>{" "}
              <div>
                {" "}
                save your kids in your home and outside in everywhere just keep
                them away of the danger start thinking more about them mnvnvfvr
                dbkjfekr efnfkn,.
              </div>{" "}
              <div className=" capitalize text-gray-500 text-xs pt-2 self-end">
                {" "}
                12:00 Am
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
