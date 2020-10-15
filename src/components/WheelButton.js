import React from 'react'

const WheelButton = ({onMath}) => {

return(
    <div className="d-flex justify-content-center">
        <a href='javascript:;' onClick={onMath}>
            SORTEAR
        </a>
    </div>
)
}
export default WheelButton