import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Landing } from './components/Landing'
import { Login } from './components/Login'
import { ForgotPass } from './components/ForgotPass'
import { HomePage } from './components/HomePage'
import SignUp from './components/SignUp'
import Nav from './components/Nav'
import MatchSection from './components/MatchSection'
import MatchCard from './components/MatchCard'

import './components/Login.css'

function App() {
  return (
    <>
      {/* <Nav></Nav> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPass" element={<ForgotPass />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/matchsection" element={<MatchSection />} />
          <Route path="/matchcard" element={<MatchCard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
