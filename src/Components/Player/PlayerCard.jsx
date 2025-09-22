import React from 'react';

import userImg from "../../assets/user1.png"

import userFlag from "../../assets/flag.png"
import { useState } from 'react';

const PlayerCard = ({player,setAvailableBalance}) => {
    const [isSelectd,setIsSelected]=useState(false)

    return (
        <div className="card bg-base-100  shadow-sm p-4">
               <figure>
                 <img
                   src={player["player-image"]}
                   alt="Players" className="w-full h-[300px] object-cover"
                 />
               </figure>
               <div className="mt-4">
                <div className="flex">
                             <img src={userImg} alt="" srcSet="" /><h2 className="card-title ml-2">{player["player-name"]}</h2>
                </div>
                <div className="flex justify-between mt-4 border-b-1 pb-2 border-gray-500">
                       <div className="flex items-center ">
                      <img className="w-[20x] h-[20px]" src={userFlag} alt="" srcset="" />
                      <span className="ml-2">{player["player-country"]}</span>
                </div>
                <button className="btn">{player["playing-role"]}</button>
       
                </div>
       
                <div className="flex justify-between font-bold">
                   <span>Rating</span>
                   <span>{player["rating"]}</span>
       
                </div>
                 <div className="flex justify-between mt-4">
                   <span className="font-bold">{player["batting-style"]}</span>
                   <span>{player["bowling-style"]}</span>
       
                </div>
            
            
       
       
       
                 <div className="card-actions justify-between mt-4 items-center">
                   <p className="font-bold">Price: {player["price"]}</p>
                   <button disabled ={isSelectd} onClick={()=>{setIsSelected(true)
                    setAvailableBalance(500000)
                   }} className="btn">{isSelectd===true?"Selected" : "Choose players"}</button>
                 </div>
               </div>
             </div>
    );
};

export default PlayerCard;