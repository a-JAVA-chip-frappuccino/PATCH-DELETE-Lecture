// fetch character info
fetch("http://localhost:3000/names")
    .then((resp) => resp.json())
    .then((data) => renderChars(data))

function renderChars(characters) {
    const div = document.querySelector('#character-detail')

    characters.forEach((character) => {

        // create and render p tag for full name
        const name = document.createElement('p')
        name.textContent = character.first + " " + character.last
        div.appendChild(name)

        // create and render p tag for email
        const email = document.createElement('p')
        email.textContent = character.email
        div.appendChild(email)

        // create and render image with alt text
        const img = document.createElement('img')
        img.src = character.image
        img.alt = `picture of ${character.first} ${character.last}`
        div.appendChild(img)

    })
}