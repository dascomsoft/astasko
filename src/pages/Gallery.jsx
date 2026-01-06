import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('Toutes')
  const [selectedImage, setSelectedImage] = useState(null)
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])



    useEffect(() =>{
    window.scrollTo(0,0)
  },[])

  // Images de la galerie
  const galleryImages = [
    { id: 1, src: '/images/galltasko.jpg', category: 'Entraînement', title: 'Séance technique' },
    { id: 2, src: '/images/galltasko1.jpg', category: 'Entraînement', title: 'Préparation physique' },
    { id: 3, src: '/images/galltasko3.jpg', category: 'Match', title: 'Action de jeu' },
    { id: 4, src: '/images/galltasko4.jpg.jpg', category: 'Match', title: 'Célébration' },
    { id: 5, src: '/images/galltasko5.jpg', category: 'Événement', title: 'Remise des maillots' },
    { id: 6, src: '/images/galltasko6.jpg', category: 'Entraînement', title: 'Travail collectif' },
    { id: 7, src: '/images/galltasko7.jpg', category: 'Événement', title: 'Rencontre supporters' },
    { id: 8, src: '/images/galltasko8.jpg', category: 'Match', title: 'Victoire' },
    { id: 9, src: '/images/entraintasko.jpg', category: 'Entraînement', title: 'Séance du matin' },
    { id: 10, src: '/images/entraintasko1.jpg', category: 'Entraînement', title: 'Exercices tactiques' },
    { id: 11, src: '/images/entraintasko2.jpg', category: 'Événement', title: 'Tirage au sort D2' },
    { id: 12, src: '/images/taskopresi.jpg', category: 'Équipe', title: 'Staff technique' },
  ]

  // Catégories
  const categories = ['Toutes', ...new Set(galleryImages.map(img => img.category))]

  // Filtrer les images
  const filteredImages = activeFilter === 'Toutes' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <div>
      {/* Hero Section Galerie */}
      <div className="relative h-96 bg-gradient-to-r from-tasko-dark to-tasko-blue">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/galltasko3.jpg)' }}
        ></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Galerie</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Moments forts, émotions et souvenirs de l'AS Tasko
            </p>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-tasko-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                data-aos="fade-up"
                data-aos-delay={categories.indexOf(category) * 100}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie d'images */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-tasko-dark mb-2">
              {activeFilter === 'Toutes' ? 'Toutes les photos' : `Photos : ${activeFilter}`}
            </h2>
            <p className="text-gray-600">
              {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setSelectedImage(image)}
                  data-aos="fade-up"
                  data-aos-delay={index % 4 * 100}
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="bg-tasko-yellow/90 text-tasko-dark px-2 py-1 rounded text-xs">
                          {image.category}
                        </span>
                        <span className="text-xs">Cliquez pour agrandir</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-aos="fade-up">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Aucune photo trouvée</h3>
              <p className="text-gray-600">Aucune photo dans la catégorie "{activeFilter}"</p>
            </div>
          )}

          {/* Section Vidéos */}
          <div className="mt-20" data-aos="fade-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-tasko-dark mb-4">Vidéos du Club</h2>
              <p className="text-gray-600">Retours en images sur nos moments forts</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vidéo 1 - Placeholder pour intégration YouTube */}
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-tasko-dark to-tasko-blue flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">▶️</div>
                    <div className="text-xl font-bold">Match amical AS Tasko</div>
                    <div className="text-sm text-gray-300 mt-2">Bientôt disponible</div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-tasko-dark mb-2">AS Tasko vs 4e Arrondissement</h3>
                  <p className="text-gray-600 text-sm">Match amical - Décembre 2025</p>
                </div>
              </div>

              {/* Vidéo 2 */}
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-tasko-yellow to-orange-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎥</div>
                    <div className="text-xl font-bold">Entraînement exclusif</div>
                    <div className="text-sm text-gray-300 mt-2">Bientôt disponible</div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-tasko-dark mb-2">Séance d'entraînement</h3>
                  <p className="text-gray-600 text-sm">Préparation D2 2025-2026</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Suivez-nous sur nos réseaux sociaux pour plus de vidéos
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Facebook
                </button>
                <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
                  Instagram
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                  TikTok
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-tasko-yellow transition"
            >
              ✕
            </button>
            
            <div className="bg-white rounded-xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-tasko-dark">{selectedImage.title}</h3>
                    <div className="flex items-center mt-2">
                      <span className="bg-tasko-blue/10 text-tasko-blue px-3 py-1 rounded-full text-sm">
                        {selectedImage.category}
                      </span>
                      <span className="ml-4 text-gray-500 text-sm">ID: {selectedImage.id}</span>
                    </div>
                  </div>
                  <button className="text-tasko-blue hover:text-tasko-dark">
                    ⬇️ Télécharger
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery