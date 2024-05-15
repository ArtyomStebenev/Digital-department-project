export async function deleteMusic(key) {
    try{
        await fetch('http://localhost:3000/music/' + key, {method:"Delete"});

        return 'status 204';
    }
    catch(ex){ throw new Error(ex); }
}
/* {
      "id": 0,
      "nameOfBand": "The Beatles",
      "album": "The White Album",
      "year": 1968
    },
    {
      "id": 1,
      "nameOfBand": "Nirvana",
      "album": "Nevermind",
      "year": 1991
    },
    {
      "id": 2,
      "nameOfBand": "Queen",
      "album": "A Night At The Opera",
      "year": 1975
    },
    {
      "nameOfBand": "John Lennon",
      "album": "Plastic Ono Band",
      "year": 1970,
      "id": "5f0c"
    }, 
    {
      "nameOfBand":	"Pink floyd",
      "album":	"The Dark Side of the Moon",
      "year":	1973,
      "id":	"089a"
    }   
*/