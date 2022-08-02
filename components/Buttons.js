import Button from "./Reusable/Button";

export default function Buttons() {
  return (
    <div>
      <div className=" flex justify-around md:flex-col md:items-center my-5">
      <Button text="Missed Page" color="#9e0404" border="2px solid #9e0404" width="200px" fontSize="20px" margin="12px" href="/missed"/>
      <Button text="Found Page"  color="#9e0404" border="2px solid #9e0404" width="200px" fontSize="20px" margin="12px" href="/found"/>
      <Button text="Add A Post" color="#9e0404" border="2px solid #9e0404" width="200px" fontSize="20px" margin="12px" href="/Add"/>
      </div>

  </div>
  )
}
