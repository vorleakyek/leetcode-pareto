/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []; 

    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (char==="(" || char==="{" || char=="[") {
            stack.push(char);
        } else {
            const prevChar = stack.pop();

            if (prevChar === "(" && char !== ")") return false;
            if (prevChar === "{" && char !== "}") return false;
            if (prevChar === "[" && char !== "]") return false;
            
            //all closed chars, no open chars 
            if (prevChar === undefined) return false; 

        }
    }

    return stack.length === 0; 
};
