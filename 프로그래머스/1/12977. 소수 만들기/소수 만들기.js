function solution(nums) {
    let answer = 0;
    
    for (let i=0; i<nums.length - 2; i++) {
        for (let j=i+1; j<nums.length - 1; j++) {
            for (let k=j+1; k<nums.length; k++) {
                const num = nums[i] + nums[j] + nums[k];
                let cnt = 0;
                for (let a=2; a<=num/2; a++) {
                    if (num % a === 0) {
                        cnt++;
                        break;
                    }
                }
                if (cnt === 0) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}