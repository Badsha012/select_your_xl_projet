
import './App.css'

import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'
import bannerImg from "./assets/bg-shadow.png"

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
      className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center text-white"
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
     
     
    </>
  )
}

export default App
