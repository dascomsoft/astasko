import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hommage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: window.innerWidth < 768
    })
  }, [])

  return (
    <div className="overflow-hidden bg-gradient-to-br from-tasko-dark via-gray-900 to-tasko-dark">
      {/* Hero Section Hommage */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Background Pattern simplifié */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.03)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-12 md:mb-20"
              data-aos="fade-up"
            >
              <span className="inline-block bg-tasko-yellow/20 text-tasko-yellow px-4 py-2 rounded-full text-sm font-semibold mb-6">
                👑 HOMMAGE & MÉRITE
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                TIMANE BARKA <span className="text-tasko-yellow">DJOROK</span>
              </h1>
              <p className="text-xl sm:text-2xl text-tasko-light max-w-3xl mx-auto">
                Un leader silencieux mais grand, qui incarne l'entrepreneuriat et le social
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Image principale */}
              <div 
                className="relative"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/presi.jpeg"
                    alt="Timane Barka Djorok - Leader visionnaire"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-tasko-yellow/90 text-tasko-dark px-6 py-3 rounded-xl">
                      <div className="text-sm font-semibold">LEADER VISIONNAIRE</div>
                      <div className="text-lg font-bold">Entrepreneuriat & Politique</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message principal */}
              <div 
                className="text-white"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10 mb-8">
                  <div className="text-6xl text-tasko-yellow mb-6">"</div>
                  <p className="text-xl md:text-2xl leading-relaxed mb-6">
                    Dans le paysage de l'entrepreneuriat et politique tchadienne, certains visages marquent par leurs paroles, d'autres par leurs gestes. Timane Barka Djorok incarne les deux à la fois.
                  </p>
                  <p className="text-lg text-gray-300">
                    Jeune, humble, charismatique et profondément social, il s'est imposé comme un leader dans le domaine de l'entreprenariat et de la politique, un stratège respecté, un véritable leader.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-tasko-yellow/10 border border-tasko-yellow/20 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-tasko-yellow mb-2">2X</div>
                    <div className="text-sm">Leader Confirmé</div>
                  </div>
                  <div className="bg-tasko-blue/10 border border-tasko-blue/20 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-tasko-blue mb-2">100%</div>
                    <div className="text-sm">Engagement Social</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Social & Valeurs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Le Cœur <span className="text-tasko-yellow">Social</span>
            </h2>
            <p className="text-xl text-tasko-light max-w-3xl mx-auto">
              Un engagement qui transcende les générations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 mb-12"
              data-aos="zoom-in"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-tasko-yellow/20 flex items-center justify-center">
                    <span className="text-4xl">❤️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    L'Esprit de Partage
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Dans un contexte où beaucoup de jeunes pensent d'abord à eux-mêmes, 
                    Timane Barka Djorok a choisi de penser aux autres. Par ses actions sociales, 
                    il redonne le sourire à ceux qui n'ont presque rien.
                  </p>
                  <div className="bg-tasko-yellow/10 border-l-4 border-tasko-yellow p-6 rounded-xl">
                    <p className="text-xl font-semibold text-white">
                      "Le social n'est pas une affaire d'âge, mais de cœur."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deuxième image */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/images/presi1.jpeg"
                alt="Timane Barka Djorok - Leadership social"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-8 text-white">
                  <span className="bg-tasko-blue/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                    LEADERSHIP D'ACTION
                  </span>
                  <h3 className="text-2xl font-bold mb-2">
                    Sans Bruit, Sans Tapage
                  </h3>
                  <p className="text-lg">
                    Il pose des actes qui parlent plus fort que les discours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            className="max-w-6xl mx-auto"
            data-aos="fade-up"
          >
            <div className="bg-gradient-to-r from-tasko-yellow/10 to-tasko-blue/10 border border-white/20 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-block bg-white/20 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6">
                  🌟 L'HÉRITAGE
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  La Preuve Vivante
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold text-white mb-3">Jeunesse Utile</h3>
                  <p className="text-gray-300">
                    Il prouve que la jeunesse peut être utile, responsable et engagée
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-white mb-3">Responsabilité Sociale</h3>
                  <p className="text-gray-300">
                    Un engagement authentique envers sa communauté et son pays
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-3">Vision Stratégique</h3>
                  <p className="text-gray-300">
                    Un leader qui combine entrepreneurial et engagement politique
                  </p>
                </div>
              </div>

              {/* Citation finale */}
              <div 
                className="text-center py-12 border-t border-white/20"
                data-aos="zoom-in"
              >
                <div className="text-6xl text-tasko-yellow mb-6">"</div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                  Il est la preuve que la jeunesse peut être utile, 
                  responsable et engagée pour sa communauté.
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-tasko-yellow flex items-center justify-center mr-4">
                    <span className="text-tasko-dark font-bold text-xl">TB</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-xl">Timane Barka Djorok</div>
                    <div className="text-tasko-light">Président Fondateur - AS Tasko</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Retour */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            className="max-w-2xl mx-auto text-center"
            data-aos="fade-up"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
              <div className="text-5xl mb-6">👑</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Retourner à l'Accueil
              </h3>
              <p className="text-gray-300 mb-8">
                Découvrez comment la vision de Timane Barka Djorok transforme l'AS Tasko
              </p>
              <a
                href="/"
                className="inline-flex items-center bg-tasko-yellow text-tasko-dark px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                ← Retour à l'Accueil
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hommage