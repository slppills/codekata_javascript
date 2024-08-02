function solution(sizes) {
    let long = [];
    let short = [];
    for (const size of sizes) {
        size[0] < size[1] ? (long.push(size[1]), short.push(size[0])) : (long.push(size[0]), short.push(size[1]));
    }
    return Math.max(...long) * Math.max(...short);
}