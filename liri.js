require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var op = process.argv[2];
var input = process.argv[3];

const concertThis = input => {};

const spotifyThisSong = input => {
  spotify.search({ type: "track", query: input }, (err, data) => {
    if (err) {
      return console.log("Error Occured : " + err);
    }
    var i = 0;
    var returned = data.tracks.items;
    var http = require("http");

    var app = http.createServer(function(req, res) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(returned, null, 3));
    });
    app.listen(3000);
    for (i = 0; i < returned.length; i++)
    {
      console.log("----------Artist Name----------");
      console.log(data.tracks.items[i].artists[0].name);
      console.log("----------Song Name----------");
      console.log(data.tracks.items[i].name);
      console.log("----------Album Name----------");
      console.log(data.tracks.items[i].album.name);
      console.log("----------Preview Link----------");
      console.log(data.tracks.items[i].preview_url);
    }
  });
};

const movieThis = input => {
  if (input === undefined) {
    input = "Mr. Nobody";
  }
  let queryURL =
    "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
  axios.get(queryURL).then(response => {
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
  });
};

const doThis = input => {
  fs.readFile("random.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);
    switch (dataArr[0]) {
      case "spotify-this-song":
        spotifyThisSong(dataArr[1]);
        break;
      case "concert-this":
        concertThis(dataArr[1]);
        break;
      case "movie-this":
        movieThis(dataArr[1]);
        break;
      default:
        console.log(undefined);
    }
  });
};
switch (op) {
  case "movie-this":
    movieThis(input);
    break;
  case "concert-this":
    concertThis(input);
    break;
  case "spotify-this-song":
    spotifyThisSong(input);
    break;
  case "do-what-it-says":
    doThis();
    break;
}
