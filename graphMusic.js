const GM_KEY = '325dbb09f70dfd64fc45f4505b18a73e'

// http://api.musicgraph.com/api/v2/artist/search?api_key=c8303e90962e3a5ebd5a1f260a69b138&similar_to=Pearl+Jam
function searchSingers(value) {
    const url = `http://api.musicgraph.com/api/v2/artist/search?api_key=${GM_KEY}&name=${value}`
    return axios.get(url).then(res => res.data.data)
}

function renderPossibleSingers(singers) {
    console.log(singers)
    var elList = document.querySelector('.possible-singers')
    if (singers.length) {
        elList.innerHTML = singers.map(singer => `<li>${singer.name}</li>`).join('')
        console.log(elList)
    } else {
        elList.innerHTML = '<h2>no one was found</h2>'
    }
}

