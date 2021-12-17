
/**
* An Error Parser to handle parsing,
* It counts the character and returns as many lines as you input for the counter. 
* Character is line breaks by default.
*/
const ErrorParse = (err: any, counter = 1, character = "\n") => {

    let trimmedError = "";
    let count = 0;
    for (let i = 0; i < err.stack.length; i++) {
        trimmedError += err.stack[i];
        if (err.stack[i] == character && counter) {
            count++
            if (count >= counter) {
                break;
            }
        }
    }
    return trimmedError;
}

/**
* An Error Handler to customize your console.logging,
* counter is how many lines you want, character you can customize the the character you parse by. 
* It is line breaks by default.
*/
const ErrorHandler = (func: () => void, counter?: number, character?: string) => {
    try {
        func()
    } catch (err: any) {
        console.log(ErrorParse(err, counter, character))
    }
}


//Error Handler Test
let answer = false;

const answerTest = (ans: boolean) => {
    if (ans === true) {
        console.log('Here we are')
    }
    else {
        throw new Error("Answer has to be true")
    };
};

ErrorHandler(() => answerTest(answer), 2)
