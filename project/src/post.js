export async function postMusic(value) {
    try{
        //value: ['id', 'nameOfBand', 'album', 'year'];

        const data = await fetch('http://localhost:3000/music', //+ JSON.stringify(20, value.nameOfBand, value.album, value.year), 
            {
            method:"Post",
            headers:{"Content-Type": 'application/json'},
            body: JSON.stringify({'id': 20, 'nameOfBand':value.nameOfBand, 'album':value.album, 'year':value.year }) 
        });
                


        let music = await data.json();
        console.log(music);
        return 'status 204';
    }
    catch(ex){ throw new Error(ex); }
    
}
    //{'id': 20, 'nameOfBand':value.nameOfBand, 'album':value.album, 'year':value.year }