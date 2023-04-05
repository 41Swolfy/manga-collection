let sum = 0;
const urls = ['/Completed/c_af', '/Completed/c_gl','/Completed/c_mq','/Completed/c_rt','/Completed/c_uz','/Ongoing/o_af','/Ongoing/o_gl','/Ongoing/o_mq','/Ongoing/o_rs','/Ongoing/o_tz','/Dropped/d_af','/Dropped/d_af','/Dropped/d_gl','/Dropped/d_mq','/Dropped/d_rt','/Dropped/d_uz'];

urls.forEach(url => {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const mangaAnzahlElements = doc.querySelectorAll('.manga-anzahl');
        mangaAnzahlElements.forEach((element) => {
          sum += parseInt(element.textContent);
        });
      })
      .catch(error => console.error(error));
  });
  
  console.log(sum);