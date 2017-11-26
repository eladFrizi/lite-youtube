'use-strict'
async function searchPressed() {
    event.preventDefault()
    searchValue = event.target.querySelector('input').value
    var videos = await searchVideos(searchValue) 
    renderVideos(videos) 
    renderWiki(searchValue)    
}


async function initApp() {
    console.log('in the  run')
    var videos = await searchVideos('the beatles')
    renderVideos(videos)
    changePlayedVideo(videos[0].id.videoId)
    renderWiki('the beatles')    
}
