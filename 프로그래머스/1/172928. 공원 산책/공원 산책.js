function solution(park, routes) {
    var answer = [];
    let locX = 0;
    let locY = 0;
    const maxX = park[0].length;
    const maxY = park.length;
    
    for (let i=0; i<park.length; i++) {
        for (let j=0; j<park[0].length; j++) {
            if (park[i][j] === "S") {
                locY = i;
                locX = j;
                break;
            }
        }
    }
    
    for (let i=0; i<routes.length; i++) {
        let [dir, dis] = routes[i].split(' ');
        dis = parseInt(dis);
        
        if (dir === 'E') {
            if (locX + dis < maxX) {
                let canMove = true;
                for (let j=1; j<=dis; j++) {
                    if (park[locY][locX+j] === 'X') {
                        canMove = false;
                        break;
                    }
                }
                if (canMove)
                    locX += dis;
            }
        }
        
        else if (dir === 'W') {
            if (locX - dis >= 0) {
                let canMove = true;
                for (let j=1; j<=dis; j++) {
                    if (park[locY][locX-j] === 'X') {
                        canMove = false;
                        break;
                    }
                }
                if (canMove)
                    locX -= dis;
            }   
        }
        
        else if (dir === 'S') {
            if (locY + dis < maxY) {
                let canMove = true;
                for (let j=1; j<=dis; j++) {
                    if (park[locY+j][locX] === 'X') {
                        canMove = false;
                        break;
                    }
                }
                if (canMove)
                    locY += dis;
            }   
        }
            
        else {
            if (locY - dis >= 0) {
                let canMove = true;
                for (let j=1; j<=dis; j++) {
                    if (park[locY-j][locX] === 'X') {
                        canMove = false;
                        break;
                    }
                }
                if (canMove)
                    locY -= dis;
            } 
        }
    }
    
    return [locY, locX];
}