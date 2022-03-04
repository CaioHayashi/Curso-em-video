function contar() {
    // let inicio = document.getElementById('txti')
    // let fim = document.getElementById('txtf')
    // let passo = document.getElementById('txtp')
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('error')
        res.innerHTML = 'Impossivel calcular! Verifique os dados.'
    } else {
        res.innerHTML = 'Calculando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    }

    if (p <= 0) {
        alert('Passo Inválido! Considerando Passo = 1')
        p = 1
    }

    if (i < f) {
        //Contagem Crescente
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    } else {
        //Contagem Decrescente
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `
        }
    }
res.innerHTML += `\u{1F3C1}`
}