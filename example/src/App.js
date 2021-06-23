import React from 'react'

import SnakeLoader from 'snake-spinner'

const App = () => {
  return <SnakeLoader size="80px" borderRadius="10px" color="white" bgColor="black" onClose={() => alert("game quit!")} />
}

export default App
