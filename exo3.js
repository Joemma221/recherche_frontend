const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };

const TousLesEtudiants = [...groupeA, ...groupeB]
const [n1,n2,n3] = groupeA
const groupeAcopie = [...groupeA, "Cheikh"]

const etudiantComplet = {...etudiantBase, age:22, ville:"Dakar"}
const etudiantBaseCopie = {...etudiantBase, niveau:"L3"}


