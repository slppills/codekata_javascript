function solution(a, b) {
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let answer = b-1;
    for (let i=0; i<a-1; i++) {
        answer += month[i];
    }
    return day[answer % 7];
}