const mots = require('./data/mots.json')

const scrable = (mot) =>{
    return mots.filter(a => a.length === mot.length && compare(mot, a))
}

const compare = (mask,text) => {
    for (let [index, item] of [...mask].entries()){
        if(item !== "*" && item !== text[index]){
            return false
        }
    }

    return true
}

console.log(scrable('a**l*'))
