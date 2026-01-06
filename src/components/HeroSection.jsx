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

  // Optimisation mobile : intervalle plus lent pour économie batterie
  useEffect(() => {
    const intervalTime = window.innerWidth < 768 ? 7000 : 5000
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, intervalTime)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Images en arrière-plan optimisées mobile */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: window.innerWidth < 768 ? 'center 30%' : 'center',
              backgroundAttachment: 'scroll' // Fixed désactivé sur mobile
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-tasko-dark/90 via-tasko-dark/80 to-tasko-blue/70 md:from-tasko-dark/80 md:to-tasko-blue/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation optimisée mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 active:scale-125 ${
              index === currentImage
                ? 'bg-tasko-yellow w-6 md:w-8 h-2 rounded-full'
                : 'bg-white/60 hover:bg-white w-2 h-2 rounded-full'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenu principal optimisé mobile */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4 md:px-10">
        <div className="w-full max-w-4xl px-2">
          {/* Logo avec taille adaptative */}
          <div className="mb-4 md:mb-6 animate-float">
            <img
              src="/images/logoastasko.jpg"
              alt="Logo AS Tasko N'Djamena"
              className="h-20 w-20 md:h-32 md:w-32 rounded-full mx-auto object-cover border-3 md:border-4 border-tasko-yellow shadow-xl"
              loading="eager"
            />
          </div>

          {/* Titre adaptatif */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tight">
            AS <span className="text-tasko-yellow">TASKO</span>
          </h1>

          {/* Slogan optimisé */}
          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto font-medium px-1">
            La génération montante du football tchadien
          </p>

          {/* Citation visible sur mobile */}
          <div className="mb-8 md:mb-12 text-sm md:text-lg italic border-l-2 md:border-l-4 border-tasko-yellow pl-3 md:pl-4 max-w-2xl mx-auto">
            "Un jour victoire, pour toujours !"
          </div>

          {/* Boutons tactiles optimisés */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10 md:mb-16">
            <Link
              to="/team"
              className="bg-tasko-yellow text-tasko-dark px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 active:scale-95 shadow-lg text-sm md:text-base min-h-[44px] flex items-center justify-center"
            >
              <span className="mr-2">🏆</span>
              Découvrir l'Équipe
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-white hover:text-tasko-dark transition-all duration-300 active:scale-95 text-sm md:text-base min-h-[44px] flex items-center justify-center"
            >
              <span className="mr-2">⚽</span>
              Rejoindre le Club
            </Link>
          </div>

          {/* Stats optimisées mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-white/20">
              <div className="text-xl md:text-3xl font-bold text-tasko-yellow">D2</div>
              <div className="text-xs md:text-sm">Championnat 2025-2026</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-white/20">
              <div className="text-xl md:text-3xl font-bold text-tasko-yellow">100%</div>
              <div className="text-xs md:text-sm">Jeunes Talents</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-white/20">
              <div className="text-xl md:text-3xl font-bold text-tasko-yellow">🔥</div>
              <div className="text-xs md:text-sm">Passion & Détermination</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-white/20">
              <div className="text-xl md:text-3xl font-bold text-tasko-yellow">2026</div>
              <div className="text-xs md:text-sm">Notre Année</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection