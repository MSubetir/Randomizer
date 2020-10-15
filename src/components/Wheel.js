import React from 'react';

import Raffle from './Raffle'
import WheelButton from './WheelButton'

const Wheel = ({raffle, onMath}) => (
    <div className="Raffle">
        <Raffle 
            text = {raffle}
        />
        
        <WheelButton  
            onMath = {onMath}
        />
    </div>
)

export default Wheel;