import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Found() {
  const [mainCards, setMainCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getCards = async () => {
    setIsLoading(true)
    let res;
    try {
      res = await axios.get("http://localhost:8000/api/post");
      setIsLoading(false)
      setMainCards(res.data.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getCards();
  }, []);
  return (
    <div> {mainCards.map((mainCard) => {
      let date = mainCard.created_at
        let postDate = date.substring(0, 10);
      let status = (mainCard.status)
      return (
        <div key={mainCard.id} 
        >
          {status == 'Found' ?
        <Card 
        date= {postDate}
        id={mainCard.id}
        key={mainCard.id}
        time={mainCard.created}
        description={mainCard.description}
        image={`http://localhost:8000/uploads/posts/${mainCard.image}`}
         />
         :""}
         </div>
      );
    })}</div>
  )
}
