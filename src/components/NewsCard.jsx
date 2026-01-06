import { Link } from 'react-router-dom'

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="relative -mt-8">
          <span className="bg-tasko-blue text-white px-3 py-1 text-sm rounded-t-lg inline-block">
            {news.category}
          </span>
        </div>
      </div>
      
      {/* Contenu */}
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <span className="flex items-center">
            📅
            <span className="ml-2">{news.date}</span>
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-tasko-dark mb-3 line-clamp-2">
          {news.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            to={`/news/${news.id}`}
            className="text-tasko-blue hover:text-tasko-dark font-medium flex items-center"
          >
            Lire la suite
            <span className="ml-2">→</span>
          </Link>
          
          {news.featured && (
            <span className="bg-tasko-yellow/20 text-tasko-dark px-2 py-1 rounded text-xs font-medium">
              À la une
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsCard