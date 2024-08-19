function solution(spell, dic) {
    for (const word of dic) {
        let cnt = 0;
        for (const sp of spell) {
            if (word.includes(sp)) cnt++;
        }
        if (cnt === spell.length) return 1;
    }
    return 2;
}