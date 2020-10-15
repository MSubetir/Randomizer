import React from 'react';

import Welcome from '../components/Welcome'
import TextNew from '../components/TextNew'
import TextList from '../components/TextList'
import WheelContainer from '../components/WheelContainer'

const Random = ({onData, data, onDel, onDelAll}) => (
  <div className="container Random">
    <div className="row">
      <div className = "col-md-6 Text">
        <Welcome />

        <TextNew 
          onData = {onData}
        />

        <TextList 
          data = {data}
          onDel = {onDel}
          onDelAll = {onDelAll}
        />
      </div>
      
      <div className = "col-md-6 Wheel">
        <WheelContainer 
          data = {data}
        />
      </div>
    </div>
  </div>
)

export default Random;