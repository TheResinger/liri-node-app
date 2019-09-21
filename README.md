# liri-node-app

### movie-this

This command takes in the input of a movie name and will output
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

![Movie This 1](/assets/img/3RixgHJ.png)
![Movie This 2](/assets/img/fbgG98t.png)

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

### concert-this

This command takes in the input of a band name and will output 
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")
![Concert This 1](/assets/img/0NToIZj.png)

### spotify-this

**In order for this to work you need to get your spotify api keys**
* Step One: Visit <https://developer.spotify.com/my-applications/#!/>
* Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
* Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
* Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

This command takes in the input of a song tile and will output
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

![Spotify This 1](/assets/img/SetEfH1.png)


### do-what-it-says

This command reads the file "random.txt" in the root directory and does one of the above commands based on whats inside the file.

![Spotify This 1](/assets/img/6nVEUAB.png)
