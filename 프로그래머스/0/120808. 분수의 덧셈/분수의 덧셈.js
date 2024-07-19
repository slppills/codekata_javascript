function solution(numer1, denom1, numer2, denom2) {
    let lcd = 0;
    let lcm = 0;
    
    lcd = Lcd(denom1, denom2);
    lcm = (denom1 * denom2) / lcd;
    numer1 *= lcm / denom1;
    numer2 *= lcm / denom2;
    let boonja = numer1 + numer2;
    const divide = Lcd(boonja, lcm);
    
    return [boonja / divide, lcm / divide];
}

function Lcd(a, b) {
    while (a > 0) {
        const temp = b % a;
        b = a;
        a = temp;
    }
    return b;
}