
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
          offset: 20, // Réduit pour mobile
        })
      }, 300)
    }
    
    window.scrollTo(0, 0)
  }, [])

  // Extraire les catégories uniques (y compris "Officiel" et "Administration")
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
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[60vh] bg-gradient-to-br from-tasko-dark via-tasko-blue to-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/images/galltasko5.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              📢 L'ACTU BRÛLANTE
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Le Journal <span className="text-tasko-yellow">Tasko</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light mb-6 sm:mb-8 px-2">
              Tous les scoops, victoires et moments historiques du club
            </p>
            
            {/* Stats rapides */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm">
                <div className="font-bold text-base sm:text-lg">{news.length}+</div>
                <div className="text-xs">Articles Exclusifs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm">
                <div className="font-bold text-base sm:text-lg">{featuredNews.length}</div>
                <div className="text-xs">À la Une</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm">
                <div className="font-bold text-base sm:text-lg">24/7</div>
                <div className="text-xs">Couverture Info</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Filtres Premium */}
      <section className="py-6 md:py-8 lg:py-12 bg-gradient-to-b from-white to-gray-50 sticky top-16 sm:top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Filtres par catégorie - Design mobile premium */}
            <div className="flex overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4">
              <div className="flex space-x-2 sm:space-x-3 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      flex-shrink-0 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold transition-all duration-300
                      transform hover:scale-105 active:scale-95 text-xs sm:text-sm
                      ${activeCategory === category
                        ? 'bg-gradient-to-r from-tasko-blue to-tasko-dark text-white shadow-md sm:shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm sm:shadow-md hover:shadow-lg'
                      }
                    `}
                    data-aos="fade-up"
                    data-aos-delay={categories.indexOf(category) * 50}
                  >
                    {category}
                    {category !== 'Toutes' && (
                      <span className="ml-1 sm:ml-2 text-xs opacity-80">
                        ({news.filter(item => item.category === category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Indicateur de catégorie active */}
            <div 
              className="mt-4 sm:mt-6 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-xs sm:text-sm text-gray-600">
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
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
                <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                  ⭐ EXCLUSIVITÉS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tasko-dark mb-4 sm:mb-6">
                  Les Scoops <span className="text-tasko-blue">Tasko</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                  Les articles qui font l'actualité et marquent les esprits
                </p>
              </div>
              
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {featuredNews.map((item, index) => (
                  <div 
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <Link to={`/news/${item.id}`}>
                      <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-tasko-blue/30">
                        {/* Image avec effet */}
                        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          {/* Badges */}
                          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-1 sm:gap-2">
                            <span className="bg-tasko-blue text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                              {item.category}
                            </span>
                            <span className="bg-tasko-yellow text-tasko-dark px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                              ⭐ À LA UNE
                            </span>
                          </div>
                          
                          {/* Date */}
                          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
                            {item.date}
                          </div>
                        </div>
                        
                        {/* Contenu */}
                        <div className="p-4 sm:p-6 md:p-8">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-tasko-dark mb-3 sm:mb-4 group-hover:text-tasko-blue transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                            {item.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-100">
                            <span className="text-tasko-blue font-semibold text-sm sm:text-base group-hover:text-tasko-dark transition-colors">
                              Lire le scoop complet →
                            </span>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-tasko-blue/10 flex items-center justify-center group-hover:bg-tasko-blue group-hover:text-white transition-all">
                              <span className="text-sm sm:text-base">➔</span>
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



    {/* Section Victoires Récentes - Carrousel Premium */}
<section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-tasko-blue/5 to-white">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
        <span className="inline-block bg-green-500/20 text-green-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
          🏆 VICTOIRES EN SÉRIE
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tasko-dark mb-4 sm:mb-6">
          Le <span className="text-green-600">Début Parfait</span> de l'AS Tasko
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
          2 matchs, 2 victoires, 6 buts marqués, leader de la D2
        </p>
      </div>

      {/* Carrousel des victoires */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Victoire 4-0 */}
          <div 
            className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-green-500/20 hover:border-green-500/50"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
              <img
                src="/images/tasko25.jpg"
                alt="Victoire 4-0 contre Agri-Tchad"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Badge victoire écrasante */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                  ⚽ 4-0 • ÉCRASANT
                </span>
              </div>
              
              {/* Score */}
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-lg sm:text-xl md:text-2xl font-bold">
                4 - 0
              </div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Journée 1 • 18 Jan 2026
                </span>
                <span className="text-green-600 font-bold flex items-center">
                  <span className="mr-2">✅</span>
                  VICTOIRE
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-tasko-dark mb-3 sm:mb-4 group-hover:text-green-600 transition-colors">
                Agri-Tchad pulvérisé 4-0 !
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                Le festival offensif de l'AS Tasko ! Doublés de Youssouf et Seid. Une démonstration de force pour l'ouverture du championnat.
              </p>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Buts</div>
                  <div className="font-bold text-lg sm:text-xl">4</div>
                </div>
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Tirs cadrés</div>
                  <div className="font-bold text-lg sm:text-xl">10</div>
                </div>
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Possession</div>
                  <div className="font-bold text-lg sm:text-xl">68%</div>
                </div>
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Spectateurs</div>
                  <div className="font-bold text-lg sm:text-xl">850</div>
                </div>
              </div>
              
              <Link to="/news/7" className="block">
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-100">
                  <span className="text-green-600 font-semibold text-sm sm:text-base group-hover:text-green-800 transition-colors">
                    Revivre le match minute par minute →
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                    <span className="text-sm sm:text-base">⚽</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Victoire 2-1 */}
          <div 
            className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-blue-500/20 hover:border-blue-500/50"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
              <img
                src="/images/tasko28.jpg"
                alt="Victoire 2-1 contre AS Douanes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                  ⚽ 2-1 • COMBATIF
                </span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-lg sm:text-xl md:text-2xl font-bold">
                2 - 1
              </div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Journée 2 • 23 Jan 2026
                </span>
                <span className="text-green-600 font-bold flex items-center">
                  <span className="mr-2">✅</span>
                  VICTOIRE
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-tasko-dark mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                Les Douanes plient 2-1 !
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                Un match de caractère ! Menés au score, les bleus et blancs ont su se relever et remporter une victoire précieuse. Buts de Seid et Toga.
              </p>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Buts</div>
                  <div className="font-bold text-lg sm:text-xl">2</div>
                </div>
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Duels gagnés</div>
                  <div className="font-bold text-lg sm:text-xl">62%</div>
                </div>
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Arrêts</div>
                  <div className="font-bold text-lg sm:text-xl">7</div>
                </div>
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <div className="text-xs text-gray-500">Cartons</div>
                  <div className="font-bold text-lg sm:text-xl">3 jaunes</div>
                </div>
              </div>
              
              <Link to="/news/8" className="block">
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-100">
                  <span className="text-blue-600 font-semibold text-sm sm:text-base group-hover:text-blue-800 transition-colors">
                    Découvrir l'analyse tactique →
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <span className="text-sm sm:text-base">📊</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bannière Leader */}
        <div 
          className="mt-8 sm:mt-12 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <span className="inline-block bg-white/30 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-2">
                🏆 POSITION ACTUELLE
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                AS Tasko est <span className="text-black">LEADER</span> de la D2 !
              </h3>
              <p className="text-white/90 text-sm sm:text-base mt-2">
                2 matchs • 2 victoires • 6 points • 6 buts marqués • 1 encaissé
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">1er</div>
                <div className="text-white/90 text-xs sm:text-sm">sur 8 équipes</div>
              </div>
              <Link to="/news/9" className="inline-block mt-3 sm:mt-4 bg-white text-yellow-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-gray-100 transition-all text-sm sm:text-base">
                Voir le classement complet →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>









      {/* Section Toutes les actualités Premium */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* En-tête dynamique */}
            <div 
              className="text-center mb-8 sm:mb-12"
              data-aos="fade-up"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tasko-dark mb-3 sm:mb-4">
                {activeCategory === 'Toutes' 
                  ? 'Tous les Articles' 
                  : `${activeCategory}`
                }
              </h2>
              <div className="flex items-center justify-center text-gray-600 text-xs sm:text-sm">
                <span className="mr-1 sm:mr-2">📝</span>
                <span>{filteredNews.length} publication{filteredNews.length !== 1 ? 's' : ''}</span>
                <span className="mx-1 sm:mx-2">•</span>
                <span>Tout lire • 5 min par article</span>
              </div>
            </div>

            {/* Grille d'articles */}
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                {filteredNews.map((item, index) => (
                  <div 
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={index % 3 * 100}
                    className="transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300"
                  >
                    <NewsCard news={item} />
                  </div>
                ))}
              </div>
            ) : (
              <div 
                className="text-center py-12 sm:py-16 md:py-20 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl"
                data-aos="fade-up"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">📭</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-4">Calme plat pour l'instant</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto px-4">
                  Aucune actualité dans la catégorie "{activeCategory}". 
                  Revenez bientôt ou explorez d'autres sections.
                </p>
                <button
                  onClick={() => setActiveCategory('Toutes')}
                  className="bg-gradient-to-r from-tasko-blue to-tasko-dark text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-lg text-sm sm:text-base"
                >
                  Explorer Toutes les Catégories
                </button>
              </div>
            )}

            {/* Navigation par catégories */}
            <div className="mb-12 sm:mb-16" data-aos="fade-up">
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-tasko-dark mb-3 sm:mb-4 text-center">
                  Parcourir par Thème
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`
                        p-3 sm:p-4 rounded-lg sm:rounded-xl text-center transition-all duration-300
                        ${activeCategory === category
                          ? 'bg-tasko-blue text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                        }
                      `}
                    >
                      <div className="font-semibold text-sm sm:text-base">{category}</div>
                      <div className="text-xs opacity-80 mt-1">
                        {news.filter(item => item.category === category).length} articles
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section Newsletter Premium */}
            <div data-aos="fade-up">
              <div className="bg-gradient-to-r from-tasko-dark via-tasko-blue to-purple-800 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl">
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 text-white">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
                    <div>
                      <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                        📬 RESTEZ CONNECTÉ
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                        Ne Ratez <span className="text-tasko-yellow">Plus Jamais</span> un Scoop
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                        Inscrivez-vous à notre newsletter premium et recevez 
                        les dernières nouvelles du club en avant-première, 
                        directement dans votre boîte mail.
                      </p>
                      <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-300 gap-2 sm:gap-4">
                        <span className="bg-white/10 px-2 py-1 rounded">✅ Contenu exclusif</span>
                        <span className="bg-white/10 px-2 py-1 rounded">✅ Analyses tactiques</span>
                        <span className="bg-white/10 px-2 py-1 rounded">✅ Interviews inédites</span>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <form className="space-y-3 sm:space-y-4">
                        <input
                          type="email"
                          placeholder="Votre meilleur email"
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-tasko-yellow text-sm sm:text-base"
                        />
                        <button className="w-full bg-tasko-yellow text-tasko-dark px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-lg text-sm sm:text-base">
                          <span className="flex items-center justify-center">
                            <span className="mr-2 sm:mr-3">🚀</span>
                            S'abonner à l'Excellence
                            <span className="ml-2 sm:ml-3">→</span>
                          </span>
                        </button>
                      </form>
                      <p className="text-xs text-gray-400 text-center mt-3 sm:mt-4">
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
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                🗓️ À VENIR
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tasko-dark mb-4 sm:mb-6">
                Prochains <span className="text-tasko-blue">Chocs</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Les rencontres à ne manquer sous aucun prétexte
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden border border-gray-200" data-aos="fade-up">
              {/* En-tête du calendrier */}
              <div className="bg-gradient-to-r from-tasko-dark to-gray-900 text-white p-4 sm:p-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Calendrier D2 2025-2026</h3>
                    <p className="text-tasko-light text-sm sm:text-base">Les matchs qui feront l'actualité</p>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <span className="bg-tasko-yellow/30 text-tasko-yellow px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      SAISON EN COURS
                    </span>
                  </div>
                </div>
              </div>

              {/* Liste des matchs */}
              <div className="p-3 sm:p-4 md:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { date: '15 Jan 2026', time: '15:00', competition: 'D2 - Journée 1', opponent: 'AS Police', venue: 'Stade de Diguel', status: 'À venir', importance: 'Choc d\'ouverture' },
                    { date: '22 Jan 2026', time: '16:00', competition: 'D2 - Journée 2', opponent: 'Agri-Tchad', venue: 'Stade Omnisports', status: 'À venir', importance: 'Déplacement clé' },
                    { date: '29 Jan 2026', time: '15:30', competition: 'D2 - Journée 3', opponent: 'AS Douane', venue: 'Stade de Diguel', status: 'À venir', importance: 'Rivalité locale' },
                    { date: '05 Fév 2026', time: '15:00', competition: 'D2 - Journée 4', opponent: 'Madeline FC', venue: 'Stade Municipal', status: 'À venir', importance: 'Match tactique' },
                  ].map((match, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 items-center">
                        {/* Date & Heure */}
                        <div className="text-center">
                          <div className="text-base sm:text-lg md:text-xl font-bold text-tasko-dark">{match.date}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{match.time}</div>
                        </div>
                        
                        {/* Compétition */}
                        <div className="text-center md:text-left">
                          <span className="bg-tasko-blue/10 text-tasko-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                            {match.competition}
                          </span>
                          <div className="text-xs text-gray-500 mt-1">{match.importance}</div>
                        </div>
                        
                        {/* VS */}
                        <div className="text-center">
                          <div className="flex items-center justify-center">
                            <div className="text-center">
                              <div className="font-bold text-tasko-dark text-xs sm:text-sm">AS TASKO</div>
                              <div className="text-xl sm:text-2xl font-bold text-gray-400 my-1 sm:my-2">VS</div>
                              <div className="font-bold text-gray-700 text-xs sm:text-sm">{match.opponent}</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Lieu */}
                        <div className="text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start">
                            <span className="text-tasko-blue mr-2 text-sm sm:text-base">📍</span>
                            <div>
                              <div className="font-medium text-xs sm:text-sm">{match.venue}</div>
                              {match.venue.includes('Diguel') && (
                                <div className="text-xs text-green-600 font-medium">🏠 À domicile</div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Statut */}
                        <div className="text-center">
                          <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
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
              <div className="p-4 sm:p-6 text-center border-t border-gray-200 bg-gray-50">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-tasko-blue hover:text-tasko-dark font-bold text-sm sm:text-base md:text-lg"
                >
                  <span className="mr-2 sm:mr-3">📅</span>
                  Voir le calendrier complet de la saison
                  <span className="ml-2 sm:ml-3 text-lg sm:text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* Call to Action Final */}
            <div className="mt-12 sm:mt-16 md:mt-20 text-center" data-aos="fade-up">
              <div className="bg-gradient-to-r from-tasko-blue/5 to-tasko-dark/5 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-tasko-dark mb-4 sm:mb-6">
                  Assoiffé de Plus d'<span className="text-tasko-blue">Actualités</span> ?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Revenez régulièrement ou suivez-nous sur les réseaux pour ne rien manquer de l'aventure Tasko
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                  <a href="#" className="bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-blue-700 transition text-xs sm:text-sm md:text-base">
                    Facebook
                  </a>
                  <a href="#" className="bg-pink-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-pink-700 transition text-xs sm:text-sm md:text-base">
                    Instagram
                  </a>
                  <a href="#" className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-gray-800 transition text-xs sm:text-sm md:text-base">
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