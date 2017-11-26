'use-strict'
async function searchPressed() {
    event.preventDefault()
    searchValue = event.target.querySelector('input').value
    var videos = await searchVideos(searchValue) 
    var singers = await searchSingers(searchValue)
    renderPossibleSingers(singers)
    renderVideos(videos) 
}


async function initApp() {
    console.log('in the  run')
    var videos = await searchVideos('the beatles')
    var singers = await searchSingers('the beatles')
    renderVideos(videos)
    changePlayedVideo(videos[0].id.videoId)
    renderPossibleSingers(singers)    
}
