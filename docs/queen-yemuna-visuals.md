# Queen Yemuna — visuels individuels

Les 157 références conservent leurs données commerciales. Le répertoire `assets/queen-yemuna/` contient une image WebP par référence : 68 photos du catalogue conservées, le visuel du miel déjà présent conservé, et 88 illustrations individuelles créées avec image_gen. Les archives existantes ne sont ni supprimées ni modifiées.

`manifest.json` indique la correspondance exacte, le nom commercial, la provenance et le type de visuel. `generation-briefs.json` conserve les briefs de création. Les illustrations ne représentent pas le conditionnement authentique du fabricant ; cette distinction est visible sur chaque fiche. L’identité commerciale affichée reste Forever Living Products.

Le chargement direct des images remplace la décompression de ZIP dans le navigateur et ne nécessite plus JSZip ni son CDN. Les fichiers sont chargés à la demande avec des dimensions réservées et des textes alternatifs propres au produit.

Les photos associées aux références 610, 673, 8774, 8364, 77812, 950 et 955 ont été écartées lors du contrôle des correspondances : mauvais produit, produit seul pour un lot ou composition du pack insuffisamment établie. Les nouveaux visuels des programmes montrent un coffret fermé pour éviter d’inventer leur composition.

Les références 686 et 701 sont classées parmi les soins visage. Sources fabricant consultées le 27 octobre 2026 :
- https://www.foreverliving.fr/FR/fr/product-detail/686
- https://foreverliving.com/shop/deu/en-de/products/701-DAY-TO-NIGHT-DUO

Vérification automatique : `node scripts/check-queen-yemuna.mjs`. Ce contrôle compare les données commerciales et le code du panier au commit initial `431031252011f7917dc5974fdf35f5f3b08bd390`, vérifie les 157 fichiers distincts, le format WebP et la syntaxe JavaScript. Les vérifications d’interface couvrent la recherche, les filtres, les quantités du panier et sa persistance, ainsi que les grilles mobile et ordinateur.

Vérifications de formats utilisées pour les visuels et les descriptions :
- Nutra Q10 en sachets : https://www.foreverliving.fr/FR/fr/product-detail/312
- Mini Aloe–ARGI+ en lot de 3 × 330 ml et 3 sachets : https://ecat.foreverliving.fr/pdf/catalogue_v2-fra-2026-03.pdf
- AloeTurm en pastilles hydrogel : https://foreverliving.com/shop/nor/en-no/products/nutritional/676-Forever-Aloe-Turm
- Fiber Fusion en sticks de gelée : https://foreverliving.com/shop/bel/fr-be/products/new-products/702-FOREVER-FIBER-FUSION

Le visuel du miel est conservé depuis son archive d’origine. Son ancien bouton capturé dans l’image reste hors du cadre par une règle de présentation CSS ; le fichier original est conservé sans retouche.

Le Complexe Raffermissant (556) reste illustré par sa photo du catalogue et est identifié comme complément alimentaire : https://foreverliving.com/shop/che/fr-ch/products/skin-care/556-INFINITE-FIRMING-COMPLEX
