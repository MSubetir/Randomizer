import React, { Component } from 'react';
import '../components/styles/WheelContainer.css'

import Wheel from './Wheel'
import FatalError from '../pages/500.js'


class WheelContainer extends Component {
    state = {
        raffle: '?',
        transition: false,
        error: null
    }

    handleMath = () => {
        if(this.state.transition == false && this.props.data.length != 0){
                this.setState({
                    transition: true
                })

                let element = document.getElementById("RaffleText");
                element.classList.add("raffled");
                
                setTimeout(() => {
                    try{
                        this.setState({
                            raffle: this.props.data[Math.floor(Math.random() * this.props.data.length)].text
                        })
                        element.classList.add("Glow");
                    }
                    catch(error){
                        this.setState({
                            error
                        })
                    }  
                }, 750);
            
                setTimeout(() => {
                    element.classList.remove("raffled");
                    this.setState({
                        transition: false
                    })
                }, 1500);
        }
    }

    render() {
        if(this.state.error)
            return <FatalError />

        return <Wheel 
            raffle = {this.state.raffle}
            onMath = {this.handleMath}
        />
        
    }
}

export default WheelContainer;