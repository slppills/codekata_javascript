function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    
    const column = Math.abs(dots[0][1] - dots[1][1]);
    const row = Math.abs(dots[2][0] - dots[1][0]);
    
    return column * row;
}