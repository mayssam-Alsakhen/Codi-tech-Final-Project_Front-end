import Head from 'next/head'
import Buttons from '../components/Buttons'
import Footer from '../components/Footer'
import Nav from '../components/nav/Nav'
import HeaderH from '../components/HeaderH'
import { Navl } from "../components/nav//Navl";
import '../styles/globals.css'
import "../styles/Login.css"
import {useRouter} from 'next/router'
function MyApp({ Component, pageProps }) {
const router = useRouter()

  return (
    
    <div>
       <Head>
        <title>missed and found</title>
        <meta name="description" content="this website is to finde your missing person or to post a person you found" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      {router.pathname == "/Login"? null : <Nav/>}
     
<div>
{Navl.map((k) => {return (<div key={k.id} className={`${
router.pathname == k.link ? "block" : "hidden"}`}>
    <HeaderH />
  </div>)})}
  </div>
  <Component {...pageProps} />
{router.pathname == "/Login" ? null : <Buttons/>}
{router.pathname == "/Login" ? null :  <Footer/>}
 
  </div>
  )
}

export default MyApp
