const readline = require('readline'); // para interação com usuário

//--- Funções de conversão
const celsiusToFahrenheit = (temperature) => {
    return (temperature * 9/5) + 32;
}

const fahrenheitToCelsius = (temperature) => {
    return (temperature - 32) * 5/9;
}

//--- Criação da interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//--- Função para perguntar e converter temperaturas
const askTemperature = () => {
    rl.question('Digite um valor de temperatura (exemplo: 25C ou 77F): ', (input) => {
        const value = parseFloat(input.slice(0, -1));
        const unit = input.slice(-1).toUpperCase();

        if (isNaN(value) || (unit !== 'C' && unit !== 'F')) {
            console.log('Entrada inválida. Por favor, digite um valor seguido por "C" ou "F" (exemplo: 25C ou 77F).');
        } else {
            if (unit === 'C') {
                console.log(`${value}ºC é equivalente a ${celsiusToFahrenheit(value).toFixed(2)}ºF`);
            } else {
                console.log(`${value}ºF é equivalente a ${fahrenheitToCelsius(value).toFixed(2)}ºC`);
            }
        }

        rl.close();
    });
}

//--- Iniciar o processo de perguntar e converter temperaturas
askTemperature();
