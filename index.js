const movieSearch = document.getElementById("movie-search-btn")
const tvSearch = document.getElementById("tv-search-btn")
const title = document.getElementById("title")
const rating = document.getElementById("rating")
const year = document.getElementById("year")
const genre = document.getElementById("genre")
const description = document.getElementById("movie-description")
const movieImg = document.getElementById("movie-img")
const watchLink = document.getElementById("watch-movie")
let html = document.getElementById("movie-block")
let movieArray = []
let tvArray = []

// movie search functions

    
       
        movieSearch.addEventListener("click", function(){
            html.innerHTML = ""
            let movieInput = document.getElementById("movie-search-input").value
            fetch(`https://www.omdbapi.com/?s=${movieInput}&apikey=88e64e6b&s`)
                .then(res => res.json())
                .then(data => {
                    for(let movie = 0; movie < 10; movie ++){
                    
                    movieArray.push(data.Search[movie].Title)
                        console.log(data)
                        // console.log(movieArray)
                    }
                    getMovieData()
                    
                })    
             })
        


    async function getMovieData(){
        for(let movie = 0; movie < 10; movie ++){
            const response = await fetch(`https://www.omdbapi.com/?apikey=88e64e6b&s&t=${movieArray[movie]}`)
            const search = await response.json()
            if(search.Type === "series"){
                let link = ""
            }

            html.innerHTML += `
            <div id="movie-container">
                <div id="text-block">
                    <div id="title-rating-div">
                        <h2 id="title">${search.Title}</h2>
                        <div id="rating-div">
                            <img src="star-gdd53b510b_640.png" id="review-img">
                            <p id="rating">${search.Ratings[0].Value}</p>
                        </div>
                    </div>

                    <div id="genre-link-div">
                        <p id="runtime">${search.Runtime}</p>
                        <p id="genre">${search.Genre}</p>
                        <button id="watchlist-btn">add to watchlist</button>
                        
                    </div>

                    <div id="description-div">
                        <p id="movie-description">${search.Plot}</p>
                        <div id="watch-movie"><a href="https://vidsrc.me/embed/${search.imdbID}/" target="_">
                        <p>Watch Movie</p></a>
                        <form id="season-input">
                            <label for="quantity">Enter Season and Episode #, e.g. Season 1 Episode 2: Enter 12 </label>
                            <input type="number" id="quantity" name="quantity" min="1" max="5">
                            <input type="submit" value="Submit">
                        </form>
                        </div>
                        
                    </div>
                </div>
                <img src="${search.Poster}" id="movie-img">
            </div>
            <hr> 
            `
            

            // movieGenreArray.push(movieRatingArray[movie].Genre)
            // console.log(search)
            // console.log(movieGenreArray)
            // console.log(search.Genre)
            // console.log(search.imdbID)
            // console.log(search.Poster)
            console.log(search.Type)
            
        }
        movieArray = []
        
    }

   
       
    


 
    
   





