const selectTamanho = document.getElementById('tamanho');
const checkboxesAdicionais = document.querySelectorAll('.adicional');
const txtTotal = document.getElementById('valor-total');

function calcularTotal() {
    let base = parseFloat(selectTamanho.value);
    let adicionais = 0;

    checkboxesAdicionais.forEach(checkbox => {
        if (checkbox.checked) {
            adicionais += parseFloat(checkbox.value);
        }
    });

    let total = base + adicionais;
    txtTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Ouvir mudanças nos campos do formulário
selectTamanho.addEventListener('change', calcularTotal);
checkboxesAdicionais.forEach(checkbox => {
    checkbox.addEventListener('change', calcularTotal);
});
