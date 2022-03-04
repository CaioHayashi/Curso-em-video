function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    msg.innerHTML = `Agora são <strong>${hora} horas</strong>, <strong>${minuto} minutos</strong> e <strong>${segundo} segundos</strong>.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#e6c694'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        window.document.body.style.background = '#cb6748'
        //boa tarde
    } else {
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#22212d'
        // boa noite
    }
}