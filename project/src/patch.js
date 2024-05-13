export async function patchMusic(key, value) {
    try{
        const data = await fetch('http://localhost:3000/music' + key, 
        {
            method:"Patch",
            headers:{"Content-Type": 'application/json'},
            body: JSON.stringify(value)
        });

        let music = await data.json();
        
        console.log(music);

        return 'status 201';
    }
    catch(ex){ throw new Error(ex); }
}