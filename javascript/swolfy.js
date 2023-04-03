function buildbody() {


    const body = document.getElementsByTagName('body')[0];

    const Main = document.createElement('div');// create a new div element and assign it to Main variable
    Main.setAttribute('id', 'Tsubasa-list-main');// set the id attribute to Tsubasa-list-main
    body.appendChild(Main);// append Main to the body element of the document


    const mangaMainArea = document.createElement('div');
    mangaMainArea.setAttribute('class', 'manga_mainArea');
    Main.appendChild(mangaMainArea);// appends mangaMainArea as child to mangaWrap


    const MainAreadiv = document.createElement('div');
    mangaMainArea.appendChild(MainAreadiv);// appends MainAreadiv as child to mangaMainArea

    const MainAreadivcontainerhead = document.createElement('div');
    MainAreadiv.appendChild(MainAreadivcontainerhead);// appends MainAreadivcontainerhead as child to MainAreadiv

    const MainAreadivcontainerscroll = document.createElement('div');
    MainAreadivcontainerhead.appendChild(MainAreadivcontainerscroll);// appends MainAreadivcontainerscroll as child to MainAreadivcontainerhead

    const MainAreadivcontainerinner = document.createElement('div');
    MainAreadivcontainerinner.setAttribute('class', 'tab-button_container');
    MainAreadivcontainerscroll.appendChild(MainAreadivcontainerinner);// appends MainAreadivcontainerinner as child to MainAreadivcontainerscroll

    const MainAreadivcontainerbutton = document.createElement('button');
    MainAreadivcontainerbutton.setAttribute('type', 'button');
    MainAreadivcontainerbutton.setAttribute('class', ' manga_button');
    MainAreadivcontainerinner.appendChild(MainAreadivcontainerbutton);// appends MainAreadivcontainerbutton as child to MainAreadivcontainerinner

    const MainAreadivcontainerspan = document.createElement('span');
    MainAreadivcontainerspan.setAttribute('class', 'button_label');
    MainAreadivcontainerspan.textContent = 'Bände';
    MainAreadivcontainerbutton.appendChild(MainAreadivcontainerspan);// appends MainAreadivcontainerspan as child to MainAreadivcontainerbutton

    const MainAreamangacontainer = document.createElement('div');
    MainAreamangacontainer.setAttribute('class', 'manga_container');
    MainAreadiv.appendChild(MainAreamangacontainer);// appends MainAreamangacontainer as child to MainAreadiv

    const MainAreamangacontainerstyle = document.createElement('div');
    MainAreamangacontainerstyle.setAttribute('style', 'display:block');
    MainAreamangacontainer.appendChild(MainAreamangacontainerstyle);// appends MainAreamangacontainerstyle as child to MainAreamangacontainer

    const MainAreamangacontainervolumes = document.createElement('div');
    MainAreamangacontainervolumes.setAttribute('class', 'manga_volume_size2 manga_volumes2');
    MainAreamangacontainerstyle.appendChild(MainAreamangacontainervolumes);// appends MainAreamangacontainervolumes as child to MainAreamangacontainerstyle



}
buildbody();



// Caching object
const cache = {};

async function fetchData(editions) {
  const data = [];

  // Make all API calls in parallel
  const responses = await Promise.all(editions.map(edition => {
    // Check if data exists in cache
    if (cache[edition]) {
      return Promise.resolve(cache[edition]);
    } else {
      return apiCall(edition);
    }
  }));

  // Concatenate the response data
  responses.forEach(response => {
    data.push(...response);
  });

  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Store data in cache
  editions.forEach((edition, index) => {
 cache[edition] = responses[index];
  });

  return data;
}

async function apiCall(edition, index = 1) {
  const response = await fetch(
    `https://api.manga-passion.de/editions/${edition}/volumes?itemsPerPage=100&page=${index}&order[arrangement]=asc&exclude[type]=3`,
    { method: "GET" }
  );
  const data = await response.json();

  // Fetch manga information
  const mangaResponse = await fetch(`https://api.manga-passion.de/editions/${edition}`, { method: "GET" });
  const mangaData = await mangaResponse.json();
  const mangaTitle = mangaData.title;

  // Add manga title to each volume
  data.forEach(volume => {
    volume.title = mangaTitle;
  });

  if (data.length === 100) {
    // Make another API call for the next page
    const nextPage = await apiCall(edition, index + 1);
    data.push(...nextPage);
  }

  return data;
}

const editions = ["2052", "1332", "1959", "1998", "269", "509", "123", "79", "1986", "2002", "2038", "2", "1990", "1576", "1699", "87", "1599", "534", "275", "1452", "1156", "1189"];

async function getdata() {
  const currentDate = new Date();
  const next67Days = new Date();
  next67Days.setDate(currentDate.getDate() + 67);

  const data = await fetchData(editions);
  for (let i = 0; i < data.length; i++) {
    const Mangadate = new Date(data[i].date);
    if (Mangadate > currentDate && Mangadate <= next67Days) {
      let Band = data[i].numberDisplay;
      const Mangadates = new Date(data[i].date);
      const priceInCent = data[i].price;
      const priceInEuro = (priceInCent / 100).toFixed(2);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = Mangadates.toLocaleDateString('de-DE', options);

      const mangaVolumeDiv = document.createElement("div");
      mangaVolumeDiv.className = "manga_volume2";

            const anchor = document.createElement("a");
            anchor.className = "manga_display_size";

            const content = document.createElement("div");
            content.className = "manga_content2";

            const top = document.createElement("div");
            top.className = "manga_top2";

            const to = document.createElement("div")
            content.appendChild(to)


            const title = document.createElement("div");
            title.className = "manga_content2 fix ";
            title.textContent = data[i].title;
            to.appendChild(title);


            const priceText = document.createElement("span");
            priceText.className = "manga_textborder";

            ;
            priceText.id = "pricemanga" + [i];
            top.appendChild(priceText);

            const image = document.createElement("div");
            image.className = "manga_img2";
            const imageWrapper = document.createElement("span");
            imageWrapper.style.cssText = "box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;";
            const imageInner = document.createElement("span");
            imageInner.style.cssText = "box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 142% 0px 0px;";
            const imageElement = document.createElement("img");





            // append h1 to link and link to header



            switch (Band) {
                case "5 & 6":
                    Band = 3;
                    break;

                case "3 & 4":
                    Band = 2;
                    break;
            }
            switch (Band) {
                case Band:
                    switch (data[i].title) {
                        case "Neon Genesis Evangelion - Perfect Edition":
                            imageElement.src = `/Websites/Covers/eva${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Evangelion.html");
                            break;
                        case "Fairy Tail Massiv":
                            imageElement.src = `/Websites/Covers/ft${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Fairy_Tail_Massive.html");
                            break;
                        case "Tokyo Revengers: Doppelband-Edition":
                            imageElement.src = `/Websites/Covers/rv${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Revengers.html");
                            break;
                        case "Demon Slayer - Kimetsu no Yaiba":
                            imageElement.src = `/Websites/Covers/kmy${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Demon_Slayer.html");
                            break;
                        case "Mars Red":
                            imageElement.src = `/Websites/Covers/mr${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Mars_Red.html");
                            break;
                        case "MoMo – the blood taker –":
                            imageElement.src = `/Websites/Covers/tbt${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Momo.html");
                            break;
                        case "SHY":
                            imageElement.src = `/Websites/Covers/shy${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/shy.html");
                            break;
                        case "Angels of Death":
                            imageElement.src = `/Websites/Covers/aof${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Angels_of_Death.html");
                            break;
                        case "Call of the Night":
                            imageElement.src = `/Websites/Covers/yf${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Yofukashi_no_Uta.html");
                            break;
                        case "Fullmetal Alchemist Ultra":
                            imageElement.src = `/Websites/Covers/fa${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Fullmetal_Alchemist_Ultra.html");
                            break;
                        case "Can't Stop Cursing You":
                            imageElement.src = `/Websites/Covers/cursing${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Cant_stop_cursing_you.html");
                            break;
                        case "Edens Zero":
                            imageElement.src = `/Websites/Covers/ez${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Edens_Zero.html");
                            break;
                        case "Bungo Stray Dogs: BEAST":
                            imageElement.src = `/Websites/Covers/bsd${Band - 1}.jpg`;
                            anchor.setAttribute("href", "Ongoing/Websites/Bungo_Stray_Dogs_BEAST.html");
                            switch (Band) {
                                case 2:
                                    Band = "3 & 4";
                                    break;
                                case 3:
                                    Band = "5 & 6"
                                    break;
                            }
                            break;
                        case "Chainsaw Man":
                            imageElement.src = `/Websites/Covers/csm${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Chainsaw_Man.html");
                            break;
                        case "Bakemonogatari":
                            imageElement.src = `/Websites/Covers/bake${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Bakemonogatari.html");
                            break;
                        case "Komi can't communicate":
                            imageElement.src = `/Websites/Covers/komi${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/komi.html");
                            break;
                        case "One Piece":
                            imageElement.src = `/Websites/Covers/op${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/op.html");
                            break;
                        case "Demon Slave":
                            imageElement.src = `/Websites/Covers/mss${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Demon_Slave.html");
                            break;
                        case "More than a Doll":
                            imageElement.src = `/Websites/Covers/sono${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Sono_Bisque_Doll_wa_koi_wo_suru.html");
                            break;
                        case "YoRHa – Abstieg 11941 – Eine NieR:Automata Story":
                            imageElement.src = `/Websites/Covers/nier${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Nier.html");
                            break;
                        case "Blue Lock":
                            imageElement.src = `/Websites/Covers/blue${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Blue_Lock.html");
                            break;
                        case "Boy's Abyss":
                            imageElement.src = `/Websites/Covers/boy${Band - 1}.jpg`;
                            anchor.setAttribute("href", "/Websites/Boys_Abyss.html");
                            break;
                        default:
                            imageElement.src = '/styles/errorimg.jpg';
                            break;

                    }

            }



            imageElement.decoding = "async";
            imageElement.dataset.nimg = "responsive";
            imageElement.style.cssText = "position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;";
            imageInner.appendChild(imageElement);
            imageWrapper.appendChild(imageInner);
            image.appendChild(imageWrapper);
            const statustext = data[i].status;
            const date = document.createElement("div");
            date.className = "manga_date2";
            const dateText = document.createElement("span");
            dateText.className = "manga_textborder";
            dateText.id = "datemanga" + [i];
            date.appendChild(dateText);

            content.appendChild(top);
            content.appendChild(image);
            content.appendChild(date);
            anchor.appendChild(content);
            mangaVolumeDiv.appendChild(anchor);


            const mangaVolumesDiv = document.querySelector(".manga_volume_size2.manga_volumes2");
            mangaVolumesDiv.appendChild(mangaVolumeDiv);
            if (statustext == 2) {
                document.getElementById("pricemanga" + [i]).textContent = `Band ${Band} ·`;
                document.getElementById("datemanga" + [i]).textContent = `TBA`;
            } else if (Band === undefined) {
                document.getElementById("pricemanga" + [i]).textContent = `Band ? · ${priceInEuro}  €`;
                document.getElementById("datemanga" + [i]).textContent = `${formattedDate}`;
            } else if (Mangadates.getFullYear() > 2050) {
                document.getElementById("pricemanga" + [i]).textContent = `Band ${Band} · ${priceInEuro}  €`; // had problem with data displaying year  2099 if its neither released or announced
                document.getElementById("datemanga" + [i]).textContent = `TBA`;
            }
            else {
                document.getElementById("pricemanga" + [i]).textContent = `Band ${Band} · ${priceInEuro}  €`;
                document.getElementById("datemanga" + [i]).textContent = `${formattedDate}`;
            }





        }
    }
} getdata();









