require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var op = process.argv[2];
var input = process.argv[3];

const concertThis = input => {
  if (input === undefined)
  {
    input = "A Day To Remember";
  }
  let queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
  axios.get(queryURL).then(response => {
    var data = response.data;
    for(var i = 0; i < data.length; i++)
    {
      console.log("----------Venue----------");
      console.log("Venue Name : " + data[i].venue.name + " | " + "Venue Country : " + data[i].venue.country + " |  Venue City : " + data[i].venue.city + " | Date/Time " + data[i].datetime);
    }
  });
};

const spotifyThisSong = input => {
  spotify.search({ type: "track", query: input }, (err, data) => {
    if (err) {
      return console.log("Error Occured : " + err);
    }
    var i = 0;
    var returned = data.tracks.items;
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

const doThis = () => {
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
