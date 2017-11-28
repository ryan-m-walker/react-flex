import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider  } from 'react-redux'

import './index.css'
import menus from './reducers/menu'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


const store = createStore(menus)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
registerServiceWorker()
