
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { news } from '../data/news'

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Scroll en haut
    window.scrollTo(0, 0)
    
    // Détecter mobile
    setIsMobile(window.innerWidth < 768)
    
    // Trouver l'article correspondant
    const foundArticle = news.find(item => item.id === parseInt(id))
    
    if (foundArticle) {
      setArticle(foundArticle)
      
      // Trouver les articles liés
      const related = news.filter(item => 
        foundArticle.content.relatedNews && 
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-4">
          <div className="text-4xl mb-4">📰</div>
          <h2 className="text-xl font-bold text-tasko-dark mb-2">Chargement...</h2>
          <p className="text-gray-600">Veuillez patienter</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section MOBILE FRIENDLY */}
      <div className="relative h-[50vh] sm:h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${article.image || '/images/taskopresi.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-end p-4 sm:p-6">
          <div className="w-full max-w-4xl mx-auto">
            {/* Bouton retour */}
            <Link 
              to="/news" 
              className="inline-flex items-center text-white mb-4 text-sm sm:text-base"
            >
              ← Retour aux actualités
            </Link>
            
            {/* Catégories */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-tasko-blue text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                {article.category}
              </span>
              {article.featured && (
                <span className="bg-tasko-yellow text-tasko-dark px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  ⭐ À LA UNE
                </span>
              )}
            </div>
            
            {/* Titre */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
              {article.title}
            </h1>
            
            {/* Métadonnées */}
            <div className="text-white/80 text-xs sm:text-sm mb-4">
              <span className="mr-3">📅 {article.date}</span>
              <span className="mr-3">⏱️ {article.readTime}</span>
              <span>👁️ {article.views}</span>
            </div>
            
            {/* Auteur */}
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-tasko-yellow flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-tasko-dark font-bold text-sm sm:text-base">AT</span>
              </div>
              <div>
                <div className="text-white font-medium text-sm sm:text-base">{article.author}</div>
                <div className="text-white/60 text-xs sm:text-sm">Rédaction AS Tasko</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal - MOBILE OPTIMIZED */}
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="mb-8 bg-gray-50 p-4 sm:p-6 rounded-xl">
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed italic">
            "{article.content.introduction || article.excerpt}"
          </p>
        </div>

        {/* Sections */}
        {article.content.sections && article.content.sections.map((section, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-tasko-dark mb-4">
              {section.title}
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {section.content}
              </p>
              
              {section.highlight && (
                <div className="bg-yellow-50 border-l-4 border-tasko-yellow p-3 sm:p-4 rounded-r-lg">
                  <p className="text-gray-800 font-medium">
                    💡 {section.highlight}
                  </p>
                </div>
              )}
              
              {section.quote && (
                <div className="border-l-4 border-tasko-blue pl-3 sm:pl-4 py-2">
                  <blockquote className="text-gray-700 italic">
                    "{section.quote}"
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Conclusion */}
        <div className="mt-8 mb-8 bg-gradient-to-r from-tasko-blue/10 to-tasko-dark/10 p-4 sm:p-6 rounded-xl">
          <h3 className="text-xl font-bold text-tasko-dark mb-3">En conclusion</h3>
          <p className="text-gray-700">
            {article.content.conclusion || "L'AS Tasko continue son ascension vers l'excellence."}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {article.content.tags && article.content.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Partage simple */}
        <div className="mb-8 p-4 bg-gray-50 rounded-xl">
          <h3 className="font-bold text-gray-800 mb-3">Partager cet article</h3>
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm">
              Facebook
            </button>
            <button className="flex-1 bg-black text-white py-2 px-3 rounded-lg text-sm">
              Copier lien
            </button>
          </div>
        </div>

        {/* Articles liés */}
        {relatedArticles.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-tasko-dark mb-4">Articles similaires</h2>
            <div className="space-y-4">
              {relatedArticles.slice(0, 2).map((item) => (
                <Link 
                  key={item.id} 
                  to={`/news/${item.id}`}
                  className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-tasko-blue transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%231e40af'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='white' text-anchor='middle' dy='.3em'%3ETASKO%3C/text%3E%3C/svg%3E"
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-tasko-dark text-sm line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs mt-1">{item.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 mb-8">
          <Link
            to="/news"
            className="flex-1 bg-tasko-blue text-white text-center py-3 rounded-xl font-bold text-sm"
          >
            📰 Toutes les actualités
          </Link>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="flex-1 bg-gray-100 text-gray-700 text-center py-3 rounded-xl font-bold text-sm"
          >
            ⬆️ Haut de page
          </button>
        </div>

        {/* Debug info - Afficher sur mobile seulement */}
        {isMobile && (
          <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-green-700 text-sm">
              ✅ Version mobile chargée avec succès<br/>
              📱 ID: {id} | Catégorie: {article.category}
            </p>
          </div>
        )}
      </div>

      {/* Footer simple */}
      <div className="bg-gray-50 border-t border-gray-200 p-6 text-center">
        <p className="text-gray-600 text-sm">
          © 2026 AS Tasko Football Club • Tous droits réservés
        </p>
        <Link 
          to="/" 
          className="inline-block mt-2 text-tasko-blue hover:text-tasko-dark text-sm"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

export default NewsDetail