import React from 'react'

import Text from './Text'

const TextList = ({data, onDel, onDelAll}) => (
    <div className='container mt-5 overflow-auto'>
        <button onClick={onDelAll} className="btn-sm btn-outline-danger col-3 mb-3">Limpar Tudo</button>
        {data.map((x, index) => {
        
        return(
            <Text 
                key = {index}
                index = {index}
                text = {x.text}
                onDel = {onDel}
            />   
        ) 
        })}
    </div>
)

export default TextList