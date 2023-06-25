import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'


import Login from './components/Login.js'
import Home from './components/Home.js'


import './App.css'
import PageNotFound from './components/PageNotFound.js'



function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/login' element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App



// 405179169353-cd4qo82b09dbqdlb16mvmemp9g2a59d8.apps.googleusercontent.com          client-id

// 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   --password