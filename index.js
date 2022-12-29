const movieSearch = document.getElementById("movie-search-btn")
const tvSearch = document.getElementById("tv-search-btn")
const title = document.getElementById("title")
const rating = document.getElementById("rating")
const runtime = document.getElementById("runtime")
const genre = document.getElementById("genre")
const description = document.getElementById("movie-description")
const movieImg = document.getElementById("movie-img")
const watchLink = document.getElementById("watch-movie")
let html = document.getElementById("movie-block")
let movieArray = []
let tvArray = []




   
// movie search functions

    
       
        movieSearch.addEventListener("click", function(){
           movieArray = []
            html.innerHTML = ""
            let movieInput = document.getElementById("movie-search-input").value
            fetch(`https://www.omdbapi.com/?s=${movieInput}&apikey=88e64e6b&s`)
                .then(res => res.json())
                .then(data => {
                    for(let movie = 0; movie < 5; movie ++){
                    
                    movieArray.push(data.Search[movie].Title)
                        // console.log(data)
                        console.log(movieArray)
                    }
                    getMovieData()
                    
                })    
             })
        


    async function getMovieData(){
        for(let movie = 0; movie < 5; movie ++){
            const response = await fetch(`https://www.omdbapi.com/?apikey=88e64e6b&s&t=${movieArray[movie]}`)
            const search = await response.json()

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
                      
                            <label for="season">Enter Season #</label>
                            <input type="number" id="season" name="season" min="1" max="15">
                            <label for="episode">Enter Episode # </label>
                            <input type="number" id="episode" name="season" min="1" max="15">
                            <button id="season-submit">submit</button>
                       
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
            document.getElementById("season-submit").addEventListener("click", function(){
                console.log("submit")
            })
        
            document.getElementById("watchlist-btn").addEventListener("click", function(){
            console.log("watchlist")  
                })
            
        }
        movieArray = []
      
        console.log(movieArray)
        
    }

   
   
       
    


 
    
   





