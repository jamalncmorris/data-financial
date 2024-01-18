import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import store from './redux/store.js';

import mainConstants from './constants/mainConstants.js'

import App from './App.jsx'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div 
        data-theme={mainConstants.meta.theme} 
        className='container flex items-center mx-auto px-2 my-8 prose lg:prose-xl'
      >
        <div>
          <App />
        </div>
      </div>
    </Provider>
  </React.StrictMode>,
)
