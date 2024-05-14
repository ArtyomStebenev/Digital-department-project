export async function getMusicList() {
    try{

      /* fetch('http://localhost:3000/music', {method:"Get"})
      .then((response) => response.json())
      .then((data) => { console.log("Результат: " + data); })
      .catch((error) => { console.error("Ошибка: " + error.message); }); */


      const response = await fetch('http://localhost:3000/music', {method:"Get"});

      const music = await response.json();

      //music.then((result) => { console.log("Результат:" + result); });

      return await music;
    }
    catch(ex){ console.log(ex); }
}
