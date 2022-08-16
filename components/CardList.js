import axios from "axios";
import { useEffect, useState } from "react";
import HomeCarde from "./HomeCarde";



export default function CardList() {
    const [cards, setCards] = useState([])

    const getAllCard = async () =>{
      const res= await axios.get("http://localhost:8000/api/post")
      setCards(res.data.data);
  
    }
  
    useEffect(()=>{
        getAllCard();
      },[])



  return (
    <div>
     

         <div className=' flex-wrap flex justify-around'>
             {cards.map((card) =>{              
                 return(
                  
                     <HomeCarde key={card.id} id={card.id} image={`http://localhost:8000/uploads/posts/${card.image}`} status={card.status} gender={card.gender} address={card.address} userEmail={card.user.email} userPhone={card.user.phone_number} />
                     
                 )
             })
             }
        </div>
    </div>
  )
}
