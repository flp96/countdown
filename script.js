import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2024 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2024 23:59:59 GMT-0300');

const tempoNatal = document.querySelector('.tempo-natal');
const tempoAnoNovo = document.querySelector('.tempo-ano-novo');


setInterval(() => {
tempoNatal.innerHTML = tempoParaONatal.days + ' dias, ' + tempoParaONatal.hours + ' horas, ' + tempoParaONatal.minutes + ' minutos e ' + tempoParaONatal.seconds + ' segundos ' + 'para o Natal';
tempoAnoNovo.innerHTML = tempoParaOAnoNovo.days + ' dias, ' + tempoParaOAnoNovo.hours + ' horas, ' + tempoParaOAnoNovo.minutes + ' minutos e ' + tempoParaOAnoNovo.seconds + ' segundos ' + 'para o Ano Novo';
}, 1000);

