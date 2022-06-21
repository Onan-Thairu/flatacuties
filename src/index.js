

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

    //grab the voting form by ID 
    let votesForm = document.getElementById("votes-form")

    votesForm.addEventListener('submit', (e) =>{
        e.preventDefault(); //prevents the page from reloading when submit is clicked
        addVote(e.target.votes.value) //the value in the input box is passed as an argument to the function
        votesForm.reset() //input box becomes blank on submit click
    })
   

function addVote(voteCount){
    document.getElementById('vote-count').innerHTML = `${voteCount}`
}

