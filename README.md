# Optimum SARL — Site Web

Site vitrine professionnel pour Optimum SARL, construit avec Next.js 14 + Tailwind CSS.

## Structure du projet

```
optimum-sarl/
├── pages/
│   ├── _app.jsx        # Wrapper Next.js
│   └── index.jsx       # Page principale
├── styles/
│   └── globals.css     # Styles globaux + Tailwind
├── public/             # Assets statiques (favicon, images)
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Déploiement sur Vercel

### Option 1 — Depuis GitHub (recommandé)

1. Importer ce dossier dans un repo GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Cliquer **"New Project"** → Importer votre repo
4. Framework Preset : **Next.js** (auto-détecté)
5. Cliquer **"Deploy"** → c'est tout !

### Option 2 — CLI Vercel

```bash
npm install -g vercel
vercel
```

## Développement local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Personnalisation

- **Contenu** : modifier les tableaux `SERVICES`, `STATS`, `WHY_US`, `TESTIMONIALS` dans `pages/index.jsx`
- **Coordonnées** : chercher "07 89 48 10 85" et "optimumingenierie@gmail.com"
- **Couleurs** : variables CSS dans `styles/globals.css` et `tailwind.config.js`
- **Formulaire** : utilise [FormSubmit](https://formsubmit.co) — aucune config backend requise
