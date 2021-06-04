const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (char = "*") => {
    return function(adj = "special") {
        return `You are ${char}${adj}${char}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    }, 
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}


const actionApplyer = (start, arrayOfFunc) => {
    let a = start

    for (let i = 0; i < arrayOfFunc.length; i++) {
        a = arrayOfFunc[i](a)
    }
    return a
}
