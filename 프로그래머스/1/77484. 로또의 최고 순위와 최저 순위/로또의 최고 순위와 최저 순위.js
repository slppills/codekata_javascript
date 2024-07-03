function solution(lottos, win_nums) {
    zero_cnt = 0;
    coincide_cnt = 0;
    
    for (let i=0; i<6; i++) {
        if (win_nums.includes(lottos[i])) {
            coincide_cnt++;
        } else if(lottos[i] === 0) {
            zero_cnt++;
        }
    }
    
    let max = 7-(zero_cnt+coincide_cnt) > 6 ? 6 : 7-(zero_cnt+coincide_cnt);
    let min = 7-coincide_cnt > 6 ? 6 : 7-coincide_cnt;
    
    return [max, min];
}