const search = document.getElementById("search-btn")
const title = document.getElementById("title")
const rating = document.getElementById("rating")
const year = document.getElementById("year")
const genre = document.getElementById("genre")
const description = document.getElementById("movie-description")
const movieImg = document.getElementById("movie-img")
const watchLink = document.getElementById("watch-movie")
let movieArray = []



    // Promise.all([
    //     fetch("https://www.omdbapi.com/?s=${input}&apikey=88e64e6b&s").then(res => res.json),
    //     fetch("https://www.omdbapi.com/?t=${input}&apikey=88e64e6b&s").then(res => res.json)
    //     // data.Search[movie].Title
    // ]).then(movies => console.log(movies))

    
    
        



    // search.addEventListener("click", () => {


        // const input = document.getElementById("search-input").value
        // let urls = [
        //     `https://www.omdbapi.com/?s=${input}&apikey=88e64e6b&s`,
        //     `https://www.omdbapi.com/?t=${input}&apikey=88e64e6b&s`
        // ]
        //     const fetchData = async () => {
        //         try {
        //         const response = await Promise.all(
        //             urls.map(url => fetch(url).then(res => res.json()))
        //         ).then(data => {
        //             console.log(data)
        //             for(let movie = 0; movie < 5; movie ++){
        //                 let imd = data[0].Search[movie].imdbID
        //                 document.getElementById("movie-block").innerHTML += `
        //                                 <div id="text-block">
        //                                 <div id="title-rating-div">
        //                                     <h2 id="title">${data[0].Search[movie].Title}</h2>
        //                                     <p id="year">${data[2].Actors}</p>
        //                                 </div>`
        //                                 movieArray.push(data[0].Search[movie].Title)
        //                                 console.log(movieArray)
        //             }

                
        //         })
        //         console.log(response)
        //         } catch (error) {
        //         console.log("Error", error)
        //         }
        //     } 
        //     fetchData()  
            
    // })


    function getSearch() {
       
        search.addEventListener("click", function(){
            const input = document.getElementById("search-input").value
            fetch(`https://www.omdbapi.com/?s=${input}&apikey=88e64e6b&s`)
                .then(res => res.json())
                .then(data => {
                    for(let movie = 0; movie < 5; movie ++){
                    console.log(data.Search[movie].Title)
                    movieArray.push(data.Search[movie].Title)
                    }
                })
                console.log(movieArray)
        })
        
    }

    const getData = async function(search){
        fetch(`https://www.omdbapi.com/?t=${input}&apikey=88e64e6b&s`)
        
    }

    getSearch()


    // 



    // fetch(`https://www.omdbapi.com/?s=${input}&apikey=88e64e6b&s`)
    //             .then(result => result.json())
    //             .then(data => {
                    
    //                 // movie block HTML
    //                 movieArray.push(data)
    
    //                 for(let movie = 0; movie < 5; movie ++){
                        
    //                 document.getElementById("movie-block").innerHTML += `
    //                 <div id="text-block">
    //                 <div id="title-rating-div">
    //                     <h2 id="title">${data.Search[movie].Title}</h2>
    //                     <p id="year">${data.Search[movie].Year}</p>
    //                 </div>
    
    //                 <div id="genre-runtime-div">
                        
    //                     <p id="genre">${data.Search[movie].Genre}</p>
    //                     <button id="watchlist-btn">add to watchlist</button>
    //                     <div id="watch-movie"><a href="https://vidsrc.me/embed/${data.Search[movie].imdbID}/" target="_"><p>Watch Movie</p></a></div>
    //                 </div>
    
    //                 <div id="description-div">
    //                     <p id="movie-description">${movieArray[0]}</p>
    //                 </div>
                   
    //             </div>
    
    //             <img src="${data.Search[movie].Poster}" id="movie-img">
    //             `
    
    //             fetch(`https://www.omdbapi.com/?t=${data.Search[movie].Title}&apikey=88e64e6b&s`)
    //                 .then(result => result.json())
    //                 .then(watch => {
    //                     movieArray.push(watch.Title)
    //                     for (let num of movieArray){
    //                         console.log(num)
    //                     }
    //                 })
    //             }   
    
    
    // // insert other fetch here that grabs other info that fetch can't 
            
    
                
    //         })