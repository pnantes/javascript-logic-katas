/*************  calculateSalary()  ******************/
function calculateSalary(salario) {

    let comissao = 0
    let comissaoAux = 0

    if (salario != 0) {

        comissao = (salario / 100)
        return comissao * 3
    }
    else if (salario > 1200) {

        let aux = salario - 1200
        comissaoAux = (aux / 100) * 5
    }
    let result = comissao + comissaoAux;
    return result;
}
calculateSalary(1200);


/*************  cashMachine()  ******************/
function cashMachine(saque, salario, valorVenda) {
    let saldoAtual = salario + valorVenda;
    let notasSaque = [];

    if (saque <= saldoAtual) {
        saldoAtual -= saque;

        if (saque / 200 > 0) {
            let notas = Math.trunc(saque / 200);

            notasSaque.push(`${notas} notas de R$200`);
            saque -= notas * 200;
        }
        if (saque / 100 > 0) {
            let notas = Math.trunc(saque / 100);

            notasSaque.push(` ${notas} notas de R$100`);
            saque -= notas * 100;
        }
        if (saque / 50 > 0) {
            let notas = Math.trunc(saque / 50);

            notasSaque.push(` ${notas} notas de R$50`);
            saque -= notas * 50;
        }
        if (saque / 20 > 0) {
            let notas = Math.trunc(saque / 20);

            notasSaque.push(` ${notas} notas de R$20`);
            saque -= notas * 20;
        }
        if (saque / 10 > 0) {
            let notas = Math.trunc(saque / 10);

            notasSaque.push(` ${notas} notas de R$10`);
            saque -= notas * 10;
        }
    }
    return `Notas sacadas: ${notasSaque}, Saldo atual: R$${saldoAtual}`;
}
console.log(cashMachine(500, 1200, 300));


/*************  calculateStock()  ******************/
function calculateStock(atual, max, min) {
    let media = (max + min) / 2;

    if (atual > media) {
        return 'Não efetuar compra';
    }
    else{
    return 'Efetuar compra';
    }
}
calculateStock(5, 8, 1);


/*************  calculateAge()  ******************/
function calculateAge(nasc, atual){
    let anosIdade = atual - nasc;
    let mesesIdade = anosIdade * 12;

    let count = 0;
    for(let i = 4; i <= anosIdade; i+= 4){// Para ano bissexto
        count++
    }
    
    let diasIdade = (anosIdade * 365) + count;
    let semanasIdade = mesesIdade * 4;

    console.log(`Anos: ${anosIdade}, Meses: ${mesesIdade}, Dias: ${diasIdade}, Semana: ${semanasIdade}`);
}
calculateAge(1999, 2022);


/*************  getDiagonal()  ******************/
function getDiagonal(matrizQuadrada3x3){
    let arr = [];

    for(let array = 0; array < matrizQuadrada3x3.length; array++){

            for(let item = 0; item < matrizQuadrada3x3.length; item++){
                
                if(item == array){
                    arr.push(matrizQuadrada3x3[array][item])
                }
        }
    }
    return arr;
}
console.log(getDiagonal([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]));


