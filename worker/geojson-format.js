const entrepriseFormat = e => `${e.nom} (${e.legalSiren || e.legalEtranger})`

const titreFormat = ({
  id,
  nom,
  type,
  domaine,
  statut,
  dateDebut,
  dateFin,
  dateDemande,
  volume,
  volumeUnite,
  surface,
  substances,
  titulaires,
  amodiataires,
  references,
  geojsonMultiPolygon,
  pays
}) => {
  const regions =
    pays &&
    pays.length &&
    pays.reduce(
      (regions, pay) =>
        pay.regions && pay.regions.length
          ? [...regions, ...pay.regions]
          : regions,
      []
    )

  const departements =
    regions &&
    regions.length &&
    regions.reduce(
      (departements, region) =>
        region.departements && region.departements.length
          ? [...departements, ...region.departements]
          : departements,
      []
    )

  const communes =
    departements &&
    departements.length &&
    departements.reduce(
      (communes, departement) =>
        departement.communes && departement.communes.length
          ? [...communes, ...departement.communes]
          : communes,
      []
    )

  return {
    type: 'Feature',
    properties: {
      id: id,
      nom: nom,
      type: type.type.nom,
      domaine: domaine.nom,
      statut: statut.nom,
      volume: volume && `${volume} ${volumeUnite.nom}`,
      surface: surface && `${surface} km²`,
      substances:
        substances && substances.length
          ? substances
              .map(s => s.legales && s.legales.map(sl => sl.nom).join(', '))
              .join(', ')
          : null,
      titulaires:
        titulaires && titulaires.length
          ? titulaires.map(t => entrepriseFormat(t)).join(', ')
          : null,
      amodiataires:
        amodiataires && amodiataires.length
          ? amodiataires.map(t => entrepriseFormat(t)).join(', ')
          : null,
      references: references
        ? references.map(r => `${r.type.nom}: ${r.nom}`).join(', ')
        : null,
      date_debut: dateDebut,
      date_fin: dateFin,
      date_demande: dateDemande,
      url: `https://camino.beta.gouv.fr/titres/${id}`,
      pays: pays && pays.length ? pays.map(({ nom }) => nom).join(', ') : null,
      regions:
        regions && regions.length
          ? regions
              .map(({ nom }) => nom)
              .sort()
              .join(', ')
          : null,
      departements:
        departements && departements.length
          ? departements
              .map(({ nom }) => nom)
              .sort()
              .join(', ')
          : null,
      communes:
        communes && communes.length
          ? communes
              .map(({ nom }) => nom)
              .sort()
              .join(', ')
          : null
    },
    geometry: geojsonMultiPolygon && geojsonMultiPolygon.geometry
  }
}

const fileNameFormat = ({ domaines, types, statuts }) => {
  return `titres-${domaines.map(d => d.id).join('-')}-${types
    .map(t => t.id)
    .join('-')}-${statuts.map(s => s.id).join('-')}.geojson`
}

// pour chaque definition (domaineIds, typeIds, statutIds)
// retourne un tableau avec les noms correspondant aux ids
// - domaines: []
// - types: []
// - statuts: []
const metasFormat = metas =>
  Object.keys(metas).reduce((metasObj, metaName) => {
    metasObj[`${metaName.slice(0, -1)}Ids`] = metas[metaName].map(
      m => m.nom || m.type.nom
    )

    return metasObj
  }, {})

// pour une definition, retourne le contenu du geojson formaté
const geojsonFormat = (titres, couleur, metas) => ({
  type: 'FeatureCollection',
  properties: {
    fichier: fileNameFormat(metas),
    couleur,
    ...metasFormat(metas)
  },
  features: titres.map(titreFormat)
})

module.exports = geojsonFormat
