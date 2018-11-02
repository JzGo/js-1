
// Write a function named greaterNum that:

function greaterNum(x ,y){
    if(x > y) {
        return x
    } else {
        return y
    }
}

greaterNum(10, 6)
greaterNum(5, 17)

function helloWorld(lang){
    if(lang === "es") {
        return "Hola, Mundo!"
    } else if (lang === "de") {
        return "Hallo, Welt!"
    } else {
        return "Hello, World!"
    }
}


function assignGrade(){
    return 'grade'
}

function pluralizer(){
    return 'many things'
}

module.exports = {
    greaterNum: greaterNum,
    helloWorld: helloWorld,
    assignGrade: assignGrade,
    pluralizer: pluralizer
}
