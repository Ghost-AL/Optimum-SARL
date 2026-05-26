import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

/* ─────────────── SVG Icons ─────────────── */
const Icons = {
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
      <line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/>
    </svg>
  ),
  cable: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M4 6h16M4 12h16M4 18h16"/>
      <circle cx="21" cy="6" r="1.5" fill="currentColor"/><circle cx="21" cy="12" r="1.5" fill="currentColor"/><circle cx="21" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  ),
  consult: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-cyan-400">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 12.03 19.79 19.79 0 01.07 3.4 2 2 0 012.03 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.09a16 16 0 006.29 6.29l1.14-1.14a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
};

/* ─────────────── Data ─────────────── */
const SERVICES = [
  {
    icon: Icons.monitor,
    title: 'Vente Informatique',
    desc: 'Ordinateurs, serveurs, imprimantes et équipements professionnels de marques certifiées, avec garantie et support.',
    features: ['Matériel neuf & reconditionné', 'Marques certifiées', 'Livraison & installation'],
  },
  {
    icon: Icons.network,
    title: 'Infrastructure Réseau',
    desc: 'Conception, déploiement et optimisation de réseaux d\'entreprise sécurisés, performants et évolutifs.',
    features: ['LAN / WAN / Wi-Fi', 'VPN & sécurité réseau', 'Supervision 24/7'],
  },
  {
    icon: Icons.cable,
    title: 'Câblage Structuré',
    desc: 'Solutions de câblage professionnel pour bureaux, entrepôts et bâtiments tertiaires aux normes en vigueur.',
    features: ['Câblage cuivre & fibre', 'Baies de brassage', 'Certification de câblage'],
  },
  {
    icon: Icons.consult,
    title: 'Consulting IT',
    desc: 'Audit informatique, conseil stratégique et accompagnement dans votre transformation numérique.',
    features: ['Audit & diagnostic', 'Plan de transformation', 'Accompagnement projet'],
  },
];

const STATS = [
  { value: '150+', label: 'Clients actifs' },
  { value: '10+', label: "Ans d'expérience" },
  { value: '500+', label: 'Projets livrés' },
  { value: '98%', label: 'Satisfaction client' },
];

const WHY_US = [
  {
    icon: Icons.shield,
    title: 'Expertise certifiée',
    desc: 'Notre équipe est formée aux dernières technologies et certifiée par les principaux constructeurs du marché.',
  },
  {
    icon: Icons.clock,
    title: 'Réactivité garantie',
    desc: 'Interventions rapides, délais tenus et support disponible pour minimiser l\'impact sur votre activité.',
  },
  {
    icon: Icons.consult,
    title: 'Approche sur mesure',
    desc: 'Chaque solution est pensée pour votre contexte spécifique, votre budget et vos objectifs de croissance.',
  },
];

const TESTIMONIALS = [
  {
    text: 'Optimum SARL a entièrement refondu notre infrastructure réseau. Résultat : zéro panne depuis 8 mois. Partenaire de confiance.',
    name: 'Karim B.',
    role: 'DSI, Cabinet d\'expertise',
    rating: 5,
  },
  {
    text: 'Livraison du matériel en 48h, installation professionnelle et suivi impeccable. Je recommande sans hésiter.',
    name: 'Sophie M.',
    role: 'Directrice, PME logistique',
    rating: 5,
  },
  {
    text: 'L\'audit IT réalisé par Optimum nous a permis d\'économiser 30% sur nos coûts d\'infrastructure. Excellent ROI.',
    name: 'Ahmed R.',
    role: 'CEO, Startup tech',
    rating: 5,
  },
];

/* ─────────────── useScrollReveal ─────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────── Navbar ─────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#apropos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-blur ${
        scrolled
          ? 'bg-[#060E1F]/90 border-b border-[#1E3A5F]/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-cyan-500 rounded-sm" />
            <div className="w-3 h-3 bg-cyan-500/40 rounded-sm" />
          </div>
          <div>
            <span className="font-heading font-700 text-white text-lg tracking-wide">OPTIMUM</span>
            <span className="block text-cyan-500 text-[9px] tracking-[4px] uppercase font-medium -mt-1">SARL</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0789481085"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {Icons.phone}
            07 89 48 10 85
          </a>
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Devis gratuit
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? Icons.close : Icons.menu}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#060E1F]/95 border-t border-[#1E3A5F]/60 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-cyan-500 text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
          >
            Devis gratuit
          </a>
        </div>
      )}
    </header>
  );
}

/* ─────────────── Hero ─────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060E1F]">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Orbs */}
      <div className="orb-cyan w-[600px] h-[600px] -top-32 -left-32 opacity-60" />
      <div className="orb-cyan w-[400px] h-[400px] bottom-0 right-0 opacity-40" />

      {/* Accent top line */}
      <div className="accent-bar absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="chip mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Solutions IT professionnelles — Marseille
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6"
            style={{ animationDelay: '0.1s' }}
          >
            L&apos;informatique
            <br />
            <span className="animated-underline text-cyan-400">sur mesure</span>
            <br />
            pour votre entreprise
          </h1>

          <p className="text-slate-300 text-xl leading-relaxed max-w-xl mb-10" style={{ animationDelay: '0.2s' }}>
            Optimum SARL vous accompagne dans tous vos projets IT : matériel professionnel, infrastructures réseaux,
            câblage et consulting stratégique.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 text-base"
            >
              Demander un devis gratuit
              {Icons.arrow}
            </a>
            <a
              href="tel:0789481085"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-500 text-slate-200 hover:text-cyan-400 font-medium px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              {Icons.phone}
              07 89 48 10 85
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
            {['Réponse sous 24h', 'Devis sans engagement', 'Support dédié'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="text-cyan-500">{Icons.check}</span>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 animate-float">
          <div className="bg-[#0B1A32]/80 border border-[#1E3A5F] rounded-2xl p-6 w-64 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                {Icons.shield}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Infrastructure sécurisée</p>
                <p className="text-slate-400 text-xs">Réseau d&apos;entreprise</p>
              </div>
            </div>
            <div className="space-y-2">
              {['Pare-feu configuré', 'Réseau segmenté', 'Backup activé'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-cyan-400 flex-shrink-0">{Icons.check}</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#1E3A5F]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Statut</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Opérationnel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}

/* ─────────────── Stats ─────────────── */
function Stats() {
  return (
    <section className="bg-white border-b border-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="stat-number">{s.value}</div>
              <p className="text-slate-500 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Services ─────────────── */
function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="chip mx-auto mb-4">Nos Services</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#060E1F] mb-4">
            Des solutions complètes
            <br />
            <span className="text-cyan-500">pour votre business</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            De la vente de matériel à la stratégie IT, nous couvrons l&apos;intégralité de vos besoins technologiques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card reveal bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-[#060E1F] rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                {s.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-[#060E1F] mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-cyan-500 flex-shrink-0">{Icons.check}</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Expertise Banner ─────────────── */
function Expertise() {
  const techs = ['Cisco', 'HP', 'Dell', 'Lenovo', 'Fortinet', 'Ubiquiti', 'Synology', 'Microsoft'];
  return (
    <section id="expertise" className="py-24 bg-[#060E1F] overflow-hidden relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="orb-cyan w-[500px] h-[500px] top-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="chip mb-6">Notre expertise</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Partenaires des
              <br />
              <span className="text-cyan-400">meilleures marques</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Nous travaillons exclusivement avec des équipements certifiés des constructeurs leaders du marché,
              vous garantissant fiabilité, performance et support fabricant.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Matériel neuf avec garantie constructeur',
                'Réseau haute disponibilité',
                'Sécurité et conformité RGPD',
                'Maintenance préventive & curative',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">{Icons.check}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="bg-[#0B1A32]/60 border border-[#1E3A5F] rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-slate-400 text-sm mb-5 uppercase tracking-widest">Marques & partenaires</p>
              <div className="grid grid-cols-4 gap-3">
                {techs.map((t) => (
                  <div
                    key={t}
                    className="bg-[#060E1F] border border-[#1E3A5F] rounded-xl py-3 px-2 text-center text-xs font-semibold text-slate-300 hover:border-cyan-500/60 hover:text-cyan-400 transition-all duration-200"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1E3A5F] grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-heading font-bold text-cyan-400">ISO</p>
                  <p className="text-xs text-slate-400 mt-1">Normes</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-cyan-400">Pro</p>
                  <p className="text-xs text-slate-400 mt-1">Certifié</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-cyan-400">SAV</p>
                  <p className="text-xs text-slate-400 mt-1">Intégré</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Why Us ─────────────── */
function WhyUs() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="chip mx-auto mb-4">Pourquoi nous</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#060E1F] mb-4">
            Ce qui nous distingue
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Plus qu&apos;un fournisseur IT, un véritable partenaire technologique pour votre croissance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {WHY_US.map((w, i) => (
            <div key={i} className="reveal text-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500 mx-auto mb-5">
                {w.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-[#060E1F] mb-3">{w.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 stagger">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="reveal bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <span key={k}>{Icons.star}</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-[#060E1F] text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Contact ─────────────── */
function Contact() {
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const data = new FormData(formRef.current);
    try {
      await fetch('https://formsubmit.co/ajax/optimumingenierie@gmail.com', {
        method: 'POST',
        body: data,
      });
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="chip mb-6">Contact</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#060E1F] mb-6 leading-tight">
              Parlons de votre
              <br />
              <span className="text-cyan-500">projet IT</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Vous avez un projet, un besoin ou une urgence technique ? Notre équipe est disponible
              et vous répond sous 24h ouvrées.
            </p>

            <div className="space-y-5">
              {[
                { icon: Icons.phone, label: 'Téléphone', value: '07 89 48 10 85', href: 'tel:0789481085' },
                { icon: Icons.mail, label: 'Email', value: 'optimumingenierie@gmail.com', href: 'mailto:optimumingenierie@gmail.com' },
                { icon: Icons.location, label: 'Adresse', value: '22 rue d\'Aix, 13001 Marseille', href: null },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#060E1F] rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-[#060E1F] font-medium hover:text-cyan-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#060E1F] font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-500 scale-150">{Icons.check}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#060E1F] mb-2">Message envoyé !</h3>
                  <p className="text-slate-500">Nous vous répondrons dans les 24h ouvrées.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Jean Dupont"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#060E1F] text-sm placeholder-slate-300 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Ma Société SARL"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#060E1F] text-sm placeholder-slate-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jean@entreprise.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#060E1F] text-sm placeholder-slate-300 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="06 XX XX XX XX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#060E1F] text-sm placeholder-slate-300 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Votre besoin
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Décrivez votre projet ou votre besoin IT..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#060E1F] text-sm placeholder-slate-300 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full group inline-flex items-center justify-center bg-[#060E1F] hover:bg-cyan-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Envoi en cours...' : (
                      <>
                        Envoyer ma demande
                        {Icons.arrow}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Devis gratuit · Sans engagement · Réponse sous 24h
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */
function Footer() {
  return (
    <footer className="bg-[#060E1F] border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-cyan-500 rounded-sm" />
                <div className="w-3 h-3 bg-cyan-500/40 rounded-sm" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg tracking-wide">OPTIMUM</span>
                <span className="block text-cyan-500 text-[9px] tracking-[4px] uppercase font-medium -mt-1">SARL</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Votre partenaire IT de confiance à Marseille. Solutions matérielles, réseaux,
              câblage et consulting pour propulser votre entreprise.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</p>
            <ul className="space-y-2">
              {['Vente Informatique', 'Infrastructure Réseau', 'Câblage Structuré', 'Consulting IT'].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-cyan-500">{Icons.phone}</span>
                07 89 48 10 85
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-cyan-500">{Icons.mail}</span>
                optimumingenierie@gmail.com
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <span className="text-cyan-500 mt-0.5">{Icons.location}</span>
                22 rue d&apos;Aix<br />13001 Marseille
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E3A5F] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Optimum SARL — Tous droits réservés.
          </p>
          <p className="text-slate-600 text-xs">
            Solutions IT Marseille · Matériel Informatique · Réseaux · Câblage
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── Page ─────────────── */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Head>
        <title>Optimum SARL — Solutions IT Professionnelles Marseille</title>
        <meta
          name="description"
          content="Optimum SARL, votre partenaire IT à Marseille. Vente de matériel informatique, infrastructure réseau, câblage structuré et consulting IT pour entreprises."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Expertise />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}
