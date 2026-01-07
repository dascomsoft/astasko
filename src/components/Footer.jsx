const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo et slogan */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <img 
              src="/images/logoastasko.jpg" 
              alt="AS Tasko" 
              className="h-10 w-10 rounded-full"
            />
            <h3 className="text-lg font-bold">AS TASKO</h3>
          </div>
          <p className="text-gray-300 text-sm italic">
            "Un jour victoire, pour toujours !"
          </p>
        </div>

        {/* Liens */}
        <div className="flex justify-center space-x-6 mb-6 text-sm">
          <a href="/" className="text-gray-300 hover:text-tasko-yellow">Accueil</a>
          <a href="/team" className="text-gray-300 hover:text-tasko-yellow">Équipe</a>
          <a href="/news" className="text-gray-300 hover:text-tasko-yellow">Actualités</a>
          <a href="/contact" className="text-gray-300 hover:text-tasko-yellow">Contact</a>
        </div>

        {/* Contact simple */}
        <div className="text-center text-gray-400 text-sm mb-6">
          <p>📍 Quartier Diguel, N'Djamena • 📞 +235 98031514</p>
        </div>

        {/* Sponsors et copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-xs text-gray-400">👕 El Tchado Shop</span>
              <span className="text-xs text-gray-400">💧 Eau Pure</span>
            </div>
            
            <div className="text-xs text-gray-500 mb-4 md:mb-0">
              © 2026 AS Tasko N'Djamena
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer