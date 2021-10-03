document.addEventListener("DOMContentLoaded", function () {

    const url = 'https://us-central1-squid-apis.cloudfunctions.net/test-front-basic'

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let usuario = data;
            let tabela = document.getElementById("tabela")

            data.forEach(element => {
                let item = create(element);
                tabela.appendChild(item)
            })

        })
});

function create(items) {

    a = document.createElement("a")
    linha = document.createElement("div")
    image = document.createElement("img")

    texto = document.createElement("tbody")
    iconLike = document.createElement("i")
    iconComment = document.createElement("i")
    iconCalendar = document.createElement("i")
    image.src = items.imagens['resolucaoPadrao'].url

    //imagem class
    image.classList.add('col-xs-12', 'img-post')

    //div class
    linha.classList.add('margin-right', 'hover')

    //Texto class
    texto.classList.add('text-style')

    //icon class
    iconLike.classList.add('fa', 'fa-heart', 'icon')
    iconComment.classList.add('fa', 'fa-comment', 'icon')
    iconCalendar.classList.add('fa', 'fa-calendar', 'icon')

    let nick = texto.insertRow()
    let like = texto.insertRow()
    let qtdComents = texto.insertRow()
    let dataHora = texto.insertRow()

    let date = new Date(items['criadoEm'])

    a.setAttribute('href', items['link'])
    a.setAttribute('target', '_blank')

    like.textContent = items['upvotes']
    nick.textContent = '@' + items['usuario'].username
    qtdComents.textContent = items['comentarios']
    dataHora.textContent = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2)
    like.appendChild(iconLike)
    dataHora.appendChild(iconCalendar)
    qtdComents.appendChild(iconComment)

    linha.appendChild(image)
    linha.appendChild(texto)
    a.appendChild(linha)

    return a
}
