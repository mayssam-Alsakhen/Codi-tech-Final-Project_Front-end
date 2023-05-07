import axios from "axios";
import { useEffect, useState } from "react";
import HomeCarde from "./HomeCarde";



export default function CardList() {
    const [cards, setCards] = useState([])

    const getAllCard = async () =>{
      console.log("getalll")
      await axios.get("http://localhost:8000/api/post")
      .then(res =>{
        console.log("rrr ",res.data)
        setCards(res.data.data);
      
        
      })
     
  
    }
  
    useEffect(()=>{
        getAllCard();
      },[])



  return (
    <div>
     

         <div className=' flex-wrap flex justify-around'>
             {cards.map((card) =>{   
               console.log('dvdfd', card.user)           
                 return(
                  
                     <HomeCarde key={card.id} id={card.id} image={`http://localhost:8000/uploads/posts/${card.image}`} status={card.status} gender={card.gender} address={card.address} userEmail={card.user.email} userPhone={card.user.phone_number} />
                     
                 )
             })
             }
        </div>
    </div>
  )
}
