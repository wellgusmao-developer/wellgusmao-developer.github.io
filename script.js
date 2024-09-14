function calcularTempo() {
    var dataInicial = new Date(document.getElementById("dataInicial").value);
    var dataFinal = new Date(document.getElementById("dataFinal").value);
    var errorMessageElement = document.getElementById("errorMessage");

    // Limpar mensagens de erro anteriores
    errorMessageElement.innerHTML = "";

    if (isNaN(dataInicial) || isNaN(dataFinal)) {
        errorMessageElement.innerHTML = "Por favor, insira datas válidas.";
        // Exibir o modal depois de definir a mensagem de erro
        var errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
        errorModal.show();
        return;
    }

    if (dataFinal <= dataInicial) {
        errorMessageElement.innerHTML = "A data do pedido da reserva deve ser posterior à data de inclusão.";
        // Exibir o modal depois de definir a mensagem de erro
        var errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
        errorModal.show();
        return;
    }

    var averbacaoAnos = parseInt(document.getElementById("averbacaoAnos").value) || 0;
    var averbacaoMeses = parseInt(document.getElementById("averbacaoMeses").value) || 0;
    var averbacaoDias = parseInt(document.getElementById("averbacaoDias").value) || 0;

    var totalDias = Math.floor((dataFinal - dataInicial) / (1000 * 60 * 60 * 24));

    // Adiciona o tempo de averbação ao total de dias
    totalDias += averbacaoAnos * 365 + averbacaoMeses * 30 + averbacaoDias;

    // Ajuste para o cálculo correto de anos e meses
    var anosTotais = Math.floor(totalDias / 365);
    var mesesTotais = Math.floor((totalDias % 365) / 30);
    var diasTotais = (totalDias % 365) % 30;

    var tempoDeServicoElement = document.getElementById("tempoDeServico");
    tempoDeServicoElement.innerHTML = anosTotais + " anos, " + mesesTotais + " meses, " + diasTotais + " dias";
}

// Função para ajustar a data final com base na data inicial
document.getElementById("dataInicial").addEventListener("change", function() {
    var dataInicial = document.getElementById("dataInicial").value;
    document.getElementById("dataFinal").setAttribute("min", dataInicial);
});
