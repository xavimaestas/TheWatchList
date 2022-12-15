const search = document.getElementById("search-btn")
const title = document.getElementById("title")
const rating = document.getElementById("rating")
const runtime = document.getElementById("runtime")
const genre = document.getElementById("genre")
const description = document.getElementById("movie-description")
const movieImg = document.getElementById("movie-img")
const watchLink = document.getElementById("watch-movie")
const tomatoImg ="tomato.png"


    search.addEventListener("click", () => {
        const input = document.getElementById("search-input").value
        fetch(`http://www.omdbapi.com/?t=${input}&apikey=88e64e6b&s`)
        .then(result => result.json())
        .then(data => {
            console.log(data)
            console.log(data.imdbID)
            console.log(data.Title)
            console.log(data.Ratings[1].Value)
            title.textContent = data.Title
            rating.innerHTML = `
            <img id="tomatoImg" src=${tomatoImg}>${data.Ratings[1].Value}`
            runtime.textContent = data.Runtime
            genre.textContent = data.Genre
            description.textContent = data.Plot
            movieImg.src = data.Poster
            watchLink.innerHTML = `
            <a href="https://vidsrc.me/embed/${data.imdbID}/" target="_"><p>Watch Movie</p></a>`

           
        })
        console.log("what")
    })


    // 



