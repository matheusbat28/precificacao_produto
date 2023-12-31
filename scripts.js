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
    let lucro_diferenca = 0
    let comissao_real = 0
    let taxa_cartao_real = 0
    let imposto_real = 0
    let lucro = 0
    let imposto = 0
    let comissao = 0
    let boleto = 0




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
    let lucro_por = 0
    let descolamento = 0
    let alimentacao = 0
    let taxa_cartao = 0
    let material_direto = 0




    // constante
    const FERIA = ((1 / 3) / 12) * 100
    const SALARIO_13 = (1 / 12) * 100
    const FGTS = 8
    const MULTA = FGTS * 0.4


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
        preco_sug = (hora_tec + material_direto + descolamento + alimentacao + boleto) / (1 - (comissao + taxa_cartao + imposto + lucro))
        comissao_real = preco_sug * comissao
        taxa_cartao_real = preco_sug * taxa_cartao
        imposto_real = preco_sug * imposto
        lucro_diferenca = preco_sug - hora_tec - material_direto - descolamento - alimentacao - boleto - comissao_real - taxa_cartao_real - imposto_real
        lucro_por = (lucro_diferenca / preco_sug) * 100

        atualizar_dados();
    }

    function atualizar_dados() {

        $('.campo_hora_tec').html(hora_tec.toFixed(2))
        $('.campo_material_dir').html(material_direto.toFixed(2))
        $('.campo_delocamento').html(descolamento.toFixed(2))
        $('.campo_alimentacao').html(alimentacao.toFixed(2))
        $('.campo_boleto').html(boleto.toFixed(2))
        $('.campo_comissao').html(comissao * 100 + '%')
        $('.campo_taxa_cartao').html(taxa_cartao * 100 + '%')
        $('.campo_imposto').html(imposto * 100 + '%')
        $('.campo_lucro').html(lucro * 100 + '%')
        $('.campo_preco-sug').html(preco_sug.toFixed(2))
        $('.receita_venda').html(preco_sug.toFixed(2))
        $('.lucro_val').html(lucro_diferenca.toFixed(2))
        $('#campo_comissao_real').html(comissao_real.toFixed(2))
        $('#campo_taxa_cartao_real').html(taxa_cartao_real.toFixed(2))
        $('#campo_imposto_real').html(imposto_real.toFixed(2))
        $('.campo_lucro_porc').html(lucro_por.toFixed(0) + '%')

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
        } else if ($(this).attr('id') == 'imposto') {
            imposto = parseFloat($(this).val()) / 100;
        } else if ($(this).attr('id') == 'comissao') {
            comissao = parseFloat($(this).val()) / 100;
        } else if ($(this).attr('id') == 'lucro_procentagem') {
            lucro = parseFloat($(this).val()) / 100;
        } else if ($(this).attr('id') == 'descolamento') {
            descolamento = parseFloat($(this).val()) * 1.2;
        } else if ($(this).attr('id') == 'alimentacao') {
            alimentacao = parseFloat($(this).val());
        } else if ($(this).attr('id') == 'valor_selecionar' && $('.dados select').val() === '1') {
            boleto = parseFloat($(this).val());
            taxa_cartao = 0
        } else if ($(this).attr('id') == 'valor_selecionar' && $('.dados select').val() === '2') {
            taxa_cartao = parseFloat($(this).val()) / 100;
            boleto = 0
        } else if ($(this).attr('id') == 'material_direto') {
            material_direto = parseFloat($(this).val());
        }
        calc_dado();
    });

    $('.dados select').on('change', function () {
        if ($(this).val() === '1') {
            $('#valor_selecionar').attr('placeholder', 'Taxa do Boleto:')
        } else if ($(this).val() === '2') {
            $('#valor_selecionar').attr('placeholder', 'Taxa do Cartão:')
        } else {
            $('#valor_selecionar').attr('placeholder', '')
        }
    })

})