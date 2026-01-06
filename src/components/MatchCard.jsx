const MatchCard = ({ match }) => {
  const isPast = match.status === 'Terminé'
  const isHome = match.home

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
      {/* En-tête du match */}
      <div className={`p-4 text-white text-center ${isPast ? 'bg-gray-600' : 'bg-tasko-blue'}`}>
        <div className="font-bold">{match.competition}</div>
        <div className="text-sm opacity-90">{match.date} • {match.time}</div>
      </div>

      <div className="p-6">
        {/* Équipes */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-tasko-dark">AS</div>
            <div className="text-xl font-bold">TASKO</div>
            {isHome && (
              <div className="text-sm text-tasko-blue mt-1">🏠 Domicile</div>
            )}
          </div>

          <div className="mx-4">
            {isPast ? (
              <div className="text-center">
                <div className="text-3xl font-bold">{match.result}</div>
                <div className="text-sm text-gray-500">Score final</div>
              </div>
            ) : (
              <div className="text-4xl font-bold text-gray-700">VS</div>
            )}
          </div>

          <div className="text-center flex-1">
            <div className="text-xl font-bold">{match.opponent}</div>
            {!isHome && (
              <div className="text-sm text-gray-500 mt-1">Extérieur</div>
            )}
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="space-y-3">
          <div className="flex items-center justify-center text-gray-600">
            <span className="mr-2">📍</span>
            <span>{match.venue}</span>
          </div>

          {match.scorers && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-sm font-semibold text-tasko-dark mb-2">Buteurs :</div>
              <div className="text-sm text-gray-600">
                {match.scorers.map((scorer, index) => (
                  <div key={index} className="flex items-center mb-1">
                    <span className="w-2 h-2 bg-tasko-yellow rounded-full mr-2"></span>
                    {scorer}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Statut */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
              match.status === 'Terminé' 
                ? 'bg-green-100 text-green-800'
                : match.status === 'À venir'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              <span className="w-2 h-2 rounded-full mr-2 bg-current"></span>
              {match.status}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {!isPast ? (
            <>
              <button className="bg-tasko-blue text-white py-2 rounded-lg hover:bg-tasko-dark transition">
                📅 Rappel
              </button>
              <button className="bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition">
                📍 Itinéraire
              </button>
            </>
          ) : (
            <button className="col-span-2 bg-tasko-yellow text-tasko-dark py-2 rounded-lg hover:bg-yellow-500 transition">
              📊 Voir les statistiques
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MatchCard