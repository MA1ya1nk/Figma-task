import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BetterThanBanks from './components/BetterThanBank'
import Feature from './components/Feature'
import Faster from './components/Faster'
import Invest from './components/Invest'
import Chat from './components/Chat'
import DeFi from './components/DeFi'
import Security from './components/Security'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Stories from './components/Stories'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
// import Footer from './components/Footer'

function App() {
  
  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <Navbar />
      <Hero />
      <BetterThanBanks />
      <Feature />
      <Faster />
      <Invest />
      <Chat />
      <DeFi />
      <Security />
      <Testimonials />
      <Team />
      <Stories />
      <FAQ />
      <CTA />
      {/* <Footer /> */}
    </div>
  )
}

export default App
