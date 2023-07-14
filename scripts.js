$(document).ready(function () {

    // calculos
    let gasto_mensal = 0
    let salario_nominal = 0
    let gasto_fixo = 0 // arredodar
    let custo_mod = 0 // arredodar
    let feria_func = 0
    let salario_13_func = 0 // arredodar
    let fgts_func = 0
    let multa_func = 0
    let gasto_por_func = 0
    let hora_tec_colab = 0
    let hora_tec_emp = 0
    let hora_tec = 0

    //  input tela
    let salario = 0
    let benificio = 0
    let aluguel = 0
    let agua = 0
    let energia = 0
    let telefone = 0
    let internet = 0
    let iptu = 0
    let contador = 0
    let manutencao = 0
    let vale = 0
    let ajuda = 0
    let medica = 0
    let qtd_func = 0
    let gasto_func = 0
    let horas = 0
    let preco_sug = 0

    // constante
    const FERIA = ((1 / 3) / 12) * 100
    const SALARIO_13 = (1 / 12) * 100
    const FGTS = 8
    const MULTA = FGTS * 0.4
    const MATERIAL_DIRETO = 200
    const DESLOCAMENTO = 100 * 1.2
    const ALIMENTACAO = 50
    const BOTLETO = 0
    const COMISSAO = 1 / 100
    const TAXA_CARTAO = 2.50 / 100
    const IMPOSTO = 5 / 100
    const LUCRO = 20 / 100


    function calc_dado() {

        benificio = salario / 2
        gasto_mensal = salario + benificio + aluguel + agua + energia + telefone + internet + iptu + contador + manutencao
        salario_nominal = gasto_func / qtd_func
        gasto_fixo = gasto_mensal / horas
        feria_func = (salario_nominal * (FERIA / 100))
        salario_13_func = (salario_nominal * (SALARIO_13 / 100))
        fgts_func = (salario_nominal * (FGTS / 100))
        multa_func = (salario_nominal * (MULTA / 100))
        gasto_por_func = salario_nominal + feria_func + salario_13_func + fgts_func + multa_func + ajuda + vale + medica
        custo_mod = gasto_por_func / horas
        hora_tec_colab = custo_mod + (gasto_fixo / 2)
        hora_tec_emp = (custo_mod * 2) + gasto_fixo
        hora_tec = hora_tec_emp * horas
        preco_sug = (hora_tec + MATERIAL_DIRETO + DESLOCAMENTO + ALIMENTACAO + BOTLETO) / (1 - (COMISSAO + TAXA_CARTAO + IMPOSTO + LUCRO))

        atualizar_dados();
    }

    function atualizar_dados() {

        $('#campo_hora_tec').html(hora_tec.toFixed(2))
        $('#campo_material_dir').html(MATERIAL_DIRETO.toFixed(2))
        $('#campo_delocamento').html(DESLOCAMENTO.toFixed(2))
        $('#campo_alimentacao').html(ALIMENTACAO.toFixed(2))
        $('#campo_boleto').html(BOTLETO.toFixed(2))
        $('#campo_comissao').html(COMISSAO * 100 + '%')
        $('#campo_taxa_cartao').html(TAXA_CARTAO * 100 + '%')
        $('#campo_imposto').html(IMPOSTO * 100 + '%')
        $('#campo_lucro').html(LUCRO * 100 + '%')
        $('#campo_preco-sug').html(preco_sug.toFixed(2))

    };

    atualizar_dados();
    $('.dados input').on('input', function () {
        if ($(this).attr('id') == 'salario') {
            salario = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'aluguel') {
            aluguel = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'agua') {
            agua = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'energia') {
            energia = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'telefone') {
            telefone = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'internet') {
            internet = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'iptu') {
            iptu = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'contador') {
            contador = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'manutencao') {
            manutencao = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'vale') {
            vale = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'ajuda') {
            ajuda = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'medica') {
            medica = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'qtd_func') {
            qtd_func = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'gasto_func') {
            gasto_func = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'horas') {
            horas = parseFloat($(this).val());
        }
        calc_dado();
    });

})