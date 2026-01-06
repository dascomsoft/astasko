import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from '../components/HeroSection'
import NewsCard from '../components/NewsCard'
import { news } from '../data/news'

const Home = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: window.innerWidth < 768 // Désactive AOS sur mobile pour performances
    })



    
    // Réactive AOS après chargement sur mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        AOS.init({
          duration: 600,
          once: true,
          offset: 30,
        })
      }, 300)
    }
  }, [])

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`)
  }

  return (
    <div className="overflow-hidden">
      <HeroSection />
      
      {/* Section Message du Président - Version Mobile Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-tasko-dark to-gray-900 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-tasko-yellow/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-tasko-blue/10 rounded-full translate-x-24 translate-y-24"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo du Président */}
              <div 
                className="relative order-2 lg:order-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="relative">
                  <img
                    src="/images/taskopresi2.jpg"
                    alt="Tman Barka Djorock - Président de l'AS Tasko"
                    className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-tasko-yellow text-tasko-dark p-6 rounded-2xl shadow-xl">
                    <div className="text-4xl md:text-5xl font-bold">2026</div>
                    <div className="text-sm font-semibold">Notre Année</div>
                  </div>
                </div>
              </div>
              
              {/* Message du Président */}
              <div 
                className="order-1 lg:order-2"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb-6">
                  <span className="inline-block bg-tasko-yellow/20 text-tasko-yellow px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    👑 Mot du Président
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Une Génération <span className="text-tasko-yellow">Déterminée</span> à Écrire l'Histoire
                  </h2>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 mb-8">
                  <p className="text-gray-200 text-lg md:text-xl mb-6 leading-relaxed">
                    "Jeune, passionné et ambitieux, l'AS Tasko représente bien plus qu'un club de football. 
                    Nous sommes le <strong className="text-tasko-yellow">rêve d'une génération</strong> qui refuse les limites, 
                    qui croit en son potentiel et qui travaille chaque jour pour porter haut les couleurs du Tchad."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-tasko-yellow flex items-center justify-center mr-4">
                      <span className="text-tasko-dark font-bold text-xl">TB</span>
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">Timan Barka Djorock</div>
                      <div className="text-tasko-light text-sm">Président Fondateur</div>
                    </div>
                  </div>
                </div>
                
                {/* Statistiques impactantes */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '100%', label: 'Jeunes Talents', icon: '⭐' },
                    { value: 'D2', label: 'Championnat', icon: '🏆' },
                    { value: '24/7', label: 'Détermination', icon: '🔥' },
                    { value: '2026', label: 'Objectif', icon: '🎯' }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={400 + (index * 100)}
                    >
                      <div className="text-2xl text-tasko-yellow mb-1">{stat.icon}</div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos rapide - Version Mobile Premium */}
      <section className="py-16 md:py-24 bg-white" id="about-preview">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div 
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-tasko-dark mb-6 leading-tight">
                    La Révolution <span className="text-tasko-blue">Tasko</span> est en Marche
                  </h2>
                  
                  <div className="space-y-6 text-gray-700">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <strong className="text-tasko-dark">AS Tasko</strong> n'est pas un club ordinaire. 
                      Nous sommes le <strong className="text-tasko-blue">phénomène montant</strong> du football tchadien, 
                      une équipe jeune, affamée de succès et déterminée à briser les barrières.
                    </p>
                    
                    <div className="bg-gradient-to-r from-tasko-blue/5 to-tasko-dark/5 p-6 rounded-2xl border-l-4 border-tasko-blue">
                      <div className="flex items-start">
                        <span className="text-tasko-blue text-2xl mr-3">⚡</span>
                        <div>
                          <p className="font-bold text-tasko-dark text-lg">
                            Notre ADN : Jeunesse + Ambition + Travail
                          </p>
                          <p className="text-gray-600 mt-2">
                            Nous croyons en la puissance de la jeunesse combinée à une discipline de fer.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="text-tasko-blue font-bold text-lg mb-1">Mission</div>
                        <div className="text-sm text-gray-600">
                          Former la nouvelle élite du football tchadien
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="text-tasko-blue font-bold text-lg mb-1">Vision</div>
                        <div className="text-sm text-gray-600">
                          Accéder à la D1 et briller en Afrique
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/about"
                    className="bg-tasko-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-tasko-dark transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Découvrir Notre Histoire
                  </a>
                  <a
                    href="/team"
                    className="border-2 border-tasko-blue text-tasko-blue px-8 py-4 rounded-xl font-bold hover:bg-tasko-blue hover:text-white transition-all duration-300 text-center"
                  >
                    Rencontrer l'Équipe
                  </a>
                </div>
              </div>
              
              <div 
                className="relative"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/entraintasko.jpg"
                    alt="Entraînement intensif AS Tasko"
                    className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="text-sm font-semibold bg-tasko-yellow/90 text-tasko-dark px-3 py-1 rounded-full inline-block mb-2">
                        🏋️‍♂️ Entraînement Elite
                      </div>
                      <div className="text-xl font-bold">
                        L'excellence s'acquiert chaque jour sur le terrain
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Badge flottant */}
                <div className="absolute -top-4 -right-4 bg-tasko-yellow text-tasko-dark px-6 py-3 rounded-xl shadow-xl transform rotate-3">
                  <div className="font-bold text-lg">D2 2025-2026</div>
                  <div className="text-sm">Notre Saison</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prochain Match - Version Mobile Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-tasko-dark to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block bg-tasko-yellow/20 text-tasko-yellow px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🗓️ PROCHAINE RENCONTRE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              La Bataille de <span className="text-tasko-yellow">Diguel</span> Approche
            </h2>
            <p className="text-tasko-light text-lg max-w-2xl mx-auto">
              Première journée du championnat. L'heure de vérité a sonné.
            </p>
          </div>
          
          <div 
            className="max-w-4xl mx-auto"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl">
              {/* En-tête du match */}
              <div className="text-center mb-8">
                <div className="inline-block bg-tasko-blue/30 text-white px-6 py-2 rounded-full font-bold mb-2">
                  📍 Stade de Diguel • N'Djamena
                </div>
                <div className="text-2xl md:text-3xl font-bold text-tasko-yellow">
                  15 Janvier 2026 • 15:00
                </div>
              </div>
              
              {/* Affichage des équipes */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                {/* AS Tasko */}
                <div className="text-center flex-1">
                  <div className="mb-4">
                    <div className="text-6xl md:text-7xl font-bold text-tasko-yellow">AS</div>
                    <div className="text-3xl md:text-4xl font-bold">TASKO</div>
                  </div>
                  <div className="bg-tasko-yellow/20 px-4 py-2 rounded-full inline-block">
                    <span className="flex items-center justify-center">
                      <span className="mr-2">🏠</span>
                      <span className="font-semibold">Domicile</span>
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-300">
                    Génération Montante • Invaincue à domicile
                  </div>
                </div>
                
                {/* VS */}
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">VS</div>
                  <div className="text-lg text-gray-300">Journée 1 • Championnat D2</div>
                  <div className="mt-4 bg-white/10 px-4 py-2 rounded-full">
                    <span className="flex items-center">
                      <span className="mr-2">⚔️</span>
                      <span>Choc attendu</span>
                    </span>
                  </div>
                </div>
                
                {/* AS Police */}
                <div className="text-center flex-1">
                  <div className="mb-4">
                    <div className="text-3xl md:text-4xl font-bold">AS POLICE</div>
                    <div className="text-xl text-gray-300 mt-1">Adversaire redoutable</div>
                  </div>
                  <div className="bg-red-500/20 px-4 py-2 rounded-full inline-block">
                    <span className="flex items-center justify-center">
                      <span className="mr-2">🚓</span>
                      <span className="font-semibold">Extérieur</span>
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-300">
                    Défense solide • Expérimenté
                  </div>
                </div>
              </div>
              
              {/* Informations complémentaires */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: '🎫', label: 'Billetterie', value: 'Ouverte', color: 'bg-green-500/20' },
                  { icon: '⏰', label: 'Ouverture', value: '14:00', color: 'bg-blue-500/20' },
                  { icon: '📊', label: 'Prévisions', value: 'Victoire', color: 'bg-tasko-yellow/20' },
                  { icon: '👥', label: 'Capacité', value: '500+', color: 'bg-purple-500/20' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`${item.color} p-4 rounded-xl text-center`}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                    <div className="font-bold text-lg mt-1">{item.value}</div>
                  </div>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-tasko-yellow text-tasko-dark px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                  <span className="mr-2">📅</span>
                  Ajouter au Calendrier
                </button>
                <button className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center">
                  <span className="mr-2">📍</span>
                  Voir l'Itinéraire
                </button>
              </div>
            </div>
          </div>
          
          {/* Countdown */}
          <div 
            className="mt-16 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-xl font-bold mb-6">Le compte à rebours est lancé</div>
            <div className="flex justify-center space-x-4 md:space-x-8">
              {[
                { value: '12', label: 'Jours' },
                { value: '18', label: 'Heures' },
                { value: '45', label: 'Minutes' },
                { value: '22', label: 'Secondes' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl min-w-[70px]"
                >
                  <div className="text-3xl md:text-4xl font-bold text-tasko-yellow">{item.value}</div>
                  <div className="text-sm text-gray-300 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Actualités récentes - Version Mobile Premium */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📢 ACTUALITÉS FRAPPANTES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-tasko-dark mb-6">
              L'Actualité Brûlante de <span className="text-tasko-blue">Tasko</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ne ratez aucun scoop, transfert, victoire ou moment historique du club
            </p>
          </div>
          
          {/* Grille d'actualités avec interaction */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {news.slice(0, 3).map((item, index) => (
              <div 
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="cursor-pointer"
                onClick={() => handleNewsClick(item.id)}
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
                  {/* Badge */}
                  {item.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-tasko-yellow text-tasko-dark px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ À LA UNE
                    </div>
                  )}
                  
                  {/* Image avec overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Catégorie */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-tasko-blue text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <span className="flex items-center">
                        <span className="mr-2">📅</span>
                        {item.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <span className="mr-2">⏱️</span>
                        Lecture 3 min
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-tasko-dark mb-3 group-hover:text-tasko-blue transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    
                    {/* Bouton de lecture */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-tasko-blue font-semibold group-hover:text-tasko-dark transition-colors duration-300">
                        Lire l'article complet →
                      </span>
                      <div className="w-10 h-10 rounded-full bg-tasko-blue/10 flex items-center justify-center group-hover:bg-tasko-blue group-hover:text-white transition-all duration-300">
                        <span>➔</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Effet hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-tasko-blue/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div 
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="/news"
              className="inline-flex items-center bg-gradient-to-r from-tasko-blue to-tasko-dark text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="mr-3">📰</span>
              Explorer Toutes les Actualités
              <span className="ml-3 text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section Galerie prévisualisation - Version Mobile Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📸 GALERIE IMMERSIVE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-tasko-dark mb-6">
              L'Émotion <span className="text-tasko-blue">Tasko</span> en Images
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Plongez au cœur des moments les plus intenses du club
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" data-aos="fade-up">
            {[
              { src: '/images/galltasko.jpg', title: 'Victoire Écrasante', category: 'Match' },
              { src: '/images/galltasko1.jpg', title: 'Préparation Elite', category: 'Entraînement' },
              { src: '/images/galltasko3.jpg', title: 'Célébration Historique', category: 'Événement' },
              { src: '/images/galltasko5.jpg', title: 'Esprit d\'Équipe', category: 'Vie du Club' },
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay avec informations */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-tasko-yellow text-tasko-dark px-3 py-1 rounded-lg text-xs font-bold mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <div className="text-gray-300 text-sm flex items-center">
                      <span className="mr-2">👁️</span>
                      Voir en grand
                    </div>
                  </div>
                </div>
                
                {/* Badge de visualisation */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-gray-800 text-lg">+</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div 
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="/gallery"
              className="inline-flex items-center bg-white text-tasko-dark px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-tasko-blue shadow-lg hover:shadow-xl"
            >
              <span className="mr-3">🌟</span>
              Découvrir Toute Notre Galerie
              <span className="ml-3 text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section Sponsors - Version Mobile Premium */}
      <section className="py-16 md:py-24 bg-tasko-dark text-white">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block bg-tasko-yellow/20 text-tasko-yellow px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🤝 NOS ALLIÉS STRATÉGIQUES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ils Croient en la Révolution <span className="text-tasko-yellow">Tasko</span>
            </h2>
            <p className="text-tasko-light text-lg max-w-2xl mx-auto">
              Des partenaires visionnaires qui nous accompagnent vers l'excellence
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Sponsor Principal */}
            <div 
              className="mb-16"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                      <div className="text-4xl md:text-5xl">👕</div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-4">
                      ⭐ SPONSOR PRINCIPAL
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      El Tchado Shop
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      Notre équipementier officiel nous fournit des tenues de qualité 
                      professionnelle pour performer au plus haut niveau.
                    </p>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="mr-4">📍 Partenaire depuis 2024</span>
                      <span>🤝 Contrat exclusif</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Appel aux sponsors */}
            <div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-gradient-to-r from-tasko-blue/20 to-tasko-dark/20 backdrop-blur-sm border border-white/20 rounded-3xl p-10">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Rejoignez l'Aventure Tasko
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Devenez partenaire d'un club en pleine ascension et bénéficiez 
                  d'une visibilité exceptionnelle auprès d'une communauté engagée.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-tasko-yellow text-tasko-dark px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    📞 Demander un Partenariat
                  </a>
                  <a
                    href="/contact"
                    className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30"
                  >
                    📊 Voir Nos Offres
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home