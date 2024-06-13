function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    for (let i=0; i<sizes.length; i++) {
        let w = sizes[i][0];
        let h = sizes[i][1];
        
        if (w < h) {
            [w, h] = [h, w];
        }
        
        if (w > maxW) {
            maxW = w;
        }
        if (h > maxH) {
            maxH = h;
        }
    }
    return maxW * maxH;
}