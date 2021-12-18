   /**
    * An Error Parser to handle parsing,
    * It counts the character and returns as many lines as you input for the counter. 
    * @param counter is how many lines in the console you allow.
    * @param character is what to count for the counter line breaks by default.
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
    * @param counter is how many lines in the console you allow, one by default.
    * @param character the character to count for parsing, line breaks by default.
    */
    export const ErrorHandler = (func: () => any, counter?: number, character?: string) => {
        try {
            return func();
        } catch (err: any) {
            console.log(ErrorParse(err, counter, character))
            return null;
        }
    }

export default ErrorHandler;




