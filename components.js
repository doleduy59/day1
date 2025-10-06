const loadCompoment = (elementId, idPath) => {
    fetch(idPath).then(res => {
        return res.text()
    }).then(toHTML => {
        document.getElementById(elementId).innerHTML = toHTML
    }).catch(err => {
        console.log(`lỗi tải html tai ${idPath}`)
    })
}