import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PlayerCard from '../components/PlayerCard'
import { players } from '../data/players'

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [hoveredPlayer, setHoveredPlayer] = useState(null)
  
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

  const positions = ['Tous', 'Gardien', 'Défenseur', 'Milieu', 'Attaquant']
  
  const filteredPlayers = activeFilter === 'Tous' 
    ? players 
    : players.filter(player => player.position === activeFilter)

  const staff = [
    {
      name: "Coach Principal",
      role: "Entraîneur Chef",
      image: "/images/taskopresi.jpg",
      bio: "Architecte tactique, 10+ ans d'expérience en formation de jeunes",
      specialty: "Stratégie & Développement",
      quote: "Je ne forme pas des joueurs, je forge des champions."
    },
    {
      name: "Assistant Technique",
      role: "Entraîneur Adjoint",
      image: "/images/taskopresi2.jpg",
      bio: "Spécialiste en préparation physique et analyse vidéo",
      specialty: "Performance & Conditionnement",
      quote: "La perfection n'existe pas, mais nous la poursuivons sans relâche."
    },
    {
      name: "Président Fondateur",
      role: "Vision & Direction",
      image: "/images/taskopresi.jpg",
      bio: "À l'origine du projet Tasko, stratège du développement club",
      specialty: "Leadership & Management",
      quote: "Nous ne construisons pas une équipe, nous créons une légende."
    }
  ]

  // Statistiques impactantes
  const teamStats = [
    { value: '21.5', label: 'Âge Moyen', sublabel: 'Jeunesse Prometteuse', icon: '👦', color: 'from-blue-500/20 to-cyan-500/20' },
    { value: '85%', label: 'Formation Maison', sublabel: 'Talents Locaux', icon: '🏠', color: 'from-green-500/20 to-emerald-500/20' },
    { value: 'D2', label: 'Compétition', sublabel: 'Championnat National', icon: '🏆', color: 'from-yellow-500/20 to-orange-500/20' },
    { value: '2026', label: 'Objectif', sublabel: 'Accession D1', icon: '🎯', color: 'from-purple-500/20 to-pink-500/20' }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section Impactante */}
      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-tasko-dark via-tasko-blue to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/images/tasko1.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-6">
              ⚽ L'ARMÉE TASKO
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              La Génération <span className="text-tasko-yellow">Tasko</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8">
              Jeunes, affamés de succès et déterminés à écrire l'histoire
            </p>
            
            {/* Stats rapides */}
            <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">{players.length}+</div>
                <div className="text-sm">Guérriers du Terrain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">100%</div>
                <div className="text-sm">Passion Pure</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">D2</div>
                <div className="text-sm">Notre Champ de Bataille</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Staff Élite */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* En-tête impactant */}
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
                🧠 L'ÉTAT-MAJOR
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-tasko-dark mb-6">
                Les <span className="text-tasko-blue">Cerveaux</span> de l'Opération
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Les stratèges qui transforment le potentiel en excellence
              </p>
            </div>

            {/* Grille du staff */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {staff.map((member, index) => (
                <div 
                  key={index}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-tasko-blue/30">
                    {/* Photo */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Badge de rôle */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-tasko-yellow text-tasko-dark px-3 py-1 rounded-full text-sm font-bold">
                          {member.role}
                        </span>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-tasko-dark mb-2 group-hover:text-tasko-blue transition-colors">
                        {member.name}
                      </h3>
                      
                      <div className="mb-4">
                        <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-3 py-1 rounded text-sm font-medium mb-3">
                          {member.specialty}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{member.bio}</p>
                      
                      {/* Citation */}
                      <div className="border-l-3 border-tasko-yellow pl-4 py-2 bg-gradient-to-r from-tasko-yellow/5 to-transparent">
                        <p className="text-sm italic text-gray-700">
                          "{member.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Joueurs avec Filtres Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* En-tête impactant */}
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-4 py-2 rounded-full text-sm font-bold mb-4">
                ⚔️ LES GUERRIERS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-tasko-dark mb-6">
                L'<span className="text-tasko-blue">Armada</span> Tasko
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Découvrez les talents qui portent fièrement nos couleurs
              </p>

              {/* Filtres stylisés */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {positions.map((position, index) => (
                  <button
                    key={position}
                    onClick={() => setActiveFilter(position)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                      activeFilter === position
                        ? 'bg-gradient-to-r from-tasko-blue to-tasko-dark text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg border border-gray-200'
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {position}
                    {position !== 'Tous' && (
                      <span className="ml-2 text-xs opacity-80">
                        ({players.filter(p => p.position === position).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Grille des joueurs */}
            {filteredPlayers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPlayers.map((player, index) => (
                  <div 
                    key={player.id}
                    data-aos="fade-up"
                    data-aos-delay={index % 4 * 100}
                    onMouseEnter={() => setHoveredPlayer(player.id)}
                    onMouseLeave={() => setHoveredPlayer(null)}
                  >
                    <div className={`
                      transition-all duration-500 transform
                      ${hoveredPlayer === player.id ? 'scale-105 z-10' : ''}
                      ${hoveredPlayer && hoveredPlayer !== player.id ? 'opacity-80 scale-95' : ''}
                    `}>
                      <PlayerCard player={player} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div 
                className="text-center py-16 bg-white rounded-3xl shadow-xl"
                data-aos="fade-up"
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Aucun joueur dans cette catégorie</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Tous nos talents sont polyvalents ! Essayez une autre catégorie ou découvrez notre effectif complet.
                </p>
                <button
                  onClick={() => setActiveFilter('Tous')}
                  className="bg-tasko-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-tasko-dark transition transform hover:scale-105"
                >
                  Voir Tous les Joueurs
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Statistiques Impactantes */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-tasko-dark to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-4">
                📊 LES CHIFFRES QUI PARLENT
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                L'ADN <span className="text-tasko-yellow">Tasko</span> en Chiffres
              </h2>
              <p className="text-tasko-light text-lg max-w-2xl mx-auto">
                La preuve par les chiffres de notre singularité et de notre ambition
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {teamStats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 transform hover:scale-105 transition-all duration-300`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-300">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Stats détaillées */}
            <div className="mt-16" data-aos="fade-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-8 text-center">Analyse de l'Effectif</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tasko-yellow mb-2">Jeunesse</div>
                    <p className="text-gray-300">Moyenne d'âge la plus basse de la D2</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tasko-yellow mb-2">Formation</div>
                    <p className="text-gray-300">85% des joueurs formés au club</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tasko-yellow mb-2">Ambition</div>
                    <p className="text-gray-300">Objectif accession D1 en 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Recrutement Premium */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Colonne 1 - Essais */}
              <div data-aos="fade-right">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                  <div className="mb-8">
                    <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
                      🎯 RECRUTEMENT D'ÉLITE
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-tasko-dark mb-6">
                      Le Talent, Nous le <span className="text-tasko-blue">Détectons</span>
                    </h3>
                    <p className="text-gray-700 text-lg mb-8">
                      L'AS Tasko recherche les perles rares : des jeunes déterminés, 
                      affamés de succès et prêts à tout donner pour le maillot.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      "Âge : 16-25 ans (exceptionnel jusqu'à 28 ans)",
                      "Condition physique optimale",
                      "Attitude exemplaire et esprit d'équipe",
                      "Potentiel de progression exceptionnel",
                      "Passion dévorante pour le football"
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="w-8 h-8 rounded-full bg-tasko-yellow flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-tasko-dark font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-tasko-blue to-tasko-dark text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <span className="mr-3">📝</span>
                      Postuler Maintenant
                      <span className="ml-3">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Colonne 2 - Horaires & Infos */}
              <div data-aos="fade-left">
                <div className="bg-gradient-to-br from-tasko-dark to-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="p-8 md:p-10">
                    <div className="mb-10">
                      <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-4">
                        🏟️ COME & WATCH
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Nos Entraînements <span className="text-tasko-yellow">Ouverts</span>
                      </h3>
                      <p className="text-tasko-light">
                        Venez assister aux séances qui forgent les champions de demain
                      </p>
                    </div>

                    {/* Horaires */}
                    <div className="mb-10">
                      <h4 className="text-xl font-bold mb-6 flex items-center">
                        <span className="mr-3">⏰</span>
                        Horaires des Séances
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-bold text-lg">Lundi - Vendredi</div>
                              <div className="text-tasko-light text-sm">Séances intensives</div>
                            </div>
                            <div className="text-2xl font-bold text-tasko-yellow">16h-18h</div>
                          </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-bold text-lg">Samedi</div>
                              <div className="text-tasko-light text-sm">Matchs amicaux</div>
                            </div>
                            <div className="text-2xl font-bold text-tasko-yellow">10h-12h</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Localisation */}
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                      <h4 className="text-xl font-bold mb-4 flex items-center">
                        <span className="mr-3">📍</span>
                        Où Nous Trouver
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="font-semibold">Stade de Diguel</div>
                          <div className="text-tasko-light text-sm">Quartier Diguel, N'Djamena</div>
                        </div>
                        <div className="flex items-center text-sm text-tasko-light">
                          <span className="mr-2">🚗</span>
                          Parking disponible • Accessible en taxi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Final */}
            <div className="mt-20 text-center" data-aos="fade-up">
              <div className="bg-gradient-to-r from-tasko-blue/10 to-tasko-dark/10 rounded-3xl p-10 border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-tasko-dark mb-6">
                  Prêt à Porter le Maillot <span className="text-tasko-blue">Tasko</span> ?
                </h3>
                <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                  Rejoignez la famille Tasko et écrivez votre propre histoire de succès
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-tasko-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-tasko-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    🎯 Postuler comme Joueur
                  </Link>
                  <Link
                    to="/gallery"
                    className="bg-white text-tasko-dark px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-300 hover:border-tasko-blue"
                  >
                    📸 Voir Nos Entraînements
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team