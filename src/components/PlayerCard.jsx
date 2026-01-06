import { useState } from 'react'

const PlayerCard = ({ player }) => {
  const [showStats, setShowStats] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
      {/* Photo du joueur */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Numéro de maillot */}
        <div className="absolute top-4 right-4 bg-tasko-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
          {player.number}
        </div>
        
        {/* Poste */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-tasko-yellow text-tasko-dark px-3 py-1 rounded-full text-sm font-medium">
            {player.position}
          </span>
        </div>
      </div>

      {/* Infos du joueur */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-tasko-dark mb-2">{player.name}</h3>
        
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <span className="flex items-center mr-4">
            🎂
            <span className="ml-1">{player.age} ans</span>
          </span>
          <span className="flex items-center">
            ⚽
            <span className="ml-1">{player.position}</span>
          </span>
        </div>

        <p className="text-gray-700 mb-6 line-clamp-2">{player.description}</p>

        {/* Bouton stats */}
        <button
          onClick={() => setShowStats(!showStats)}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition flex items-center justify-center"
        >
          {showStats ? 'Masquer les stats' : 'Voir les statistiques'}
          <span className="ml-2">{showStats ? '↑' : '↓'}</span>
        </button>

        {/* Stats détaillées */}
        {showStats && player.stats && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <h4 className="font-bold text-tasko-dark mb-3">Statistiques</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-tasko-blue">{player.stats.matches}</div>
                <div className="text-xs text-gray-600">Matchs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tasko-blue">{player.stats.goals}</div>
                <div className="text-xs text-gray-600">Buts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tasko-blue">{player.stats.assists}</div>
                <div className="text-xs text-gray-600">Passes</div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex space-x-3">
          <button className="flex-1 bg-tasko-blue/10 text-tasko-blue hover:bg-tasko-blue hover:text-white py-2 rounded-lg text-sm font-medium transition">
            👤 Profil
          </button>
          <button className="flex-1 bg-tasko-yellow/10 text-tasko-dark hover:bg-tasko-yellow py-2 rounded-lg text-sm font-medium transition">
            ⭐ Suivre
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard