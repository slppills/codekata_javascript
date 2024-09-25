function solution(s){
    let queue = [];
    for (let i=0; i<s.length; i++) {
        queue.push(s[i]);
        if (queue[0] === ")") return false;
        if (s[i] === ")") {
            queue.shift();
            queue.pop();
        }
    }
    
    return queue.length === 0 ? true : false;
}