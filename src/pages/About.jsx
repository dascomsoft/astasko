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
          offset: 30,
        })
      }, 300)
    }
    
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section Impactante */}
      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-tasko-dark via-tasko-blue to-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/images/taskopresi.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="mb-6">
              <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-4">
                👑 NOTRE IDENTITÉ
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                L'Âme de <span className="text-tasko-yellow">Tasko</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
                Plus qu'un club, un mouvement qui redéfinit le football tchadien
              </p>
            </div>
            
            {/* Stats accrocheuses */}
            <div className="flex flex-wrap justify-center gap-4 mt-8" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-xl font-bold">2025-2026</div>
                <div className="text-sm">Saison Déterminante</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-xl font-bold">D2</div>
                <div className="text-sm">Championnat National</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-xl font-bold">100%</div>
                <div className="text-sm">Jeunes Talents</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Histoire avec Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* En-tête impactant */}
            <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
                📜 NOTRE ÉPOPÉE
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-tasko-dark mb-6">
                Naissance d'une <span className="text-tasko-blue">Légende</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                D'un rêve de quartier à une ambition nationale
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Contenu principal */}
              <div data-aos="fade-right">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                  <h3 className="text-2xl md:text-3xl font-bold text-tasko-dark mb-6">
                    L'Étincelle Tasko
                  </h3>
                  
                  <div className="space-y-6 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      L'<strong className="text-tasko-dark">AS Tasko</strong> est né dans les rues de Diguel, 
                      fruit de la passion pure d'une bande de jeunes qui ne connaissaient qu'une chose : 
                      <strong className="text-tasko-blue"> l'amour du ballon rond</strong>.
                    </p>
                    
                    <div className="bg-gradient-to-r from-tasko-blue/5 to-transparent p-6 rounded-xl border-l-4 border-tasko-blue">
                      <div className="flex items-start">
                        <span className="text-tasko-blue text-2xl mr-3">⚡</span>
                        <div>
                          <p className="font-bold text-tasko-dark text-lg">
                            Du Béton aux Étoiles
                          </p>
                          <p className="text-gray-600 mt-2">
                            Des terrains de terre battue aux pelouses du championnat national, 
                            notre ascension est le récit d'une détermination sans faille.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="leading-relaxed">
                      Aujourd'hui en <strong>Deuxième Division</strong>, nous écrivons chaque jour 
                      une nouvelle page de cette histoire exceptionnelle. 
                      <strong> Chaque match est un chapitre, chaque victoire un paragraphe mémorable</strong>.
                    </p>
                  </div>
                  
                  {/* Citation emblématique */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-tasko-yellow flex items-center justify-center mr-4">
                        <span className="text-tasko-dark font-bold text-xl">⚽</span>
                      </div>
                      <div>
                        <p className="font-bold text-tasko-dark italic">
                          "Tasko un jour, Tasko toujours !"
                        </p>
                        <p className="text-sm text-gray-600">- La devise qui nous unit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline visuelle */}
              <div data-aos="fade-left">
                <div className="space-y-8">
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
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-tasko-blue to-tasko-dark text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div className="ml-6 pt-1">
                        <div className="text-2xl font-bold text-tasko-dark mb-1">{item.year}</div>
                        <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-4 py-2 rounded-full text-sm font-bold mb-4">
                🎯 NOTRE RAISON D'ÊTRE
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-tasko-dark mb-6">
                Mission & <span className="text-tasko-blue">Vision</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Notre feuille de route pour conquérir le football tchadien
              </p>
            </div>

            {/* Mission */}
            <div className="mb-20" data-aos="fade-up">
              <div className="bg-gradient-to-r from-tasko-dark to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-tasko-yellow flex items-center justify-center mr-6">
                      <span className="text-tasko-dark text-3xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Notre Mission</h3>
                      <p className="text-tasko-light">Pourquoi nous existons</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { icon: '👨‍🎓', text: 'Former la nouvelle élite du football tchadien' },
                      { icon: '⚽', text: 'Développer des joueurs complets, sur et hors du terrain' },
                      { icon: '🏆', text: 'Construire une équipe championne en D2 dès 2026' },
                      { icon: '🌍', text: 'Porter haut les couleurs du Tchad en Afrique' },
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="text-2xl mb-3">{item.icon}</div>
                        <p className="text-white font-medium">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-tasko-blue to-tasko-dark flex items-center justify-center mr-6">
                      <span className="text-white text-3xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-tasko-dark">Notre Vision</h3>
                      <p className="text-gray-600">Où nous voulons aller</p>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Devenir la référence absolue de la formation footballistique au Tchad 
                        et <strong className="text-tasko-dark">accéder à la Première Division</strong> dans un délai record.
                      </p>
                      
                      <div className="bg-gradient-to-r from-tasko-blue/5 to-transparent p-6 rounded-xl">
                        <h4 className="font-bold text-tasko-dark text-lg mb-3">Horizon 2028 :</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-tasko-yellow rounded-full mr-3"></span>
                            Équipe première en D1
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-tasko-yellow rounded-full mr-3"></span>
                            Académie reconnue à l'international
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-tasko-yellow rounded-full mr-3"></span>
                            Joueurs professionnels en Europe
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-tasko-dark/5 to-gray-100 p-8 rounded-2xl">
                      <div className="text-center mb-6">
                        <div className="text-5xl font-bold text-tasko-blue mb-2">2026</div>
                        <div className="font-bold text-tasko-dark text-xl">Objectif Saison</div>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <p className="font-semibold text-center text-tasko-dark">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
                ⚡ NOTRE ADN
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-tasko-dark mb-6">
                Les Piliers <span className="text-tasko-blue">Tasko</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Les valeurs qui forgent notre identité et notre succès
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className={`bg-gradient-to-br ${value.color} backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-5xl mb-6 animate-pulse-slow">{value.icon}</div>
                  <h3 className="text-xl font-bold text-tasko-dark mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Infrastructures Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-4 py-2 rounded-full text-sm font-bold mb-4">
                🏟️ NOTRE QUARTIER GÉNÉRAL
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-tasko-dark mb-6">
                Le Temple <span className="text-tasko-blue">Tasko</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Là où les champions forgent leur légende
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div data-aos="fade-right">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-tasko-dark mb-4">
                      Stade de Diguel : Notre Forteresse
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Plus qu'un terrain, un sanctuaire où se joue l'avenir du football tchadien. 
                      C'est ici, au cœur de N'Djamena, que nos jeunes talents se transforment en guerriers du ballon rond.
                    </p>
                  </div>

                  {/* Infos pratiques */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: '📍', title: 'Localisation', desc: 'Quartier Diguel, N\'Djamena', highlight: 'Cœur de la capitale' },
                      { icon: '⏰', title: 'Horaires', desc: 'Lun-Ven 16h-18h', highlight: 'Samedi 10h-12h' },
                      { icon: '⚽', title: 'Capacité', desc: '500 supporters', highlight: 'Ambiance garantie' },
                      { icon: '🏠', title: 'Siège Social', desc: 'Goudji Rue de 50 M', highlight: 'Direction technique' },
                    ].map((info, index) => (
                      <div 
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="text-2xl text-tasko-blue mb-3">{info.icon}</div>
                        <h4 className="font-bold text-tasko-dark mb-1">{info.title}</h4>
                        <p className="text-gray-700 mb-1">{info.desc}</p>
                        <p className="text-sm text-tasko-blue font-medium">{info.highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* Call to action */}
                  <div className="pt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-tasko-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-tasko-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <span className="mr-3">🗺️</span>
                      Venir nous voir
                      <span className="ml-3">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/entraintasko1.jpg"
                      alt="Stade de Diguel AS Tasko"
                      className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Badge flottant */}
                  <div className="absolute -top-4 -right-4 bg-tasko-yellow text-tasko-dark px-6 py-3 rounded-xl shadow-xl transform rotate-3">
                    <div className="font-bold text-lg">TERRAIN SACRÉ</div>
                    <div className="text-sm">Depuis 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe dirigeante */}
      <section className="py-16 md:py-24 bg-tasko-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-4">
                👑 LE CERCLÉ DIRIGEANT
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Les Visionnaires de <span className="text-tasko-yellow">Tasko</span>
              </h2>
              <p className="text-tasko-light text-lg max-w-2xl mx-auto">
                L'équipe derrière l'équipe, ceux qui croient en l'impossible
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div data-aos="fade-right">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
                  <div className="flex items-start mb-8">
                    <img
                      src="/images/taskopresi2.jpg"
                      alt="Tman Barka Djorock"
                      className="w-20 h-20 rounded-full object-cover border-4 border-tasko-yellow mr-6"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Tman Barka Djorock</h3>
                      <p className="text-tasko-yellow font-medium">Président Fondateur</p>
                      <p className="text-gray-300 text-sm mt-2">Visionnaire & Stratège</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-tasko-yellow pl-6 py-3 mb-8">
                    <p className="text-xl italic">
                      "Nous ne construisons pas simplement une équipe de football. 
                      Nous bâtissons une institution, une école de vie, 
                      un mouvement qui va redéfinir ce que signifie être sportif au Tchad."
                    </p>
                  </blockquote>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Leader Charismatique</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Stratège Visionnaire</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Passion Indomptable</span>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left">
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 flex items-center">
                      <span className="text-tasko-yellow mr-2">🎯</span>
                      La Vision Djorock
                    </h4>
                    <ul className="space-y-3 text-gray-300">
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
                  
                  <div className="bg-gradient-to-r from-tasko-blue/20 to-purple-500/20 p-6 rounded-2xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2026</div>
                      <div className="text-lg font-semibold">Année de la Consécration</div>
                      <p className="text-sm text-gray-300 mt-2">
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-tasko-blue to-tasko-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <div className="text-6xl mb-8">⚡</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Prêt à Rejoindre la Révolution <span className="text-tasko-yellow">Tasko</span> ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Que vous soyez joueur, supporter, sponsor ou partenaire, 
              il y a une place pour vous dans cette aventure exceptionnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-tasko-yellow text-tasko-dark px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                🎯 Devenir Partenaire
              </Link>
              <Link
                to="/team"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-tasko-dark transition-all duration-300 text-lg"
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