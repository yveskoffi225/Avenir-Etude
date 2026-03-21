/**
 * AVENIR ÉTUDE — Base de données établissements CI
 * Source : MENA-CI / DSPS 2021-2022 (3 PDFs officiels)
 * ─────────────────────────────────────────────────
 * Lycées publics        : 207
 * Collèges publics      : 381
 * Établissements privés : 884
 * TOTAL                 : 1472 établissements
 * ─────────────────────────────────────────────────
 * Champs : nom, type, statut, ville, commune, regime, milieu
 */
const ETABLISSEMENTS_CI = [
  {
    "nom": "LYCEE MODERNE ANYAMA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE PORT_BOUET",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Port Bouet",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE YOPOUGON",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 1 ABOBO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE KOUMASSI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE TREICHVILLE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Treichville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL 1 GADIE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL 1",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL 1 KOUMASSI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE AMAGOU",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DE JEUNES",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL ABOBO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL PORT-",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL SIMONE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE SONGON",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Songon",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE MODERNE 2 ABOBO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL 2 KOUMASSI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL 2",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL 2 GADIE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNEALASSANE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Garçons",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MAMIE HOUPHOUET",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 1 NANGUI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 NANGUI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ADJAME",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DE COCODY",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DJEDJI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL ADJAME",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE SAINTE MARIE COCODY",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE COCODY",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL SIKENSI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE TIASSALE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE KOUAME KOFFI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 3 AGBOVILLE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE AZAGUIE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL DE RUBINO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE AGBOVILLE LYCEE MODERNE 1 AGBOVILLE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE AGBOVILLE LYCEE MODERNE 2 AGBOVILLE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL KORO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BOUNDIALI LYCEE MODERNE GBON",
    "type": "Lycée",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BOUNDIALI LYCEE MODERNE DE KASSERE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BOUNDIALI LYCEE MODERNE DE KOLIA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ZIGUITIE DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BOUNDIALI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BOUNDIALI LYCEE MODERNE TENGRELA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ABDOULAYE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE CAMILLE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE LEON KONAN",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DESIRE BONI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE TOUMODI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL KOUNAHIRI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BAD TIENINGBOUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE MANKONO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL DIANRA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Garçons",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DE NASSIAN",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BOUNA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL DE TAÏ",
    "type": "Lycée",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE GUIGLO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE GUIGLO LYCEE MODERNE TOULEPLEU",
    "type": "Lycée",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE MINIGNAN",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BOTRO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE NIMBO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BOUAKE 2 LYCEE MODERNE NANAN",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE CLASSIQUE ET MODERNE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 BOUAKE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE BOUAKE 2 LYCEE MODERNE BEOUMI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE PAUL AKOTO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL DJIBO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MARTIN LUTHER KING",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE TSF BOUAKE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL BROBO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE JEUNES",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE SASSANDRA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE GOFFRI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE FRESCO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 3 DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE OUME",
    "type": "Lycée",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE GAGNOA LYCEE MUNICIPAL OURAGAHIO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DIEGONEFLA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL TANDA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BAD KOUN-FAO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE TANDA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BONDOUKO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL TRANSUA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE TABAGNE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL ASSUEFRY",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL SANDEGUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DE YEZIMALA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE TAN DATE DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE AKPA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ARSENE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Grand Lahou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE LEBOUTOU",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE TIAPANI DOMINIQUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL",
    "type": "Lycée",
    "statut": "public",
    "ville": "Jacqueville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BANGOLO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bangolo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE FACOBLY",
    "type": "Lycée",
    "statut": "public",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DUEKOUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE HENRIETTE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE KATIOLA LYCEE MODERNE DABAKALA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE GASTON",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE ISSIA LYCEE MODERNE ISSIA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE ISSIA LYCEE MODERNE SAIOUA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL ISSIA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BEDIALA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE GADOUAN",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 DALOA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE ANTOINE GAUZE DALOA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 1 DALOA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 3 DALOA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 4 DALOA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 5 DALOA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE KHALIL",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE VAVOUA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE DAOUKRO LYCEE MODERNE M'BAHIAKRO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE PRIKRO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE HENRI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ADRIEN",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE NANAN KOUAKOU",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE ABENGOUR",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE YAKASSE-",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE NANAN ADEPRA DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE DEPARTEMENTAL ROI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE D'ANIASSUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DE ZARANOU",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 ODIENNE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE ADZOPE LYCEE MODERNE 01 ADZOPE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 02 ADZOPE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE AGOU",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE AKOUPE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ALEPE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE YAPO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE MUNICIPAL AFFERY",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL YAKASSE-",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 D'AKOUPE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Jacqueville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 3 DIVO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE DIVO LYCEE MODERNE GUITRY",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL ZIKISSO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ALPHONSE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 1 DIVO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BOGA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 DIVO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE DEPARTEMENTAL",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL HIRE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE SINFRA LYCEE MODERNE HKB SINFRA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL KONONFLA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 1 BOUAFLE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BAD",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ZUENOULA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE D'ARRAH",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE M'BATTO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL TIEMELEKRO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE NANAN",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE MODERNE CHARLES",
    "type": "Lycée",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 1 BERNARD",
    "type": "Lycée",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL DE BUYO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE KFW DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE KATO LUC",
    "type": "Lycée",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 BERNARD",
    "type": "Lycée",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE MARCEL ZADI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE EXTENSION DIMBOKRO LYCEE MODERNE BOCANDA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DIMBOKRO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE KOUASSI-",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE KORHOGO LYCEE MODERNE DE SIRASSO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE HOUPHOUET BOIGNY DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DE KORHOGO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE DOMINIQUE OUATTARA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE SORO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE SILUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BAROU",
    "type": "Lycée",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE INAGOHI",
    "type": "Lycée",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE JULES HIE",
    "type": "Lycée",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE GOSSO",
    "type": "Lycée",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE MODERNE LUCIEN",
    "type": "Lycée",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE SAN PEDRO",
    "type": "Lycée",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE FATIM SYLLA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 1 GRAND-",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BAD AYAME",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL DE BONOUA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE ABOISSO LYCEE MODERNE AMON",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DE BONOUA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE KONAN",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL MAFERE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 2 GRAND-",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE JACQUES",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE MODERNE AHIGBE-",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE D'EXCELLENCE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ALASSANE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DIAWALA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE FERKESSEDO",
    "type": "Lycée",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE DOMINIQUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE II GBÊ",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE AUGUSTE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MAN LYCEE MODERNE LAMBERT",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE FLORENT",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE OULAI GOUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE KOUI",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE ZINGBE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MAN LYCEE MODERNE DION ROBERT",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE IBA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE BAD DE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL KONET",
    "type": "Lycée",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE 1",
    "type": "Lycée",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MAMIE ADJOUA",
    "type": "Lycée",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE SCIENTIFIQUE",
    "type": "Lycée",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ABOBO PK 18",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE AUTOROUTE",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Treichville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BAD KOUMASSI",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE SONGON",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Songon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE CITE DU PORT",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Treichville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE AKOUPE ZEUDJI",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DJROGOBITE",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE KOUMASSI SICOGI",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MARCORY",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BIETRY",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ANDRE LATRILLE",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Port Bouet",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE PORT-BOUET",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ABOBO SOGEFIHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BINGERVILLE",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE M'POUTO",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DU PLATEAU",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE COCODY CITE DES",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE COCODY LYCEE",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE D'ATTECOUBE CITE",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Attecoube",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE YOPOUGON",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TAABO",
    "type": "Collège",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ALBERT YEDE DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE TIASSALE COLLEGE MODERNE PACOBO",
    "type": "Collège",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KATADJI",
    "type": "Collège",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE TABOITIEN",
    "type": "Collège",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE TIASSALE",
    "type": "Collège",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BINAO",
    "type": "Collège",
    "statut": "public",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE CECHI",
    "type": "Collège",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE LOVIGUE",
    "type": "Collège",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE D'ABOUDE",
    "type": "Collège",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE D'AGBOVILLE",
    "type": "Collège",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE D'ORESS-KROBOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ATTOBROU",
    "type": "Collège",
    "statut": "public",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE TOUBA COLLEGE MODERNE KOONAN",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BOROTOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MAHOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE TOUBA COLLEGE MODERNE GUINTEGUELA",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE NIOKOSSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SANTA",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GOUELO-",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GANHOUE-SEFINA",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DIOMAN",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE FOUNGBESSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ALASSANE",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BOOKO",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BOROTOU-KORO",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DEMBASSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE GANAONI",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TINDARA",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KEBI",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE SIANHALA",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MAHALE",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE TOUNVRE",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE YELE",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BAYA",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KANAKONO",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE SIEMPURGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BOLONA",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE LANDIOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE NEGUEPIE",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BLESSESGUE",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE N'DEOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE SISSEDOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE ZAGUINASSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE SAN",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE WORA",
    "type": "Collège",
    "statut": "public",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE JEANNOT",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODRENE N'GUYAKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BOLI",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BONIKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KPOUEBO",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KONGONOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE YEBOUE KOUAME",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MOLONOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SOUNDELE KONAN",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DIANRA-VILLAGE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Garçons",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE SAMOROSSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE MARANDALLAH",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BOUANDOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE KONGASSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SARHALA",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Garçons",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE DIALAKORO",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE FIZANLOUMA",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DOROPO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE TEHINI",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BOUNA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE YOUNDOUO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ONDEFIDOUO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BOUKO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TOUGBO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE KOTOUBA",
    "type": "Collège",
    "statut": "public",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BANVAYO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE SOMINASSE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUNICIPAL PEHE",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ZAGNE",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE NEZOBLI",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DAGOBERT BANZIO",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE ZEAGLO",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE TIOBLY",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE TINHOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BEDY - GOAZON",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MUNICIPAL THANRY GUIGLO",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE GOYA",
    "type": "Collège",
    "statut": "public",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE GOULIA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUNICIPAL TIENKO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BANANKORO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE MAHANDIANA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE SOKORO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KOKO BOUAKE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BODOKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BOUREBO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE SRAN-BONDOSSOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE JEUNES FILLES",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUNICIPAL DJEBONOUA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE IRDO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE GRIHIRI",
    "type": "Collège",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DASSIOKO",
    "type": "Collège",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BAYOTA",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DRIBOUO",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE SERIHIO",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DIGNAGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE GAGNOA",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GALEBRE",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BRIHI",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE GODIABRE",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE ZAHIBOHIO",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE TONLA",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE OURAGAHIO",
    "type": "Collège",
    "statut": "public",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BONDOUKOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LAOUDI-BA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TANKESSE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE PINDA-BOROKO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE APPIMANDOUM",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BONDO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GOUMERE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SAPLI-SEPINGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TAOUDI",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE GBANHUI",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KOKOMIAN",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE NANAN OBENG DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'ASSINDI",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GUIENDE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KOUASSI-",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE TAMBI",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE HIANGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE NAMASSI",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'AMANVI",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE SOROBANGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE TIENKOIKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KOUASSIA-",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE TAGADI",
    "type": "Collège",
    "statut": "public",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BESSIO DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE 1 TOUPAH",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE AHOUANOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Grand Lahou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE EBOUNOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Grand Lahou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BACANDA",
    "type": "Collège",
    "statut": "public",
    "ville": "Grand Lahou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE LOPOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE 2 DE TOUPAH",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ADESSE",
    "type": "Collège",
    "statut": "public",
    "ville": "Jacqueville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE N'DJEM",
    "type": "Collège",
    "statut": "public",
    "ville": "Jacqueville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE AHOUNIANSSOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Grand Lahou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BOUBOURY",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE DUEKOUE COLLEGE MODERNE BAD KOUIBLY",
    "type": "Collège",
    "statut": "public",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE GUEZON",
    "type": "Collège",
    "statut": "public",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE NANADI",
    "type": "Collège",
    "statut": "public",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE SEMIEN",
    "type": "Collège",
    "statut": "public",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE TIENY -SIABLY",
    "type": "Collège",
    "statut": "public",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GLOPLOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Bangolo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DIOUROUZON",
    "type": "Collège",
    "statut": "public",
    "ville": "Bangolo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BLENIMEOUIN",
    "type": "Collège",
    "statut": "public",
    "ville": "Bangolo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE ZEO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bangolo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE GOHOUO-ZAGNA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bangolo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE TIESSAN",
    "type": "Collège",
    "statut": "public",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MUNICIPAL SATAMA-SOKORO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BONIEREDOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TORTIYA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE NIEMENE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE SOKALA-SOBARA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE PANGALAKAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KATIOLA COLLEGE MODERNE DE BADIKAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SATAMA-SOKOURA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE NIEDIEKAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BASSAWA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE TENDENE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KANAWOLO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BOGUEDIA",
    "type": "Collège",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE NAHIO",
    "type": "Collège",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE IBOGUHE",
    "type": "Collège",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GAZEHIO",
    "type": "Collège",
    "statut": "public",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE 2 DALOA",
    "type": "Collège",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DANIA",
    "type": "Collège",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE GBOGUHE",
    "type": "Collège",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GONATE",
    "type": "Collège",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE SEITIFLA",
    "type": "Collège",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE ZAÏBO",
    "type": "Collège",
    "statut": "public",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DAOUKRO COLLEGE MODERNE ETTROKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE II DAOUKRO COLLEGE MODERNE DAOUKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BONGUERA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE NANAN BOA KOUASSI III",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE APPROMPRONOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE DEPARTEMENTAL",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE AMELEKIA",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ABENGOUROU COLLEGE MODERNE ALASSANE",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE AKOBOISSUE",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ABINAN KOUAKOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DIAMARAKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE NANAN N'DRI",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SANKADIOKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'AGNIBILEKROU",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE D'AFFALIKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'AMORIAKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BAKO",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE FEREMANDOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GBONGAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KIMBIRILA-SUD",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ODIENNE",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUNICIPAL SAMATIGUILA",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUNICIPAL DE TIEME",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KOKOUN",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE ODIENNE COLLEGE MODERNE HADJA NABINTOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KROUKRO-",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE SEYDOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ABOISSO COMOE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ASSIKOI",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ASSIKOUN",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BECOUEFIN",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'ABONGOUA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DANGUIRA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BIEBY",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE OGLHWAPO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE PATRICK ACHI",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE YAKASSE-ME",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ACHI JEROME DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE MOAPE-",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'ALLOSSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BOUDEPE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DIANGOBO-FIASSE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE DIAPE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KOSSANDJI",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'AGBAOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE MEMNI",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BIASSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BACON",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GRAND ALEPE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE NIAMBEZARIA",
    "type": "Collège",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE OGOUDOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE NEBO",
    "type": "Collège",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GAGORE",
    "type": "Collège",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE YOCOBOUE",
    "type": "Collège",
    "statut": "public",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BAZRE",
    "type": "Collège",
    "statut": "public",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE CHARLES KOFFI",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE GOHOUNFLA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE IRIEFLA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE MANFLA",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE SUCRIVOIRE DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ZAGUIETA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MUNICIPAL BONON",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BLANFLA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ANOUMABA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ANDE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE AGNIA",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KREGBE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE N'GUESSANKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ASSIE-KOUMASSI",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BOUAFFOUKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BROU-",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE 2 BONGOUANOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE SEREBISSOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'ASSAOUFFOUE",
    "type": "Collège",
    "statut": "public",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KFW DE GRAND",
    "type": "Collège",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GUEYO",
    "type": "Collège",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SOUBRE",
    "type": "Collège",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE MAYO",
    "type": "Collège",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE D'OUPOYO",
    "type": "Collège",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BUYO",
    "type": "Collège",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE SOUBRE",
    "type": "Collège",
    "statut": "public",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE TAKOREAGUI",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE DIMBOKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BENGASSOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE N'ZECREZESSOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DIANGOKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE MEKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KORHOGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE NIOFOIN",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GBON COULIBALY",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE LATAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE LAVONONKAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE SOLIGNOUGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KANOROBA",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE KANDIA CAMARA",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BORON",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KIEMOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE GUIEMBE",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE COULIBALY",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KATOGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE BOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE POUNGBE",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE SEDIOGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KORHOGO COLLEGE MODERNE DE KATIALI",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KARAKORO",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE NANGAKAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE N'GANON",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE LAMEKAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE AMADOU GON",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE KALOA",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BAHOUAKAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE JEUNES FILLES",
    "type": "Collège",
    "statut": "public",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE KFW SAN PEDRO",
    "type": "Collège",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE COOPAGA",
    "type": "Collège",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GABIADJI",
    "type": "Collège",
    "statut": "public",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE GRAND-BASSAM",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE EUGENE AKA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE BIANOUA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ALEXIS ELLINGAND",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE YVES LAMBELIN DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DOMINIQUE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE KOUAKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE ONO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE D'ETUEBOUE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE NOUAMOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE YAOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KETESSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ADJOUAN",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE NOE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE YAOU BONOUA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE OUAMELHORO",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KOUMBALA",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE VILLAGE C",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE JACQUES",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KAOUARA",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE FERKESSEDOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE POGO",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE TOUMOUKORO",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LAFOPKOKAHA",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE TENE BIRAHIMA",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KORONANI",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE NAMBINGUE",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE TOGONIERE",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE SIKOLO",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE NAFANA",
    "type": "Collège",
    "statut": "public",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DROH BIEU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ERNEST BLEU",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE KPAN TONGA DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DES JEUNES",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE GBANGBEGOUINE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE PODIAGOUINE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MOUSSA KONE DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MARTIN SANDE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE EUGENE METTE DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KPATA",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DROH SASSAH DE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE JEAN BAPTISTE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BIELE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE KIELE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GOURANE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE YORODOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BANNEU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE MANGOUIN",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ZAGUINEU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DALEU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GOUTRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE GOULALEU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE BLOLE",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE SEGUELA COLLEGE MODERNE MORONDO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TEGUELA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE WOROFLA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE TIEMASSOBA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE DJIBROSSO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE FADIADOUGOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GBOGOLO",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE DE GBINGORO-",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE MASSALA",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SIFIE",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE BOBI",
    "type": "Collège",
    "statut": "public",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE MANABRI",
    "type": "Collège",
    "statut": "public",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MODERNE ALFRED KOBA",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE KOSSOU",
    "type": "Collège",
    "statut": "public",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUNICIPAL YAMOUSSOUKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE DE DUOKRO",
    "type": "Collège",
    "statut": "public",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CIPIM YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE D'ENSEIGNEMENT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VOLTAIRE TREICHVILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Treichville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ADAMA SANOGO ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AIME CESAIRE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLES ALFRED NOBEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANADOR ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BERETHE MARCORY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CARNOT NIANGON-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE COFFI GADEAU ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DENGUELE ANYAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DESCARTES MARCORY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DIDEROT ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DJESSOU ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GAOUSSOU TOURE ANYAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE I.T.E.S ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JULES VALLES KOUMASSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA COLOMBE KOUMASSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LA SORBONNE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MODERNE TECHNIQUE LE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PETIT CHAMPION",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LEGRAND ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE FUSOS COURS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES GRACES ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ORCHIDEES D'ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES PHALENES 1 YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MARIE BLANCHE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MINERVA YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MONTAIGNE MARCORY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MORIJA TREICHVILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Treichville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KOUTOUAN NANDJUI ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME DE LA PAIX",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Songon",
    "regime": "Filles",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE PASCAL KOUMASSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE RENE CAILLE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE RODIN YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT ELYSEE MARCORY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT ETIENNE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT EXUPERY PORT-BOUET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT FRANCOIS 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT JEAN BOSCO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Treichville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT JOSEPH ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINT LOUIS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT MAURICE D'ALICOT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE ALBERTINE KOUMASSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE CLAIRE DES BOIS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE SAINTE RUTH ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE SAINTE THERESE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KONE MAMADOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Attecoube",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SEGBE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SEPI YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE TREICH-LAPLENE TREICHVILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Treichville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COMPLEXE ABIDJAN 3 COLLEGE VICTOR SCHOELCHER",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLE WILLIAM PONTY YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE CATHOLIQUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Garçons",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FRELEC SCOLAIRE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE NEWTON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ENTENTE KOUMASSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES PINGOUINS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE NANTI ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COMPLEXE SCOLAIRE I.G.E.S.",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IPES YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAFOP MARCORY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLE LIBANAISE EN CÔTE D'IVOIRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE D’ENSEIGNEMENT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IRIS 2 ABOBO AVOCATIER",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANADOR YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "PENSIONNAT METHODISTE DE FILLES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE KONE IDRISSA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEANNE DE CAVALLY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES ELITES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE SAINT GILBERT DE DJAGO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT EDER ABOBO KENNEDY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE MAHOU ABIDJAN 4 COLLEGE SAINT BRICE PROVINCIAL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES PIGEONS YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VICTOR LOBA DJOKOUEHI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MELLIN SERAPHINE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE YADA CLEMENT YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE METHODISTE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ESTHER KOUMASSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GUCHANROLAIN YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE VATICAN 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NEOPHYTE VRIDI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA VICTOIRE 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEAN-BAPTISTE DE LA SALLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SINGA YOPOUGON CAMP",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TECHNIQUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DORIAN YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES PETITS SOLEILS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ADJA MADOUÊ",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ATLAS ANYAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HAROUN TAZIEFF ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AUTOROUTE DU NORD",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINTE RUTH",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE ROI DES ROIS KOUMASSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LAMA FOFANA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE COULIBALY SANDENI ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA BELLE ETOILE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VINCENT LE LEADER",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PETIT COLLEGE KOUMASSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES 3 A YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE ROI DAVID YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SEBACO YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CIEL PLURIEL YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LAROUSSE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ABRAHAM AYEBY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EULALIE BLAH ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FATOUMABA YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINTE ELISABETH",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES NOUVEAUX HORIZONS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINT CYR PORT-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE TCHIOULY YOPOUGON ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE GBADJE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINT JEAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE PARTHENON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES SAINTS ANGES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MITTERAND YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA BAGOUE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE SAVANT 1",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NADJATE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE IVOIRE BLEY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA SILHOUETTE PORT-BOUET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE CELESTE PORT-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE MARIE HOULDA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ALBERT SCHWEITZER SONGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Songon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MONACO YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE NAHACLAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT MICHEL DE KOUADIO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES AS ABOBO PLAQUE 1",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANOMA NANDJUI ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PERE LOUIS WACH ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES OLIVIERS PORT BOUET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Port Bouet",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA FINE FLEUR YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE LA BONNE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AKOUNDA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE FELIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AHIMSA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE EL ITRATOU TAHIRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA VICTOIRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE LA ROCHELLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEAN BAPTISTE DE LA SALLE 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EL ITRATOU TAHIRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE NYL'S PORT-BOUET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AGNONKOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE GNAKAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE GRAZIA YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE IGON YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA PRAIRIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SYLLA L'EXCELLENCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE CHA HELENE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANDRE DES PRES ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BETSALEEL ANYAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DES UNIS ABOBO AKEIKOI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EDUCATION-PAIX-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PANORAMA ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE BUTHMANN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ISRAELABOBO-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA RELEVE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE NID DES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE RITA ROSANNE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LABION MAXIME PORT-BOUET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES CAIMANS PORT-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLES SANGBAN DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ACADEMIE DES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE GERMINAL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES BOURGEONS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES MIGNONS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES PETITS GENIES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE NIPPON DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CHRIST LE ROI ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA BELLE CITE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AOF ABOBO AVOCATIER",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE GRACE JEANNINE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE KOFFI AGO ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LEOPOLD SEDAR",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AMICHIA PAUL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINT-CYR",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LOUIS LAGRANGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MARIE ROSE DE LIMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HARMONY YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JULES ET MARCELLE SONGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Songon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COMPLEXE ABIDJAN 3 COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE YADA CLEMENT 2 YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ABOUDRAMANE TRAORE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DOYEN LAMINE FADIGA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EULALIE BLAH 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA REGINA ANYAMA-ADJAME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CATHOLIQUE DES FRERES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA PAIX DIVINE 1 PORT-BOUET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PEDAGOGUE PORT-BOUET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HIDAYATOU NACHI INE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FAH DOUMBIA ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NADREAU LA SOURCE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA COMPETENCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PARADIS DE PHENIX DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IRIS 3 DE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE KRAZAN DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KOFFI HOURA D'ABADJIN-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Songon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FOUSSENI KONE (CFK)",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SANOGO ALMAMY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE BON SAMARITAIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINTE ADJOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAGUIDIBA YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE OFFOUMOU YAPO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE KWAGNISS MAVRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ANDRE LATRILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE FADIGA ABDOUL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINT MATHIEU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE ARC-EN-CIEL ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE YVAC ANYAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ATLANTIQUE PORT-BOUET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE NANCY MARCORY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BOCABO ET ASSOCIES ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LES FALAISES ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES BOTANIQUES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA SOURCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SELODESIR ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IRIS I ABOBO KENNEDY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT EMMANUEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE GBAEGUI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANDRE GIDE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE INTERNATIONAL DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE D. BAZ YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEAN FRANCOIS LIONEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MAMADOU TRAORE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE SAVANT 2 DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA VOLIERE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Marcory",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PIERRE ET MARIE CURIE PORT-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ELYSEES ABOBO PK18",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MALE GBINDE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE BETHESDA PORT-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Port Bouet",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINTE JEANNE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CARINE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT MOISE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JULES RONSARD 2 PORT-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EMERY YOPOUGON TOITS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DES JEUNES FILLES SINGA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PENITHOLONY YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE WALI YOPOUGON GARE SABLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE GENERAL LES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT CHALMEL YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AYEWA YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE TOURE KANVALY ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME DES LAGUNES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BAPTISTE MONT SINAÏ",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINT CYR 2 PORT-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SOEUR MARIE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MAMIE ADJOUA YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PIERRE LE GRAND YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SONA YOPOUGON SAPEUR",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PRESIDENT YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SABA ET FILS YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE BADIANA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT YANN EMMANUEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINT CYR ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES PHALENES 2 YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE ROSIER ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EMMANUEL KANT ABOBO PK-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KOUASSI HAUDY MARCEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE DES PROF. DE L'ED",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE EMMANUEL PORT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE CERDACOM ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES FALAISES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE DES ARTS ET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EL ITRATOU TAHIRA ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HERMANN ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA PAIX ANYAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE JOSEPH",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE FATYMA 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT FRANÇOIS YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE SOUVERAIN YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE PELLETIER ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT AUGUSTIN YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MERAJEA YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MICHEL VAKO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MITSPA YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES ROITELETS PORT-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME DE SECOURS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SOCIAL SIMONE GBAGBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AKANJI (GSA)",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ROSEE DIVINE ABOBO BAOULE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MONAJOCE YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CHARDIN YOPOUGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LAPLACE ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PARFAIT ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CONFESSIONNELLE SANOUSSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Anyama",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA DESTINEE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE EMMAUS (GROUPE SKT)",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PARLEMENT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES MINISTRES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Songon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT BRICE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT BERNARD",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE NOTRE DAME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DJASSAYE NIANGORAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IMPERIAL DE COCODY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE INTERNATIONAL FRED ET",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA PEROUSE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE NAVIRE COCODY RIVIERA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PANTHEON WILLIAMSVILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PANTHEON 2 ADJAME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE SERMENT COCODY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ROSIERS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MONTHERLANT ADJAME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT CYRILLE BINGERVILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE CAMILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VICTOR SCHOELCHER ADJAME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VICTOR SCHOELCHER RIVIERA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE MÉTHODISTE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COURS SECONDAIRE MÉTHODISTE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "ECOLE CHRETIENNE LA SEMENCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLE SECONDAIRE ETIMOE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLE SECONDAIRE MAKORÉ",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Garçons",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LA FARANDOLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AVICENNE RIVIERA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE BA'OULEHN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE DJEKAT IGNACE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE HENRI BARBUSSE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE L'ARDOISE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES DAUPHINS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE THANON NAMANKO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE TRAYÉ BERNARD",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "INSTITUTION SACRE-CŒUR D'ADJAME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EBURNIE COCODY ANGRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VENEZUA COCODY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE CONQUERANT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE JULES FERRY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LOUIS NICOLLIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT VIATEUR COCODY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES FIGUIERS COCODY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LONNY ROSE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MOAYE-DHAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES LAUREADES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT PAUL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SANTA ANNA COCODY 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KEMA COCODY ANGRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AL GHADIR COCODY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEAN PAUL SARTRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEAN PAUL SARTRE ADJAME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE INTERNATIONAL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PIERRE CHARLES 2 RIVIERA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MAMIE QUARTIER MAMADOU ABIDJAN 1 COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE POYANNE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Bingerville",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PHENIX",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MAKAN TRAORE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE JEAN XIII RIVIERA 4",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE COMMANDANT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AKANDJI COCODY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ALIZEES FAYA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HENRI CARTAN RIVIERA FAYA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLE NOUVELLE IVOIRIENNE(ENI)",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE S. MARC",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Cocody",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE DESTIN ABOBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE HIRONDELLES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Abobo",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AMADOU HAMPATE BA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOVALIME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NANAN YEBOUA DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE RUBEN-KSI DE SONGON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Songon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JULES ET MARCELLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Yopougon",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KRAFFA ADAGRA SIKENSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AKANZA N'DOUCI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT MICHEL TIASSALE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FRATERNITÉ N'ZIANOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE SAINTE MARIE ELLIBOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE LES COURONNES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LA MEMOIRE DE MOROKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MARIE IMMACULEE DE TAABO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE SAINTE FAMILLE DE TAABO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AKONDA N'DOUCI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EUREKA SIKENSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ORIEUX N'DOUCI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HARMONY N'DOUCI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Tiassalé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT AMBROISE GRAND-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE AGBOVILLE COLLEGE AKA ETHIEN D'ABOUDE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LUMIERE AZAGUIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DECROLY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AGBOVILLE COLLEGE EYEMON NIANGORAN MICHEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AGBOVILLE COLLEGE JACQUES AKA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA REUSSITE AGBOVILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT MICHEL AZAGUIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE (TP AGBOVILLE COLLEGE EDEN AGBOVILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ATTE YAVO ALPHONSE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEAN PAUL 2 AGBOVILLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA PEDAGOGIE AZAGUIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES PROMUS D'AZAGUIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Agboville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE ST JOSEPH",
    "type": "Privé",
    "statut": "prive",
    "ville": "Touba",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINTE MARIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SINDOU DEMBELE KOUTO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE BOUNDIALI COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Boundiali",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANOUANZE DIDIEVI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT MICHEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE YAMOUSSOUKRO COLLEGE ENOC TIEBISSOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEAN DELAFOSSE TOUMODI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES DEMIURGES DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE A. N'DOVIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ESPERANCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE YAMOUSSOUKRO COLLÈGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ELITES DE TOUMODI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IBLO FOFANA TIENINGBOUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IBLO FOFANA MANKONO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JUAN CARLOS MANKONO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IBLO FOFANA KAGNENE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE DOH VALENTIN GUIGLO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT MICHEL TOULEPLEU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SEKALA GUIGLO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE LA REFERENCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE DEE-LEGNAN ZAGNE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PRIVVE COPRIG",
    "type": "Privé",
    "statut": "prive",
    "ville": "Guiglo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE SORO GUILLAUME KANIASSO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ALANI BEOUMI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HENRI POINCARE BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE YAMOUSSO MARIE-THERESE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ESPERANCE BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE KOUADIO GERMAIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MAMIE AYA N'GO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE BERGER 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IMES BROUKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES LILAS BLANCS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AKPOLE KOUADIO BOTRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IMES 2 BROUKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE L'AVENIR BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ADVENTISTE BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA MAISON DE BAMBI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE JOURDAIN BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES HEURES CLAIRES BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MOHAMED V",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT JACQUES BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VICTOR HUGO BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE RUTH FIDELE BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LAHA BROBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA PERFORMANCE BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AL FOURQANE 1 / BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AL FOURQANE 2 / BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BAPTISTE AEBECI DE BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BARAKAT BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE L'EMERGENCE/BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DAR EL HADISSE BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE FAMILLE BOUAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE D'EXCELLENCE ROSTAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaké",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE MARIE FRESCO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AHIRKO SASSANDRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ESDRAS SAGO /SASSANDRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE DJIBI SASSANDRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MARSEH",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT FRANCOIS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE ROGER",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DE LA PAIX GAGNOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DENIS DIDEROT OUME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ENFANT JESUS GAGNOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GREBALO DE GUIBEROUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT JEAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SIRIKI KONE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE YACOUBA SYLLA OUME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ZADY GAGNOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AKATI OUME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PYTHAGORE GAGNOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA SANGOUE DIEGONEFLA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA BONNE SEMENCE TAGO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE ADELINE BAYOTA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CHALLENGE OURAGAHIO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GRÂCE MARIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE APESDI DIEGONEFLA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LAGOTCHE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ASSOHO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE SAINT CHARLES DEKA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CHRIST ROI GAGNOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GEORGES MARCHAIS DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE VICTOIRE DE LA GRACE DIVINE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BAME DEDI GAGNOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PYTHAGORE 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PRIVÉ DIEUDONNÉ DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE ENTENTE GAGNOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ELITES OUME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE KESSIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE CLOTILDE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Gagnoa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE EXTENSION BONDOUKOU COLLEGE DUA KOBENAN BONDOUKOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HONORE DE BALZAC",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUVEP TANDA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NANAN ADOU KOFFI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUVEP TANKESSE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE MUNICIPAL BONDOUKOU COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MAMPO DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CYKRA TANDA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE RESIDENTIEL BONDOUKOU COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bondoukou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE MGR RENE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CHARLES DE FOUCAULD",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE JEAN MAMEN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JULES RONSARD DABOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE ENTENTE GRAND-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Grand Lahou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ANAFI DABOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EL ITRATOU TAHIRA GRAND-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Grand Lahou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE COMOLAH PETITS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Grand Lahou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE MARIE DABOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ELEVATION",
    "type": "Privé",
    "statut": "prive",
    "ville": "Jacqueville",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE NAYEBA DABOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT MATH-LEGRAND",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GUIDY DUEKOUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VIGNON DUÉKOUÉ",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PROFESSIONNEL DUEKOUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LEGBEDJI YAO JULES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE DUEKOUE COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT PIERRE DU GUEMOND",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE\nSCOLAIRE DE GUÉHIÉBLY (AGS)",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CONFESSIONNEL JEAN GLAO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TOURE MAMADOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Duékoué",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE( BELLE VILLE) DUEKOUE COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bangolo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ADESKA KATIOLA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE THOMAS D'ACQUIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ABDALLAH DABAKALA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANACARDIER DABAKALA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CAMARA POGABAHA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA NOUVELLE JERUSALEM DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT CHARLES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DIVINE PROVIDENCE ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EL ITRATOU TAHIRA ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GILBERT INABO ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GUIGUI CESAR GAZIBOUO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "LYCEE ISSIA COLLEGE JEAN XIII ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA METHODE ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PROFESSEUR ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE ROCHER ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LOUIS PASTEUR ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE SAINTE TRINITE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NEIL ARMSTRONG ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE OKAWA DE TEZIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE SOCIAL LES ANGES DE L",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE VENUS SAIOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE UNION ISSIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ZOUZOUKO PIERRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sassandra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE ESPERANCE DE BROKOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Issia",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE DES PROFESSEURS (COPROF)",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE ADJA SAFI DE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANTILOPE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE MGR KIRMANN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE PIERRE PANGO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT MARTIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DIETY DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DJORO GBOGUHE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DOUMBIA ISSIAKA VAVOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ELITE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FADIGA DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FLORILEGE DE TOROGUHE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE GOUATI / GADOUAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE INTERNATIONAL NSIT WORLD",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA COLOMBE DE LA PAIX DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA LOBO VAVOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA REUSSITE ZOUKOUGBEU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LEBORGETS / MIGNORE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LE MAJOR DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LE ROSIER DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE YAVE NISSI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LEON GONTRAN DAMAS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ARCHANGES DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LES ETOILES DU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE TOURE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NABIHY NOUHOUM",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NANAN AKOLOU PELEZI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE NOTRE DAME DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PIERRE MENDES DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PRINCIPAL DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE DALOA COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PROTESTANT 2 FRANCOIS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT EMILE VAVOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SUISSE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE TOUALY BAZRA NATIS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE ZIADEMAN ST BERTIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COURS SECONDAIRE PROTESTANT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE LES BAMBINOS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE GABRIEL BLEDE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE K. GBLAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE LE LABELLE VAVOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES ANGES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MICRO-MEDIA FORMATION",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE JEAN CALVIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES PILIERS DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DES AMIS DE ZAIBO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE FLORA DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE MERITE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ELITES ZOUKOUGBEU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PRVIVE SENEVE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AWANE DE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LES HEROS DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AWAWANE DE ZEPREGUHE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LAGOPAGNOU DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE SEGUE DE GREGBEU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA REFERENCE DE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES VAINQUEURS KOUHON DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE OLYMPE DE DALOA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FRANO-BELGE D'AMARA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LES WINNERS DE MONOKO-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Daloa",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE HAVILA DAOUKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ASCENSION DAOUKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ASSA M'BAHIAKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ETRAMPHET OUELLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE N'SIFLOUWA DAOUKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LE PRIVILEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MOUAHE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ISMA PRIKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ABOUBAKAR SIDIK DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE DAOUKRO COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA REFERENCE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CATHOLIQUE KIRMANN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE AMOIKON DIHYE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME DE TOUTES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT JOSEPH ABENGOUROU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ROYAL INDENIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA MATRICE AGNIBILEKROU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AL FOURQUANE 3",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE NANAN ATTA ANO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE NANAN ANOH 2 ANIASSUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE-RESIDENTIEL ABENGOUROU COLLEGE NOTRE DAME DE L'INDENIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NANAN AGNINI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DES PROFESSEURS NIABLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE RESIDENTIEL ABENGOUROU COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abengourou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE ET TECHNIQUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MAMADOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Odienné",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE ACQUET LAMBERT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANGBA GNAMIEN YAKASSE-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ATSE YAPI JOSEPH (EX. NESPA)",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE ADZOPE COLLEGE DAR AL HADISS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ERNEST LEGRAND AFFERY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE FANON DE BACON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE GEORGES MARCHAND",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LES TCHOYA ADZOPE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE N'KOUAN AKOUPE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT SAUVEUR MEMNI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE UFFONZE AFFERY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE LA BONNE SEMENCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE D'ENSEIGNEMENT GENERAL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE D'ORIENTATION LE JOURDAIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ALE AHIN YAKASSE-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ASSEUBI AFFERY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AHIANOT LAKOTA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DE L'AMITIE HIRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Plateau",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EHOULE JAMES DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ISSA TRAORE DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE RACINE DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE SAINTE ANNE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINTS PIERRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AMIGNON DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE RENOUVEAU LAKOTA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ASSAKRA GUITRY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRES ELITES DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE VICTOR LOBA'D DALIGOULILIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT-JEAN DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE EL MAJIDE KONATE LAKOTA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA SORBONE TETI FAUSTIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES PERLES LAKOTA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE DU DJIBOUA DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DIVINE FAMILLE DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MAFATHID DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE RAPHA DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE JOUR DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES BENOITS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ADVENTISTE DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AKONDA DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE BON BERGER DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUPES HIRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE LEBE LAKOTA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE L'INTELLIGENT DIVO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DEGRE LAKOTA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE SOLIDARITE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Divo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE HKB SINFRA COLLEGE SAINTE HENRIETTE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EL ITRATOU TAHIRA 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE REFERENCE CORES SINFRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME SINFRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE FRATERNITE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES LAURIERS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BARADJI BAMA SINFRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Sinfra",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANDRE LE ROY",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BIA BOUAFLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINTE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CETRY (EX RABE) ZUENOULA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FADIGA BOUAFLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KANTE DONDO ZUENOULA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA MARAHOUE BONON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA REFERENCE BONON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE EXCELLENCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Garçons",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE PHOENIX DE LA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME DU BANDAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE OLYMPE ZUENOULA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT RAPHAEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE SAVOIR",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SIAKA CAMBERIBA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT PATRICE GARANGO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LES ROCHERS BONON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA CONCORDE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES FRERES JUMEAUX",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA BONNE ETOILE 3 BONON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JUAN CARLOS2 GOHITAFLA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IMANE ZUENOULA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ABONDANCE BEGBESSOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LES CACTUS BONON",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bouaflé",
    "commune": "",
    "regime": "Garçons",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ABOUSSOUAN BONGOUANOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DE KOUADIO DE M'BATTO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HOUPHOUET FAITAI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PAUL VI ARRAH",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LA MEMOIRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ALPHONSE ALLIRAND",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EMMAUS BONGOUANOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AVE MARIA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE PAUL VI D'ANDE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE UNITE ANOUMABA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE NOTRE DAME DU SECOURS 3",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NANAN EBA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE DE KOUADIO 2 DE M'BATTO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PAUL VI BROU-AKPAOUSSOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE ESPOIR DU MORONOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GASTON ANGBONON DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Bongouanou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GBAO SEBO DE MEAGUI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LEON GUEFFIE DE SOUBRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NAWA DE SOUBRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE DOZO DE SOUBRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE MARIE KORE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA FONTAINE DE MEAGUI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LE SAINT DES SAINTS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE ASSEMBLÉE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ANGE MICKAEL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE AHINTYE LES 3I DE MEAGUI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EL ITRATOU TAHIRA DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE MILLIA DE MEAGUI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE ESPOIR DE L'ECOLE IVOIRE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LIBOH DE BUYO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE DES ASSEMBLEES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE NAPPEH LES LUMIERES DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE RABE YAO GUEYO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HARRIS MEMEL FOTE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MUEFI DE SOUBRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINT ANDRE DE BUYO DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE SAINT DES SAINTS DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE ASSEMBLEE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE HOPE NISSI DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE EXCELLENCE SOUBRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BEAKOU SOPHIE ZADOU DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA BONNE ETOILE DE MEAGUI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA BONNE ETOILE SOUBRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MARKANGE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE ACADEMIE LG GUEYO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE BONNE ETOILE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Soubré",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KOFFI ACKANT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA PROVIDENCE DIMBOKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE N'ZI COMOE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE ROUTE DE DIMBOKRO COLLEGE BOKPLI BOCANDA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE CHALLENGE DIMBOKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ESPERANCE DIMBOKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PRESTIGE BOCANDA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT JOSEPH",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA BENEDICTION DIMBOKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA NOUVELLE ALLIANCE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CHRIST-ROI DE DIMBOKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ARCHANGE DE KOUASSI-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE MARCELLIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE DON BOSCO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KIMOU M'BRA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GUESSONGUILE PAUL-MARIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEAN DE LA FONTAINE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BAPTISTE AEBECI DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BETHLEEM 2 TEGUERE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BETHLEEM 3 KASSIRIME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BETHLEEM KORHOGO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SONA HABIB DE KORHOGO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE BONHEUR DE NAPIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE EXTENSION KORHOGO COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE COULIBALY SONA HABIB",
    "type": "Privé",
    "statut": "prive",
    "ville": "Korhogo",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GBAO SAN PEDRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA RUCHE SAN PEDRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LES LUTINS",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LA FAYETTE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ARNAUD TABOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE SUCCES DE TABOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Port Bouet",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PEPE BLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ABROU BOGA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Adjame",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT-PIERRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DAR EL HADIS",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DJÔRO DE GABIADJI",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE DAGADJI",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LEROM DE PARA",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE DJOBLE CYPRIEN",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE CLAIRE ANGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE LES SIRENES",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CHRIST ROI",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE MELIN SERAPHINE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE ASSEMBLEES DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ATLANTIQUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE CLASSIQUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE AL GHADIR",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA RUCHE SEWEKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ELUS",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLE SAN-PEDRO COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE L'ARCHE DE NOE",
    "type": "Privé",
    "statut": "prive",
    "ville": "San Pedro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE PATRONAGE MGR PAUL",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LEON ROBERT DE GRAND-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME DE SAINT",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE RITA DE BONOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EDOUKOU MIEZAN DE GRAND-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CHRIST-ROI DE BONOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LES ETOILES DE SAMO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE EMMANUELLA ABIGAELLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE VHK DE BONOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE DES ENSEIGNANTS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GUY JOEL / N'ZIKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE LE MAGNIFICAT/AYAME",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE WHODJAS DE ASSINIE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANVO HOBA D'AFFIENOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE EMMANUEL DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA REUSSITE MAFERE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SAINTE MARIE ADIAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JESUS MARIE DE BONOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MUPRED ABOISSO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ISRAEL DE BONOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE INTERNATIONAL DES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EHIVET DE BONOUA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ALABA ADIAKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "ECOLE MONSEIGNEUR BLAISE ARNORD",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HAUTE ECOLE GALILEE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ABOUBAKAR SIDICK DE SAMO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE FRERE EHOUMAN VENANCE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Abidjan",
    "commune": "Koumassi",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE FIGUIER",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE ELEPHANT DE YAOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE ROCHER DES TEMPS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE PRIVÉ PROFESSIONNEL LES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MARIE THERESE DE SAMO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE CANAAN (GS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ALFA KEITA DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CHARLES LWANGA FERKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IFPG-FERKE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "GROUPE SCOLAIRE YEWELIBA DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE FERKESSEDOUGOU COLLEGE OMIENGNON DE NIELLE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLES YASSOUNGO DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Ferkessédougou",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BLON BLAISE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE EMILE OPERI DOMORAUD",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GUE PASCAL BIANKOUMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE JEAN DE LA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DIETY FELIX ( EX-ROUSSEAU)",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINT HENRI DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE CATHOLIQUE SAINTS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GUE PASCAL MAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE BONNE ESPERANCE ZOUAN-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DANIEL RICHARD SIPILOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE D'ENSEIGNEMENT SECOND.",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SIA ANDRE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE SUNGA DE GOGNAN MAN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FLAVY DANANE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "GROUPE SCOLAIRE DU CAVALLY DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE-CLUB MAN COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COURS SECONDAIRE LE PRESTIGE DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE MODERNE LA REFONDATION",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE FRANCOIS PERSON DE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "LYCEE - CLUB MAN COLLEGE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE DAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANDRE LEGRAND",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE D'EXCELLENCE NANDOWA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Man",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE WORODOUGOU SEGUELA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LES ELITES DE SEGUELA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE IVAB SEGUELA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Côte d'Ivoire",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ALBERT EINSTEIN",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANGE DOMINIQUE 1",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANGE DOMINIQUE 2 SOPIM",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ARCHIMEDE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ARIES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE GANDHI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE HELEIS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE JEUNES FILLES ATHENA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Filles",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KL DJEDRI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KONAN 1",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KONAN 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE KOUAKOU AURELIE 1",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LA FONTAINE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE BOIGNY DE KOSSOU",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LE PEDAGOGUE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE LEONARD DE VINCI DE BONZI",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE MAKINDE YAMOUSSOUKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "ECOLES MAKORA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NONIAMA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE NOTRE DAME DE LA",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME DES LACS 1",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE-DAME DES LACS 2",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE NOTRE DAME DE LOURDES",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE N'ZRAMA MAHOUNOU-",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Rural"
  },
  {
    "nom": "COLLEGE L'EXCELLENCE DES LACS",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ISCAE YAMOUSSOUKRO",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  },
  {
    "nom": "COLLEGE ANDRE MARIE AMPERE",
    "type": "Privé",
    "statut": "prive",
    "ville": "Yamoussoukro",
    "commune": "",
    "regime": "Mixte",
    "milieu": "Urbain"
  }
];

// Helper : filtrer par ville
function getEtabsByVille(ville) {
  return ETABLISSEMENTS_CI.filter(e => e.ville === ville);
}
// Helper : filtrer par type
function getEtabsByType(type) {
  return ETABLISSEMENTS_CI.filter(e => e.type === type);
}
// Helper : chercher par nom
function searchEtabs(q) {
  const ql = q.toLowerCase();
  return ETABLISSEMENTS_CI.filter(e => e.nom.toLowerCase().includes(ql) || e.ville.toLowerCase().includes(ql));
}
