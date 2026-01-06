import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const heroImages = [
    '/images/tasko1.jpg',
    '/images/tasko2.jpg',
    '/images/tasko4.jpg',
    '/images/tasko9.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Images en arrière-plan avec effet slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tasko-dark/80 to-tasko-blue/60"></div>
          </div>
        ))}
      </div>

      {/* Points de navigation du slideshow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage 
                ? 'bg-tasko-yellow w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div 
          className="max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Logo */}
          <div className="mb-6 animate-float">
            <img 
              src="/images/logoastasko.jpg" 
              alt="Logo AS Tasko" 
              className="h-32 w-32 rounded-full mx-auto object-cover border-4 border-tasko-yellow shadow-2xl"
            />
          </div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            AS <span className="text-tasko-yellow">TASKO</span>
          </h1>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium">
            La génération montante du football tchadien
          </p>
          
          {/* Citation */}
          <div className="mb-12 italic text-lg border-l-4 border-tasko-yellow pl-4 max-w-2xl mx-auto">
            "Un jour victoire, pour toujours !"
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/team"
              className="bg-tasko-yellow text-tasko-dark px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              🏆 Découvrir l'Équipe
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-tasko-dark transition-all transform hover:scale-105"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              ⚽ Rejoindre le Club
            </Link>
          </div>

          {/* Stats en bas */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-tasko-yellow">D2</div>
              <div className="text-sm">Championnat 2025-2026</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-tasko-yellow">100%</div>
              <div className="text-sm">Jeunes Talents</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-tasko-yellow">🔥</div>
              <div className="text-sm">Passion & Détermination</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-tasko-yellow">2026</div>
              <div className="text-sm">Notre Année</div>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche de scroll */}
      <div 
        className="absolute bottom-8 right-8 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div className="text-white text-center">
          <span className="block">↓</span>
          <span className="text-sm">Découvrir</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection