import TextAnimation from "react-text-animations";

export default function HeaderH() {
  return (
    <div>
      <div className="  bg-[url('../public/home.jpg')] w-full h-[700px]  bg-cover bg-center bg-no-repeat">
        <div className=" w-full h-full bg-black bg-opacity-30 flex justify-center items-center sm:justify-start">
          <div className="text-white w-fit sm:w-[60%] text-5xl md:text-3xl font-bold p-9 h-[40%] flex items-center ">
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
        </div>
      </div>
    </div>
  );
}
