

const defaultState = {
  activeMenu: 'landing'
}

const menus = (state = defaultState, action) => {
  switch(action.type) {
    case 'SELECT_MENU':
      return {...state, activeMenu: action.payload}
    default: 
      return state
  }
}

export default menus