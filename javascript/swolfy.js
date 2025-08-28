let pricesum = 0;


// This is a function named buildbody
// It creates a manga list page structure by generating HTML elements and adding them to the DOM
function buildbody() {

    // Get the body element of the HTML document
    const body = document.getElementsByTagName('body')[0];

    // Create a main container div element with an ID of Tsubasa-list-main and append it to the body
    const Main = document.createElement('div');
    Main.setAttribute('id', 'Tsubasa-list-main');
    body.appendChild(Main);

    // Create a div element for the manga header section with a class of manga_header and append it to the main container
    const mangaTop = document.createElement('div')
    mangaTop.setAttribute('class', 'manga_header');
    Main.appendChild(mangaTop);
    // Create a div element to contain the manga title and estimated expenses, with a class of title_header, and append it to the manga header
    const headingContainer = document.createElement('div');
    headingContainer.setAttribute('class', 'title_header');
    mangaTop.appendChild(headingContainer);

    const mainHeading = document.createElement('div');
    mainHeading.setAttribute('class', 'top_title_header');
    headingContainer.appendChild(mainHeading);

    const mangaTitle = document.createElement('div'); 1
    mangaTitle.setAttribute('id', 'manga_title2');
    mainHeading.appendChild(mangaTitle);

    const expenses = document.createElement('div');
    expenses.setAttribute('id', 'estimated_expenses');
    mainHeading.appendChild(expenses);

    const mangaMainArea = document.createElement('div');
    mangaMainArea.setAttribute('class', 'manga_mainArea');
    Main.appendChild(mangaMainArea);


    const MainAreadiv = document.createElement('div');
    mangaMainArea.appendChild(MainAreadiv);

    const MainAreadivcontainerhead = document.createElement('div');
    MainAreadiv.appendChild(MainAreadivcontainerhead);

    const MainAreadivcontainerscroll = document.createElement('div');
    MainAreadivcontainerhead.appendChild(MainAreadivcontainerscroll);

    const MainAreadivcontainerinner = document.createElement('div');
    MainAreadivcontainerinner.setAttribute('class', 'tab-button_container');
    MainAreadivcontainerscroll.appendChild(MainAreadivcontainerinner);

    const MainAreadivcontainerbutton = document.createElement('button');
    MainAreadivcontainerbutton.setAttribute('type', 'button');
    MainAreadivcontainerbutton.setAttribute('class', ' manga_button');
    MainAreadivcontainerinner.appendChild(MainAreadivcontainerbutton);

    const MainAreadivcontainerspan = document.createElement('span');
    MainAreadivcontainerspan.setAttribute('class', 'button_label');
    MainAreadivcontainerspan.textContent = 'Bände';
    MainAreadivcontainerbutton.appendChild(MainAreadivcontainerspan);


    const MainAreamangacontainer = document.createElement('div');
    MainAreamangacontainer.setAttribute('class', 'manga_container');
    MainAreadiv.appendChild(MainAreamangacontainer);

    const MainAreamangacontainerstyle = document.createElement('div');
    MainAreamangacontainerstyle.setAttribute('style', 'display:block');
    MainAreamangacontainer.appendChild(MainAreamangacontainerstyle);

    const MainAreamangacontainervolumes = document.createElement('div');
    MainAreamangacontainervolumes.setAttribute('class', 'manga_volume_size2 manga_volumes2');
    MainAreamangacontainerstyle.appendChild(MainAreamangacontainervolumes);



}
buildbody();



// Caching object
const cache = {};

async function fetchData(editions) {
    const data = [];

    // Make all API calls in parallel using Promise.all
    const responses = await Promise.all(editions.map(edition => {
        // Check if data exists in cache
        if (cache[edition]) {
            // If data does not exist in cache, make an API callFF
            return Promise.resolve(cache[edition]);
        } else {
            // If data does not exist in cache, make an API call
            return apiCall(edition);
        }
    }));

    // Concatenate the response data
    responses.forEach(response => {
        data.push(...response);
    });
    // Sort the data by date
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Store data in cache
    editions.forEach((edition, index) => {
        cache[edition] = responses[index];
    });

    return data;
}
// Define the apiCall function to fetch volumes for a single edition
async function apiCall(edition, index = 1) {
    // Make an API call to fetch the volumes for a single edition
    const response = await fetch(
        `https://api.manga-passion.de/editions/${edition}/volumes?itemsPerPage=100&page=${index}&order[arrangement]=asc&exclude[type]=3`,
        { method: "GET" }
    );
    // Convert the API response to JSON
    const data = await response.json();

    // Fetch manga information
    const mangaResponse = await fetch(`https://api.manga-passion.de/editions/${edition}`, { method: "GET" });
    const mangaData = await mangaResponse.json();
    const mangaTitle = mangaData.title;

    // Add manga title to each volume
    data.forEach(volume => {
        volume.title = mangaTitle;
    });
    //id the Volume is over 100 , make an another API call with incremented index
    if (data.length === 100) {
        // Make another API call for the next page
        const nextPage = await apiCall(edition, index + 1);
        data.push(...nextPage);
    }

    return data;
}

// an Array of Ongoing Manga with volume edition IDS
const editions = ["768","2052", "1332",  "269", "509", "123", "79", "1986", "2002", "2038", "2",  "1576", "1699", "87", "1599", "534", "275", "1452", "1156", "1189", "199"];
// An asynchronous function to get manga data
async function getdata() {
     // Create a new Date object with the current date and create a Date in 67 Days
    const currentDate = new Date();
    const next67Days = new Date();
    next67Days.setDate(currentDate.getDate() + 67);

  // Fetch data from the server using the 'editions' array
    const data = await fetchData(editions);
     // Loop through the returned data and check if the volume is between the current 
    for (let i = 0; i < data.length; i++) {
        const Mangadate = new Date(data[i].date);
        if (Mangadate > currentDate && Mangadate <= next67Days) {
            let Band = data[i].numberDisplay;
            const Mangadates = new Date(data[i].date);
            const priceInCent = data[i].price;
            const priceInEuro = (priceInCent / 100).toFixed(2);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = Mangadates.toLocaleDateString('de-DE', options);
            pricesum = data[i].price + pricesum;
            
             // Create the elements needed to display the manga volume information
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
                        case "Angels of Death":
                            imageElement.src = ` /websites/Covers/Angels_of_Death${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Angels_of_Death.html");
                            break;
                        case "Shangri-La Frontier":
                            imageElement.src = ` /websites/Covers/shangri_la_frontier${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Shangri_La_Frontier.html");
                            break;        
                        case "Bakemonogatari":
                            imageElement.src = `/websites/Covers/bakemonogatari${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Bakemonogatari.html");
                            break;
                        case "Blue Lock":
                            imageElement.src = `/websites/Covers/Blue_Lock${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Blue_Lock.html");
                            break;
                        case "Boy's Abyss":
                            imageElement.src = `/websites/Covers/boys_abyss${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Boys_Abyss.html");
                            break;;
                        case "Call of the Night":
                            imageElement.src = `/websites/Covers/Yofukashi_no_Uta${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Yofukashi_no_Uta.html");
                            break;
                        case "Chainsaw Man":
                            imageElement.src = `/websites/Covers/Chainsaw_man${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Chainsaw_Man.html");
                            break;
                        case "Demon Slave":
                            imageElement.src = `/websites/Covers/Demon_Slave${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Demon_Slave.html");
                            break;
                        case "Demon Slayer – Kimetsu no Yaiba":
                            imageElement.src = `/websites/Covers/Demon_Slayer${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Demon_Slayer.html");
                            break;
                        case "Edens Zero":
                            imageElement.src = `/websites/Covers/edens_zero${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Edens_Zero.html");
                            break;
                        case "My Elder Sister":
                            imageElement.src = `/websites/Covers/elder_sister${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Elder_Sister.html");
                            break;
                        case "Neon Genesis Evangelion - Perfect Edition":
                            imageElement.src = `/websites/Covers/evangelion_perfect${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/evangelion_perfect.html");
                            break;
                        case "Fairy Tail Massiv":
                            imageElement.src = `/websites/Covers/fairy_tail${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Fairy_Tail_Massive.html");
                            break;
                        case "Fullmetal Alchemist Ultra":
                            imageElement.src = `/websites/Covers/fullmetal_alchemist${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Fullmetal_Alchemist_Ultra.html");
                            break;
                        case "Komi can't communicate":
                            imageElement.src = `/websites/Covers/komi${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/komi.html");
                            break;
                        case "Mars Red":
                            imageElement.src = `/websites/Covers/mars_red${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Mars_Red.html");
                            break;
                        case "MoMo – the blood taker –":
                            imageElement.src = `/websites/Covers/Momo_the_bloodtaker${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Momo_the_bloodtaker.html");
                            break;
                        case "YoRHa – Abstieg 11941 – Eine NieR:Automata Story":
                            imageElement.src = `/websites/Covers/nier${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Nier.html");
                            break;
                        case "One Piece":
                            imageElement.src = `/websites/Covers/op${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/op.html");
                            break;
                        case "SHY":
                            imageElement.src = `/websites/Covers/shy${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/shy.html");
                            break;
                        case "More than a Doll":
                            imageElement.src = `/websites/Covers/sono_bisque_doll_wa_koi_wo_suru${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Sono_Bisque_Doll_wa_koi_wo_suru.html");
                            break;
                        case "Tokyo Revengers: Doppelband-Edition":
                            imageElement.src = `/websites/Covers/Tokyo_revengers${Band - 1}.webp`;
                            anchor.setAttribute("href", "/websites/Tokyo_revengers.html");
                            break;
                     
                        
        }
                 imageElement.onerror = function () {
                    imageElement.src = '/styles/errorimg.webp';


                    }

            }


            // async decoding for better performance make it responsive
            imageElement.decoding = "async";
            imageElement.dataset.nimg = "responsive";
            //css prop for image for 
            imageElement.style.cssText = "position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;";
        
            const statustext = data[i].status;
            const date = document.createElement("div");
            date.className = "manga_date2";
            const dateText = document.createElement("span");
            dateText.className = "manga_textborder";
            dateText.id = "datemanga" + [i];

            //append everything
            imageInner.appendChild(imageElement);
            imageWrapper.appendChild(imageInner);
            image.appendChild(imageWrapper);
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

console.log((pricesum/100).toFixed(2));
} getdata();



function sum() {
    let sum = 0;
    const urls = ['/Completed/C_af.html', '/Completed/C_gl.html', '/Completed/C_mq.html', '/Completed/C_rt.html', '/Completed/C_uz.html', '/Ongoing/O_af.html', '/Ongoing/O_gl.html', '/Ongoing/O_mq.html', '/Ongoing/O_rs.html', '/Ongoing/O_tz.html', '/Dropped/D_af.html', '/Dropped/D_gl.html', '/Dropped/D_mq.html', '/Dropped/D_rt.html', '/Dropped/D_uz.html'];//path to all Manga to get the count

    Promise.all(urls.map(url => fetch(url).then(response => response.text())))
        .then(htmls => {
            htmls.forEach(html => {
                const parser = new DOMParser(); // Create a new DOMParser object
                const doc = parser.parseFromString(html, 'text/html');// Parse the HTML string into a Document object
                const mangaAnzahlElements = doc.querySelectorAll('.manga-anzahl');// Get all elements with class 'manga-anzahl'
                mangaAnzahlElements.forEach((element) => {
                    sum += parseInt(element.textContent);// Add the parsed integer value of the element's text content to the sum
                });
            });
            document.getElementById("manga_title2").innerHTML = 'Anzahl an gesammelten Manga: ' + sum + '  | ' + 'Geschätzte Ausgaben : ' + (8.463172849 * sum).toFixed(2) + '€'; // 8.463172849 is the fixed avg spent per manga      
        })
        .catch(error => console.error(error));

} sum();




