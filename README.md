# Portfolio - Clément Garreau

Portfolio personnel moderne et responsive développé avec React, Vite et Tailwind CSS.
Deployed at: https://garro3.github.io/portfolio/

## 🚀 Technologies

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool ultra-rapide pour le développement
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Navigation entre sections
- **Lucide React** - Bibliothèque d'icônes modernes

##  Fonctionnalités

- Design moderne et épuré
-  Entièrement responsive (mobile, tablette, desktop)
-  Navigation fluide avec smooth scroll
-  Animations et transitions soignées
-  Formulaire de contact avec validation
-  Sidebar fixe avec indicateur de section active
-  Performance optimisée

##  Sections

1. **Accueil** - Présentation et liens sociaux
2. **À propos** - Parcours et statistiques
3. **Compétences** - Technologies maîtrisées
4. **Projets** - Portfolio de projets réalisés
5. **Parcours** - Formation et expériences
6. **Contact** - Formulaire et informations de contact

## 🛠️ Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. Clonez le repository
```bash
git clone https://github.com/EpitechMscProPromo2028/T-JAV-500-day05-NAN_clement-garreau.git
cd T-JAV-500-day05-NAN_clement-garreau/portfolio
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez le serveur de développement
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse affichée (généralement `http://localhost:5173`)

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run deploy` - Déploie sur GitHub Pages

## 🌐 Déploiement sur GitHub Pages

### Configuration

Le projet est déjà configuré pour GitHub Pages. Le fichier `vite.config.js` contient le `base` path correct.

### Déploiement

1. Assurez-vous que votre repository GitHub est correctement configuré

2. Installez les dépendances si ce n'est pas déjà fait
```bash
npm install
```

3. Déployez avec la commande
```bash
npm run deploy
```

4. Activez GitHub Pages dans les paramètres du repository
   - Allez dans Settings > Pages
   - Source: Deploy Action
  

5. Votre site sera accessible à l'adresse :
```
[https://epitechmscpropromo2028.github.io/T-JAV-500-day05-NAN_clement-garreau/](https://garro3.github.io/portfolio/)
```

### Mise à jour du site

Pour mettre à jour le site après des modifications :

```bash
npm run deploy
```

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx      # Navigation latérale
│   │   ├── Hero.jsx          # Section accueil
│   │   ├── About.jsx         # Section à propos
│   │   ├── Skills.jsx        # Section compétences
│   │   ├── Projects.jsx      # Section projets
│   │   ├── Experience.jsx    # Section parcours
│   │   └── Contact.jsx       # Section contact
│   ├── App.jsx               # Composant principal
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles globaux
├── public/                   # Assets statiques
├── index.html                # Template HTML
├── vite.config.js            # Configuration Vite
├── tailwind.config.js        # Configuration Tailwind
├── postcss.config.js         # Configuration PostCSS
└── package.json              # Dépendances
```

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditez les composants dans `src/components/` pour personnaliser :
- Nom et titre dans `Hero.jsx`
- Bio et statistiques dans `About.jsx`
- Compétences dans `Skills.jsx`
- Projets dans `Projects.jsx`
- Parcours dans `Experience.jsx`
- Coordonnées dans `Contact.jsx`

### Modifier les couleurs

Modifiez `tailwind.config.js` pour personnaliser la palette de couleurs :

```js
theme: {
  extend: {
    colors: {
      'sidebar': '#0A0A0A',
      // Ajoutez vos couleurs ici
    },
  },
}
```

## 📱 Responsive Design

Le portfolio est optimisé pour tous les appareils :
- **Mobile** : Navigation en bas d'écran, layouts en colonne
- **Tablette** : Layouts adaptés
- **Desktop** : Sidebar fixe, grilles multi-colonnes

## 🔗 Liens utiles

- [Documentation React](https://react.dev/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 👤 Contact

**Clément Garreau**
- Email: garreau.clement@gmail.com
- Téléphone: 07 69 87 73 93
- Localisation: France

## 📄 Licence

Ce projet est personnel et peut être utilisé comme référence pour vos propres projets.

---

Développé par Clément Garreau

