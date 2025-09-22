import React, { use } from "react";
import PlayerCard from "../Player/PlayerCard";



const AvailablePlayers = ({ playerPromise,setAvailableBalance,availableBalace,setPurchasePlayers,purchasePlayers }) => {

  const playerData = use(playerPromise);

  
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
     {
      playerData.map(player=> <PlayerCard purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalace={availableBalace} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>
      

      )
     }





   
    </div>
  );
};

export default AvailablePlayers;
