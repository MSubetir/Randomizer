import React from 'react'
import './styles/TextBox.css'

const Text = ({index, text, onDel}) => (
    <div className="row d-flex align-items-center justify-content-center mb-2 w-90">
        <h4 className="TextBox col-8">{text}</h4>
        <button onClick={() => onDel(index)} className="btn-sm btn-danger col-2 ml-2">X</button>
    </div>
    
)

export default Text