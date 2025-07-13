export function getRandomString (n: number): string {
    let characters = "asdfghjklpoiuytreqw1234567890zxcvbnmASDFGHJKLPOIUYTREWQZXCVBNM";
    const len = characters.length;
    let result = ''
    for(let i=0;i<n;i++){
        result += characters.charAt(Math.floor(Math.random()* len));
    }
    return result;
}