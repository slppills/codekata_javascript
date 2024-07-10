function solution(survey, choices) {
    let answer = '';
    let rt = 0; let cf = 0; let jm = 0; let an = 0;
    let type = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    }
    const score = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: -1,
        6: -2,
        7: -3
    }
    
    for (let i=0; i<survey.length; i++) {
        type[survey[i][0]] += score[choices[i]];  
    }
    
    answer += type.R > type.T ? "R" : type.R < type.T ? "T" : "R";
    answer += type.C > type.F ? "C" : type.C < type.F ? "F" : "C";
    answer += type.J > type.M ? "J" : type.J < type.M ? "M" : "J";
    answer += type.A > type.N ? "A" : type.A < type.N ? "N" : "A";
    
    return answer;
}