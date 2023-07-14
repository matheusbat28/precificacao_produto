$(document).ready(function () {
    let feria = Math.round(((1 / 3) / 12) * 100); // porcetagem
    let salario13 = (1 / 12) * 100; // porcetagem
    let beneficio = 0; // real
    let taxaCatao = 2.50; // porcetagem
    let imposto = 5; // porcetagem
    let boleto = 0; // real
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
    let horas_tec_por_col = 0; // real
    let horas_tec_empre = 0; // real
    let horas_tec_val = 0; // real *******
    let delocamento = 100 * 1.2; // real *******
    let material_direto = 200; // real *******
    let alimentacao = 50; // real *******
    let lucro = 20; // real *******
    let preco_sug = 0; // real *******


    function calc_dado() {


        atualizar_dados();
    }

    function atualizar_dados() {


    };

    atualizar_dados();
    $('.dados input').on('input', function () {

    });
})