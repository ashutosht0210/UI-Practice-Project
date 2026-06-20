import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import UserData from './UserData'

const App = () => {
  return (
    <>
      <Section1 users = {UserData}/>
      <Section2 />
    </>
    
  )
}

export default App
