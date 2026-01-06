import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: window.innerWidth < 768
    })
    
    if (window.innerWidth < 768) {
      setTimeout(() => {
        AOS.init({
          duration: 600,
          once: true,
          offset: 20, // Réduit pour mobile
        })
      }, 300)
    }
    
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section Impactante */}
      <div className="relative h-[40vh] sm:h-[50vh] pt-[18rem] pb-[18rem] md:h-[60vh] bg-gradient-to-br from-tasko-dark via-tasko-blue to-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/images/galltasko7.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                👑 NOTRE IDENTITÉ
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4">
                L'Âme de <span className="text-tasko-yellow">Tasko</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light px-2">
                Plus qu'un club, un mouvement qui redéfinit le football tchadien
              </p>
            </div>
            
            {/* Stats accrocheuses */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                <div className="text-lg sm:text-xl font-bold">2025-2026</div>
                <div className="text-xs">Saison Déterminante</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                <div className="text-lg sm:text-xl font-bold">D2</div>
                <div className="text-xs">Championnat National</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                <div className="text-lg sm:text-xl font-bold">100%</div>
                <div className="text-xs">Jeunes Talents</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Histoire avec Timeline */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* En-tête impactant */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                📜 NOTRE ÉPOPÉE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-tasko-dark mb-4 sm:mb-6">
                Naissance d'une <span className="text-tasko-blue">Légende</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                D'un rêve de quartier à une ambition nationale
              </p>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
              {/* Contenu principal */}
              <div data-aos="fade-up">
                <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl border border-gray-100">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-tasko-dark mb-4 sm:mb-6">
                    L'Étincelle Tasko
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-6 text-gray-700">
                    <p className="text-base sm:text-lg leading-relaxed">
                      L'<strong className="text-tasko-dark">AS Tasko</strong> est né dans les rues de Diguel, 
                      fruit de la passion pure d'une bande de jeunes qui ne connaissaient qu'une chose : 
                      <strong className="text-tasko-blue"> l'amour du ballon rond</strong>.
                    </p>
                    
                    <div className="bg-gradient-to-r from-tasko-blue/5 to-transparent p-4 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-tasko-blue">
                      <div className="flex items-start">
                        <span className="text-tasko-blue text-xl sm:text-2xl mr-3">⚡</span>
                        <div>
                          <p className="font-bold text-tasko-dark text-base sm:text-lg">
                            Du Béton aux Étoiles
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Des terrains de terre battue aux pelouses du championnat national, 
                            notre ascension est le récit d'une détermination sans faille.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="leading-relaxed text-base sm:text-lg">
                      Aujourd'hui en <strong>Deuxième Division</strong>, nous écrivons chaque jour 
                      une nouvelle page de cette histoire exceptionnelle. 
                      <strong> Chaque match est un chapitre, chaque victoire un paragraphe mémorable</strong>.
                    </p>
                  </div>
                  
                  {/* Citation emblématique */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-tasko-yellow flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <span className="text-tasko-dark font-bold text-lg sm:text-xl">⚽</span>
                      </div>
                      <div>
                        <p className="font-bold text-tasko-dark italic text-base sm:text-lg">
                          "Tasko un jour, Tasko toujours !"
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">- La devise qui nous unit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline visuelle */}
              <div data-aos="fade-up" data-aos-delay="200" className="w-full">
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { year: '2022', title: 'Genèse', desc: 'Premiers entraînements à Diguel', icon: '🌱' },
                    { year: '2023', title: 'Structuration', desc: 'Création officielle du club', icon: '🏛️' },
                    { year: '2024', title: 'Révélation', desc: 'Premiers succès en tournois locaux', icon: '⭐' },
                    { year: '2025', title: 'Ascension', desc: 'Accession en Deuxième Division', icon: '🚀' },
                    { year: '2026', title: 'Ambition', desc: 'Objectif : Première Division', icon: '🎯' },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-tasko-blue to-tasko-dark text-white flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div className="ml-4 sm:ml-6 pt-1">
                        <div className="text-lg sm:text-2xl font-bold text-tasko-dark mb-1">{item.year}</div>
                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{item.title}</div>
                        <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission & Vision Power */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                🎯 NOTRE RAISON D'ÊTRE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-tasko-dark mb-4 sm:mb-6">
                Mission & <span className="text-tasko-blue">Vision</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Notre feuille de route pour conquérir le football tchadien
              </p>
            </div>

            {/* Mission */}
            <div className="mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
              <div className="bg-gradient-to-r from-tasko-dark to-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl">
                <div className="p-4 sm:p-6 md:p-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-tasko-yellow flex items-center justify-center mr-4 sm:mr-6 mb-4 sm:mb-0">
                      <span className="text-tasko-dark text-xl sm:text-3xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Notre Mission</h3>
                      <p className="text-tasko-light text-sm sm:text-base">Pourquoi nous existons</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { icon: '👨‍🎓', text: 'Former la nouvelle élite du football tchadien' },
                      { icon: '⚽', text: 'Développer des joueurs complets, sur et hors du terrain' },
                      { icon: '🏆', text: 'Construire une équipe championne en D2 dès 2026' },
                      { icon: '🌍', text: 'Porter haut les couleurs du Tchad en Afrique' },
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-white/20"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="text-xl sm:text-2xl mb-2 sm:mb-3">{item.icon}</div>
                        <p className="text-white font-medium text-sm sm:text-base">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden border border-gray-200">
                <div className="p-4 sm:p-6 md:p-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-r from-tasko-blue to-tasko-dark flex items-center justify-center mr-4 sm:mr-6 mb-4 sm:mb-0">
                      <span className="text-white text-xl sm:text-3xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-tasko-dark">Notre Vision</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Où nous voulons aller</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        Devenir la référence absolue de la formation footballistique au Tchad 
                        et <strong className="text-tasko-dark">accéder à la Première Division</strong> dans un délai record.
                      </p>
                      
                      <div className="bg-gradient-to-r from-tasko-blue/5 to-transparent p-4 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 className="font-bold text-tasko-dark text-base sm:text-lg mb-2 sm:mb-3">Horizon 2028 :</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-tasko-yellow rounded-full mr-2 sm:mr-3"></span>
                            Équipe première en D1
                          </li>
                          <li className="flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-tasko-yellow rounded-full mr-2 sm:mr-3"></span>
                            Académie reconnue à l'international
                          </li>
                          <li className="flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-tasko-yellow rounded-full mr-2 sm:mr-3"></span>
                            Joueurs professionnels en Europe
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-tasko-dark/5 to-gray-100 p-6 sm:p-8 rounded-lg sm:rounded-2xl mt-6 lg:mt-0">
                      <div className="text-center mb-4 sm:mb-6">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-tasko-blue mb-1 sm:mb-2">2026</div>
                        <div className="font-bold text-tasko-dark text-lg sm:text-xl">Objectif Saison</div>
                      </div>
                      <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg">
                        <p className="font-semibold text-center text-tasko-dark text-sm sm:text-base">
                          Remporter la Deuxième Division et hisser l'AS Tasko parmi l'élite du football tchadien
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs avec animation */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                ⚡ NOTRE ADN
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-tasko-dark mb-4 sm:mb-6">
                Les Piliers <span className="text-tasko-blue">Tasko</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Les valeurs qui forgent notre identité et notre succès
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: '🔥',
                  title: 'Passion Dévorante',
                  description: 'Le feu intérieur qui nous propulse au-delà des limites',
                  color: 'from-red-500/20 to-orange-500/20'
                },
                {
                  icon: '🤝',
                  title: 'Solidarité Totale',
                  description: 'Une seule équipe, un seul objectif : gagner ensemble',
                  color: 'from-blue-500/20 to-cyan-500/20'
                },
                {
                  icon: '⚡',
                  title: 'Excellence Obsessionnelle',
                  description: 'Chercher la perfection dans chaque geste, chaque match',
                  color: 'from-purple-500/20 to-pink-500/20'
                },
                {
                  icon: '🌱',
                  title: 'Formation Continue',
                  description: 'Investir dans la jeunesse pour récolter les champions de demain',
                  color: 'from-green-500/20 to-emerald-500/20'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${value.color} backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-2xl border border-white/20`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 md:mb-6">{value.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-tasko-dark mb-2 sm:mb-3 md:mb-4">{value.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Infrastructures Premium */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                🏟️ NOTRE QUARTIER GÉNÉRAL
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-tasko-dark mb-4 sm:mb-6">
                Le Temple <span className="text-tasko-blue">Tasko</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Là où les champions forgent leur légende
              </p>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div data-aos="fade-up">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-tasko-dark mb-3 sm:mb-4">
                      Stade de Diguel : Notre Forteresse
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Plus qu'un terrain, un sanctuaire où se joue l'avenir du football tchadien. 
                      C'est ici, au cœur de N'Djamena, que nos jeunes talents se transforment en guerriers du ballon rond.
                    </p>
                  </div>

                  {/* Infos pratiques */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { icon: '📍', title: 'Localisation', desc: 'Quartier Diguel, N\'Djamena', highlight: 'Cœur de la capitale' },
                      { icon: '⏰', title: 'Horaires', desc: 'Lun-Ven 16h-18h', highlight: 'Samedi 10h-12h' },
                      { icon: '⚽', title: 'Capacité', desc: '500 supporters', highlight: 'Ambiance garantie' },
                      { icon: '🏠', title: 'Siège Social', desc: 'Goudji Rue de 50 M', highlight: 'Direction technique' },
                    ].map((info, index) => (
                      <div 
                        key={index}
                        className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-100 hover:shadow-lg sm:hover:shadow-xl transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="text-xl sm:text-2xl text-tasko-blue mb-2 sm:mb-3">{info.icon}</div>
                        <h4 className="font-bold text-tasko-dark mb-1 text-sm sm:text-base">{info.title}</h4>
                        <p className="text-gray-700 mb-1 text-xs sm:text-sm">{info.desc}</p>
                        <p className="text-xs sm:text-sm text-tasko-blue font-medium">{info.highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* Call to action */}
                  <div className="pt-4 sm:pt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-tasko-blue text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-tasko-dark transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                      <span className="mr-2 sm:mr-3">🗺️</span>
                      Venir nous voir
                      <span className="ml-2 sm:ml-3">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <div className="relative mt-8 lg:mt-0">
                  <div className="rounded-lg sm:rounded-xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl">
                    <img
                      src="/images/entraintasko1.jpg"
                      alt="Stade de Diguel AS Tasko"
                      className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Badge flottant */}
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-tasko-yellow text-tasko-dark px-3 sm:px-4 py-1.5 sm:py-2 md:px-6 md:py-3 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl transform rotate-3">
                    <div className="font-bold text-sm sm:text-base md:text-lg">TERRAIN SACRÉ</div>
                    <div className="text-xs sm:text-sm">Depuis 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe dirigeante */}
      <section className="py-12 md:py-24 bg-tasko-dark text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                👑 LE CERCLÉ DIRIGEANT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
                Les Visionnaires de <span className="text-tasko-yellow">Tasko</span>
              </h2>
              <p className="text-tasko-light text-base sm:text-lg max-w-2xl mx-auto px-4">
                L'équipe derrière l'équipe, ceux qui croient en l'impossible
              </p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div data-aos="fade-up">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10">
                  <div className="flex items-start mb-6 sm:mb-8">
                    <img
                      src="/images/taskopresi2.jpg"
                      alt="Tman Barka Djorock"
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 sm:border-4 border-tasko-yellow mr-3 sm:mr-4 md:mr-6"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Tman Barka Djorock</h3>
                      <p className="text-tasko-yellow font-medium text-sm sm:text-base">Président Fondateur</p>
                      <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">Visionnaire & Stratège</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-tasko-yellow pl-4 sm:pl-6 py-2 sm:py-3 mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg md:text-xl italic">
                      "Nous ne construisons pas simplement une équipe de football. 
                      Nous bâtissons une institution, une école de vie..."
                    </p>
                  </blockquote>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Leader Charismatique</span>
                    <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Stratège Visionnaire</span>
                    <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Passion Indomptable</span>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-white/10">
                    <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 flex items-center">
                      <span className="text-tasko-yellow mr-2">🎯</span>
                      La Vision Djorock
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="text-tasko-yellow mr-2">✓</span>
                        Faire de l'AS Tasko une marque nationale reconnue
                      </li>
                      <li className="flex items-start">
                        <span className="text-tasko-yellow mr-2">✓</span>
                        Exporter des talents tchadiens en Europe
                      </li>
                      <li className="flex items-start">
                        <span className="text-tasko-yellow mr-2">✓</span>
                        Créer un modèle économique durable pour le club
                      </li>
                      <li className="flex items-start">
                        <span className="text-tasko-yellow mr-2">✓</span>
                        Développer une académie d'excellence africaine
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-tasko-blue/20 to-purple-500/20 p-4 sm:p-6 rounded-lg sm:rounded-2xl">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-3xl font-bold mb-1 sm:mb-2">2026</div>
                      <div className="text-base sm:text-lg font-semibold">Année de la Consécration</div>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">
                        Sous sa direction, l'AS Tasko vise l'accession en D1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-tasko-blue to-tasko-dark text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8">⚡</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8">
              Prêt à Rejoindre la Révolution <span className="text-tasko-yellow">Tasko</span> ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Que vous soyez joueur, supporter, sponsor ou partenaire, 
              il y a une place pour vous dans cette aventure exceptionnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-tasko-yellow text-tasko-dark px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base md:text-lg"
              >
                🎯 Devenir Partenaire
              </Link>
              <Link
                to="/team"
                className="bg-transparent border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-tasko-dark transition-all duration-300 text-sm sm:text-base md:text-lg"
              >
                ⚽ Rejoindre l'Équipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About