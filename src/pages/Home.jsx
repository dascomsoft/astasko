
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
  }, [])

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`)
  }

  // Récupérer les 3 dernières actualités
  const latestNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Section Message du Président - Version Mobile Premium */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-tasko-dark to-gray-900 relative overflow-hidden">
        {/* Éléments décoratifs réduits pour mobile */}
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-32 sm:h-32 bg-tasko-yellow/5 rounded-full -translate-x-8 sm:-translate-x-16 -translate-y-8 sm:-translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-48 sm:h-48 bg-tasko-blue/5 rounded-full translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Photo du Président - Ordre modifié pour mobile */}
              <div
                className="relative order-2 lg:order-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative">
                  <img
                    src="/images/taskopresi2.jpg"
                    alt="Tman Barka Djorock - Président de l'AS Tasko"
                    className="rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl w-full h-[280px] sm:h-[350px] md:h-[500px] object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-tasko-yellow text-tasko-dark p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                    <div className="text-2xl sm:text-4xl md:text-5xl font-bold">2026</div>
                    <div className="text-xs sm:text-sm font-semibold">Notre Année</div>
                  </div>
                </div>
              </div>

              {/* Message du Président */}
              <div
                className="order-1 lg:order-2 mb-8 sm:mb-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="mb-6">
                  <span className="inline-block bg-tasko-yellow/20 text-tasko-yellow px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    👑 Mot du Président
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
                    Une Génération <span className="text-tasko-yellow">Déterminée</span> à Écrire l'Histoire
                  </h2>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                  <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
                    "Jeune, passionné et ambitieux, l'AS Tasko représente bien plus qu'un club de football.
                    Nous sommes le <strong className="text-tasko-yellow">rêve d'une génération</strong> qui refuse les limites,
                    qui croit en son potentiel et qui travaille chaque jour pour porter haut les couleurs du Tchad."
                  </p>

                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-tasko-yellow flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-tasko-dark font-bold text-lg sm:text-xl">TB</span>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base sm:text-lg">Timan Barka Djorock</div>
                      <div className="text-tasko-light text-xs sm:text-sm">Président Fondateur</div>
                    </div>
                  </div>
                </div>

                {/* Statistiques impactantes - Grid adapté mobile */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { value: '100%', label: 'Jeunes Talents', icon: '⭐' },
                    { value: 'D2', label: 'Championnat', icon: '🏆' },
                    { value: '24/7', label: 'Détermination', icon: '🔥' },
                    { value: '2026', label: 'Objectif', icon: '🎯' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:bg-white/10 transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={400 + (index * 100)}
                    >
                      <div className="text-xl sm:text-2xl text-tasko-yellow mb-1">{stat.icon}</div>
                      <div className="text-lg sm:text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Bouton Hommage */}
                <div
                  className="mt-6 sm:mt-8"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <a
                    href="/hommage"
                    className="inline-flex items-center bg-gradient-to-r from-tasko-yellow/20 to-tasko-yellow/10 text-tasko-yellow px-5 py-3 rounded-lg sm:rounded-xl font-bold hover:bg-tasko-yellow/30 transition-all duration-300 border border-tasko-yellow/30 shadow-lg hover:shadow-xl group text-sm sm:text-base"
                  >
                    <span className="mr-2 sm:mr-3">👑</span>
                    Voir l'Hommage au Président
                    <span className="ml-2 sm:ml-3 text-lg sm:text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos rapide - Version Mobile Premium */}
      <section className="py-12 md:py-24 bg-white" id="about-preview">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tasko-dark mb-4 sm:mb-6 leading-snug sm:leading-tight">
                    La Révolution <span className="text-tasko-blue">Tasko</span> est en Marche
                  </h2>

                  <div className="space-y-4 sm:space-y-6 text-gray-700">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                      <strong className="text-tasko-dark">AS Tasko</strong> n'est pas un club ordinaire.
                      Nous sommes le <strong className="text-tasko-blue">phénomène montant</strong> du football tchadien,
                      une équipe jeune, affamée de succès et déterminée à briser les barrières.
                    </p>

                    <div className="bg-gradient-to-r from-tasko-blue/5 to-tasko-dark/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-tasko-blue">
                      <div className="flex items-start">
                        <span className="text-tasko-blue text-xl sm:text-2xl mr-3">⚡</span>
                        <div>
                          <p className="font-bold text-tasko-dark text-base sm:text-lg">
                            Notre ADN : Jeunesse + Ambition + Travail
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Nous croyons en la puissance de la jeunesse combinée à une discipline de fer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                        <div className="text-tasko-blue font-bold text-base sm:text-lg mb-1">Mission</div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          Former la nouvelle élite du football tchadien
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                        <div className="text-tasko-blue font-bold text-base sm:text-lg mb-1">Vision</div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          Accéder à la D1 et briller en Afrique
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="/about"
                    className="bg-tasko-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-tasko-dark transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
                  >
                    Découvrir Notre Histoire
                  </a>
                  <a
                    href="/team"
                    className="border-2 border-tasko-blue text-tasko-blue px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-tasko-blue hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
                  >
                    Rencontrer l'Équipe
                  </a>
                </div>
              </div>

              <div
                className="relative w-full mt-8 sm:mt-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="relative rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl">
                  <img
                    src="/images/entraintasko.jpg"
                    alt="Entraînement intensif AS Tasko"
                    className="w-full h-[300px] sm:h-[350px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 sm:p-6 text-white">
                      <span className="text-xs sm:text-sm font-semibold bg-tasko-yellow/90 text-tasko-dark px-2 sm:px-3 py-1 rounded-full inline-block mb-2">
                        🏋️‍♂️ Entraînement Elite
                      </span>
                      <div className="text-lg sm:text-xl font-bold">
                        L'excellence s'acquiert chaque jour sur le terrain
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge flottant - Taille réduite pour mobile */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-tasko-yellow text-tasko-dark px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl transform rotate-3">
                  <div className="font-bold text-base sm:text-lg">D2 2025-2026</div>
                  <div className="text-xs sm:text-sm">Notre Saison</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prochain Match - Version Mobile Premium */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-tasko-dark to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="text-center mb-8 sm:mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block bg-tasko-yellow/20 text-tasko-yellow px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              🗓️ PROCHAINE RENCONTRE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              La Bataille de <span className="text-tasko-yellow">Diguel</span> Approche
            </h2>
            <p className="text-tasko-light text-base sm:text-lg max-w-2xl mx-auto px-4">
              Première journée du championnat. L'heure de vérité a sonné.
            </p>
          </div>

          <div
            className="max-w-4xl mx-auto"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-lg sm:shadow-2xl">
              {/* En-tête du match */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-block bg-tasko-blue/30 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-base mb-2">
                  📍 Stade de Diguel • N'Djamena
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-tasko-yellow">
                  15 Janvier 2026 • 15:00
                </div>
              </div>

              {/* Affichage des équipes - Version mobile verticale */}
              <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-10">
                {/* AS Tasko */}
                <div className="text-center w-full max-w-[200px] sm:max-w-none">
                  <div className="mb-3 sm:mb-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-tasko-yellow">AS</div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold">TASKO</div>
                  </div>
                  <div className="bg-tasko-yellow/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full inline-block">
                    <span className="flex items-center justify-center text-xs sm:text-sm">
                      <span className="mr-1 sm:mr-2">🏠</span>
                      <span className="font-semibold">Domicile</span>
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-300">
                    Génération Montante • Invaincue à domicile
                  </div>
                </div>

                {/* VS */}
                <div className="text-center my-4 sm:my-0">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">VS</div>
                  <div className="text-sm sm:text-base text-gray-300">Journée 1 • Championnat D2</div>
                  <div className="mt-2 sm:mt-4 bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                    <span className="flex items-center text-xs sm:text-sm">
                      <span className="mr-1 sm:mr-2">⚔️</span>
                      <span>Choc attendu</span>
                    </span>
                  </div>
                </div>

                {/* AS Police */}
                <div className="text-center w-full max-w-[200px] sm:max-w-none">
                  <div className="mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold">AS POLICE</div>
                    <div className="text-sm sm:text-base text-gray-300 mt-1">Adversaire redoutable</div>
                  </div>
                  <div className="bg-red-500/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full inline-block">
                    <span className="flex items-center justify-center text-xs sm:text-sm">
                      <span className="mr-1 sm:mr-2">🚓</span>
                      <span className="font-semibold">Extérieur</span>
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-300">
                    Défense solide • Expérimenté
                  </div>
                </div>
              </div>

              {/* Informations complémentaires - Grid adapté mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-10">
                {[
                  { icon: '🎫', label: 'Billetterie', value: 'Ouverte', color: 'bg-green-500/20' },
                  { icon: '⏰', label: 'Ouverture', value: '14:00', color: 'bg-blue-500/20' },
                  { icon: '📊', label: 'Prévisions', value: 'Victoire', color: 'bg-tasko-yellow/20' },
                  { icon: '👥', label: 'Capacité', value: '500+', color: 'bg-purple-500/20' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} p-3 sm:p-4 rounded-lg sm:rounded-xl text-center`}
                  >
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                    <div className="text-xs sm:text-sm text-gray-300">{item.label}</div>
                    <div className="font-bold text-base sm:text-lg mt-1">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Actions - Boutons empilés sur mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-tasko-yellow text-tasko-dark px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-sm sm:text-base">
                  <span className="mr-2">📅</span>
                  Ajouter au Calendrier
                </button>
                <button className="bg-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center text-sm sm:text-base">
                  <span className="mr-2">📍</span>
                  Voir l'Itinéraire
                </button>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div
            className="mt-12 sm:mt-16 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Le compte à rebours est lancé</div>
            <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-8 px-4">
              {[
                { value: '12', label: 'Jours' },
                { value: '18', label: 'Heures' },
                { value: '45', label: 'Minutes' },
                { value: '22', label: 'Secondes' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl min-w-[60px] sm:min-w-[70px]"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-tasko-yellow">{item.value}</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Actualités récentes - Version Mobile Premium */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="text-center mb-8 sm:mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              📢 ACTUALITÉS FRAPPANTES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tasko-dark mb-4 sm:mb-6">
              L'Actualité Brûlante de <span className="text-tasko-blue">Tasko</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Ne ratez aucun scoop, transfert, victoire ou moment historique du club
            </p>
          </div>

          {/* Grille d'actualités avec interaction - Empilée sur mobile */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {latestNews.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="cursor-pointer"
                onClick={() => handleNewsClick(item.id)}
              >
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-500 bg-white border border-gray-100">
                  {/* Badge */}
                  {item.featured && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-tasko-yellow text-tasko-dark px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      ⭐ À LA UNE
                    </div>
                  )}

                  {/* Badge "NOUVEAU" pour l'actualité récente */}
                  {item.id === 5 && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold animate-pulse">
                      🆕 NOUVEAU
                    </div>
                  )}

                  {/* Image avec overlay */}
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* Catégorie */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <span className="bg-tasko-blue text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                      <span className="flex items-center">
                        <span className="mr-1 sm:mr-2">📅</span>
                        {item.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <span className="mr-1 sm:mr-2">⏱️</span>
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-tasko-dark mb-2 sm:mb-3 group-hover:text-tasko-blue transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>

                    {/* Statistiques de vue pour l'article sur les conseillers */}
                    {item.id === 5 && (
                      <div className="mb-3 sm:mb-4 flex items-center text-xs sm:text-sm text-gray-500">
                        <span className="flex items-center mr-3">
                          <span className="mr-1">👁️</span>
                          {item.views} vues
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">👑</span>
                          Décision stratégique
                        </span>
                      </div>
                    )}

                    {/* Bouton de lecture */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                      <span className="text-tasko-blue font-semibold text-sm sm:text-base group-hover:text-tasko-dark transition-colors duration-300">
                        Lire l'article complet →
                      </span>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-tasko-blue/10 flex items-center justify-center group-hover:bg-tasko-blue group-hover:text-white transition-all duration-300">
                        <span className="text-sm sm:text-base">➔</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA spécial pour la nouvelle actualité */}
          <div
            className="mb-8 sm:mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-gradient-to-r from-tasko-blue/5 to-tasko-dark/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-tasko-blue">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-tasko-yellow flex items-center justify-center">
                    <span className="text-tasko-dark text-xl sm:text-2xl font-bold">👑</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-tasko-dark mb-2">
                    Décision Historique : Le Conseil Stratégique Tasko
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    L'AS Tasko renforce sa gouvernance avec la nomination de 5 conseillers experts pour piloter son ascension vers l'élite.
                  </p>
                  <button
                    onClick={() => handleNewsClick(5)}
                    className="inline-flex items-center text-tasko-blue hover:text-tasko-dark font-semibold text-sm sm:text-base"
                  >
                    Découvrir le "Dream Team" des conseillers
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action principal */}
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="/news"
              className="inline-flex items-center bg-gradient-to-r from-tasko-blue to-tasko-dark text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <span className="mr-2 sm:mr-3">📰</span>
              Explorer Toutes les Actualités
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section Galerie prévisualisation - Version Mobile Premium */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="text-center mb-8 sm:mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              📸 GALERIE IMMERSIVE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tasko-dark mb-4 sm:mb-6">
              L'Émotion <span className="text-tasko-blue">Tasko</span> en Images
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Plongez au cœur des moments les plus intenses du club
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6" data-aos="fade-up">
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
                <div className="aspect-square overflow-hidden rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay avec informations */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg sm:rounded-2xl flex flex-col justify-end p-3 sm:p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-tasko-yellow text-tasko-dark px-2 sm:px-3 py-1 rounded-lg text-xs font-bold mb-1 sm:mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                    <div className="text-gray-300 text-xs sm:text-sm flex items-center">
                      <span className="mr-1 sm:mr-2">👁️</span>
                      Voir en grand
                    </div>
                  </div>
                </div>

                {/* Badge de visualisation */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-gray-800 text-xs sm:text-lg">+</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className="text-center mt-8 sm:mt-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="/gallery"
              className="inline-flex items-center bg-white text-tasko-dark px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-tasko-blue shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <span className="mr-2 sm:mr-3">🌟</span>
              Découvrir Toute Notre Galerie
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section Sponsors - Version Mobile Premium */}
      <section className="py-12 md:py-24 bg-tasko-dark text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="text-center mb-8 sm:mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block bg-tasko-yellow/20 text-tasko-yellow px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              🤝 NOS ALLIÉS STRATÉGIQUES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ils Croient en la Révolution <span className="text-tasko-yellow">Tasko</span>
            </h2>
            <p className="text-tasko-light text-base sm:text-lg max-w-2xl mx-auto px-4">
              Des partenaires visionnaires qui nous accompagnent vers l'excellence
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Sponsor Principal */}
            <div
              className="mb-12 sm:mb-16"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl">
                      <div className="text-2xl sm:text-3xl md:text-5xl">👕</div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                      ⭐ SPONSOR PRINCIPAL
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                      El Tchado Shop
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                      Notre équipementier officiel nous fournit des tenues de qualité
                      professionnelle pour performer au plus haut niveau.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-xs sm:text-sm text-gray-400">
                      <span className="mb-2 sm:mb-0 sm:mr-4">📍 Partenaire depuis 2024</span>
                      <span>🤝 Contrat exclusif</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appel aux sponsors avec lien vers l'actualité des conseillers */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-gradient-to-r from-tasko-blue/20 to-tasko-dark/20 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">🚀</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Rejoignez l'Aventure Tasko
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Comme nos 5 nouveaux conseillers stratégiques, devenez partenaire d'un club en pleine ascension
                  et bénéficiez d'une visibilité exceptionnelle auprès d'une communauté engagée.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="/news/5"
                    className="bg-tasko-yellow text-tasko-dark px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    👑 Découvrir Notre Conseil
                  </a>
                  <a
                    href="/contact"
                    className="bg-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                  >
                    🤝 Devenir Partenaire
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