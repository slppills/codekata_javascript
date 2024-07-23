function solution(nums) {
    const len = nums.length;
    const newNums = new Set(nums);
    return newNums.size < len / 2 ? newNums.size : len / 2;
}