import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { selectMenu } from '../actions/menu'
import { Wrapper } from './shared'


const SignUp = ({isActive, dispatch}) => (
  <Wrapper 
    style={{background: 'purple'}} 
    thisMenu='signup'
    active={isActive}
    onClick={() => dispatch(selectMenu('signup'))}>
    { 
      isActive 
      ? <LogInContent active={isActive}/> 
      : <LogInIcon iconStyle={{width: '5rem', fill: '#eee'}}/>
    }
  </Wrapper>
)


class LogInContent extends Component {
  componentDidMount() {
    this.input.focus()
  }
  render() {
    const { active } = this.props
    return (
      <Content active={active}>
        <H2>Log In</H2>
        <Label>Email</Label>
        <Input innerRef={input => this.input = input} type='text' />
        <Label>Password</Label>
        <Input type='password' />
        <Button>Submit</Button>
      </Content>
    )
  }
}

const LogInIcon = ({iconStyle}) => (
  <div>
    <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <path d="M436.319,311c-1.689,5.156-3.586,10.255-5.713,15.286c-9.871,23.337-24.006,44.3-42.013,62.307
      c-6.427,6.427-13.238,12.352-20.393,17.775c-36.547-15.052-51.641-39.964-57.544-61.329c1.984-1.813,3.865-3.782,5.632-5.89
      c19.938-5.524,38.037-22.696,46.33-46.706c8.365-24.218,4.592-49.123-7.944-65.778c4.408-9.717,6.919-20.87,6.919-32.734
      c0-25.119-11.246-47.05-27.975-58.878c-3.738-5.069-8.18-9.844-13.323-14.144c-17.937-14.997-40.007-20.754-58.948-17.249
      C253.98,99.393,245.727,97,237.011,97c-14.377,0-27.489,6.512-37.451,17.216c-25.816,4.971-45.785,31.11-47.355,63.24
      c-0.863,1.504-1.673,3.054-2.435,4.643c-11.505,12.482-18.748,30.591-18.748,50.749c0,3.716,0.255,7.358,0.728,10.912
      c-0.473,3.554-0.728,7.197-0.728,10.912c0,26.639,12.647,49.694,31.071,60.912c7.143,12.546,17.666,22.057,29.985,26.608
      c-5.395,22.21-20.427,49.052-59.584,64.708c-7.411-5.565-14.452-11.672-21.089-18.308c-18.007-18.007-32.142-38.97-42.013-62.307
      C59.179,302.135,54,276.469,54,250c0-26.469,5.179-52.135,15.394-76.286c9.871-23.337,24.006-44.3,42.013-62.307
      c18.007-18.007,38.97-32.142,62.307-42.013C197.865,59.179,223.531,54,250,54s52.135,5.179,76.286,15.394
      c23.337,9.871,44.3,24.006,62.307,42.013c17.045,17.045,30.615,36.743,40.389,58.593h21.709C418.898,90.313,341.029,34,250,34
      C130.706,34,34,130.706,34,250s96.706,216,216,216c98.107,0,180.924-65.413,207.25-155H436.319z"/>
    <polygon points="482,226.925 445.075,226.925 445.075,190 417.925,190 417.925,226.925 381,226.925 381,254.075 417.925,254.075 
      417.925,291 445.075,291 445.075,254.075 482,254.075 "/>
    </svg>
    <H2 style={{textAlign: 'center'}}>Sign Up</H2>
  </div>
)

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  opacity: 0.5;
    transform: translateX(50px);
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Content = styled.div`
  width: 500px;
  opacity: ${ ({active}) => active ? 1 : 0 };
  animation: ${fadeIn} 500ms ease-out;
  @media (max-width: 650px) {
    width: 300px;
  }
`

const H2 = styled.h2`
  color: #eee;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.125rem;
`

const Label = styled.label`
  color: #eee;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
`

const Input = styled.input`
  display: block;
  width: 100%;
  background: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  color: #eee;
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
`

const Button = styled.button`
  margin-top: 1rem;
  display: block;
  background: #eee;
  border: none;
  border-radius: 500px;
  color: purple;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0.75rem;
  width: 100%;
`

const mapState = state => ({
  isActive: state.activeMenu === 'signup'
})

const ConnectedSignUp = connect(mapState)(SignUp)
export default ConnectedSignUp
