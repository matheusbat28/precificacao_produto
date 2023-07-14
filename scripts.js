$(document).ready(function () {
    let feria = Math.round(((1 / 3) / 12) * 100); // porcetagem
    let salario13 = (1 / 12) * 100; // porcetagem
    let beneficio = 0; // real
    let taxaCatao = 2.50; // porcetagem
    let imposto = 5; // porcetagem
    let boleto = 1.50; // real
    let qtd_func = 0; // real
    let gasto_func = 0; // real
    let salario_nominal = 0; // real
    let comissao = 1; // porcetagem
    let fgts = 8; // porcetagem
    let multa = (fgts * 40) / 100; // porcetagem
    let feria_func = 0; // real
    let salario13_func = 0; // real
    let multa_func = 0; // real
    let fgts_func = 0; // real
    let vale = 0; // real
    let medica = 0; // real
    let ajuda = 0; // real
    let total_func = 0; // real
    let horas = 0; // real
    let custo_mod_h = 0; // real
    let salario = 0; // real
    let aluguel = 0; // real
    let agua = 0; // real
    let energia = 0; // real
    let telefone = 0; // real
    let internet = 0; // real
    let iptu = 0; // real
    let contador = 0; // real
    let manutencao = 0; // real
    let gasto_mensal = 0; // real
    let gasto_fixo_h = 0; // real


    function calc_dado() {
        salario_nominal = gasto_func / qtd_func;
        feria_func = Math.round((salario_nominal * feria) / 100);
        salario13_func = Math.round((salario_nominal * salario13) / 100);
        multa_func = (salario_nominal * multa) / 100;
        fgts_func = (salario_nominal * fgts) / 100;
        total_func = salario_nominal + feria_func + salario13_func + fgts_func + multa_func + ajuda + vale + medica;
        custo_mod_h = total_func / horas;
        gasto_mensal = salario + beneficio + aluguel + agua + energia + telefone + internet + iptu + contador + manutencao;
        gasto_fixo_h = gasto_mensal.toFixed(2) / horas;

    }

    $('.dados input').on('input', function () {
        if ($(this).attr('id') === 'salario') {
            beneficio = parseFloat($(this).val()) * 0.5;
        } if ($(this).attr('id') === 'qtd_func') {
            qtd_func = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'gasto_func') {
            gasto_func = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'vale') {
            vale = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'medica') {
            medica = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'ajuda') {
            ajuda = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'horas') {
            horas = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'salario') {
            salario = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'aluguel') {
            aluguel = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'agua') {
            agua = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'energia') {
            energia = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'telefone') {
            telefone = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'internet') {
            internet = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'iptu') {
            iptu = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'contador') {
            contador = parseFloat($(this).val());
            calc_dado();
        } if ($(this).attr('id') === 'manutencao') {
            manutencao = parseFloat($(this).val());
            calc_dado();
        }
    });
})