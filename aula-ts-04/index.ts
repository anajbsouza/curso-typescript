import { id } from "date-fns/locale";

function multiply(num1, num2) {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    //const num1: number = parseFloat(prompt("First Number") || "");
    const num1 = Number(prompt("First Number"))
    // const num2: number = parseFloat(prompt("Second Number")|| "");
    const num2 = Number(prompt("Second Number"));

    if(!num1 || !num2) {
        console.log('Insira os 2 números!');
    } else {
        if (!isNaN(num1) && !isNaN(num1)){
            //&& num1 !== null && num2 !== null
            let result = sum(num1,num2);
            result += multiply(1,2);
            showResult(result);
        }
    }
})();
