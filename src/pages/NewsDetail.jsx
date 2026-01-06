import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { news } from '../data/news'

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  
  useEffect(() => {
        window.scrollTo(0,0)
    AOS.init({
      duration: 800,
      once: true,
    })




    
    // Trouver l'article correspondant
    const foundArticle = news.find(item => item.id === parseInt(id))
    
    if (foundArticle) {
      setArticle(foundArticle)
      
      // Trouver les articles liés
      const related = news.filter(item => 
        foundArticle.content.relatedNews.includes(item.id)
      )
      setRelatedArticles(related)
    } else {
      // Rediriger si l'article n'existe pas
      navigate('/news')
    }
  }, [id, navigate])

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold text-tasko-dark mb-4">Chargement de l'article...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section Article */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-20">
            <div className="max-w-4xl">
              {/* Catégorie et métadonnées */}
              <div className="flex flex-wrap items-center gap-4 mb-6" data-aos="fade-up">
                <span className="bg-tasko-blue text-white px-4 py-2 rounded-full text-sm font-bold">
                  {article.category}
                </span>
                {article.featured && (
                  <span className="bg-tasko-yellow text-tasko-dark px-4 py-2 rounded-full text-sm font-bold">
                    ⭐ À LA UNE
                  </span>
                )}
                <span className="text-white/80">
                  {article.date} • {article.readTime} de lecture • 👁️ {article.views} vues
                </span>
              </div>
              
              {/* Titre principal */}
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {article.title}
              </h1>
              
              {/* Auteur et partage */}
              <div 
                className="flex flex-wrap items-center justify-between"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-tasko-yellow flex items-center justify-center mr-4">
                    <span className="text-tasko-dark font-bold">AT</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">{article.author}</div>
                    <div className="text-white/60 text-sm">Rédaction AS Tasko</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <button className="text-white hover:text-tasko-yellow transition">
                    <span className="text-xl">🔗</span>
                  </button>
                  <button className="text-white hover:text-tasko-yellow transition">
                    <span className="text-xl">📤</span>
                  </button>
                  <button className="text-white hover:text-tasko-yellow transition">
                    <span className="text-xl">❤️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Flèche de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-center">
            <span className="block text-2xl">↓</span>
            <span className="text-sm">Lire l'article</span>
          </div>
        </div>
      </div>

      {/* Contenu de l'article */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div 
              className="mb-12"
              data-aos="fade-up"
            >
              <div className="text-2xl md:text-3xl leading-relaxed text-gray-800 font-light italic border-l-4 border-tasko-blue pl-6 py-2">
                "{article.content.introduction}"
              </div>
            </div>

            {/* Sections de contenu */}
            <div className="space-y-16">
              {article.content.sections.map((section, index) => (
                <div 
                  key={index}
                  className={`${index % 2 === 0 ? '' : 'bg-gray-50 rounded-2xl p-8'}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-tasko-dark mb-6">
                    {section.title}
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {section.content}
                    </p>
                    
                    {section.highlight && (
                      <div className="bg-gradient-to-r from-tasko-blue/10 to-tasko-dark/10 p-6 rounded-xl border-l-4 border-tasko-blue">
                        <div className="flex items-start">
                          <span className="text-tasko-blue text-2xl mr-3">💡</span>
                          <div>
                            <p className="font-semibold text-tasko-dark">
                              {section.highlight}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {section.quote && (
                      <div className="bg-white border-l-4 border-tasko-yellow pl-6 py-4 my-6">
                        <p className="text-xl italic text-gray-800">
                          "{section.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div 
              className="mt-16 bg-gradient-to-r from-tasko-dark to-gray-900 text-white rounded-2xl p-8 md:p-12"
              data-aos="fade-up"
            >
              <div className="flex items-start">
                <span className="text-tasko-yellow text-3xl mr-4">🎯</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4">En conclusion</h3>
                  <p className="text-lg text-gray-200">
                    {article.content.conclusion}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div 
              className="mt-12"
              data-aos="fade-up"
            >
              <div className="flex flex-wrap gap-3">
                {article.content.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-tasko-blue hover:text-white transition cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Partage et actions */}
            <div 
              className="mt-12 pt-12 border-t border-gray-200"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-gray-600 mb-2">Cet article vous a plu ?</p>
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition">
                      <span className="text-xl">❤️</span>
                    </button>
                    <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition">
                      <span className="text-xl">🔁</span>
                    </button>
                    <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-green-100 flex items-center justify-center transition">
                      <span className="text-xl">📤</span>
                    </button>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <p className="text-gray-600 mb-2">Partagez avec la communauté Tasko</p>
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                      <span className="mr-2">f</span>
                      Partager
                    </button>
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-black transition flex items-center">
                      <span className="mr-2">📱</span>
                      Copier le lien
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Articles liés */}
      {relatedArticles.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div 
              className="text-center mb-12"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-tasko-dark mb-4">
                Articles similaires
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez d'autres actualités qui pourraient vous intéresser
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((item, index) => (
                <div 
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-tasko-blue/10 text-tasko-blue px-3 py-1 rounded-full text-sm">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-sm">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-tasko-dark mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <Link
                        to={`/news/${item.id}`}
                        className="inline-flex items-center text-tasko-blue hover:text-tasko-dark font-medium"
                      >
                        Lire l'article
                        <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/news"
                className="inline-flex items-center bg-tasko-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-tasko-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-3">📰</span>
                Voir toutes les actualités
                <span className="ml-3 text-xl">→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-tasko-dark to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto text-center"
            data-aos="fade-up"
          >
            <div className="text-6xl mb-6">📬</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ne ratez plus jamais une actualité Tasko
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter et soyez les premiers informés des dernières nouvelles du club
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-tasko-yellow"
                />
                <button className="bg-tasko-yellow text-tasko-dark px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition whitespace-nowrap">
                  S'inscrire
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Vous recevrez nos dernières actualités. Désinscription à tout moment.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Navigation entre articles */}
      <div className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link
                to={`/news/${Math.max(1, article.id - 1)}`}
                className={`flex items-center p-6 rounded-2xl border border-gray-200 hover:border-tasko-blue hover:shadow-lg transition-all ${
                  article.id === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <div className="mr-4 text-2xl">←</div>
                <div>
                  <div className="text-sm text-gray-500">Article précédent</div>
                  <div className="font-bold text-tasko-dark">
                    {article.id === 1 ? 'Début des actualités' : 'Voir article précédent'}
                  </div>
                </div>
              </Link>
              
              <Link
                to={`/news/${Math.min(news.length, article.id + 1)}`}
                className={`flex items-center p-6 rounded-2xl border border-gray-200 hover:border-tasko-blue hover:shadow-lg transition-all text-right ${
                  article.id === news.length ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <div>
                  <div className="text-sm text-gray-500">Article suivant</div>
                  <div className="font-bold text-tasko-dark">
                    {article.id === news.length ? 'Fin des actualités' : 'Voir article suivant'}
                  </div>
                </div>
                <div className="ml-4 text-2xl">→</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail