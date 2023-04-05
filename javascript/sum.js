
 function sum(){
let sum = 0;
const urls = ['/Completed/C_af.html', '/Completed/C_gl.html','/Completed/C_mq.html','/Completed/C_rt.html','/Completed/C_uz.html','/Ongoing/O_af.html','/Ongoing/O_gl.html','/Ongoing/O_mq.html','/Ongoing/O_rs.html','/Ongoing/O_tz.html','/Dropped/D_af.html','/Dropped/D_gl.html','/Dropped/D_mq.html','/Dropped/D_rt.html','/Dropped/D_uz.html'];

Promise.all(urls.map(url => fetch(url).then(response => response.text())))
  .then(htmls => {
    htmls.forEach(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const mangaAnzahlElements = doc.querySelectorAll('.manga-anzahl');
      mangaAnzahlElements.forEach((element) => {
        sum += parseInt(element.textContent);
      });
    });
    document.getElementById("manga_title").innerHTML ='Anzahl an gesammelten Manga: '+sum ;
  
  })
  .catch(error => console.error(error));

}sum();