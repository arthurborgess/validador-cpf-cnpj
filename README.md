# Algoritmo para Validação de CPF e CNPJ reais em TypeScript

### Link para visualização: https://arthurborgess.github.io/validador-cpf-cnpj/



## O algoritmo de validação do CPF elimina a possibilidade de dígitos repetidos consecutivamente, e calcula o primeiro dígito verificador a partir dos 9 primeiros dígitos do CPF, e em seguida, calcula o segundo dígito verificador a partir dos 9 primeiros dígitos do CPF, mais o primeiro dígito, obtido na primeira parte.
```
const strings = [
    [10, 9, 8, 7, 6, 5, 4, 3, 2],
    [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
];

export const cpfValidate = (cpf: string): boolean => {
    let numbers = cpf.slice(0, -2);
    let digits = cpf.slice(-2);

    let firstDigit = getFirstDigit(numbers);

    if (repeatedDigit(cpf)) {
        if (firstDigit === Number(digits[0])) {
            let secondDigit = getSecondDigit(numbers + firstDigit);
            return secondDigit === Number(digits[1]) ? true : false;
        }
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

const repeatedDigit = (cpf: string): boolean => {
    const first = cpf[0];
    let different = false;
    for (let i = 1; i < cpf.length; i++) {
        if (cpf[i] !== first) {
            different = true;
        }
    }
    return different;
}
```



## Já o algoritmo de validação do CNPJ calcula o primeiro dígito verificador a partir dos 12 primeiros dígitos do CNPJ, e em seguida, calcula o segundo dígito verificador a partir dos 12 primeiros dígitos do CNPJ, mais o primeiro dígito, obtido na primeira parte.
```
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
```

![image](https://user-images.githubusercontent.com/104205613/185526437-4087428a-ecca-41b3-b80f-8569b416748c.png)
