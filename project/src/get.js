export async function getMusicList() {
    try{
      let music;

      return await fetch('http://localhost:3000/music', {method:"Get"})
      .then((response) => response.json()  
      .then(array => {
        music = array;
        console.log(music);
        //return music;
      }))
      .catch((error) => { console.error("Ошибка: " + error.message); });


      /* const response = await fetch('http://localhost:3000/music', {method:"Get"});

      const music = await response.json();

      //music.then((array) => { console.log("Результат:" + array); }); */

      //return await music; 
    }
    catch(ex){ console.log(ex); }
}
