document.addEventListener("DOMContentLoaded", function () {
    const url = 'https://us-central1-squid-apis.cloudfunctions.net/test-front-basic'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let usuario = data;
            let tabela = document.getElementById("tabela")
            data.forEach(element => {
                let linha = crialinha(element);
                tabela.appendChild(linha)
            })
        })
});

function crialinha(usuario) {
    console.log(usuario)
    a = document.createElement("a")
    linha = document.createElement("div")
    tdimage = document.createElement("img")

    texto = document.createElement("tbody")
    icon1 = document.createElement("i")
    icon2 = document.createElement("i")
    icon3 = document.createElement("i")
    icon4 = document.createElement("i")
    tdimage.src = usuario.imagens['resolucaoPadrao'].url

    //imagem class
    tdimage.classList.add('col-xs-12', 'img-post')

    //div class
    linha.classList.add('margin-right', 'hover')

    //Texto class
    texto.classList.add('text-style')

    //icon class
    icon2.classList.add('fa', 'fa-heart', 'icon')
    icon4.classList.add('fa', 'fa-comment', 'icon')
    icon3.classList.add('fa', 'fa-calendar', 'icon')

    let nick = texto.insertRow()
    let like = texto.insertRow()
    let qtdComents = texto.insertRow()
    let dataHora = texto.insertRow()

    let date = new Date(usuario['criadoEm'])

    a.setAttribute('href', usuario['link'])
    a.setAttribute('target', '_blank')

    like.textContent = usuario['upvotes']
    nick.textContent = '@' + usuario['usuario'].username
    qtdComents.textContent = usuario['comentarios']
    dataHora.textContent = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2)
    like.appendChild(icon2)
    dataHora.appendChild(icon3)
    qtdComents.appendChild(icon4)

    linha.appendChild(tdimage)
    linha.appendChild(texto)
    a.appendChild(linha)

    return a
}
