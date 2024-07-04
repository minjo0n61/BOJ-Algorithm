function solution(s, skip, index) {
    const skipSet = new Set(skip);
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i);

        let cnt = 0;
        while (cnt < index) {
            ascii++;
            if (ascii > 122) {
                ascii = 97;
            }
            if (!skipSet.has(String.fromCharCode(ascii))) {
                cnt++;
            }
        }

        result += String.fromCharCode(ascii);
    }
    return result;
}

