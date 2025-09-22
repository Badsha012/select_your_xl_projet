import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasePlayers,removePlayers}) => {
    console.log(purchasePlayers);
    return (
        <div className='max-w-[1200px] mx-auto'>

      {
        purchasePlayers.map(player => <SelectedCard removePlayers={removePlayers} player={player}></SelectedCard>)
      }
            
        </div>
    );
};

export default SelectedPlayers;