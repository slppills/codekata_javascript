function solution(s) {
    return String(Math.min(...s.split(' ').map(Number))) + " " + String(Math.max(...s.split(' ').map(Number)));
}