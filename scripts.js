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

function crialinha(usuario){
    console.log(usuario)
    linha = document.createElement("div")
    tdimage = document.createElement("img")
    tdimage.src = usuario.imagens['resolucaoPadrao'].url
    tdimage.innerHTML = tdimage.src

    linha.appendChild(tdimage)

    return linha
}
