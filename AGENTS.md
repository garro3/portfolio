# 📋 AGENTS.md - Portfolio Clément Garreau

## 🎯 Vue d'ensemble du projet

Portfolio professionnel moderne de **Clément Garreau**, un junior developer en Master à Epitech. Le site est construit avec **React**, **Vite**, **Tailwind CSS** et **React Router** pour présenter ses compétences, projets et expériences.

**URL GitHub**: https://github.com/garro3  
**Déploiement**: GitHub Pages à `https://garro3.github.io/portfolio/`

---

## 🏗️ Stack Technique

| Technologie | Version | Usage |
|---|---|---|
| React | ^18.3.1 | Framework UI |
| Vite | ^5.4.9 | Build tool & dev server |
| Tailwind CSS | ^3.4.14 | Styling utility-first |
| React Router DOM | ^6.26.2 | Navigation SPA |
| Lucide React | ^0.447.0 | Icons |
| gh-pages | ^6.1.1 | Déploiement GitHub Pages |

### DevDependencies essentielles
- `@vitejs/plugin-react` - Plugin React pour Vite
- `autoprefixer` & `postcss` - Post-processing CSS
- TypeScript types disponibles mais non utilisées en production

---

## 📂 Structure du Projet

```
portfolio/
├── index.html                 # Entry HTML
├── vite.config.js            # Config Vite avec base=/portfolio/
├── tailwind.config.js        # Config Tailwind (darkMode: class)
├── postcss.config.js         # Config PostCSS (autoprefixer)
├── package.json              # Dépendances et scripts
├── src/
│   ├── main.jsx             # Entry point React
│   ├── App.jsx              # Composant principal avec Router
│   ├── index.css            # Styles globaux + Tailwind
│   ├── components/
│   │   ├── Sidebar.jsx      # Navigation fixe (desktop + mobile)
│   │   ├── Hero.jsx         # Section accueil avec CTA
│   │   ├── About.jsx        # À propos avec stats
│   │   ├── Skills.jsx       # Grille des compétences
│   │   ├── Projects.jsx     # Projets avec détails expandables
│   │   ├── Experience.jsx   # Timeline formation/expérience
│   │   ├── Contact.jsx      # Formulaire + infos contact
│   │   └── ThemeToggle.jsx  # Toggle light/dark
│   └── context/
│       └── ThemeContext.jsx # Gestion thème avec localStorage
└── public/
    ├── photo.jpg           # Photo professionnel
    └── CV_Clement_Garreau.pdf # CV téléchargeable
```

---

## ✅ Ce qui fonctionne bien

### 1. **Design & UX**
- ✨ Design moderne, épuré et professionnel
- 🎨 Système de couleurs cohérent (bleu, violet, gradients)
- 📱 Responsive design solide (mobile-first avec Tailwind)
- 🌙 Thème clair/sombre bien implémenté avec persistence localStorage
- ⚡ Transitions et animations fluides (duration-300)

### 2. **Navigation**
- 🗂️ Sidebar fixe desktop + bottom navigation mobile
- 🔄 Scroll detection automatique pour activeSection
- 📍 Smooth scroll vers les sections
- ♿ Attributs ARIA et labels pour l'accessibilité

### 3. **Contenu & Présentation**
- 📝 Sections bien structurées (6 sections principales)
- 🎯 Hero section attractive avec CTA clairs
- 🏆 Stats cards dans About section
- 💼 Projects section avec expandable details
- 📚 Timeline Experience interactive
- 🔗 Liens externes vers GitHub, LinkedIn, CV

### 4. **Formulaire Contact**
- ✅ Validation basique du formulaire
- 🔌 Intégration Formspree fonctionnelle
- 📧 Gestion des états (submitting, success, error)
- 🎯 Reset du formulaire après succès

### 5. **Code Quality**
- 📦 Composants modulaires et réutilisables
- 🎣 Utilisation appropriée des hooks React
- 🔐 Context API pour le thème (pattern sain)
- 📐 Tailwind utility-first bien appliqué

### 6. **Performance**
- ⚡ Vite pour build/dev rapide
- 🔧 Lazy loading des images (photo, gradients)
- 🎯 Bon lighthouse score (CLS, LCP)
- 📦 Taille bundle légère

---

## ⚠️ Ce qui ne fonctionne PAS ou nécessite améliorations

### 🔴 **Problèmes Critiques**

#### 1. **Informations de Contact Exposées**
- Numéro de téléphone visible dans le code: `07 69 87 73 93`
- Email personnel: `garreau.clem03@gmail.com`
- **ACTION**: Masquer le téléphone ou utiliser un formulaire uniquement
- **RISQUE**: Spam, appels non désirés

#### 2. **Meta Description Dépassée**
- Mention "Junior Full-Stack Developer seeking apprenticeship"
- Date "January 2026" est maintenant passée (on est en février 2026)
- **ACTION**: Mettre à jour les meta tags et le contenu selon le statut actuel

#### 3. **CV Téléchargement Brisé** ⚠️
- URL: `/portfolio/CV_Clement_Garreau.pdf` avec attribut `download`
- **PROBLÈME**: Le fichier n'est pas dans public/ (manquant)
- **IMPACT**: Le lien de téléchargement ne fonctionne pas
- **SOLUTION**: Ajouter le PDF réel dans `public/` ou renommer correctement

#### 4. **Photo Professionnel Manquante** ⚠️
- Chemin: `/portfolio/photo.jpg`
- **PROBLÈME**: Le fichier est manquant ou mal référencé
- **IMPACT**: Image vide dans la Hero section (desktop)
- **FICHIER**: `public/photo.jpg:Zone.Identifier` (Windows metadata, pas l'image)

### 🟡 **Problèmes Majeurs**

#### 5. **Router Setup Non-Optimal**
- `<Router basename="/portfolio">` mais la navigation utilise `scrollIntoView`
- **ISSUE**: React Router est importé mais pas vraiment utilisé (pas de routes définies)
- **ACTION**: Soit utiliser React Router correctement, soit le retirer

#### 6. **Contact Form - Sécurité Email**
- Email Formspree exposé: `f/xwpwplbw`
- Ce hash pourrait être visé par des spammeurs
- **MITIGATION**: Acceptable pour un portfolio, mais à surveiller

#### 7. **Hardcoded URLs et Contenu**
- Tous les liens externes sont en dur dans les composants
- Si besoin de changer, c'est du find/replace
- **MIEUX**: Créer un fichier `config.js` ou utiliser des variables d'env

#### 8. **Zone.Identifier Files**
- `public/CV_Clement_Garreau.pdf:Zone.Identifier`
- `public/photo.jpg:Zone.Identifier`
- Ce sont des fichiers metadata Windows
- **ACTION**: Supprimer ces fichiers (non-utilité)

### 🟠 **Problèmes Mineurs**

#### 9. **Accessibility Issues**
- Images sans alt texts détaillés
- Certains boutons n'ont que des icônes (manque texte ou aria-label)
- Focus visible pas toujours clair sur les inputs du formulaire
- **ACTION**: Ajouter `aria-label` plus descriptifs

#### 10. **Responsive Issues**
- Sur très petits écrans (< 320px), certains textes peuvent déborder
- Hero section photo disparaît sur mobile mais reste de la place vide
- **ACTION**: Optimiser pour ultra-mobile

#### 11. **Thème Dark Mode**
- Quelques couleurs ne sont pas bien contrastées en dark mode
- Texte gris sur gris foncé dans certains cas
- **ACTION**: Vérifier les ratios de contraste WCAG AA

#### 12. **Projects Section**
- Seulement 2 projets affichés
- Message "More projects on GitHub" mais peu de contexte
- **ACTION**: Ajouter plus de projets ou link vers GitHub projects

#### 13. **Skills Section**
- Skills affichés en initiales (JS, PY, etc.) plutôt que noms complets
- Pas de niveaux de compétence indiqués
- **ACTION**: Ajouter des niveaux (Junior, Intermediate, Expert)

#### 14. **Meta Tags Manquants**
- Pas de Open Graph (og:image, og:description)
- Pas de Twitter Card
- Pas de favicon customisé (utilise Vite default)
- **ACTION**: Ajouter pour meilleur partage social

#### 15. **404 Handling**
- Aucune page 404 ou fallback route
- Si quelqu'un accède à une route inexistante, rien ne se passe
- **ACTION**: Ajouter une page 404 avec React Router

#### 16. **Dates Outdated**
- "January 2026" dans About: "Looking for apprenticeship starting January 2026"
- Epitech: "2025 - Present" (peut-être "2024 - 2027"?)
- Le Wagon: "2025" (dates imprécises)
- **ACTION**: Mettre à jour les dates

#### 17. **Formulaire Contact**
- Pas de CAPTCHA (risque spam)
- Pas de validation côté serveur
- Pas de limite rate-limiting
- **ACTION**: Ajouter hCaptcha ou reCAPTCHA

#### 18. **Performance Optimization**
- Pas de lazy loading des images
- Pas de blur placeholders
- Pas de image optimization (WebP)
- **ACTION**: Implémenter next-gen image formats

#### 19. **SEO**
- Pas de sitemap.xml
- Pas de robots.txt
- Pas de structured data (JSON-LD)
- **ACTION**: Ajouter pour meilleur SEO

#### 20. **Error Handling**
- Pas de try/catch pour les erreurs de chargement d'images
- Pas de gestion d'erreur global
- **ACTION**: Implémenter ErrorBoundary React

---

## 🎬 Scripts NPM

```bash
npm run dev        # Démarre le serveur dev (http://localhost:5173)
npm run build      # Build pour production dans ./dist
npm run preview    # Preview du build en local
npm run deploy     # Deploy sur GitHub Pages (via gh-pages)
npm run predeploy  # Exécuté automatiquement avant deploy (lance build)
```

---

## 🚀 Checklist de Priorités

### 🔴 À faire IMMÉDIATEMENT
- [x] Supprimer/masquer le numéro de téléphone
- [x] Ajouter le vrai CV PDF dans `public/`
- [x] Ajouter la vraie photo dans `public/`
- [x] Supprimer les fichiers `.Zone.Identifier`
- [x] Mettre à jour les dates de formation/expérience
- [x] Retirer React Router (inutilisé)

### 🟡 Important (Cette semaine)
- [x] Ajouter Open Graph meta tags
- [x] Ajouter favicon customisé
- [x] Vérifier accessibilité WCAG AA
- [x] Implémenter CAPTCHA sur le formulaire
- [x] Ajouter page 404

### 🟠 À améliorer (Ce mois)
- [ ] Ajouter plus de projets ou détails
- [ ] Ajouter des niveaux de compétence
- [ ] Optimiser images (WebP, lazy-loading)
- [ ] Ajouter sitemap.xml et robots.txt
- [ ] Ajouter JSON-LD structured data

### 🟢 Nice-to-have
- [ ] Animations plus sophistiquées
- [ ] Intégration API GitHub pour projets dynamiques
- [ ] Blog ou articles
- [ ] Statistiques de visite
- [ ] Mode offline PWA

---

## 📊 Audit Rapide

| Catégorie | Status | Notes |
|---|---|---|
| **Design** | ✅ Excellent | Moderne, cohérent, responsive |
| **Perf** | ✅ Bon | Vite optimisé, léger |
| **UX** | ✅ Bon | Navigation fluide, intuitive |
| **Sécurité** | ✅ Amélioré | CAPTCHA ajouté, formulaire sécurisé |
| **Accessibilité** | ✅ Bon | ARIA labels, contraste amélioré |
| **SEO** | ✅ Amélioration | Open Graph + Twitter Cards ajoutés |
| **Contenu** | 🟡 Correct | À jour mais quelques infos outdated |
| **Code Quality** | ✅ Bon | Modulaire, propre, React hooks bien utilisés |

---

## 📝 Changements Récents (Février 2026 - Phase 2)

### ✅ Améliorations Importantes Implémentées
1. **Open Graph Meta Tags** - Ajouté og:title, og:description, og:image, og:url, og:type, og:site_name
2. **Twitter Card Tags** - Ajouté twitter:card, twitter:title, twitter:description, twitter:image
3. **Favicon Customisé** - Créé `public/favicon.svg` avec gradient bleu-violet et initiales "CG"
4. **hCaptcha Intégration** - Ajouté protection anti-spam sur formulaire Contact avec `@hcaptcha/react-hcaptcha`
5. **Page 404 Personnalisée** - Créé composant `NotFound.jsx` avec UX friendly fallback
6. **Accessibilité** - Focus rings renforcés sur inputs, ARIA labels présents, contraste dark mode validé
7. **Build Optimisé** - Bundle size: 61.92 kB gzipped (avec hCaptcha inclus)

---
5. **Build validé** - Compilation réussie, tout fonctionne ✓

---

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **Formspree**: https://formspree.io
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/

---

## 👥 Notes pour les prochains Agents

1. **Avant toute modification**: Tester localement avec `npm run dev`
2. **Build avant deploy**: Toujours faire `npm run build` et vérifier `dist/`
3. **Garde les conventions**: Tailwind utility-first, composants modulaires
4. **Tests**: Vérifier sur mobile et dark mode après chaque changement
5. **Docs**: Mettre à jour ce fichier si modifications importantes
6. **Git**: Commits clairs et descriptifs (ex: "fix: update meta tags for SEO")

---

**Dernière mise à jour**: Février 2026  
**Statut du projet**: En production + maintenance  
**Mainteneur**: Clément Garreau
