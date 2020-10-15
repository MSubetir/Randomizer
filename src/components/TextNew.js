import React from 'react'

import TextForm from './TextForm'
import NumberForm from './NumberForm'

class TextNew extends React.Component {
    state = {
        form: {
            text: "",
            nStart: "1",
            nEnd: "5"
        },
        visible: true,
    }

    swap = () =>{
        {this.state.visible ?
            this.setState({
                visible:false
            })
            :
            this.setState({
                visible:true
            })
        }
    }
    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmitText = e => {
        if (this.state.form.text != ""){
            this.props.onData({text: this.state.form.text})
        }
        e.preventDefault() 
    }

     handleSubmitNumber = async e => {
        let start = parseInt(this.state.form.nStart)
        let end = parseInt(this.state.form.nEnd)

        if(this.state.form.nStart != "" && this.state.form.nEnd != "" && 
        start < end && (end - start) <= 500){
            e.persist();
            for (let i = parseInt(this.state.form.nStart); i <= parseInt(this.state.form.nEnd); i++) {
                await this.props.onData({text: i})
            }
        }
        e.preventDefault() 
    } 

    render(){
        return(    
            <div className="container row mx-2 d-flex align-items-center">
                <button onClick={this.swap} className="btn-sm btn-outline-dark col-2">Trocar</button>
                {this.state.visible ?
                    <TextForm 
                        onChange = {this.handleChange}
                        onSubmit = {this.handleSubmitText}
                        form = {this.state.form}/>
                    : 
                    <NumberForm 
                        onChange = {this.handleChange}
                        onSubmit = {this.handleSubmitNumber}
                        form = {this.state.form}
                    />   
                }
            </div>     
        )
    }
}

export default TextNew