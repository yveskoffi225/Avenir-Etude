/**
 * ============================================================
 *  AVENIR ÉTUDE — BASE DE DONNÉES CONTENU ÉDITORIAL
 *  Fichier : contenu-data.js
 *  Dernière mise à jour : Mars 2026
 *  Sources : DECO men-deco.org - MESRS - AIP - Abidjan.net
 * ============================================================
 * POUR AJOUTER UN ARTICLE : copie un bloc dans ARTICLES_DATA,
 * colle-le en haut du tableau, remplis, sauvegarde.
 * POUR AJOUTER UN CONCOURS : même chose dans CONCOURS_DATA.
 * Dates : format YYYY-MM-DD
 * ============================================================
 */

const ARTICLES_DATA = [
  {
    id: "art-001",
    titre: "BAC 2026 en Côte d'Ivoire : calendrier officiel complet",
    categorie: "Examens",
    date: "2026-03-01",
    auteur: "Équipe Avenir Étude",
    image_emoji: "🎓",
    resume: "Les dates officielles du BAC 2026 sont connues. Épreuves écrites du 15 au 19 juin, résultats le 6 juillet à 14h sur men-deco.org. Tout ce que les candidats doivent savoir pour réussir.",
    contenu: `Calendrier BAC 2026 - EPS : 27 avril au 8 mai. Oraux Technique : 2-13 juin. Oraux Général : 9-13 juin. Écrits : 15-19 juin. Résultats : 6 juillet à 14h sur men-deco.org.

**Seuil de réussite**
- BAC Général et Artistique : 200 points sur 400
- BAC Technique : 240 points sur 480

**BAC 2025 en chiffres**
40,15% de réussite. 133 518 admis sur 332 515 candidats présents. En hausse de 5,98 points par rapport à 2024 (34,17%).`,
    tags: ["BAC", "BAC 2026", "Examens", "DECO"],
    une: true,
    source: "DECO / men-deco.org - yessouan.ci - Mars 2026"
  },
  {
    id: "art-002",
    titre: "BAC 2025 : 40,15% de réussite, en hausse de 6 points",
    categorie: "Examens",
    date: "2025-07-07",
    auteur: "Équipe Avenir Étude",
    image_emoji: "📋",
    resume: "Sur 332 515 candidats présents, 133 518 ont été admis — soit 40,15%. Progression de 5,98 points par rapport à 2024. Résultats proclamés le 7 juillet 2025 sur men-deco.org.",
    contenu: `Résultats officiels BAC 2025 proclamés le 7 juillet 2025 par la Directrice DECO Mme Diarra Kadidiata Badji.

**Chiffres officiels**
- Candidats présents : 332 515 (546 centres, 41 Directions régionales)
- Admis : 133 518
- Taux national : 40,15% (vs 34,17% en 2024, soit +5,98 points)
- Filles : 68 883 admises — taux 41,24%
- Garçons : 64 635 admis — taux 39,06%

**Démarches post-résultats**
Réclamations : 8 au 10 juillet (gratuites). Jurys spéciaux : 11 juillet à 14h. Retrait relevés dans les centres avec convocation + pièce d'identité. Toutes démarches gratuites.`,
    tags: ["BAC 2025", "Résultats", "DECO", "Taux réussite"],
    une: true,
    source: "DECO / Abidjan.net / KOACI — 7 juillet 2025"
  },
  {
    id: "art-003",
    titre: "BEPC 2025 : 51,41% de réussite — hausse record de 11 points",
    categorie: "Examens",
    date: "2025-06-17",
    auteur: "Équipe Avenir Étude",
    image_emoji: "📚",
    resume: "312 041 candidats admis sur 606 922 présents dans 1 006 centres. Taux de 51,41%, hausse historique de 11,23 points par rapport à 2024. Résultats sur men-deco.org.",
    contenu: `Proclamation officielle le 17 juin 2025 par la Directrice DECO Mme Diarra Kadidiata Badji.

**Chiffres officiels BEPC 2025**
- Candidats présents : 606 922 (1 006 centres, 41 directions)
- Admis : 312 041
- Taux national : 51,41% (vs 40,18% en 2024, soit +11,23 points)
- Filles : 160 967 admises sur 315 609 présentes — taux 51%
- Garçons : 151 074 admis sur 291 313 présents — taux 51,86%

**BEPC 2026**
Épreuves écrites : 26 au 29 mai 2026. Résultats : 16 juin 2026 à 14h00.`,
    tags: ["BEPC", "BEPC 2025", "Résultats", "DECO"],
    une: true,
    source: "DECO / AIP / Abidjan.net — 17 juin 2025"
  },
  {
    id: "art-004",
    titre: "Concours ESATIC 2026 : préinscriptions ouvertes sur concours.esatic.ci",
    categorie: "Concours",
    date: "2026-02-25",
    auteur: "Équipe Avenir Étude",
    image_emoji: "💻",
    resume: "Préinscriptions ESATIC 2026 ouvertes depuis le 20 février. Dépôt dossiers du 10 mars au 15 mai. Épreuves du 3 au 5 juin. Résultats le 26 juin. École quasi-gratuite.",
    contenu: `L'ESATIC forme les ingénieurs du numérique ivoirien. Scolarité quasi-gratuite.

**Calendrier ESATIC 2026**
- Préinscriptions : depuis 20 février sur concours.esatic.ci
- Date limite : 8 mai 2026
- Dépôt dossiers physiques : 10 mars au 15 mai
- Épreuves cycle ingénieur : 3 au 5 juin 2026
- Résultats : 26 juin 2026

**Pourquoi l'ESATIC ?**
Frais d'inscription : 10 000 FCFA seulement. Scolarité prise en charge par l'État. Logement à 3 500 FCFA/mois. 100 places en Licence. Taux d'insertion 90%. Filières : Informatique, Télécom, Cybersécurité.`,
    tags: ["ESATIC", "Concours 2026", "Informatique", "Inscription"],
    une: true,
    source: "concours.esatic.ci / ouestin.com — Février 2026"
  },
  {
    id: "art-005",
    titre: "INP-HB 2026 : inscriptions ouvertes depuis le 23 février",
    categorie: "Concours",
    date: "2026-02-23",
    auteur: "Équipe Avenir Étude",
    image_emoji: "🏗️",
    resume: "Le concours ingénieurs INP-HB 2026 est lancé. 4 filières : Commerce, Génie industriel, Génie civil, Agronomie. Préinscription sur ings.concours.inphb.app. Max 25 ans.",
    contenu: `L'INP-HB a lancé son concours ingénieurs 2026 le 23 février depuis Yamoussoukro.

**4 filières ouvertes**
1. Commerce et Administration (ESCAE)
2. Génie Industriel et Numérique (ESI)
3. Génie Civil et Naval (ESTP)
4. Agronomie, Géo-Sciences et Génie des Procédés (ESEA/ESMG)

**Conditions**
- Maximum 25 ans au 31 décembre 2026 — aucune dérogation
- BAC C, D, E, F2 ou CPGE
- Préinscription sur ings.concours.inphb.app

**Avantage majeur**
Scolarité entièrement gratuite. Taux d'insertion 100%. Diplôme reconnu internationalement.`,
    tags: ["INP-HB", "Concours 2026", "Ingénierie", "Yamoussoukro"],
    une: false,
    source: "inphb.ci / yessouan.ci — Février 2026"
  },
  {
    id: "art-006",
    titre: "ENSEA 2026 : concours ISE et AS — inscriptions clôturées",
    categorie: "Concours",
    date: "2025-12-16",
    auteur: "Équipe Avenir Étude",
    image_emoji: "📊",
    resume: "L'ENSEA a ouvert ses concours ISE et AS 2026. Clôture AS : 6 février 2026. Clôture ISE : 31 janvier 2026. Épreuves en avril. Un candidat ne peut se présenter plus de 3 fois.",
    contenu: `L'ENSEA est le Centre d'Excellence Banque Mondiale pour la statistique en Afrique francophone.

**Calendrier ENSEA 2026**
- Clôture ISE : 31 janvier 2026
- Clôture AS : 6 février 2026
- Épreuves ISE cycle long/AS : 7-8 avril 2026
- Épreuves ISE : 9-10 avril 2026

**Matières**
Mathématiques coeff. 5 — Physique coeff. 3 — Français coeff. 2 — Culture générale coeff. 1.

**Règle importante**
Maximum 3 tentatives au concours. Taux d'admission : environ 8%.`,
    tags: ["ENSEA", "Concours 2026", "Statistique", "Data Science"],
    une: false,
    source: "capesa.ensai.fr / ensea.ed.ci — Décembre 2025"
  },
  {
    id: "art-007",
    titre: "ENA 2027 CI : 600 places, inscriptions du 16 mars au 30 avril 2026",
    categorie: "Concours",
    date: "2026-03-11",
    auteur: "Équipe Avenir Étude",
    image_emoji: "🏛️",
    resume: "L'ENA ouvre 600 places pour 6 concours (3 directs + 3 professionnels). Inscriptions sur fonctionpublique.gouv.ci du 16 mars au 30 avril. Épreuves du 24 juin au 2 juillet.",
    contenu: `La Ministre de la Fonction Publique Anne Désirée Ouloto Lamizana a annoncé les concours administratifs 2026.

**ENA 2027 en chiffres**
600 places — 6 concours — 3 cycles : Moyen, Moyen Supérieur, Supérieur.

**Calendrier**
- Inscriptions : 16 mars au 30 avril 2026 sur fonctionpublique.gouv.ci / ena.ci
- Cycle Supérieur : 24-26 juin
- Cycle Moyen Supérieur : 29-30 juin
- Cycle Moyen : 2 juillet
- Résultats directs : 31 juillet 2026

**Attention arnaque**
La Ministre prévient : aucune personne ne peut garantir la réussite. Méfiez-vous des intermédiaires.`,
    tags: ["ENA", "Concours administratifs", "Fonction publique", "2026"],
    une: false,
    source: "affairage.ci / yessouan.ci — Mars 2026"
  },
  {
    id: "art-008",
    titre: "BTS 2026 CI : épreuves écrites du 20 au 25 juillet, résultats le 20 août",
    categorie: "Examens",
    date: "2026-03-05",
    auteur: "Équipe Avenir Étude",
    image_emoji: "📑",
    resume: "La DEXCO a publié le calendrier officiel du BTS 2026. Soutenances en avril, écrits du 20 au 25 juillet, pratiques du 27 au 31 juillet. Résultats définitifs le 20 août à 14h.",
    contenu: `La Direction des Examens et Concours de l'Enseignement Supérieur (DEXCO) a publié le chronogramme BTS 2026.

**Calendrier BTS 2026**
- Soutenances de stage : 7-10 avril 2026
- Épreuves écrites : 20-25 juillet 2026
- Épreuves pratiques : 27-31 juillet 2026
- Résultats définitifs : 20 août 2026 à 14h00
- Jury spécial réclamations : 27 août 2026

**BTS 2025 : taux de réussite 40,48%**`,
    tags: ["BTS", "BTS 2026", "Examens", "DEXCO"],
    une: false,
    source: "yessouan.ci / DEXCO — Mars 2026"
  },
  {
    id: "art-009",
    titre: "Quelle filière choisir avec une série D en Côte d'Ivoire ?",
    categorie: "Orientation",
    date: "2026-01-20",
    auteur: "Équipe Avenir Étude",
    image_emoji: "🎯",
    resume: "La série D ouvre de nombreuses portes : médecine, ingénierie, agronomie, statistique. Voici les meilleures filières, écoles et conseils selon votre profil réel.",
    contenu: `La série D (Sciences Naturelles) est l'une des séries les plus polyvalentes du système éducatif ivoirien.

**Filières accessibles avec le BAC D**
Sciences & Médecine : Médecine/Pharmacie UFHB, Sciences de la Nature, Biochimie.
Grandes écoles gratuites : INP-HB (toutes écoles), ESATIC (avec dossier solide), ENSEA.
Économie & Gestion : toutes universités, HEC Abidjan.
Agronomie : ESEA à l'INP-HB — très porteur (CI = 1er producteur mondial de cacao).

**Notre conseil**
Avec mention Bien ou Très Bien, visez l'ENSEA, l'ESATIC ou l'INP-HB en priorité. Ce sont des écoles gratuites avec un taux d'insertion proche de 100%.

Passez le test Avenir Étude pour identifier vos aptitudes réelles au-delà de votre série.`,
    tags: ["Série D", "Orientation", "Filières", "BAC"],
    une: false,
    source: "Avenir Étude / MESRS"
  },
  {
    id: "art-010",
    titre: "Top 10 des métiers les plus demandés en Côte d'Ivoire en 2026",
    categorie: "Filières",
    date: "2026-02-10",
    auteur: "Équipe Avenir Étude",
    image_emoji: "💼",
    resume: "Data science, BTP, santé, finance, agrobusiness... Voici les secteurs qui recrutent massivement en CI et les formations qui y mènent avec les salaires débutants.",
    contenu: `La CI connaît une croissance de +6% par an, créant de nombreuses opportunités.

1. TIC & Data Science — Salaire débutant : 300-500k FCFA. Formation : ESATIC, ENSEA, INP-HB.
2. BTP & Génie Civil — Métro, autoroutes, ponts. Formation : INP-HB/ESTP. Débutant : 400-600k.
3. Finance & Audit — Secteur bancaire en expansion. HEC Abidjan, DSCG. Débutant : 350-600k.
4. Santé — Déficit chronique de médecins et pharmaciens. UFHB. Débutant : 300-500k.
5. Agronomie & Agrobusiness — CI = 1er producteur mondial de cacao. INP-HB/ESEA.
6. Logistique & Port — Port d'Abidjan : 1er port à conteneurs d'Afrique de l'Ouest.
7. Télécommunications — Orange, MTN, Moov en expansion. ESATIC, INP-HB.
8. Enseignement — Recrutements massifs dans le public. Emploi garanti.
9. Énergie & Environnement — Secteur émergent, énergies renouvelables.
10. Droit des Affaires — Pour les entreprises étrangères. Salaires parmi les plus élevés.`,
    tags: ["Métiers", "Emploi", "Marché travail", "CI 2026"],
    une: false,
    source: "Avenir Étude / Agence Emploi Jeunes CI / BNETD"
  }
];

const CONCOURS_DATA = [
  {
    id: "co-001",
    nom: "Concours ESATIC 2026",
    ecole: "École Supérieure Africaine des TIC",
    acronyme: "ESATIC",
    ville: "Abidjan (Treichville)",
    type: "Grande École Publique",
    date_ouverture: "2026-02-20",
    date_cloture: "2026-05-08",
    date_epreuves: "2026-06-03",
    date_resultats: "2026-06-26",
    places: 100,
    series_requises: ["A", "C", "D", "E", "F2"],
    niveau_requis: "BAC",
    frais_dossier: "5000",
    matieres: ["Mathématiques (coeff. 5)", "Physique (coeff. 3)", "Informatique (coeff. 3)", "Français (coeff. 1)"],
    difficulte: "Très difficile",
    taux_admission: 4,
    debouches: "Développeur, Ingénieur Réseaux, Cybersécurité, Chef de Projet IT",
    salaire_debutant: "350000",
    site_officiel: "concours.esatic.ci",
    gratuit: true,
    emoji: "💻",
    actif: true
  },
  {
    id: "co-002",
    nom: "Concours ingénieurs INP-HB 2026",
    ecole: "Institut National Polytechnique FHB",
    acronyme: "INP-HB",
    ville: "Yamoussoukro",
    type: "Grande École Publique",
    date_ouverture: "2026-02-23",
    date_cloture: "2026-04-30",
    date_epreuves: "2026-05-15",
    date_resultats: "2026-06-10",
    places: 800,
    series_requises: ["C", "D", "E", "F2"],
    niveau_requis: "BAC — max 25 ans au 31/12/2026",
    frais_dossier: "15000",
    matieres: ["Mathématiques (coeff. 6)", "Physique-Chimie (coeff. 4)", "Sciences ingénieur (coeff. 2)", "Français (coeff. 1)"],
    difficulte: "Très difficile",
    taux_admission: 5,
    debouches: "Ingénieur Civil, Ingénieur Informatique, Agronome, Géologue",
    salaire_debutant: "450000",
    site_officiel: "ings.concours.inphb.app",
    gratuit: true,
    emoji: "🏗️",
    actif: true
  },
  {
    id: "co-003",
    nom: "Concours ENSEA 2026 — ISE & AS",
    ecole: "École Nationale Supérieure de Statistique",
    acronyme: "ENSEA",
    ville: "Abidjan (Cocody)",
    type: "Grande École Publique",
    date_ouverture: "2025-11-01",
    date_cloture: "2026-02-06",
    date_epreuves: "2026-04-07",
    date_resultats: "2026-05-10",
    places: 50,
    series_requises: ["C", "D"],
    niveau_requis: "BAC ou CPGE — max 3 tentatives",
    frais_dossier: "10000",
    matieres: ["Mathématiques (coeff. 5)", "Physique (coeff. 3)", "Français (coeff. 2)", "Culture générale (coeff. 1)"],
    difficulte: "Très difficile",
    taux_admission: 8,
    debouches: "Data Scientist, Statisticien, Actuaire, Économiste",
    salaire_debutant: "400000",
    site_officiel: "ensea.ed.ci",
    gratuit: true,
    emoji: "📊",
    actif: false
  },
  {
    id: "co-004",
    nom: "Concours ENA 2027",
    ecole: "École Nationale d'Administration",
    acronyme: "ENA",
    ville: "Abidjan",
    type: "Fonction Publique",
    date_ouverture: "2026-03-16",
    date_cloture: "2026-04-30",
    date_epreuves: "2026-06-24",
    date_resultats: "2026-07-31",
    places: 600,
    series_requises: ["A", "B", "C", "D"],
    niveau_requis: "Licence ou plus",
    frais_dossier: "0",
    matieres: ["Culture administrative (coeff. 4)", "Droit public (coeff. 3)", "Économie (coeff. 3)", "Français (coeff. 2)"],
    difficulte: "Difficile",
    taux_admission: 12,
    debouches: "Administrateur Civil, Sous-Préfet, Directeur administratif",
    salaire_debutant: "350000",
    site_officiel: "ena.ci",
    gratuit: false,
    emoji: "🏛️",
    actif: true
  },
  {
    id: "co-005",
    nom: "Concours CAFOP 2026",
    ecole: "Centre d'Animation et de Formation Pédagogique",
    acronyme: "CAFOP",
    ville: "National (plusieurs sites)",
    type: "Formation Publique",
    date_ouverture: "2025-12-01",
    date_cloture: "2026-02-13",
    date_epreuves: "2026-04-10",
    date_resultats: "2026-05-15",
    places: 3000,
    series_requises: ["A", "B", "C", "D"],
    niveau_requis: "BAC",
    frais_dossier: "5000",
    matieres: ["Français (coeff. 4)", "Mathématiques (coeff. 3)", "SVT (coeff. 2)", "Éducation civique (coeff. 1)"],
    difficulte: "Sélectif",
    taux_admission: 18,
    debouches: "Instituteur, Directeur d'école primaire, Inspecteur pédagogique",
    salaire_debutant: "200000",
    site_officiel: "cafop.men-deco.org",
    gratuit: true,
    emoji: "📖",
    actif: true
  },
  {
    id: "co-006",
    nom: "Concours Fonction Publique 2026 — 400+ postes",
    ecole: "Ministère de la Fonction Publique",
    acronyme: "MFPMA",
    ville: "National",
    type: "Fonction Publique",
    date_ouverture: "2026-03-16",
    date_cloture: "2026-04-30",
    date_epreuves: "2026-06-27",
    date_resultats: "2026-09-01",
    places: 423,
    series_requises: ["A", "B", "C", "D"],
    niveau_requis: "Selon concours — BAC à Master",
    frais_dossier: "0",
    matieres: ["Épreuve disciplinaire (coeff. 4)", "Culture générale (coeff. 3)", "Français (coeff. 2)"],
    difficulte: "Difficile",
    taux_admission: 15,
    debouches: "Fonctionnaire dans les ministères et services publics",
    salaire_debutant: "250000",
    site_officiel: "fonctionpublique.gouv.ci",
    gratuit: false,
    emoji: "⚖️",
    actif: true
  }
];

const CALENDRIER_DATA = [
  { date: "2026-03-05",  titre: "1er examen blanc CEPE 2026",                                     type: "examen",      icone: "✏️" },
  { date: "2026-03-16",  titre: "Ouverture inscriptions ENA 2027 et Fonction Publique 2026",       type: "concours",    icone: "🏛️" },
  { date: "2026-04-07",  titre: "Épreuves ENSEA 2026 — ISE cycle long / AS",                       type: "examen",      icone: "📊" },
  { date: "2026-04-10",  titre: "Épreuves concours CAFOP 2026",                                    type: "examen",      icone: "📖" },
  { date: "2026-04-11",  titre: "14ème MASA — Abidjan (festival arts et cultures)",                type: "salon",       icone: "🎭" },
  { date: "2026-04-27",  titre: "BAC 2026 — Début épreuves EPS",                                  type: "examen",      icone: "🏃" },
  { date: "2026-04-28",  titre: "2ème examen blanc CEPE 2026",                                     type: "examen",      icone: "✏️" },
  { date: "2026-04-30",  titre: "Clôture inscriptions ENA 2027 et Fonction Publique",              type: "inscription", icone: "✍️" },
  { date: "2026-05-08",  titre: "BAC 2026 — Fin épreuves EPS / Clôture ESATIC",                  type: "examen",      icone: "🏃" },
  { date: "2026-05-18",  titre: "CEPE 2026 — Épreuves officielles",                               type: "examen",      icone: "🏫" },
  { date: "2026-05-26",  titre: "BEPC 2026 — Début épreuves écrites",                             type: "examen",      icone: "📋" },
  { date: "2026-05-29",  titre: "BEPC 2026 — Fin épreuves écrites",                               type: "examen",      icone: "✅" },
  { date: "2026-06-01",  titre: "Résultats CEPE 2026",                                             type: "resultats",   icone: "🎉" },
  { date: "2026-06-02",  titre: "BAC 2026 — Début oraux Technique",                               type: "examen",      icone: "🎓" },
  { date: "2026-06-03",  titre: "ESATIC 2026 — Épreuves écrites",                                 type: "examen",      icone: "💻" },
  { date: "2026-06-09",  titre: "BAC 2026 — Début oraux Général",                                 type: "examen",      icone: "📚" },
  { date: "2026-06-13",  titre: "BAC 2026 — Fin de tous les oraux",                               type: "examen",      icone: "✅" },
  { date: "2026-06-15",  titre: "BAC 2026 — Début épreuves ÉCRITES (toutes séries)",              type: "examen",      icone: "✏️" },
  { date: "2026-06-16",  titre: "Résultats BEPC 2026 à 14h00 sur men-deco.org",                   type: "resultats",   icone: "🎉" },
  { date: "2026-06-19",  titre: "BAC 2026 — Fin des épreuves écrites",                            type: "examen",      icone: "✅" },
  { date: "2026-06-24",  titre: "Épreuves ENA 2027 — Cycle Supérieur",                            type: "concours",    icone: "🏛️" },
  { date: "2026-06-26",  titre: "Résultats concours ESATIC 2026",                                  type: "resultats",   icone: "🎉" },
  { date: "2026-06-27",  titre: "Épreuves Fonction Publique 2026 — 1ère session",                 type: "concours",    icone: "⚖️" },
  { date: "2026-07-06",  titre: "Résultats BAC 2026 à 14h00 sur men-deco.org",                    type: "resultats",   icone: "🎊" },
  { date: "2026-07-20",  titre: "BTS 2026 — Début épreuves écrites",                              type: "examen",      icone: "📑" },
  { date: "2026-07-20",  titre: "Ouverture inscriptions universités publiques (post-BAC)",         type: "inscription", icone: "✍️" },
  { date: "2026-07-31",  titre: "Résultats concours ENA 2027",                                     type: "resultats",   icone: "🎉" },
  { date: "2026-08-15",  titre: "Affectations universités publiques — post-BAC 2026",              type: "inscription", icone: "🏛️" },
  { date: "2026-08-20",  titre: "Résultats BTS 2026 à 14h00",                                     type: "resultats",   icone: "🎉" },
  { date: "2026-09-15",  titre: "Rentrée scolaire 2026-2027 (prévisionnelle)",                     type: "rentree",     icone: "🎒" },
  { date: "2026-10-01",  titre: "Rentrée universitaire 2026-2027 (prévisionnelle)",                type: "rentree",     icone: "🏛️" }
];

const STATS_DATA = {
  resume: "Données officielles DECO, MENA-CI, MESRS. Sessions 2025 publiées officiellement.",
  chiffres_cles: [
    { valeur: "1,566M",  label: "Candidats aux examens 2025 (CEPE + BEPC + BAC)", source: "DECO / CICG-CI — Mai 2025",     tendance: "hausse" },
    { valeur: "343k",    label: "Candidats au BAC 2025",                            source: "DECO — Juin 2025",              tendance: "hausse" },
    { valeur: "607k",    label: "Candidats au BEPC 2025",                           source: "DECO — Juin 2025",              tendance: "hausse" },
    { valeur: "40,15%",  label: "Taux de réussite BAC 2025",                        source: "DECO — 7 juillet 2025",         tendance: "hausse" },
    { valeur: "51,41%",  label: "Taux de réussite BEPC 2025",                       source: "DECO — 17 juin 2025",           tendance: "hausse" },
    { valeur: "86,58%",  label: "Taux de réussite CEPE 2025",                       source: "DECO — Juin 2025",              tendance: "hausse" },
    { valeur: "546",     label: "Centres d'examen BAC 2025 (41 directions)",       source: "DECO — 2025",                   tendance: "stable" },
    { valeur: "+6pts",   label: "Progression taux BAC 2024 → 2025",                 source: "DECO — 7 juillet 2025",         tendance: "hausse" }
  ],
  repartition_filieres: [
    { filiere: "Sciences Économiques & Gestion", pct: 32 },
    { filiere: "Droit & Sciences Politiques",    pct: 22 },
    { filiere: "Sciences & Technologies",        pct: 18 },
    { filiere: "Lettres & Sciences Humaines",    pct: 14 },
    { filiere: "Santé",                          pct: 8  },
    { filiere: "Autres",                         pct: 6  }
  ],
  taux_insertion_par_filiere: [
    { filiere: "Statistique / Data Science",    taux: 95 },
    { filiere: "Ingénierie / Grande École",     taux: 92 },
    { filiere: "Informatique / TIC",            taux: 87 },
    { filiere: "Médecine / Santé",              taux: 85 },
    { filiere: "Commerce / Management",         taux: 72 },
    { filiere: "Droit",                         taux: 58 },
    { filiere: "Lettres / Sciences Hum.",       taux: 42 }
  ],
  evolution_bac: [
    { annee: "2020", candidats: 258000, admis: 119700, taux: 46.4 },
    { annee: "2021", candidats: 271000, admis: 124300, taux: 45.9 },
    { annee: "2022", candidats: 289000, admis: 135400, taux: 46.8 },
    { annee: "2023", candidats: 305000, admis:  95900, taux: 31.4 },
    { annee: "2024", candidats: 343162, admis: 117266, taux: 34.2 },
    { annee: "2025", candidats: 332515, admis: 133518, taux: 40.2 }
  ],
  source_principale: "DECO (men-deco.org) · MENA-CI · MESRS · AIP · Abidjan.net",
  date_maj: "Mars 2026 — Données sessions 2025 officiellement publiées par la DECO"
};
