export default function OptimumSARL() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Optimum SARL
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Solutions informatiques professionnelles pour entreprises : matériel informatique, infrastructures réseaux, câblage et consulting IT.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-cyan-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Nous contacter
            </a>

            <a
              href="tel:0789481085"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-cyan-700 transition"
            >
              07 89 48 10 85
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-cyan-700">
              À propos de nous
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              Optimum SARL accompagne les entreprises dans leurs besoins technologiques en proposant des solutions fiables, modernes et adaptées à chaque environnement professionnel.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Notre expertise couvre la vente de matériel informatique, le déploiement d’infrastructures réseaux, les travaux de câblage ainsi que le conseil informatique stratégique.
            </p>
          </div>

          <div className="bg-cyan-50 rounded-3xl p-10 shadow-lg">
            <div className="grid gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-cyan-700">
                  Matériel Informatique
                </h3>
                <p className="text-gray-600">
                  Vente d’équipements professionnels adaptés à vos besoins.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-cyan-700">
                  Réseaux & Infrastructure
                </h3>
                <p className="text-gray-600">
                  Mise en place de solutions réseaux sécurisées et performantes.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-cyan-700">
                  Consulting IT
                </h3>
                <p className="text-gray-600">
                  Accompagnement stratégique et conseil technologique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-700 mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour accompagner la transformation numérique de votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Vente Informatique',
                text: 'Ordinateurs, serveurs, imprimantes et équipements professionnels.',
              },
              {
                title: 'Infrastructure Réseau',
                text: 'Installation et optimisation de réseaux performants.',
              },
              {
                title: 'Câblage',
                text: 'Solutions de câblage structurées pour entreprises.',
              },
              {
                title: 'Consulting',
                text: 'Audit, accompagnement et stratégie IT.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-semibold mb-4 text-cyan-700">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-cyan-700 mb-6">
              Contactez-nous
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Vous avez un projet ou besoin d’informations ? Notre équipe est disponible pour vous accompagner.
            </p>

            <div className="space-y-5 text-lg">
              <div>
                <span className="font-semibold text-cyan-700">Téléphone :</span>
                <p>07 89 48 10 85</p>
              </div>

              <div>
                <span className="font-semibold text-cyan-700">Email :</span>
                <p>optimumingenierie@gmail.com</p>
              </div>

              <div>
                <span className="font-semibold text-cyan-700">Adresse :</span>
                <p>22 rue d'Aix, 13001 Marseille</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <form
              action="https://formsubmit.co/optimumingenierie@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div>
                <label className="block mb-2 font-medium">Nom</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-2xl font-semibold transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-cyan-700 text-white py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg font-medium">
            © {new Date().getFullYear()} Optimum SARL - Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
