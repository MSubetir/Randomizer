import React from 'react'
import '../components/styles/TextRaffle.css'

const Raffle = ({text}) => (
    <h1 id="RaffleText" className="p-3 display-3 text-center my-5 w-100">
        {text}
    </h1>
)

export default Raffle