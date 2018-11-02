


function greaterNum(x ,y){
    if(x > y) {
        return x
    } else {
        return y
    }
}

greaterNum(10, 6)
greaterNum(5, 17)

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
