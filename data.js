const scenariosImages = [
  "crise_2.jpeg",
  "renc_2.jpeg",
  "adm_2.jpeg"
  
];
const scenariosTitres = [
  "Gestion de crise",
  "Rencontres metropolitaines",
  "Assistance administrative"
];

const situationsImages = [
  ["crise_1_A.jpeg", "crise_2.jpeg", "crise_3.jpeg", "crise_4.jpeg"],
  ["renc_1_A.jpeg", "renc_2.jpeg", "renc_3.jpeg","adm_3.jpeg"],
  ["adm_1_A.jpeg", "adm_2.jpeg", "adm_3.jpeg", "adm_4.jpeg"]
];
const situationsTitres = [
  [
    "Hébergement d’urgence en cas de fortes chaleurs ",
    "Mise en place d’espaces fraicheur",
    "Infrastructure de communication",
    "Maintenir les transports"
  ],
  [
    "Planifier les stands et les trajets des agents",
    "Élaborer le guide d’entretien",
    "Analyse des données",
    "Formation à destination des agents"
  ],
  [
    "Compagnon administratif métropolitain",
    "Vérifier l'éligibilité de subventions",
    "Réunion d’arbitrage ",
    "Lutte contre la fraude"
  ],
];
const niveauxIAImages = [
  [
    ["crise_1_A.jpeg", "crise_1_B.jpeg", "crise_1_C.jpeg"],
    ["crise_1_A.jpeg", "crise_1_B.jpeg", "crise_1_C.jpeg"],
    ["crise_1_A.jpeg", "crise_1_B.jpeg", "crise_1_C.jpeg"],
    ["crise_1_A.jpeg", "crise_1_B.jpeg", "crise_1_C.jpeg"],
  ],
  [
    ["renc_1_A.jpeg", "renc_1_B.jpeg", "renc_1_C.jpeg"],
    ["renc_1_A.jpeg", "renc_1_B.jpeg", "renc_1_C.jpeg"],
    ["renc_1_A.jpeg", "renc_1_B.jpeg", "renc_1_C.jpeg"],
    ["renc_1_A.jpeg", "renc_1_B.jpeg", "renc_1_C.jpeg"],
  ],
  [
    ["adm_1_A.jpeg", "adm_1_B.jpeg", "adm_1_C.jpeg"],
    ["adm_1_A.jpeg", "adm_1_B.jpeg", "adm_1_C.jpeg"],
    ["adm_1_A.jpeg", "adm_1_B.jpeg", "adm_1_C.jpeg"],
    ["adm_1_A.jpeg", "adm_1_B.jpeg", "adm_1_C.jpeg"]
  ]
];

const legendesIA = [
  [
    ["<h1>Les agents arpentent la Métropole pour :</h1><ul><li>identifier les personnes à vulnérabilité climatique (PVC) ;</li><li>identifier les lieux pouvant les accueillir ;</li><li>négocier le placement des PVC.</li></ul>",
    "<h1>L’IA :</h1><ul><li>identifie les personnes à vulnérabilité climatique (PVC) ;</li><li>identifie les lieux pouvant les accueillir ;</li><li>“match” les PVC et les lieux.</li></ul><h1>Les agents :</h1><ul><li>vont sur le terrain pour négocier les décisions de l’IA ;</li><li>mettent à jour les données utilisées par l’IA en fonction des discussions qu’ils ont sur le terrain.</li></ul>",
    "<h1>L’IA :</h1><ul><li>fait une analyse des risques canicule dans la métropole ;</li><li>propose des aménagements fraîcheurs.</li></ul><h1>Les agents</h1><ul><li>collectent et nettoies les données nécessaires à l’IA pour fonctionner.</li></ul>"],
    ["<h1>Les agents arpentent la Métropole pour :</h1><ul><li>identifier les personnes à vulnérabilité climatique (PVC) ;</li><li>identifier les lieux pouvant les accueillir ;</li><li>négocier le placement des PVC.</li></ul>",
    "<h1>L’IA :</h1><ul><li>identifie les personnes à vulnérabilité climatique (PVC) ;</li><li>identifie les lieux pouvant les accueillir ;</li><li>“match” les PVC et les lieux.</li></ul><h1>Les agents :</h1><ul><li>vont sur le terrain pour négocier les décisions de l’IA ;</li><li>mettent à jour les données utilisées par l’IA en fonction des discussions qu’ils ont sur le terrain.</li></ul>",
    "<h1>L’IA :</h1><ul><li>fait une analyse des risques canicule dans la métropole ;</li><li>propose des aménagements fraîcheurs.</li></ul><h1>Les agents</h1><ul><li>collectent et nettoies les données nécessaires à l’IA pour fonctionner.</li></ul>"],
    ["<h1>Les agents arpentent la Métropole pour :</h1><ul><li>identifier les personnes à vulnérabilité climatique (PVC) ;</li><li>identifier les lieux pouvant les accueillir ;</li><li>négocier le placement des PVC.</li></ul>",
    "<h1>L’IA :</h1><ul><li>identifie les personnes à vulnérabilité climatique (PVC) ;</li><li>identifie les lieux pouvant les accueillir ;</li><li>“match” les PVC et les lieux.</li></ul><h1>Les agents :</h1><ul><li>vont sur le terrain pour négocier les décisions de l’IA ;</li><li>mettent à jour les données utilisées par l’IA en fonction des discussions qu’ils ont sur le terrain.</li></ul>",
    "<h1>L’IA :</h1><ul><li>fait une analyse des risques canicule dans la métropole ;</li><li>propose des aménagements fraîcheurs.</li></ul><h1>Les agents</h1><ul><li>collectent et nettoies les données nécessaires à l’IA pour fonctionner.</li></ul>"],
    ["<h1>Les agents arpentent la Métropole pour :</h1><ul><li>identifier les personnes à vulnérabilité climatique (PVC) ;</li><li>identifier les lieux pouvant les accueillir ;</li><li>négocier le placement des PVC.</li></ul>",
    "<h1>L’IA :</h1><ul><li>identifie les personnes à vulnérabilité climatique (PVC) ;</li><li>identifie les lieux pouvant les accueillir ;</li><li>“match” les PVC et les lieux.</li></ul><h1>Les agents :</h1><ul><li>vont sur le terrain pour négocier les décisions de l’IA ;</li><li>mettent à jour les données utilisées par l’IA en fonction des discussions qu’ils ont sur le terrain.</li></ul>",
    "<h1>L’IA :</h1><ul><li>fait une analyse des risques canicule dans la métropole ;</li><li>propose des aménagements fraîcheurs.</li></ul><h1>Les agents</h1><ul><li>collectent et nettoies les données nécessaires à l’IA pour fonctionner.</li></ul>"]
  ],
  [
    ["<h1>Les agents :</h1><ul><li>identifient des lieux où déployer les stands ;</li><li>créent manuellement des feuilles de route pour 400 agents.</li></ul>",
    "<h1>L’IA :</h1><ul><li>créée les feuilles de route.</li></ul><h1>Les agents :</h1><ul><li>identifient des lieux où déployer les stands ;</li><li>définissent des critères pour la création de feuille de route ;</li><li>gèrent les potentiels retours sur les feuilles de route.</li></ul>",
    "<h1>L’IA :</h1><ul><li>génère des propositions pour l’emplacement des stands ; </li><li>créée automatiquement les feuilles de route. </li></ul><h1>Les agents</h1><ul><li>font des simulations pour l’emplacement des stands ;</li><li>gèrent les potentiels retours sur les feuilles de route.</li></ul>"],
    ["<h1>Les agents :</h1><ul><li>identifient des lieux où déployer les stands ;</li><li>créent manuellement des feuilles de route pour 400 agents.</li></ul>",
    "<h1>L’IA :</h1><ul><li>créé les feuilles de route.</li></ul><h1>Les agents :</h1><ul><li>identifient des lieux où déployer les stands ;</li><li>définissent des critères pour la création de feuille de route ;</li><li>gèrent les potentiels retours sur les feuilles de route.</li></ul>",
    "<h1>L’IA :</h1><ul><li>génère des propositions pour l’emplacement des stands ; </li><li>créée automatiquement les feuilles de route. </li></ul><h1>Les agents</h1><ul><li>font des simulations pour l’emplacement des stands ;</li><li>gèrent les potentiels retours sur les feuilles de route.</li></ul>"],
    ["<h1>Les agents :</h1><ul><li>identifient des lieux où déployer les stands ;</li><li>créent manuellement des feuilles de route pour 400 agents.</li></ul>",
    "<h1>L’IA :</h1><ul><li>créé les feuilles de route.</li></ul><h1>Les agents :</h1><ul><li>identifient des lieux où déployer les stands ;</li><li>définissent des critères pour la création de feuille de route ;</li><li>gèrent les potentiels retours sur les feuilles de route.</li></ul>",
    "<h1>L’IA :</h1><ul><li>génère des propositions pour l’emplacement des stands ; </li><li>créée automatiquement les feuilles de route. </li></ul><h1>Les agents</h1><ul><li>font des simulations pour l’emplacement des stands ;</li><li>gèrent les potentiels retours sur les feuilles de route.</li></ul>"],
    ["<h1>Les agents :</h1><ul><li>identifient des lieux où déployer les stands ;</li><li>créent manuellement des feuilles de route pour 400 agents.</li></ul>",
    "<h1>L’IA :</h1><ul><li>créé les feuilles de route.</li></ul><h1>Les agents :</h1><ul><li>identifient des lieux où déployer les stands ;</li><li>définissent des critères pour la création de feuille de route ;</li><li>gèrent les potentiels retours sur les feuilles de route.</li></ul>",
    "<h1>L’IA :</h1><ul><li>génère des propositions pour l’emplacement des stands ; </li><li>créée automatiquement les feuilles de route. </li></ul><h1>Les agents</h1><ul><li>font des simulations pour l’emplacement des stands ;</li><li>gèrent les potentiels retours sur les feuilles de route.</li></ul>"],
  ],
  [
    ["<h1>Les agents :</h1><ul><li>lisent des dossiers de subvention ;</li><li>analysent manuellement les dossiers ;</li><li>créent une fiche de décision pour délibération.</li></ul>",
    "<h1>L’IA :</h1><ul><li>extrait et analyse des éléments sélectionnés au-travers des différents documents composants le dossier.</li></ul><h1>Les agents :</h1><ul><li>lisent des dossiers ;</li><li>annotent de façon augmentée les documents ;</li><li>créent une fiche de décision pour délibération. </li></ul>",
    "<h1>L’IA :</h1><ul><li>analyse automatiquement les dossiers de subvention ;</li><li>attribue un score de risque ;</li><li>génère la fiche de décision pour délibération.</li></ul><h1>Les agents</h1><ul><li>Prennent connaissance de l’analyse de l’IA;</li><li>Décident de l’envoi du dossier en délibération en se basant sur le score de risque.</li></ul>"],
    ["<h1>Les agents :</h1><ul><li>lisent des dossiers de subvention ;</li><li>analysent manuellement les dossiers ;</li><li>créent une fiche de décision pour délibération.</li></ul>",
    "<h1>L’IA :</h1><ul><li>extrait et analyse des éléments sélectionnés au-travers des différents documents composants le dossier.</li></ul><h1>Les agents :</h1><ul><li>lisent des dossiers ;</li><li>annotent de façon augmentée les documents ;</li><li>créent une fiche de décision pour délibération. </li></ul>",
    "<h1>L’IA :</h1><ul><li>analyse automatiquement les dossiers de subvention ;</li><li>attribue un score de risque ;</li><li>génère la fiche de décision pour délibération.</li></ul><h1>Les agents</h1><ul><li>Prennent connaissance de l’analyse de l’IA;</li><li>Décident de l’envoi du dossier en délibération en se basant sur le score de risque.</li></ul>"],
    ["<h1>Les agents :</h1><ul><li>lisent des dossiers de subvention ;</li><li>analysent manuellement les dossiers ;</li><li>créent une fiche de décision pour délibération.</li></ul>",
    "<h1>L’IA :</h1><ul><li>extrait et analyse des éléments sélectionnés au-travers des différents documents composants le dossier.</li></ul><h1>Les agents :</h1><ul><li>lisent des dossiers ;</li><li>annotent de façon augmentée les documents ;</li><li>créent une fiche de décision pour délibération. </li></ul>",
    "<h1>L’IA :</h1><ul><li>analyse automatiquement les dossiers de subvention ;</li><li>attribue un score de risque ;</li><li>génère la fiche de décision pour délibération.</li></ul><h1>Les agents</h1><ul><li>Prennent connaissance de l’analyse de l’IA;</li><li>Décident de l’envoi du dossier en délibération en se basant sur le score de risque.</li></ul>"],
    ["<h1>Les agents :</h1><ul><li>lisent des dossiers de subvention ;</li><li>analysent manuellement les dossiers ;</li><li>créent une fiche de décision pour délibération.</li></ul>",
    "<h1>L’IA :</h1><ul><li>extrait et analyse des éléments sélectionnés au-travers des différents documents composants le dossier.</li></ul><h1>Les agents :</h1><ul><li>lisent des dossiers ;</li><li>annotent de façon augmentée les documents ;</li><li>créent une fiche de décision pour délibération. </li></ul>",
    "<h1>L’IA :</h1><ul><li>analyse automatiquement les dossiers de subvention ;</li><li>attribue un score de risque ;</li><li>génère la fiche de décision pour délibération.</li></ul><h1>Les agents</h1><ul><li>Prennent connaissance de l’analyse de l’IA;</li><li>Décident de l’envoi du dossier en délibération en se basant sur le score de risque.</li></ul>"]
  ]
]
