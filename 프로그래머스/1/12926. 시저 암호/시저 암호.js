function solution(s, n) {
    let arr = s.split('');
    for (let i=0; i<arr.length; i++) {
        let temp = arr[i].charCodeAt();
        if (temp >= 65 && temp <= 90) {
            temp = (temp - 65 + n) % 26 + 65;
            arr[i] = String.fromCharCode(temp);
        } else if(temp >= 97 && temp <= 122) {
            temp = (temp - 97 + n) % 26 + 97;
            arr[i] = String.fromCharCode(temp);
        }
    }
return arr.join('');
}
