const strings = [
    [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
    [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
];

export const cnpjValidate = (cnpj: string): boolean => {
    let numbers = cnpj.slice(0, -2);
    let digits = cnpj.slice(-2);

    let firstDigit = getFirstDigit(numbers);

    if (firstDigit === Number(digits[0])) {
        let secondDigit = getSecondDigit(numbers + firstDigit);
        return secondDigit === Number(digits[1]) ? true : false;
    }
    return false;
}

const getFirstDigit = (numbers: string): number => {
    let sum = 0;
    for (let i in strings[0]) {
        sum += Number(numbers[i]) * strings[0][i];
    }
    let rest = sum % 11;
    const digit = rest < 2 ? 0 : (11 - rest);
    return digit;
}

const getSecondDigit = (numbers: string): number => {
    let sum = 0;
    for (let i in strings[1]) {
        sum += Number(numbers[i]) * strings[1][i];
    }
    let rest = sum % 11;
    const digit = rest < 2 ? 0 : (11 - rest);
    return digit;
}