import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Préparation du message WhatsApp
    const phoneNumber = "+23598031514" // Format international sans espaces
    const message = `*Nouveau message depuis le site AS Tasko*%0A%0A
*Nom:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Sujet:* ${formData.subject}%0A
*Catégorie:* ${formData.category}%0A
*Message:* ${formData.message}%0A%0A
*Envoyé depuis:* https://astasko.td/contact`

    // Redirection vers WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
      
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Notre Quartier Général',
      content: 'Quartier Diguel, N\'Djamena',
      subcontent: 'Rue de 50 M, Tchad',
      action: 'Voir sur Maps',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: '📞',
      title: 'Téléphone & WhatsApp',
      content: '+235 98 03 15 14',
      subcontent: 'Lun-Ven 9h-17h • Réponse rapide',
      action: 'Appeler maintenant',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: '✉️',
      title: 'Email Officiel',
      content: 'contact@astasko.td',
      subcontent: 'Réponse garantie sous 48h',
      action: 'Envoyer un email',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: '⚽',
      title: 'Stade d\'Entraînement',
      content: 'Stade de Diguel',
      subcontent: 'Entraînements: 16h-18h quotidien',
      action: 'Voir les horaires',
      color: 'from-yellow-500/20 to-orange-500/20'
    }
  ]

  const categories = [
    { value: 'general', label: 'Question générale', icon: '❓' },
    { value: 'recruitment', label: 'Recrutement joueur', icon: '⚽' },
    { value: 'sponsorship', label: 'Sponsoring/Partenariat', icon: '🤝' },
    { value: 'media', label: 'Presse/Médias', icon: '🎥' },
    { value: 'ticket', label: 'Billetterie', icon: '🎫' },
    { value: 'other', label: 'Autre demande', icon: '💬' }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section Impactante */}
      <div className="relative h-[50vh] sm:h-[50vh] pt-[18rem] pb-[18rem] md:h-[60vh] bg-gradient-to-br from-tasko-dark via-tasko-blue to-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/images/taskopresi2.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-6">
              📞 VOTRE CONNEXION DIRECTE
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Contactez <span className="text-tasko-yellow">Tasko</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8">
              Votre porte d'entrée vers la famille Tasko. Ensemble, écrivons l'histoire.
            </p>
            
            {/* Stats rapides */}
            <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">24/7</div>
                <div className="text-sm">Disponibilité WhatsApp</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">48h</div>
                <div className="text-sm">Réponse Garantie</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="font-bold text-lg">100%</div>
                <div className="text-sm">Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Contact Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Colonne des informations */}
              <div className="lg:col-span-1">
                <div data-aos="fade-right">
                  <div className="mb-10">
                    <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
                      📍 NOUS TROUVER
                    </span>
                    <h2 className="text-3xl font-bold text-tasko-dark mb-6">
                      Votre Pont vers <span className="text-tasko-blue">Tasko</span>
                    </h2>
                    <p className="text-gray-600">
                      Plusieurs canaux pour une seule mission : vous connecter à l'aventure Tasko
                    </p>
                  </div>

                  {/* Cartes de contact */}
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-br ${info.color} backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        data-aos="fade-right"
                        data-aos-delay={index * 100}
                      >
                        <div className="flex items-start">
                          <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl mr-4">
                            {info.icon}
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-bold text-tasko-dark text-lg mb-1">{info.title}</h3>
                            <p className="text-gray-800 font-medium">{info.content}</p>
                            <p className="text-gray-600 text-sm mt-1">{info.subcontent}</p>
                            
                            {/* Action */}
                            <button className="mt-4 text-tasko-blue font-semibold text-sm hover:text-tasko-dark transition flex items-center">
                              <span>{info.action}</span>
                              <span className="ml-2">→</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Direct */}
                  <div 
                    className="mt-10"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl mr-4">
                          💬
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Chat Direct</h3>
                          <p className="text-green-100 text-sm">Réponse instantanée</p>
                        </div>
                      </div>
                      <p className="mb-4 text-green-100">
                        Pour une réponse ultra-rapide, contactez-nous directement sur WhatsApp
                      </p>
                      <a 
                        href={`https://wa.me/23598031514?text=Bonjour%20AS%20Tasko,%20je%20souhaite%20vous%20contacter`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg w-full justify-center"
                      >
                        <span className="mr-3">💬</span>
                        WhatsApp Direct
                        <span className="ml-3">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="mt-10" data-aos="fade-right" data-aos-delay="500">
                    <h3 className="text-xl font-bold text-tasko-dark mb-4">Suivez le Feu</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { icon: '📘', label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700', url: '#' },
                        { icon: '📷', label: 'Instagram', color: 'bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700', url: '#' },
                        { icon: '🎵', label: 'TikTok', color: 'bg-black hover:bg-gray-800', url: '#' },
                        { icon: '📺', label: 'YouTube', color: 'bg-red-600 hover:bg-red-700', url: '#' }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`${social.color} text-white w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                          title={social.label}
                          aria-label={social.label}
                        >
                          <span className="text-xl">{social.icon}</span>
                          <span className="text-xs mt-1">{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="lg:col-span-2">
                <div 
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100"
                  data-aos="fade-left"
                >
                  <div className="mb-10">
                    <span className="inline-block bg-tasko-yellow/10 text-tasko-dark px-4 py-2 rounded-full text-sm font-bold mb-4">
                      ✍️ VOTRE MESSAGE
                    </span>
                    <h2 className="text-3xl font-bold text-tasko-dark mb-4">
                      Écrivez-nous, nous <span className="text-tasko-blue">vous écoutons</span>
                    </h2>
                    <p className="text-gray-600">
                      Remplissez ce formulaire et votre message sera directement transféré sur WhatsApp
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Nom et Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
                          <span className="mr-2">👤</span>
                          Votre nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full p-4 border border-gray-300 rounded-xl focus:border-tasko-blue focus:ring-2 focus:ring-tasko-blue/20 transition bg-white"
                          placeholder="Ex: Mohamed Ali"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
                          <span className="mr-2">📧</span>
                          Votre email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-4 border border-gray-300 rounded-xl focus:border-tasko-blue focus:ring-2 focus:ring-tasko-blue/20 transition bg-white"
                          placeholder="exemple@email.com"
                        />
                      </div>
                    </div>

                    {/* Sujet */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
                        <span className="mr-2">🎯</span>
                        Sujet de votre message *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-tasko-blue focus:ring-2 focus:ring-tasko-blue/20 transition bg-white"
                        placeholder="Ex: Demande de partenariat"
                      />
                    </div>

                    {/* Catégories stylisées */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-4 flex items-center">
                        <span className="mr-2">🏷️</span>
                        Type de demande *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categories.map((cat) => (
                          <label
                            key={cat.value}
                            className={`
                              flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                              transform hover:scale-105
                              ${formData.category === cat.value
                                ? 'border-tasko-blue bg-tasko-blue/10 shadow-md'
                                : 'border-gray-200 hover:border-tasko-blue/50 hover:bg-gray-50'
                              }
                            `}
                          >
                            <input
                              type="radio"
                              name="category"
                              value={cat.value}
                              checked={formData.category === cat.value}
                              onChange={handleChange}
                              className="mr-3"
                            />
                            <div>
                              <div className="text-xl mb-1">{cat.icon}</div>
                              <span className="text-sm font-medium">{cat.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
                        <span className="mr-2">💬</span>
                        Votre message détaillé *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-tasko-blue focus:ring-2 focus:ring-tasko-blue/20 transition bg-white"
                        placeholder="Décrivez en détail votre demande, projet ou question..."
                      ></textarea>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          id="newsletter"
                          className="w-5 h-5 text-tasko-blue rounded"
                        />
                        <span className="ml-3 text-gray-700 font-medium">
                          Je souhaite recevoir les exclusivités Tasko par email
                        </span>
                      </label>
                      <p className="text-sm text-gray-500 mt-2 ml-8">
                        Scoops, invitations VIP, offres spéciales... Ne ratez rien !
                      </p>
                    </div>

                    {/* Bouton d'envoi */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full py-4 rounded-xl font-bold text-lg transition-all duration-300
                        transform hover:scale-105 active:scale-95
                        ${isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl'
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></span>
                          Préparation WhatsApp...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <span className="mr-3">💬</span>
                          Envoyer sur WhatsApp
                          <span className="ml-3">→</span>
                        </span>
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                      En cliquant, vous serez redirigé vers WhatsApp pour finaliser l'envoi
                    </p>
                  </form>
                </div>

                {/* Section Recrutement Premium */}
                <div className="mt-12" data-aos="fade-up">
                  <div className="bg-gradient-to-r from-tasko-dark via-tasko-blue to-purple-800 rounded-3xl p-8 md:p-10 text-white overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <span className="inline-block bg-tasko-yellow/30 text-tasko-yellow px-4 py-2 rounded-full text-sm font-bold mb-4">
                          ⚽ L'APPEL DU TERRAIN
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          Le Talent <span className="text-tasko-yellow">Tasko</span> Vous Appelle
                        </h3>
                        <p className="text-tasko-light text-lg">
                          Vous avez la flamme ? Nous avons le terrain. Rejoignez la génération montante.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Critères */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                          <h4 className="font-bold text-xl mb-6 flex items-center">
                            <span className="mr-3">🎯</span>
                            Profil Recherché
                          </h4>
                          <ul className="space-y-4">
                            {[
                              { text: 'Âge : 16-25 ans (exceptionnel jusqu\'à 28)', icon: '👦' },
                              { text: 'Condition physique optimale', icon: '💪' },
                              { text: 'Esprit d\'équipe exemplaire', icon: '🤝' },
                              { text: 'Détermination à toute épreuve', icon: '🔥' },
                              { text: 'Passion dévorante pour le football', icon: '❤️' }
                            ].map((item, index) => (
                              <li 
                                key={index}
                                className="flex items-start"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                              >
                                <span className="text-tasko-yellow text-xl mr-3">{item.icon}</span>
                                <span>{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Sélections */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                          <h4 className="font-bold text-xl mb-6 flex items-center">
                            <span className="mr-3">📅</span>
                            Prochaines Sélections
                          </h4>
                          <div className="space-y-6">
                            <div className="bg-white/5 p-4 rounded-xl">
                              <div className="flex items-center mb-3">
                                <div className="w-10 h-10 rounded-full bg-tasko-yellow/20 flex items-center justify-center mr-3">
                                  <span className="text-tasko-yellow">🗓️</span>
                                </div>
                                <div>
                                  <div className="font-bold text-lg">15 Février 2026</div>
                                  <div className="text-sm text-gray-300">Stade de Diguel</div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-tasko-yellow/20 flex items-center justify-center mr-3">
                                  <span className="text-tasko-yellow">⏰</span>
                                </div>
                                <div>
                                  <div className="font-bold">9h - 12h</div>
                                  <div className="text-sm text-gray-300">Présence obligatoire</div>
                                </div>
                              </div>
                            </div>
                            
                            <button 
                              onClick={() => window.open(`https://wa.me/23598031514?text=Bonjour%20AS%20Tasko,%20je%20souhaite%20postuler%20comme%20joueur`, '_blank')}
                              className="w-full bg-tasko-yellow text-tasko-dark py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                              <span className="flex items-center justify-center">
                                <span className="mr-3">⚽</span>
                                Postuler via WhatsApp
                                <span className="ml-3">→</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Localisation Premium */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block bg-tasko-blue/10 text-tasko-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
                🗺️ NOTRE SANCTUAIRE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-tasko-dark mb-6">
                Le Temple <span className="text-tasko-blue">Tasko</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Là où les rêves prennent vie et les champions se forgent
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200" data-aos="fade-up">
              {/* Carte placeholder améliorée */}
              <div className="h-96 bg-gradient-to-br from-tasko-blue/10 to-tasko-dark/10 flex flex-col items-center justify-center p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-6">⚽</div>
                  <h3 className="text-3xl font-bold text-tasko-dark mb-2">Stade de Diguel</h3>
                  <p className="text-gray-600">Quartier Diguel, N'Djamena, Tchad</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href={`https://maps.google.com/?q=Stade+de+Diguel,N'Djamena,Tchad`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tasko-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-tasko-dark transition flex items-center"
                  >
                    <span className="mr-2">📍</span>
                    Voir sur Google Maps
                  </a>
                  <a 
                    href={`https://wa.me/23598031514?text=Bonjour,%20je%20souhaite%20visiter%20le%20Stade%20de%20Diguel`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition flex items-center"
                  >
                    <span className="mr-2">💬</span>
                    Demander un rendez-vous
                  </a>
                </div>
              </div>
              
              {/* Infos pratiques */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-2xl text-tasko-blue mb-3">🚗</div>
                    <h4 className="font-bold text-tasko-dark mb-2">Accès</h4>
                    <p className="text-gray-600 text-sm">
                      Accessible en taxi depuis le centre-ville de N'Djamena
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-2xl text-tasko-blue mb-3">🅿️</div>
                    <h4 className="font-bold text-tasko-dark mb-2">Parking</h4>
                    <p className="text-gray-600 text-sm">
                      Espace dédié gratuit à proximité immédiate
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-2xl text-tasko-blue mb-3">👁️</div>
                    <h4 className="font-bold text-tasko-dark mb-2">Visites</h4>
                    <p className="text-gray-600 text-sm">
                      Sur rendez-vous uniquement • Du lundi au vendredi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact