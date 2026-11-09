# Portfolio — Youssef Rahali

Portfolio Angular 21, bilingue FR / EN, responsive, thème sombre / clair.

## Modifier le contenu
Tous les textes (projets, expériences, compétences, certifications, contact) sont dans
`src/app/data/portfolio.data.ts`, en français et en anglais.
Les fichiers statiques (photo, CV, certificats) sont dans `public/`.

## Lancer en local
```bash
npm install
npm start          # http://localhost:4200
```

## Compiler
```bash
npm run build      # résultat dans dist/youssef-portfolio/browser
```

## Déployer sur Netlify
- **Netlify Drop** : glisser le dossier `dist/youssef-portfolio/browser` sur https://app.netlify.com/drop
- **GitHub + Netlify** : pousser ce dossier sur un dépôt GitHub, puis « Add new site → Import from Git » sur Netlify.
  Le fichier `netlify.toml` configure la compilation automatiquement à chaque push.

Les messages du formulaire de contact arrivent dans Netlify : *Site → Forms*.
