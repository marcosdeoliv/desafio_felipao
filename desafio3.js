function calcularRank(vitorias, derrotas) {
    // Calcular o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determinar o nível baseado no saldo
    let nivel;
    if (saldoVitorias <= 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias <= 100) {
        nivel = 'Lendário e Imortal';
    }

    // Retornar a mensagem formatada
    return `O herói tem o saldo de ${saldoVitorias}, está no nível **${nivel}**.`;
}

// Exemplo de uso:
const mensagem = calcularRank(75, 20);
console.log(mensagem);  // O herói tem o saldo de 55, está no nível **Ouro**.