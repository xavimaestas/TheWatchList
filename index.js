const movieSearch = document.getElementById("movie-search-btn")
const tvSearch = document.getElementById("tv-search-btn")
let title = document.getElementById("title")
const rating = document.getElementById("rating")
const year = document.getElementById("year")
const genre = document.getElementById("genre")
const description = document.getElementById("movie-description")
const movieImg = document.getElementById("movie-img")
let watchLink = document.getElementById("watch-movie")
let html = document.getElementById("movie-block")
let watchlistHtml = document.getElementById("watchlist-block")
let tvLink = document.getElementById("tv-link")
let movieArray = []
let watchlistArray = []
let watchlistDisplay = []
let tvArray = []
let season
let episode
let clicked



   
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
                    watchlistArray.push(data.Search[movie])
                        // console.log(watchlistArray)
                        // console.log(movieArray)
                    }
                    getMovieData()
                    
                })    
             })
        


    async function getMovieData(){
        for(let movie = 0; movie < 5; movie ++){
            const response = await fetch(`https://www.omdbapi.com/?apikey=88e64e6b&s&t=${movieArray[movie]}`)
            const search = await response.json()
            let tvEpisode = `${season}-${episode}`
            let watchlistID = "button"+movie
            
            

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
                        <button class="watchlist-btn" id="${watchlistID}" type="button">add to watchlist</button>
                        
                    </div>

                    <div id="description-div">
                        <p id="movie-description">${search.Plot}</p>

                        <div id="link-list">

                            <div id="watch-movie"><a href="https://vidsrc.me/embed/${search.imdbID}" target="_">
                            <p>Watch Movie</p></a>
                            </div>

                            <div id="tv-link"><a href="https://vidsrc.me/embed/${search.imdbID}/${tvEpisode}" target="_">
                            <p>Watch Movie</p></a>
                            </div>

                        </div> 

                        <label for="season">Enter Season #</label>
                        <input type="number" id="season" name="season" min="1" max="15">
                        <label for="episode">Enter Episode # </label>
                        <input type="number" id="episode" name="season" min="1" max="15">
                        <button id="season-submit">submit</button>
                        
                    </div>
                </div>
                <img src="${search.Poster}" id="movie-img">
            </div>
            <hr> 
            `
           document.getElementById("button"+movie).addEventListener("click", function(){
            console.log("click")
           })
           
            
        
          
        }
        movieArray = []
      

       
        
        


        
    }



    

   
   
       
    


 
    
   





