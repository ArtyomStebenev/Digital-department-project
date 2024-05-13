export async function getMusicList() {
    try{
      const data = await fetch('http://localhost:3000/music', {method:"Get"});

      let music = await data.json();
      console.log(music);

      return 'status 200';
    }
    catch(ex){ throw new Error(ex); }
}
