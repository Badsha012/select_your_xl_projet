
import './App.css'

import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'
import bannerImg from "./assets/bg-shadow.png"
import footerImg from "./assets/logo-footer.png"

  import { ToastContainer } from 'react-toastify';


const fetchPlayers= async () =>{
  const res=await fetch("/player.json")
  return  res.json()
}
 const playerPromise=fetchPlayers()
function App() {

  const [toggle,setToggle] =useState(true)
  const [availableBalace,setAvailableBalance]=useState(60000000)
  const [purchasePlayers,setPurchasePlayers] =useState([])
  
  
 const removePlayers= (p) =>{
  const filterData = purchasePlayers.filter(ply => ply["player-name"] !==p["player-name"])
  console.log(filterData);
  setPurchasePlayers(filterData)
  setAvailableBalance(availableBalace +parseInt( p.price.replace("USD", "").replace(/,/g, "").trim()))
 }

  return (
    <>
    <Navbar availableBalace={availableBalace}></Navbar>
        <div
      className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center "
      style={{
          backgroundImage: `url(${bannerImg})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         
        
      }}
    >
      <img src="https://i.ibb.co.com/m56pHPXG/banner-main.png" alt="" srcset="" />
      <h1 className="text-3xl text-black md:text-4xl font-extrabold mt-4">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="mt-2 text-black">Beyond Boundaries Beyond Limits</p>
      <button className="mt-5 bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-500">
        Claim Free Credit
      </button>
    </div>

  
  <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>
   {
       toggle === true?"Available Players": `Selected Player(${purchasePlayers.length}/6)`
   }
    </h1>
    <div className='font-bold'>
      <button onClick={()=>setToggle(true)} className={`  py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true? "bg-[#E7FE29]" : " "}`}>Available</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]" : " "}`}>Selected <span>({purchasePlayers.length})</span></button>
    </div>
  </div>


  {
    toggle === true?  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <AvailablePlayers purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalace={availableBalace} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
     </Suspense> : <SelectedPlayers removePlayers={removePlayers} purchasePlayers={purchasePlayers}></SelectedPlayers>
  }

    
 <ToastContainer></ToastContainer>


 <div className='max-w-[1200px] mx-auto border-2 border-red-600 bg-[#06091a] items-center text-center text-white'>


 <div>
      <img src={footerImg} alt="" className='' srcset="" />

 </div>
<div className=' grid grid-cols-3 '>
  <div className=''>
    <h1>About</h1>
    <p className='space-y-3'>We are a passionate team dedicated to providing the best services to our customers.</p>
  </div>
 <div className=''>
     <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
 </div>
 <div className=''>
     <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-400 mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-md border focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-r-md font-medium bg-gradient-to-r from-pink-400 to-yellow-400 text-black hover:opacity-90"
            >
              Subscribe
            </button>
            </form>
 </div>
</div>

<div className='items-center  py-10'>
  <p>@2024 Your Company All Rights Reserved.</p>
</div>
 </div>
     
     
    </>
  )
}

export default App
