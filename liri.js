require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var op = process.argv[2];
var input = process.argv[3];
switch (op) {
    case "concert-this":

    case "spotify-this-song":
        spotify.search({type: 'track',query: input},(err,data) => {
            if(err)
            {
                return console.log("Error Occured : " + err);
            }
           
        })
    case "movie-this":
        if(input === undefined)
        {
            input = "Mr. Nobody"
        }
        let queryURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
        axios.get(queryURL).then(
            response => {
                // console.log(response.data);
                console.log("----------Title----------");
                console.log(response.data.Title);
                console.log("----------Release Year----------");
                console.log(response.data.Year);
                console.log("----------IMDB Rating----------");
                console.log(response.data.Ratings[0].Value);
                console.log("---------Rotten Tomatoes Rating---------");
                console.log(response.data.Ratings[1].Value);
                console.log("----------Country of Origin----------");
                console.log(response.data.Country);
                console.log("----------Plot Summary----------");
                console.log(response.data.Plot);
                console.log("----------Actors----------");
                console.log(response.data.Actors);
            }
        )
    case "do-what-it-says":

    default:
        // console.log(undefined);
}
