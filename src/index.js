// fetch character info
fetch("http://localhost:3000/names")
    .then((resp) => resp.json())
    .then((data) => renderChars(data))

function renderChars(characters) {
    const div = document.querySelector('#character-detail')

    characters.forEach((character) => {

        const charDiv = document.createElement('div')

        // create and render p tag for full name
        const name = document.createElement('p')
        name.textContent = character.first + " " + character.last
        charDiv.appendChild(name)

        // create and render image with alt text
        const img = document.createElement('img')
        img.src = character.image
        img.alt = `picture of ${character.first} ${character.last}`
        charDiv.appendChild(img)

        // create and render likes initialized to zero
        const likes = document.createElement('div')
        likes.textContent = character.likes
        likes.style.color = 'red'
        likes.addEventListener('click', incrementLikes)
        charDiv.appendChild(likes)

        function incrementLikes(e) {
            // perform PATCH request to character's ID
            // pessmimistically update character's likes on page
            const newLikesObj = {"likes" : parseInt(likes.textContent) + 1}

            fetch(`http://localhost:3000/names/${character.id}`,
            {
                method : 'PATCH',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(newLikesObj)
            })
            .then((resp) => resp.json())
            .then((data) => likes.textContent = data.likes) // renders character's PATCHed likes to page
        }

        // add delete button to character
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = `Delete ${character.first} ${character.last}`
        deleteBtn.addEventListener('click', deleteChar)
        charDiv.appendChild(deleteBtn)
        
        function deleteChar(e) {
            // perform DELETE request to character's ID
            // pessmimistically remove character from page
            fetch(`http://localhost:3000/names/${character.id}`,
            {
                method: 'DELETE'
            })
            .then((resp) => resp.json())
            .then((data) => charDiv.remove()) // removes character's div
        }

        div.appendChild(charDiv)

        })
}