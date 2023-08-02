import React from 'react'
import House from './house/House'

function Featured({house}) {
    if(house)
        return (
            <div>
                <div className='row featuredHouse'>
                    <h3 className='col-md-12 text-center'>
                        Featured house
                    </h3>
                </div>
                <House house={house}/>
            </div>
        );
  return <div>No Featured House at this time</div>
}

export default Featured
