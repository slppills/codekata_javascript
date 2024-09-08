function solution(s) {
    let beforeLength; 
    let afterLength;
    let cnt = 0;
    let removeZero = 0;
    while (s !== "1") {
        cnt++;
        beforeLength = s.length;
        s = s.replace(/0/g, "");
        afterLength = s.length;
        removeZero += beforeLength - afterLength;
        s = afterLength.toString(2);
    }
    return [cnt, removeZero];
}