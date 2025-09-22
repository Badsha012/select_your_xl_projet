
import './App.css'
import navImg from "./assets/logo.png"
import dollarImg from "./assets/coin.jpg"
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'


const fetchPlayers= async () =>{
  const res=await fetch("/player.json")
  return  res.json()
}
function App() {
  const playerPromise=fetchPlayers()


  return (
    <>
    <div className="navbar max-w-[1200px] mx-auto ">
  <div className="flex-1">
    <a className=" text-xl">
      <img className='w-[60px] h-[60px] ' src={navImg} alt="" srcset="" />
    </a>
  </div>
  <div className="flex items-center">
    <span className='mr-1'>6000000000</span>
    <span className='mr-1'>coin</span>
    <img className='w-[30pxpx] h-[30px] ' src={dollarImg} alt="" srcset="" />
  </div>
</div>

     <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
     </Suspense>

      <SelectedPlayers></SelectedPlayers>
     
    </>
  )
}

export default App
