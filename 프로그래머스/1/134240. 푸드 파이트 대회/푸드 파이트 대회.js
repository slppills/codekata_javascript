function solution(food) {
    let left = ''; 
    let right = '';
    
    for (let i=1; i<food.length; i++) {
        for (let j=0; j<Math.floor(food[i] / 2); j++) {
            left += i;
        }
    }
    
    right =  left.split('').reverse().join('');
    return left + '0' + right;
}