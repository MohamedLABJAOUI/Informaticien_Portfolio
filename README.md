# Portfolio Ghaloua Saad

Portfolio professionnel moderne et responsive pour Ghaloua Saad - Informaticien et Développeur Web Junior.

## 🚀 Technologies Utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide et moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **React Scroll** - Navigation fluide entre les sections
- **EmailJS** - Service d'envoi d'emails depuis le frontend
- **React Icons** - Collection d'icônes

## 📦 Installation

1. Clonez le repository ou téléchargez les fichiers
2. Installez les dépendances :

```bash
npm install
```

## 🛠️ Configuration EmailJS

Pour activer le formulaire de contact, vous devez configurer EmailJS :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Obtenez vos identifiants (Service ID, Template ID, User ID)
5. Mettez à jour le fichier `src/components/Contact.jsx` avec vos identifiants :

```javascript
const serviceId = 'VOTRE_SERVICE_ID'
const templateId = 'VOTRE_TEMPLATE_ID'
const userId = 'VOTRE_USER_ID'
```

## 🎨 Personnalisation

### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.js` :

- **Primary** : `#11131f` (bleu marine foncé)
- **Secondary** : `#e59632` (orange chaud)
- **Background** : `#f4f4f4` (gris clair)
- **Text** : `#1a1a1a` (noir)

### Images

Remplacez les placeholders d'images :
- Photo de profil : Ajoutez votre image dans `public/` et mettez à jour les composants Hero et About
- Images de projets : Ajoutez les images de vos projets dans `public/` et mettez à jour `src/components/Projects.jsx`

### CV

Ajoutez votre CV au format PDF dans le dossier `public/` et nommez-le `cv-ghaloua-saad.pdf`

## 🚀 Développement

Lancez le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📦 Build pour Production

Créez une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

## 🌐 Déploiement sur Vercel

### Option 1 : Déploiement via GitHub

1. Poussez votre code sur GitHub
2. Allez sur [Vercel](https://vercel.com/)
3. Connectez votre compte GitHub
4. Cliquez sur "New Project"
5. Importez votre repository
6. Vercel détectera automatiquement Vite
7. Cliquez sur "Deploy"

### Option 2 : Déploiement via Vercel CLI

1. Installez Vercel CLI globalement :

```bash
npm install -g vercel
```

2. Dans le dossier du projet, exécutez :

```bash
vercel
```

3. Suivez les instructions à l'écran
4. Pour déployer en production :

```bash
vercel --prod
```

### Configuration Vercel

Vercel détectera automatiquement :
- **Framework Preset** : Vite
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

Aucune configuration supplémentaire n'est nécessaire !

## 📝 Structure du Projet

```
portfolio-ghaloua-saad/
├── public/
│   ├── favicon.ico
│   └── (images et assets)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## ✨ Fonctionnalités

- ✅ Design moderne et responsive (mobile-first)
- ✅ Mode sombre/clair avec persistance
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation smooth scroll
- ✅ Formulaire de contact avec EmailJS
- ✅ SEO optimisé avec React Helmet
- ✅ Bouton retour en haut
- ✅ Menu mobile hamburger

## 📄 Licence

Ce projet est sous licence personnelle.

## 👤 Auteur

**Ghaloua Saad**
- Email: saadghaloua63@gmail.com
- Téléphone: +212 680-751850
- GitHub: [@SaadGHALOUA](https://github.com/SaadGHALOUA)
- Localisation: Safi, Maroc

---

Développé avec ❤️ par Ghaloua Saad

