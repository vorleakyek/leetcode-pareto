Class Checker (s) {

    constructor(s) {
        this.s = s; 
    }
 
    expands_into(s2) {
     
    if(s2.length !== s.length + 1) {
        return false; 
    }

    const freq = new Map(); 

    for (const c of s2) {
        freq.set(c, (freq.get(c) || 0) + 1); 
    }

    for (const c of s) {
        if (!freq.has(c)) {
            return false;
        }

        freq.set(c, freq.get(c) - 1);
        if (freq.get(c) === 0) {
            freq.delete(c); 
        }
    }

    // Should have exactly one character with frequency 1
    return freq.size === 1 && [...freq.values()][0] === 1 ;    
     }   
}


