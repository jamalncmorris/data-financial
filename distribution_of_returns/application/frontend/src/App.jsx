import { useState } from 'react'

import mainConstants from './constants/mainConstants.js'

import Graph from './components/Graph.jsx'
import Form from './components/Form.jsx'
import TradingViewHeatMap from './components/TradingViewHeatMap.jsx'

function App() {

  return (
    <div>
      <h1>{mainConstants.marketing.title}</h1>
      <Graph />
      <Form />
      <div className='h-96'><TradingViewHeatMap/></div>
    </div>
  )
}

export default App
