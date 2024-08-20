function solution(rank, attendance) {
    let attendee = [];
    let sortRank = rank.map((atd) => [atd, rank.indexOf(atd)]);
    sortRank.sort(([a, ], [b, ]) => [a, ] - [b, ]);
    for (const atd of sortRank) {
        if (attendee.length === 3) break;
        const [, num] = atd;
        if (attendance[num]) attendee.push(num);
    }
    return 10000 * attendee[0] + 100 * attendee[1] + attendee[2];
}