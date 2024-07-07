function solution(n, lost, reserve) {
    let newlost = lost.filter(student => !reserve.includes(student)).sort((a, b) => a-b);
    let newreserve = reserve.filter(student => !lost.includes(student)).sort((a, b) => a-b);
    
    for (let i=0; i<newlost.length; i++) {
        if (newreserve.includes(newlost[i]-1)) {
            newreserve.splice(newreserve.indexOf(newlost[i]-1), 1);
            newlost.splice(i, 1);
            i--;
        } else if (newreserve.includes(newlost[i]+1)) {
            newreserve.splice(newreserve.indexOf(newlost[i]+1), 1);
            newlost.splice(i, 1);
            i--;
        }
    }
    
    return n-newlost.length;
}