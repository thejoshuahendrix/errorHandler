import { ErrorHandler } from "short-error"
//Error Handler Test

let answer = false;

const answerTest = (ans: boolean) => {
    if (ans === true) {
        console.log('Here we are')
        return "Hello";
    }
    else {
        throw new Error("Answer has to be true")
    };
};

let returnerror = ErrorHandler(() => answerTest(answer), 2);