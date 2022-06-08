//CLASS FOR PLAYER'
class Player {
    constructor(album) {
    //initialize new empty array to store each item that's been played
    this._albums = []
    }
    //create public method called add album responsible for adding albums into array
    addAlbum = function(album) {
        this._albums.push(album)
    }
    albumPlayedMost = function() {
        //create private variables
        let max = -1
        let playedMost
        //loop through albums array
        for (let i = 0; i < this._albums.length; i++) {
            if (this._albums[i]._played > max) {
                max = this._albums[i]._played
                playedMost = this._albums[i]
            }
        }
        return playedMost.display()
    }
}

//CLASS FOR EACH ALBUM
class Album {
    constructor(artist, title, path) { //HOMEWORK
        //create 3 public variables
        this._artist = artist
        this._title = title
        this._path = path //HOMEWORK
        this._played = 0
    }
    //create method to increase play variable by 1
    play = function() {
        this._played++
        //this is where you would really play the song based on the 
        //HOMEWORK
        
    }
    //create another method to display album played most
    display = function() {
        return `${this._artist}: ${this._title} has been played the most. The album has been played ${this._played} times.`
    }
}

//create new instance of player
const player = new Player()

//create new instance of album
const album1 = new Album('Green Day', 'Dookie','pass in path to file like /music/greenday/dookie/song1.mp3') //HOMEWORK
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('Metallica','Ride The Lightning')

//add 3 albums to player
player.addAlbum(album1)
player.addAlbum(album2)
player.addAlbum(album3)

album1.play()
album2.play()
album2.play()
album3.play()
album3.play()
album3.play()
album3.play()
album3.play()
album3.play()


console.log(`${player.albumPlayedMost()}`)