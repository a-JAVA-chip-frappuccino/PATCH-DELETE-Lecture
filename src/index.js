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
            // update character's likes on page
        }

        // add delete button to character
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = `Delete ${character.first} ${character.last}`
        deleteBtn.addEventListener('click', deleteChar)
        charDiv.appendChild(deleteBtn)

        function deleteChar(e) {
            // perform DELETE request to character's ID
            // remove character from page
        }

        div.appendChild(charDiv)

        })
}