function calculerMoyenne(note1,note2,note3){
    return (note1+note2+note3)/3
}

function estAdmis(moyenne){
    if (moyenne>10){
        return true
    }else return false
}

function CalculerPrixTTC(prixHT, tauxTVA=0.18){
    return prixHT+(1+prixHT*tauxTVA)
}

const convertirEnMinutes = (heures) => {
    return heures*60
}

console.log(calculerMoyenne(12,15,10))
console.log(estAdmis(12))
console.log(CalculerPrixTTC(100))
console.log(convertirEnMinutes(2))