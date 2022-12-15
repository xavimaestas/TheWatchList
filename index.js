const search = document.getElementById("search-btn")
const title = document.getElementById("title")
const rating = document.getElementById("rating")
const year = document.getElementById("year")
const genre = document.getElementById("genre")
const description = document.getElementById("movie-description")
const movieImg = document.getElementById("movie-img")
const watchLink = document.getElementById("watch-movie")



    search.addEventListener("click", () => {
        const input = document.getElementById("search-input").value
        fetch(`https://www.omdbapi.com/?s=${input}&apikey=88e64e6b&s`)
        .then(result => result.json())
        .then(data => {
            console.log(data)
            console.log(data.Search[0].Title)
            console.log(data.Title)
            // movie block HTML

            for(let movie = 0; movie < 5; movie ++){
            document.getElementById("movie-block").innerHTML += `
            <div id="text-block">
            <div id="title-rating-div">
                <h2 id="title">${data.Search[movie].Title}</h2>
                <p id="year">${data.Search[movie].Year}</p>
            </div>

            <div id="genre-runtime-div">
                
                <p id="genre">${data.Search[movie].Genre}</p>
                <button id="watchlist-btn">add to watchlist</button>
                <div id="watch-movie"><a href="https://vidsrc.me/embed/${data.Search[movie].imdbID}/" target="_"><p>Watch Movie</p></a></div>
            </div>

            <div id="description-div">
                <p id="movie-description">${data.Search[movie].Plot}</p>
            </div>
        </div>

        <img src="${data.Search[movie].Poster}" id="movie-img">
        `
            }   
// insert other fetch here that grabs other info that fetch can't 
        
        })
        
    })


    // 



