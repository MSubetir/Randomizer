import React from 'react';
import '../components/styles/RandomContainer.css'

import Random from './Random'


class RandomContainer extends React.Component{
    state = {
        data:[]
    }
    
    handleData = (form) => {
        this.setState({
            data: [
                ...this.state.data,
                form
            ]
        })
    }

    handleDel = (index) => {
        let removed = this.state.data.splice(index, 1)
        this.setState({
            data: [
                ...this.state.data,
            ]
        })  
    }

    handleDelAll = e => {
        this.setState({
            data: [
                
            ]
        })  
    }
    
    render(){
        return (
            <Random 
                onData = {this.handleData}
                data = {this.state.data}
                onDel = {this.handleDel}
                onDelAll = {this.handleDelAll}
            />
        );
    }
}

export default RandomContainer;