const btnConverter = document.getElementById('converter');

btnConverter.addEventListener('click', () => {

    const valorEmReal = document.getElementById('valor-inserido').value;

    if(!isNaN(valorEmReal)) {
        const resultado = document.getElementById('resultado')
        const taxaCambio = 5.224;
        const valorEmDolar = valorEmReal / taxaCambio;
        valorEmDolar.toFixed(2);
        const formatandoParaDolar = valorEmDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        const valorEmRealFormatado = Number(valorEmReal).toFixed(2).replace('.', ',');
        resultado.innerHTML = `<div class="real">
                                    <img src="./assets/brasil 2.png" alt="">
                                    <p>Real</p>
                                    <span>R$${valorEmRealFormatado}</span>
                                </div>
                                <div class="seta">
                                    <img src="./assets/Vector.png" alt="">
                                </div>
                                <div class="dolar">
                                    <img src="./assets/estados-unidos (1) 1.png" alt="">
                                    <p>Dólar Americano</p>
                                    <span>US${formatandoParaDolar}</span>
                                </div>`;
    } else {
        alert('[ERRO] Coloque um valor válido!');
    }

});

