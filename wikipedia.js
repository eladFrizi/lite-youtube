'use-strict'

function renderWiki(term){
    axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${term}&limit=5`)
    .then(function(res) {
        console.log(res.data);
        document.querySelector('.wikis').innerHTML = createWIkiHTML(res.data)
    })
}

function createWIkiHTML(wikis){
    strHtml = ''
    for (var i = 0; i < wikis[1].length; i++){
      strHtml += "<div><div class='btn-default'><a href="+wikis[3][i]+"><h2>" + wikis[1][i]+ "</h2>" + "<p>" + wikis[2][i] + "</p></a></div></div>"
    }
    return strHtml
}

