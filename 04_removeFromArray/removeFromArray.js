const removeFromArray = function(...theArgs) {
    //don't need a for loop. use forEach. match two items. 
    let newArray = theArgs[0];
    let newArg = []; 
    newArray.forEach((arg) => {
            if (!theArgs.includes(arg)) {
            newArg.push(arg);
        } 
    })
    return newArg;
};

// Do not edit below this line
module.exports = removeFromArray;
