
import './App.css'

import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'


const fetchPlayers= async () =>{
  const res=await fetch("/player.json")
  return  res.json()
}
 const playerPromise=fetchPlayers()
function App() {

  const [toggle,setToggle] =useState(true)
  const [availableBalace,setAvailableBalance]=useState(60000000)
  const [purchasePlayers,setPurchasePlayers] =useState([])
  
  


  return (
    <>
    <Navbar availableBalace={availableBalace}></Navbar>

  
  <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>
      Available Players
    </h1>
    <div className='font-bold'>
      <button onClick={()=>setToggle(true)} className={`  py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true? "bg-[#E7FE29]" : " "}`}>Available</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]" : " "}`}>Selected <span>{0}</span></button>
    </div>
  </div>


  {
    toggle === true?  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <AvailablePlayers purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalace={availableBalace} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
     </Suspense> : <SelectedPlayers purchasePlayers={purchasePlayers}></SelectedPlayers>
  }

    

     
     
    </>
  )
}

export default App
