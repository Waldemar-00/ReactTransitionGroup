import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
// import App from './App'
// import CssTransition from './CssTransition'
// import Modal from './Modal'
import TodoList from './TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* < CssTransition /> */}
    {/* < Modal /> */}
    <TodoList/>
  </>
)


