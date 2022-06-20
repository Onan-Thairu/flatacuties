const baseUrl = 'http://localhost:3000'



fetch( `${baseUrl}/characters`)
.then(response =>response.json())
.then(data => {
    let characterBar = document.querySelector('div#character-bar')
    data.forEach(char => {
        let spanTag = document.createElement('span')
        spanTag.textContent = char.name
        spanTag.addEventListener('click', () => {
            const name = document.querySelector('#name')
            name.textContent = char.name
            const img = document.querySelector('#image')
            img.src = char.image
        })
        characterBar.appendChild(spanTag)
    })
})

