function solution(phone_number) {
    const len = phone_number.length;
    if (len === 4) {
        return phone_number;
    } else {
        return '*'.repeat(len - 4) + phone_number.slice(len - 4);
    }
}