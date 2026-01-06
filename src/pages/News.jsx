import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NewsCard from '../components/NewsCard'
import { news } from '../data/news'

const News = () => {
  const [activeCategory, setActiveCategory] = useState('Toutes')
  
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

  // Extraire les catégories uniques
  const categories = ['Toutes', ...new Set(news.map(item => item.category))]

  // Filtrer les actualités
  const filteredNews = activeCategory === 'Toutes' 
    ? news 
    : news.filter(item => item.category === activeCategory)

  // Articles à la une (featured)
  const featuredNews = news.filter(item => item.featured)

  return (
    <div className="overflow-hidden">
      {/* Hero Section Impactante */}
      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-tasko-dark via-tasko-blue to-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/images/galltasko5.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-6">
              📢 L'ACTU BRÛLANTE
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Le Journal <span className="text-tasko-yellow">Tasko</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8">
              Tous les scoops, victoires et moments historiques du club
            </p>
            
            {/* Stats rapides */}
            <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">{news.length}+</div>
                <div className="text-sm">Articles Exclusifs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">{featuredNews.length}</div>
                <div className="text-sm">À la Une</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">24/7</div>
                <div className="text-sm">Couverture Info</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Filtres Premium */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-white to-gray-50 sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filtres par catégorie - Design mobile premium */}
            <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
              <div className="flex space-x-3 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      flex-shrink-0 px-5 py-3 rounded-xl font-bold transition-all duration-300
                      transform hover:scale-105 active:scale-95
                      ${activeCategory === category
                        ? 'bg-gradient-to-r from-tasko-blue to-tasko-dark text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-md hover:shadow-lg'
                      }
                    `}
                    data-aos="fade-up"
                    data-aos-delay={categories.indexOf(category) * 50}
                  >
                    {category}
                    {category !== 'Toutes' && (
                      <span className="ml-2 text-xs opacity-80">
                        ({news.filter(item => item.category === category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Indicateur de catégorie active */}
            <div 
              className="mt-6 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-sm text-gray-600">
                {activeCategory === 'Toutes' 
                  ? 'Toutes les catégories • ' 
                  : `Catégorie : ${activeCategory} • `
                }
                {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Articles à la une Premium */}
      {activeCategory === 'Toutes' && featuredNews.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12" data-aos="fade-up">
                <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-4 py-2 rounded-full text-sm font-bold mb-4">
                  ⭐ EXCLUSIVITÉS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-tasko-dark mb-6">
                  Les Scoops <span className="text-tasko-blue">Tasko</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Les articles qui font l'actualité et marquent les esprits
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {featuredNews.map((item, index) => (
                  <div 
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <Link to={`/news/${item.id}`}>
                      <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-tasko-blue/30">
                        {/* Image avec effet */}
                        <div className="relative h-64 md:h-72 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          {/* Badges */}
                          <div className="absolute top-4 left-4 flex flex-col gap-2">
                            <span className="bg-tasko-blue text-white px-3 py-1 rounded-full text-sm font-bold">
                              {item.category}
                            </span>
                            <span className="bg-tasko-yellow text-tasko-dark px-3 py-1 rounded-full text-sm font-bold">
                              ⭐ À LA UNE
                            </span>
                          </div>
                          
                          {/* Date */}
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                            {item.date}
                          </div>
                        </div>
                        
                        {/* Contenu */}
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-tasko-dark mb-4 group-hover:text-tasko-blue transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-6 line-clamp-3">
                            {item.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <span className="text-tasko-blue font-semibold group-hover:text-tasko-dark transition-colors">
                              Lire le scoop complet →
                            </span>
                            <div className="w-10 h-10 rounded-full bg-tasko-blue/10 flex items-center justify-center group-hover:bg-tasko-blue group-hover:text-white transition-all">
                              <span>➔</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section Toutes les actualités Premium */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* En-tête dynamique */}
            <div 
              className="text-center mb-12"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-tasko-dark mb-4">
                {activeCategory === 'Toutes' 
                  ? 'Tous les Articles' 
                  : `${activeCategory}`
                }
              </h2>
              <div className="flex items-center justify-center text-gray-600">
                <span className="mr-2">📝</span>
                <span>{filteredNews.length} publication{filteredNews.length !== 1 ? 's' : ''}</span>
                <span className="mx-2">•</span>
                <span>Tout lire • 5 min par article</span>
              </div>
            </div>

            {/* Grille d'articles */}
            {filteredNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredNews.map((item, index) => (
                  <div 
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={index % 3 * 100}
                    className="transform hover:-translate-y-2 transition-transform duration-300"
                  >
                    <NewsCard news={item} />
                  </div>
                ))}
              </div>
            ) : (
              <div 
                className="text-center py-20 bg-white rounded-3xl shadow-xl"
                data-aos="fade-up"
              >
                <div className="text-6xl mb-6">📭</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Calme plat pour l'instant</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Aucune actualité dans la catégorie "{activeCategory}". 
                  Revenez bientôt ou explorez d'autres sections.
                </p>
                <button
                  onClick={() => setActiveCategory('Toutes')}
                  className="bg-gradient-to-r from-tasko-blue to-tasko-dark text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explorer Toutes les Catégories
                </button>
              </div>
            )}

            {/* Navigation par catégories */}
            <div className="mb-16" data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-tasko-dark mb-4 text-center">
                  Parcourir par Thème
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`
                        p-4 rounded-xl text-center transition-all duration-300
                        ${activeCategory === category
                          ? 'bg-tasko-blue text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                        }
                      `}
                    >
                      <div className="font-semibold">{category}</div>
                      <div className="text-sm opacity-80 mt-1">
                        {news.filter(item => item.category === category).length} articles
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section Newsletter Premium */}
            <div data-aos="fade-up">
              <div className="bg-gradient-to-r from-tasko-dark via-tasko-blue to-purple-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-8 md:p-12 text-white">
                  <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-6">
                        📬 RESTEZ CONNECTÉ
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Ne Ratez <span className="text-tasko-yellow">Plus Jamais</span> un Scoop
                      </h3>
                      <p className="text-gray-300 text-lg mb-8">
                        Inscrivez-vous à notre newsletter premium et recevez 
                        les dernières nouvelles du club en avant-première, 
                        directement dans votre boîte mail.
                      </p>
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="mr-4">✅ Contenu exclusif</span>
                        <span className="mr-4">✅ Analyses tactiques</span>
                        <span>✅ Interviews inédites</span>
                      </div>
                    </div>
                    
                    <div>
                      <form className="space-y-4">
                        <input
                          type="email"
                          placeholder="Votre meilleur email"
                          className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-tasko-yellow"
                        />
                        <button className="w-full bg-tasko-yellow text-tasko-dark px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                          <span className="flex items-center justify-center">
                            <span className="mr-3">🚀</span>
                            S'abonner à l'Excellence
                            <span className="ml-3">→</span>
                          </span>
                        </button>
                      </form>
                      <p className="text-xs text-gray-400 text-center mt-4">
                        Pas de spam • Désinscription en un clic • Confidentialité garantie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Calendrier des matchs Premium */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
                🗓️ À VENIR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-tasko-dark mb-6">
                Prochains <span className="text-tasko-blue">Chocs</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Les rencontres à ne manquer sous aucun prétexte
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200" data-aos="fade-up">
              {/* En-tête du calendrier */}
              <div className="bg-gradient-to-r from-tasko-dark to-gray-900 text-white p-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">Calendrier D2 2025-2026</h3>
                    <p className="text-tasko-light">Les matchs qui feront l'actualité</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold">
                      SAISON EN COURS
                    </span>
                  </div>
                </div>
              </div>

              {/* Liste des matchs */}
              <div className="p-4 md:p-6">
                <div className="space-y-4">
                  {[
                    { date: '15 Jan 2026', time: '15:00', competition: 'D2 - Journée 1', opponent: 'AS Police', venue: 'Stade de Diguel', status: 'À venir', importance: 'Choc d\'ouverture' },
                    { date: '22 Jan 2026', time: '16:00', competition: 'D2 - Journée 2', opponent: 'Agri-Tchad', venue: 'Stade Omnisports', status: 'À venir', importance: 'Déplacement clé' },
                    { date: '29 Jan 2026', time: '15:30', competition: 'D2 - Journée 3', opponent: 'AS Douane', venue: 'Stade de Diguel', status: 'À venir', importance: 'Rivalité locale' },
                    { date: '05 Fév 2026', time: '15:00', competition: 'D2 - Journée 4', opponent: 'Madeline FC', venue: 'Stade Municipal', status: 'À venir', importance: 'Match tactique' },
                  ].map((match, index) => (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="grid md:grid-cols-5 gap-4 items-center">
                        {/* Date & Heure */}
                        <div className="text-center">
                          <div className="text-xl font-bold text-tasko-dark">{match.date}</div>
                          <div className="text-sm text-gray-500">{match.time}</div>
                        </div>
                        
                        {/* Compétition */}
                        <div>
                          <span className="bg-tasko-blue/10 text-tasko-blue px-3 py-1 rounded-full text-sm font-medium">
                            {match.competition}
                          </span>
                          <div className="text-xs text-gray-500 mt-1">{match.importance}</div>
                        </div>
                        
                        {/* VS */}
                        <div className="text-center">
                          <div className="flex items-center justify-center">
                            <div className="text-center">
                              <div className="font-bold text-tasko-dark text-sm">AS TASKO</div>
                              <div className="text-2xl font-bold text-gray-400 my-2">VS</div>
                              <div className="font-bold text-gray-700">{match.opponent}</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Lieu */}
                        <div>
                          <div className="flex items-center">
                            <span className="text-tasko-blue mr-2">📍</span>
                            <div>
                              <div className="font-medium">{match.venue}</div>
                              {match.venue.includes('Diguel') && (
                                <div className="text-xs text-green-600 font-medium">🏠 À domicile</div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Statut */}
                        <div className="text-center">
                          <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                            match.status === 'À venir' 
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {match.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footer du calendrier */}
              <div className="p-6 text-center border-t border-gray-200 bg-gray-50">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-tasko-blue hover:text-tasko-dark font-bold text-lg"
                >
                  <span className="mr-3">📅</span>
                  Voir le calendrier complet de la saison
                  <span className="ml-3 text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* Call to Action Final */}
            <div className="mt-20 text-center" data-aos="fade-up">
              <div className="bg-gradient-to-r from-tasko-blue/5 to-tasko-dark/5 rounded-3xl p-10 border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-tasko-dark mb-6">
                  Assoiffé de Plus d'<span className="text-tasko-blue">Actualités</span> ?
                </h3>
                <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                  Revenez régulièrement ou suivez-nous sur les réseaux pour ne rien manquer de l'aventure Tasko
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                    Facebook
                  </a>
                  <a href="#" className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-pink-700 transition">
                    Instagram
                  </a>
                  <a href="#" className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition">
                    TikTok
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

export default News