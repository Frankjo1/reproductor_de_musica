let contenedor = document.querySelector('#track-list')
console.log(contenedor)   


axios.get('https://leonardoapi.onrender.com/music')
    .then( (res) => {


        res.data.map( (song) => {//  console.log(song)
            
            let div = document.createElement('div')
            div.classList.add('musica')

            div.addEventListener(`click`, () => {

                console.log(`hizo click`)

                document.querySelector(`#current-song-title`).
                innerHTML = song.title

                document.querySelector(`#current-song-author`).
                innerHTML = song.author

                document.querySelector(`#current-song-img`).
                setAttribute(`src`, song.path.front)

                
                document.querySelector(`#current-song-audio`).
                setAttribute(`src`, song.path.audio)
          
            })

            div.innerHTML +=`
                <img class="album" src="${song.path.front}" alt="">
                <div>
                    <h2 class="cancion">${song.title}</h2>
                    <p class="autores">${song.author}</p>
                </div>`

            contenedor.appendChild(div)


        } )

    } )