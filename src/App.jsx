
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
  <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>
      Available Players
    </h1>
    <div className='font-bold'>
      <button className=' bg-[#E7FE29] py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0'>Available</button>
      <button className='py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0'>Selected <span>{0}</span></button>
    </div>
  </div>

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
