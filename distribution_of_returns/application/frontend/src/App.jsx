import { useState } from 'react'

import mainConstants from './constants/mainConstants.js'

import Graph from './components/Graph.jsx'
import Form from './components/Form.jsx'

function App() {

  return (
    <>
      <h1>{mainConstants.marketing.title}</h1>
      <Graph />
      <Form />
    </>
  )
}

export default App
