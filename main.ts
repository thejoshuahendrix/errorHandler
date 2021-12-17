const ErrorParse = (err: any, counter?: number, character?: String, prefix?: String) => {
    let trimmedError = prefix || "";
    if (counter) {
        let count = 0;
        for (let i = 0; i < err.stack.length; i++) {
            trimmedError += err.stack[i];
            if (character) {
                if (err.stack[i] == character) {
                    count++
                    if (count >= counter) {
                        break;
                    }
                }
            } else {
                if (err.stack[i] == "\n") {
                    count++
                    if (count >= counter) {
                        break;
                    }
                }
            }
        }
    } else {
        for (let i = 0; i < err.stack.length; i++) {
            trimmedError += err.stack[i];
            if (character) {
                if (err.stack[i] == character) {
                    break;
                }
            } else {
                if (err.stack[i] == "\n") {
                    break;
                }
            }

        }
    }
    return trimmedError;
}

const ErrorHandler = (func: () => void, counter?: number, character?: String, prefix?: String) => {
    try {
        func()
    } catch (err: any) {
        console.log(ErrorParse(err, counter, character, prefix))
    }
}

let answer = false;

const answerTest = (ans: boolean) => {
    if (ans === true) {
        console.log('Here we are')
    }
    else {
        throw new Error("Answer has to be true")
    };
};

ErrorHandler(() => answerTest(answer), 10)
