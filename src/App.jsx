


import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail' // <-- Nouveau import
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Hommage from './pages/Hommage'


function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Réinitialiser AOS à chaque changement de page
  useEffect(() => {
    AOS.refresh()
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} /> {/* <-- Nouvelle route */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hommage" element={<Hommage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App