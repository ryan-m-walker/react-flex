import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Wrapper } from './shared'
import { selectMenu } from '../actions/menu'


class Menu extends Component {

  render() {
    const { isActive } = this.props
    console.log(this.props)
    return (
      <Wrapper 
        style={{background: '#eee'}} 
        thisMenu='menu'
        onClick={() => this.props.dispatch(selectMenu('menu'))}
        active={isActive}>
        Menu
      </Wrapper>
    )
  }
} 


const mapState = state => ({
  isActive: state.activeMenu === 'menu'
})

const ConnectedMenu = connect(mapState)(Menu)
export default ConnectedMenu

