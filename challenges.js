
// Write a function named greaterNum that:

function greaterNum(a, b){
    if (a > b) {
        return a
    } else {
        return b
    }
}

function helloWorld(){
    return 'hello world'
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