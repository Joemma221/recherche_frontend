function additionner(...nombres){
    let somme = 0;
  for (const nbr of nombres) {
    somme += nbr;
  }
  return somme;
}

console.log(additionner(4,6,7,10))

function afficherPremierEtAutres(premier, ...autres){
    return premier, autres
}

console.log(afficherPremierEtAutres("eh","azy", "toi","viens" , "voir ,papa"))

function creerFiche(nom, filiere, ...competences){
    const obj = {nom, filiere, competences}
    return obj
}

console.log(creerFiche("Mendy", "L2", "Montage", "Doublage"))