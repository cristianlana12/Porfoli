import React from 'react'
import ReactDOM from 'react-dom/client'
import { Porfoli } from './Porfoli'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Porfoli></Porfoli>
    </React.StrictMode>
  </BrowserRouter>,

)
