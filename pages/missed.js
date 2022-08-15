import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
// import Popup from "../components/Reusable/Popup";

export default function Missed() {
  const [mainCards, setMainCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  // const [ open, setOpen] = useState(false)

  const getCards = async () => {
    setIsLoading(true)
    let res;
    try {
      res = await axios.get("http://localhost:8000/api/post");
      setIsLoading(false)
      setMainCards(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    // <>
    // {isLoading? (<p>Loading...</p>) : (<div>
    //   {mainCards.map((mainCard) => {
    //     return (
    //       <Card 
    //       key={mainCard._id}
    //       time={mainCard.created}
    //       description={mainCard.description}
    //        />
    //     );
    //   })}
    // </div>)
    // }
    // </>
    <div 
    // onClick={() => setOpen(true)}
    >
      {mainCards.map((mainCard) => {
        return (
          <Card 
          id={mainCard.id}
          key={mainCard.id}
          time={mainCard.created}
          description={mainCard.description}
           />
        );
      })}
     {/* <Popup trigger={open} onBlur={() => setOpen(false)}>
      <h1 className="  mt-11"> hello popup</h1>
     </Popup> */}
    </div>
  );
}
