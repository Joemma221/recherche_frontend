const etudiant = {
    id: 2026,
    nom: "Ndiaye",
    prenom: "Moussa",
    filiere: "IAGE",
    niveau: "L2",
    ville: "Dakar",
};

const resultats = [15, 11, 17, 13, 16];

const {nom,prenom,filiere} = etudiant
const {niveau:classe} = etudiant
const [note1,note2,note3] = resultats
const [n1,,n3] = resultats
const {email="john.doe@example.com"} = etudiant
console.log(`Je m'appelle ${prenom} ${nom},je suis en ${classe} ${filiere}`);


