function solution(priorities, location) {
    let cnt = 0;
    while(true) {
        if (priorities[0] === Math.max(...priorities)) {
            cnt++;
            priorities.shift();
            if (location === 0) {
                return cnt;
            }
        } else {
            priorities.push(priorities.shift());
        }
        location = (location === 0 ? priorities.length - 1 : location - 1);
    }
}