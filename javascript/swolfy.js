async function buildbody() {

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
    MainAreamangacontainervolumes.setAttribute('class', 'manga_volume_size manga_volumes');
    MainAreamangacontainerstyle.appendChild(MainAreamangacontainervolumes);// appends MainAreamangacontainervolumes as child to MainAreamangacontainerstyle








}

buildbody();



async function fetchData(editions) {
    var finished = false;
    var page = 1;
    var data = [];

    for (const edition of editions) {
        while (!finished) {
            const response = await apiCall(edition, page);
            if (response.length == 0) {
                finished = true;
            } else {
                data.push.apply(data, response);
                page++;
            }
        }
        finished = false;
        page = 1;
    }
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
    return data;
}

async function apiCall(edition, index) {
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
    for (const volume of data) {
        volume.title = mangaTitle;
    }

    return data;
}


const editions = ["2052", "1332", "1959", "1998", "269", "509", "123", "79", "1986", "2002", "2038", "2", "1990", "1576", "1699", "87", "1599", "534", "275", "1452"];

async function getdata() {
    const currentDate = new Date();
    const next20Days = new Date();
    next20Days.setDate(currentDate.getDate() + 30);

    const data = await fetchData(editions);



    for (let i = 0; i < data.length; i++) {
        k = i;
        const Mangadate = new Date(data[i].date);
        if (Mangadate > currentDate && Mangadate <= next20Days) {
            const Band = data[i].numberDisplay;
            const Mangadate = new Date(data[i].date);
            const priceInCent = data[i].price;
            const priceInEuro = (priceInCent / 100).toFixed(2);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = Mangadate.toLocaleDateString('de-DE', options);
            const mangaVolumeDiv = document.createElement("div");
            mangaVolumeDiv.className = "manga_volume";

            const anchor = document.createElement("a");
            anchor.className = "manga_display_size";

            const content = document.createElement("div");
            content.className = "manga_content";

            const top = document.createElement("div");
            top.className = "manga_top";

            const to = document.createElement("div")
            content.appendChild(to)

            const title = document.createElement("div");
            title.className = "manga_content fix ";
            title.textContent = data[i].title;
            to.appendChild(title);


            const priceText = document.createElement("span");
            priceText.className = "manga_textborder";

            ;
            priceText.id = "pricemanga" + [k];
            top.appendChild(priceText);

            const image = document.createElement("div");
            image.className = "manga_img";
            const imageWrapper = document.createElement("span");
            imageWrapper.style.cssText = "box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;";
            const imageInner = document.createElement("span");
            imageInner.style.cssText = "box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 142% 0px 0px;";
            const imageElement = document.createElement("img");

            imageElement.onerror = function () {
                imageElement.src = '/styles/errorimg.jpg';
            }

            imageElement.src = '/styles/errorimg.jpg';
            imageElement.decoding = "async";
            imageElement.dataset.nimg = "responsive";
            imageElement.style.cssText = "position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;";
            imageInner.appendChild(imageElement);
            imageWrapper.appendChild(imageInner);
            image.appendChild(imageWrapper);
            const statustext = data[i].status;
            const date = document.createElement("div");
            date.className = "manga_date";
            const dateText = document.createElement("span");
            dateText.className = "manga_textborder";
            dateText.id = "datemanga" + [k];
            date.appendChild(dateText);

            content.appendChild(top);
            content.appendChild(image);
            content.appendChild(date);
            anchor.appendChild(content);
            mangaVolumeDiv.appendChild(anchor);


            const mangaVolumesDiv = document.querySelector(".manga_volume_size.manga_volumes");
            mangaVolumesDiv.appendChild(mangaVolumeDiv);
            if (statustext == 2) {
                document.getElementById("pricemanga" + [k]).textContent = `Band ${Band} ·`;
                document.getElementById("datemanga" + [k]).textContent = `TBA`;
            } else if (Band === undefined) {
                document.getElementById("pricemanga" + [k]).textContent = `Band ? · ${priceInEuro}  €`;
                document.getElementById("datemanga" + [k]).textContent = `${formattedDate}`;
            } else if (Mangadate.getFullYear() > 2050) {
                document.getElementById("pricemanga" + [k]).textContent = `Band ${Band} · ${priceInEuro}  €`; // had problem with data dissplaying year  2099 if its neither released or announced
                document.getElementById("datemanga" + [k]).textContent = `TBA`;
            }
            else {
                document.getElementById("pricemanga" + [k]).textContent = `Band ${Band} · ${priceInEuro}  €`;
                document.getElementById("datemanga" + [k]).textContent = `${formattedDate}`;
            }





        }

    }
}

getdata();

async function getTitles() {



    const response = await fetch(`https://api.manga-passion.de/editions/${editions}`);// api request to get title data
    const data = await response.json();// parsse respond into JSON object

    // had some problems with missing data so I added try catch to every part
    try {
        width = data.width;     // sets width variable to witdth inside data
        width = (width / 10).toFixed(1); // return the value for cm instead of mm
    } catch (error) {
        width = ""; // if there is a problem with the data it returns none
    }
    try {
        height = data.height; // sets height variable to height inside data
        height = (height / 10).toFixed(1); // return the value for cm instead of mm
    } catch (error) {
        height = "";
    } try {
        numVolumes_de = data.numVolumes; // sets numVolumes_de variable to numVolumes inside data
    } catch (error) {
        numVolumes_de = ""; // if there is a problem with the data it returns none
    }
    try {
        status_de = data.status;
    } catch (error) {
        status_de = ""; // if there is a problem with the data it returns none
    }
    try {
        origin = data.sources[0].origin;  // setsorigin  variable to  origin inside of sources inside the data set
    } catch (error) {
        origin = ""; // if there is a problem with the data it returns none
    }
    try {
        status_jp = data.sources[0].status;
    } catch (error) {
        status_jp = ""; // if there is a problem with the data it returns none
    }
    try {
        title = data.title;
    } catch (error) {
        title = ""; // if there is a problem with the data it returns none
    }
    try {
        magazin = data.sources[0].magazines[0].name;
    } catch (error) {
        magazin = "";
    }
    try {
        jp_Verlag = data.sources[0].publishers[0].name;
    } catch (error) {
        jp_Verlag = "";
    }
    try {
        start_year = data.sources[0].year;
    } catch (error) {
        start_year = "";
    }
    try {
        jp_volumes = data.sources[0].volumes;
    } catch (error) {
        jp_volumes = "";
    }
    try {
        author = data.sources[0].contributors[0].contributor.name;
    } catch (error) {
        author = "";
    }
    try {
        mangaka = data.sources[0].contributors[1].contributor.name;
    } catch (error) {
        mangaka = "";
    }
    try {
        de_verlag = data.publishers[0].name;
    } catch (error) {
        de_verlag = "";
    }
    try {
        description = data.description;
    } catch (error) {
        description = "";
    }
    try {
        demo = data.sources[0].tags.map(tag => tag.name); // Extracting tags from the first source and assigning them to demo variable
        remainingGenres = demo.slice(1);// Extracting tags from the first source and assigning them to demo variable
    } catch (error) {
        demo = "";
        remainingGenres = "";
    }
    try {
        romaji = data.sources[0].romaji;
    } catch (error) {
        romaji = "";
    }
    try {
        lower_title = data.sources[0].title;
    } catch (error) {
        lower_title = "";
    } try {
        type = data.sources[0].type;
    } catch (error) {
        type = "";
    } try {
        format = data.format;
    } catch (error) {
        format = "";
    }

    // checking for type value to assign the correct type
    if (type === 0) {
        typetext = "Manga"
    } else if (type === 1) {
        typetext = "Lightnovel"
    }
    else if (type === 2) {
        typtetext = "Artbook"
    }

    // checking for origin value to assign the correct origin

    if (origin === 0) {
        origintext = "Japan";
    } else if (origin === "") {
        origintext = "Alle";
    } else if (origin === 1) {
        origintext = "SüdKorea";
    } else if (origin === 2) {
        origintext = "China";
    } else if (origin === 3) {
        origintext = "Taiwan";
    } else if (origin === 4) {
        origintext = "Deutschland";
    } else if (origin === 5) {
        origintext = "Frankreich";
    } else if (origin === 6) {
        origintext = "USA";
    } else if (origin === 7) {
        origintext = "UK";
    } else if (origin === 8) {
        origintext = "Spanien";
    }
    else {
        origintext = "Unbekannter Status";
    }
    // checking for status_jp value to assign the correct status

    if (status_jp === 0) {
        statustext_jp = "Announced";
    } else if (status_jp === 1) {
        statustext_jp = "Laufend";
    } else if (status_jp === 2) {
        statustext_jp = "Beendet";
    } else {
        statustext_jp = "Unbekannter Status";
    }

    if (status_de === 0) {
        statustext_de = "Announced";
    } else if (status_de === 1) {
        statustext_de = "Laufend";
    } else if (status_de === 2) {
        statustext_de = "Beendet";
    } else {
        statustext_de = "Unbekannter Status";
    }

    if (status_de === 0) {
        Voltext_de = "+";
    } else if (status_de === 1) {
        Voltext_de = "+";
    } else if (status_de === 2) {
        Voltext_de = " ";
    } else {
        Voltext_de = " ";
    }

    if (status_jp === 0) {
        Voltext_jp = "+";
    } else if (status_jp === 1) {
        Voltext_jp = "+";
    } else if (status_jp === 2) {
        Voltext_jp = " ";
    } else {
        Voltext_jp = " ";
    }


    if (format === 0) {
        formattext = "Softcover";
    } else if (format === 1) {
        formattext = "Hardcover";
    } else if (format === 2) {
        formattext = "Unknown";
    } else if (format === 3) {
        formattext = "Unknown";
    } else if (format === 4) {
        formattext = "Unknown";
    } else if (format === 5) {
        formattext = "Digital";
    } else {
        formattext = "Unbekannter Status";
    }

    // instead sets text to"undefined" if its undefined it sets it to another text

    if (romaji === undefined & lower_title === undefined) {
        document.getElementById("manga_title_low").innerHTML = ` `;
    } else if (romaji === undefined) {
        document.getElementById("manga_title_low").innerHTML = `<span><span lang="ja">${lower_title}</span></span>  `;
    } else if (lower_title === undefined) {
        document.getElementById("manga_title_low").innerHTML = `<span>${romaji}</span>  `;
    } else {
        document.getElementById("manga_title_low").innerHTML = `<span>${romaji}|<span lang="ja">${lower_title}</span></span>  `;
    }

    // instead sets text to"undefined" if its undefined it sets it to another text

    if (start_year === undefined & author === undefined & mangaka === undefined & jp_Verlag === undefined) {
        document.getElementById("Copyright").textContent = ` © by unbekannt`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("start_year").textContent = `unbekannt`;
    } else if (start_year === undefined & mangaka === undefined & jp_Verlag === undefined) {
        document.getElementById("Copyright").textContent = ` © by ${author}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }
    else if (start_year === undefined & mangaka === undefined & author === undefined) {
        document.getElementById("Copyright").textContent = ` © by ${jp_Verlag}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
    }
    else if (start_year === undefined & jp_Verlag === undefined & author === undefined) {
        document.getElementById("Copyright").textContent = ` © by ${mangaka}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;

    }
    else if (mangaka === undefined & jp_Verlag === undefined & author === undefined) {
        document.getElementById("Copyright").textContent = ` ©${start_year} by unbekannt`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
    } else if (start_year === undefined & mangaka === undefined) {
        document.getElementById("Copyright").textContent = ` © by ${author}/${jp_Verlag}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    } else if (start_year === undefined & jp_Verlag === undefined) {
        document.getElementById("Copyright").textContent = ` © by ${author},${mangaka}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    } else if (start_year === undefined & author === undefined) {
        document.getElementById("Copyright").textContent = ` © by ${mangaka}/${jp_Verlag}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
    } else if (jp_Verlag === undefined & mangaka === undefined) {
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author}`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    } else if (author === undefined & mangaka === undefined) {
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${jp_Verlag}`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`
        document.getElementById("start_year").textContent = `${start_year}`;;
    } else if (jp_Verlag === undefined & author === undefined) {
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${mangaka}`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;

    }
    else if (author === undefined) {
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${mangaka}/${jp_Verlag}`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
    } else if (mangaka == undefined) {
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author}/${jp_Verlag}`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    } else if (jp_Verlag === undefined) {
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author},${mangaka}`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    } else if (start_year === undefined) {
        document.getElementById("Copyright").textContent = ` © by ${author},${mangaka}/${jp_Verlag}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }
    else {
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author},${mangaka}/${jp_Verlag}`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
    }

    // instead sets text to"undefined" if its undefined it sets it to another text
    if (title === undefined) {
        document.title = `Tsubasa List - unbekannt`;
        document.getElementById("manga_title").innerHTML = `<h1>unbekannt</h1>`;
    } else {
        document.title = `Tsubasa List - ${title}`;
        document.getElementById("manga_title").innerHTML = `<h1>${title}</h1>`;
    }
    // instead sets text to"undefined" if its undefined it sets it to another text
    if (numVolumes_de === undefined & Voltext_de === undefined) {
        document.getElementById("volumes_de").textContent = `?`;
    } else if (numVolumes_de === undefined) {
        document.getElementById("volumes_de").textContent = `?`;
    } else if (Voltext_de === undefined) {
        document.getElementById("volumes_de").textContent = `${numVolumes_de}`;
    } else {
        document.getElementById("volumes_de").textContent = `${numVolumes_de}${Voltext_de}`;
    }

    // instead sets text to"undefined" if its undefined it sets it to another text
    if (width === undefined & height === undefined) {
        document.getElementById("size").textContent = `? x $? cm`;
    } else if (width === undefined) {
        document.getElementById("size").textContent = `? x ${height} cm`;
    } else if (height === undefined) {
        document.getElementById("size").textContent = `${width} x ? cm`;
    } else {
        document.getElementById("size").textContent = `${width} x ${height} cm`;
    }
    // instead sets text to"undefined" if its undefined it sets it to another text
    if (jp_volumes === undefined & Voltext_jp === undefined) {
        document.getElementById("jp_volumes").textContent = `?`;
    } else if (jp_volumes === undefined) {
        document.getElementById("jp_volumes").textContent = `?`;
    } else if (Voltext_jp === undefined) {
        document.getElementById("jp_volumes").textContent = `${jp_volumes}`;
    } else {
        document.getElementById("jp_volumes").textContent = `${jp_volumes}${Voltext_jp}`;
    }

    // instead sets text to"undefined" if its undefined it sets it to another text
    if (formattext == undefined) {
        document.getElementById("format").textContent = `unbekannt`;

    } else {
        document.getElementById("format").textContent = `${formattext}`;
    }

    // instead sets text to"undefined" if its undefined it sets it to another text
    if (statustext_de == undefined) {
        document.getElementById("format").textContent = `unbekannt`;

    } else {
        document.getElementById("status_de").textContent = `${statustext_de}`;
    }
    if (statustext_jp == undefined) {
        document.getElementById("format").textContent = `unbekannt`;

    } else {
        document.getElementById("status_jp").textContent = `${statustext_jp}`;
    }
    if (description == undefined) {
        document.getElementById("format").textContent = `unbekannt`;

    } else {
        document.getElementById("Synopsis").textContent = `${description}`;
    }

    if (de_verlag == undefined) {
        document.getElementById("format").textContent = `<li>unbekannt</li>`;

    } else {

        document.getElementById("de_Verlag").innerHTML = `<li>${de_verlag}</li>`;
    }

    if (demo == undefined) {
        document.getElementById("format").textContent = `<li>unbekannt</li>`;

    } else {

        document.getElementById("Demografie").innerHTML = `Demografie <li>${demo[0]}</li>`;
    }
    if (remainingGenres == undefined) {
        document.getElementById("format").textContent = `<li>unbekannt</li>`;

    } else {

        document.getElementById("Genres").innerHTML = `Genres<li> ${remainingGenres.join("</li><li>")}`;
    }
    if (magazin == undefined) {
        document.getElementById("magazin").innerHTML = `<li>unbekannt</li>`;

    } else {

        document.getElementById("magazin").innerHTML = `<li>${magazin}</li>`;
    }
    if (origintext == undefined) {
        document.getElementById("format").textContent = `<li>unbekannt</li>`;

    } else {

        document.getElementById("jp_type").innerHTML = `<li>${typetext}</li>`;
    }
    if (origintext == undefined) {
        document.getElementById("format").textContent = `<li>unbekannt</li>`;

    } else {

        document.getElementById("origin").innerHTML = `<li>${origintext}</li>`;
    }


}