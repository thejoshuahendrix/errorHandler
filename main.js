"use strict";
exports.__esModule = true;
exports.ErrorHandler = exports.ErrorParse = void 0;
/**
* An Error Parser to handle parsing,
* It counts the character and returns as many lines as you input for the counter.
* Character is line breaks by default.
*/
var ErrorParse = function (err, counter, character) {
    if (counter === void 0) { counter = 1; }
    if (character === void 0) { character = "\n"; }
    var trimmedError = "";
    var count = 0;
    for (var i = 0; i < err.stack.length; i++) {
        trimmedError += err.stack[i];
        if (err.stack[i] == character && counter) {
            count++;
            if (count >= counter) {
                break;
            }
        }
    }
    return trimmedError;
};
exports.ErrorParse = ErrorParse;
/**
* An Error Handler to customize your console.logging,
* counter is how many lines you want, character you can customize the the character you parse by.
* It is line breaks by default.
*/
var ErrorHandler = function (func, counter, character) {
    try {
        return func();
    }
    catch (err) {
        console.log((0, exports.ErrorParse)(err, counter, character));
        return null;
    }
};
exports.ErrorHandler = ErrorHandler;
//Error Handler Test
var answer = false;
var answerTest = function (ans) {
    if (ans === true) {
        console.log('Here we are');
        return "Hello";
    }
    else {
        throw new Error("Answer has to be true");
    }
    ;
};
var returnerror = (0, exports.ErrorHandler)(function () { return answerTest(answer); }, 2);
console.log(returnerror);
