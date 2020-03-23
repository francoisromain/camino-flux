# Camino flux

> Flux de données geojson de l'API de [Camino](https://camino.beta.gouv.fr): [flux.camino.beta.gouv.fr](https://flux.camino.beta.gouv.fr).
>
> [Instructions](https://github.com/MTES-MCT/camino-flux/tree/master/public)

---

## Technologies

- Node.js
- Express.js
- Eslint
- Prettier
- Standardjs

---

## Configuration

- Renommer le fichier `.env.example` en `.env`.
- Compléter le fichier `env`.

---

## Npm scripts

```bash
# Installe les dépendances
npm install

# Créé les fichiers geojson des titres miniers à partir de l'api
# et les enregistre dans le dossier /public/geojson
npm run build

# Démarre le serveur qui sert les fichiers du dossier /public et les flux dynamiques /titres
npm start
```

---

## Contribution

Voir `contributing.md` (en anglais) pour plus d'infos.

---

## Credits

### Production

- [La Fabrique Numérique, Ministère de la transition écologique et solidaire](https://www.ecologique-solidaire.gouv.fr/inauguration-fabrique-numerique-lincubateur-des-ministeres-charges-lecologie-et-des-territoires)
