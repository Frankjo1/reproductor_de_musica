let contenedor = document.querySelector('#track-list')
console.log(contenedor)   


axios.get('https://leonardoapi.onrender.com/music')
    .then( (res) => {


        res.data.map( (song) => {//  console.log(song)
            
            let div = document.createElement('div')
            div.classList.add('musica')

            div.innerHTML =`
            <img class="album" src="${song.path.front}" alt="">
            <div>
                <h2 class="cancion">${song.title}</h2>
                <p class="autores">${song.author}</p>
            </div>`

            div.addEventListener('click', () => {

                // clase siguiente ponemos A
                console.log(`El usuario hizo click en ${song.title}`)
            })

            contenedor.appendChild(div)


        } )

    } )