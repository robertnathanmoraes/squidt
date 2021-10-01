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

function crialinha(item){
    console.log(item)
    linha = document.createElement("div")

    linha.classList.add('col-1')
    linha.classList.add('display-contents')

    tdimage = document.createElement("img")
    tdimage.src = item.imagens['resolucaoPadrao'].url

    tdimage.classList.add('margin-image')
    tdimage.classList.add('hover')

    like = document.createElement('p')
    like.textContent = item.upvotes

    like.classList.add('hover')
    like.classList.add('text')


    linha.appendChild(tdimage)
    linha.appendChild(like)

    return linha
}
