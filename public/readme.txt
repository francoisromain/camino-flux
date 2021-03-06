---


Flux géographiques Camino
https://flux.camino.beta.gouv.fr


---

Support technique

Téléphone : +33 (0)1 40 81 95 86
Email : camino@beta.gouv.fr
Code source : https://github.com/MTES-MCT/camino-flux

---

Les flux géographiques Camino exposent les informations administratives et géographiques pour les autorisations et titres miniers. 

Deux types de flux sont proposés: 
- des flux statiques mis à jour quotidiennement,
- des flux dynamiques dont on peut sélectionner le contenu en fonction de paramètres d'url.

Ces flux sont générés via les services de l’API Camino disponible sur http://api.camino.beta.gouv.fr. L'API offre des possibilités de requêtes avancées plus souples et complètes. 



---


Format des données


---

Les données sont publiées au format Geojson. C'est un format ouvert et réutilisable qui permet l’utilisation de ces données par des services tiers ou des logiciels de visualisation ou gestion d’information géographique.

> Informations administratives

    "properties": {
        "id": "id du titres dans Camino sous la forme : id_du_domaine_minier-id_du_type_de_titre-nom_du_titre-année_de_demande_ou_d_octroi",
        "nom": "nom du titre",
        "type": "type de titre",
        "domaine": "type de domaine minier",
        "statut": "statut du titre [demande initiale / valide / modification en instance / demande classée / échu]",
        "surface": “surface légale indiquée dans l’acte”,
        "substances": “liste des substances légales”,
        "titulaires": “nom du ou des titulaires du titre”,
        "amodiataires": “nom du ou des amodiataires du titre”,
        "references": "nom de la référence métier et référence associée",
        "date_debut": “date de début de validité du titre”,
        "date_fin": “date de fin de validité du titre”,
        "date_demande": "date de la demande",
        "url": "url de la fiche du titre dans Camino"
    }


> Informations géographiques

    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [ 
                        Longitudes de chaque sommet au format WGS84,
                        Latitudes de chaque sommet au format WGS84
                    ]
                ]
            ]
        ]
    }

Plus d’information sur la projection utilisée (WGS84) : http://spatialreference.org/ref/epsg/wgs-84/ 

Les périmètres de titres miniers peuvent prendre la forme d’un ou plusieurs polygones excluant ou non des enclaves. Le type "MultiPolygon" prend en compte cette diversité de forme.



---


Flux statiques
https://flux.camino.beta.gouv.fr


---

Les flux statiques disponibles sont listés dans le fichier “infos.json” (https://flux.camino.beta.gouv.fr/geojson/infos.json)

Segmentation par : 

- domaine minier, 
- type de titre et autorisation, 
- statut de validité.


Détail : 

- autorisations et titres miniers valides et faisant l'objet d'une demande de modification en instance,
- autorisations de recherches minières échues en Guyane (ARM),
- autorisations d'exploitation minières échues en Guyane (AEX),
- demandes initiales publiques en cours d'instruction de titres miniers et d'autorisations d’exploitation minière en Guyane (AEX),
- demandes d'autorisation de recherches minières classées en Guyane (ARM).

---

Utiliser les flux statiques

> Avec Géoportail (www.geoportail.gouv.fr)
Bouton clef à molette à droite “Accéder aux outils cartographiques” > “Importer des données” > Format “geojson” > “par url” > copier-coller l’url d’un des flux Camino > ajouter un titre > importer.

> Avec QGIS (http://qgis.org)
Glisser-déposer l’un des fichiers flux geojson préalablement téléchargé dans un projet Qgis ouvert.

> Avec un webservice tiers (http://geojson.io)
Copier-coller le contenu d’un des flux dans l’éditeur JSON ou “Open” et sélectionner l’un des flux préalablement téléchargé et ouvrir.



---


Flux dynamiques
https://flux.camino.beta.gouv.fr/titres


---

Paramètres d'url 
- domainesIds
- typesIds
- statutsIds
- entreprises
- noms
- references
- substances
- territoires

Basic Auth 
avec les identifiants utilisateur de Camino
- email
- mot de passe

Exemples
- https://email:mdp@flux.camino.beta.gouv.fr/titres?domainesIds=m,s&statutsIds=val
- …

---

Utiliser les flux dynamiques

> Avec QGIS (http://qgis.org)
…
