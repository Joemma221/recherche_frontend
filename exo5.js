const etudiantL2 = {
id: 104,
prenom: "Aminata",
nom: "Fall",
notes: [13, 16, 12],
filiere: "IAGE"
};

function extraireIdentite(etudiant){
    const {prenom,nom,filiere} = etudiant
    const Newetudiant = {prenom:prenom, nom:nom, filiere:filiere}
    return Newetudiant
}
//console.log(extraireIdentite(etudiantL2))

function calculerMoyenneNotes(notes){
   const somme = notes.reduce((total, n) => total + n, 0);
   const moyenne = somme/notes.length
   return moyenne
}
//console.log(calculerMoyenneNotes(etudiantL2.notes))

function ajouterNote(etudiant, nouvelleNote){
    const {notes} = etudiant
    const note = [...notes, nouvelleNote]
    const{id,prenom,nom,filiere} = etudiant
    const newetudiant = {id,prenom,nom,note,filiere}
    return newetudiant
}
//console.log(ajouterNote(etudiantL2,19))

function creerResume(etudiant, ...options){
    const {notes} = etudiant
    const somme = notes.reduce((total,n)=>total+n,0)
    const moyenne = somme/notes.length
    const {prenom,nom} = etudiant
    const resume = [prenom,nom,moyenne,...options]
    return resume
}
//console.log(creerResume(etudiantL2, job="createur", "chanteur"))