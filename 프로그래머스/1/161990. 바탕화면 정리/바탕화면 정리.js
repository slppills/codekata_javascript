function solution(wallpaper) {
    let minY = 0; let maxY = 0;
    let minX = 0; let maxX = 0;
    
    for (let i=0; i<wallpaper.length; i++) {
        if (wallpaper[i].split('').includes("#")) {
            minX = i;
            break;
        }
    }
    for (let i=wallpaper[0].length; i>=0; i--) {
        for (let j=0; j<wallpaper.length; j++) {
            if (wallpaper[j][i] === "#") {
                minY = i;
                break;
            }
        }
    }
    for (let i=wallpaper.length-1; i>=0; i--) {
        if (wallpaper[i].split('').includes("#")) {
            maxX = i+1;
            break;
        }
    }
    for (let i=0; i<wallpaper[0].length; i++) {
        for (let j=wallpaper.length-1; j>=0; j--) {
            if (wallpaper[j][i] === "#") {
                maxY = i+1;
                break;
            }
        }
    }
    
    return [minX, minY, maxX, maxY];
}