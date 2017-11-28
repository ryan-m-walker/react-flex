import React, { Component } from 'react'
import styled from 'styled-components'

import Menu from './components/Menu'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'


class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <Menu />
        <SignUp />
        <LogIn />
      </AppWrapper>
    )
  }
}

const AppWrapper = styled.main`
  display: flex;
  align-items: stretch;
  height: 100vh;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`


export default App
