import React from 'react';

const SelectedCard = ({player}) => {
    console.log(player);
    return (
          <div className='border-2 mt-5 p-3 border-gray-300 flex justify-between items-center rounded-lg'>
                <div className='flex items-center'>
                    <img src={player["player-image"]} className='w-[50px] h-[50px] rounded-xl' alt=""  />
                
                <div className='ml-2'>
                <h1 className='font-bold'>{player["player-name"]}</h1>
                <p className='text-xs'>{player["playing-role"]}</p>
                </div>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/C57k7cFy/Frame.png" alt=""  />
                </div>
            </div>
    );
};

export default SelectedCard;