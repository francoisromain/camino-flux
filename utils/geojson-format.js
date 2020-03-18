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

// pour une definition, retourne le contenu du geojson formaté
const geojsonFormat = (titres, properties) => ({
  type: 'FeatureCollection',
  properties,
  features: titres.map(titreFormat)
})

module.exports = geojsonFormat
