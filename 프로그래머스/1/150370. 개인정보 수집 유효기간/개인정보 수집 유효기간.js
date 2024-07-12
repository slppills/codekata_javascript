function solution(today, terms, privacies) {
    let answer = [];
    const newToday = new Date(today.split('.').join('-'));
    const newTerms = terms.reduce((acc, term) => {
        const [type, month] = term.split(' ');
        acc[type] = parseInt(month);
        return acc;
    }, {})
    
    for (let i=0; i<privacies.length; i++) {
        const [dates, type] = privacies[i].split(' ');
        let [year, month, date] = dates.split('.').map(Number);
        month += newTerms[type];
        
        while (month > 12) {
            year += 1;
            month -= 12;
        }
        
        const period = new Date(year, month - 1, date);
        
        if (newToday > period)
            answer.push(i+1);
    }
    
    return answer;
}