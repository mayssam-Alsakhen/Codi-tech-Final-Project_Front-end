import About from '../components/About'
import CardList from '../components/CardList'



export default function Home() {
 
  
  return (
    <div>
     <About/>
     <div className=' flex-wrap flex justify-around'>
     <CardList/>

     </div>
 
    </div>
  )
}
