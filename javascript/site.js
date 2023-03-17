var edition  ;
var imgname;

async function buildbody() {

    const body = document.getElementsByTagName('body')[0];

    const mangaPassionMain = document.createElement('div');
    mangaPassionMain.setAttribute('id', 'manga-passion-main');
    body.appendChild(mangaPassionMain);

    const layoutWide = document.createElement('div');
    layoutWide.setAttribute('class', 'layout_wide__hth1c');
    mangaPassionMain.appendChild(layoutWide);

    const mangaWrap = document.createElement('div');
    mangaWrap.setAttribute('class', 'manga_wrap__e67En');
    layoutWide.appendChild(mangaWrap);

    const mangaTop = document.createElement('div');
    mangaTop.setAttribute('class', 'manga_top__u_AQK');
    mangaWrap.appendChild(mangaTop);

    const headingContainer = document.createElement('div');
    headingContainer.setAttribute('class', 'heading_headingContainer__fBQPg');
    mangaTop.appendChild(headingContainer);

    const mainHeading = document.createElement('div');
    mainHeading.setAttribute('class', 'heading_mainHeading__t_Snx');
    headingContainer.appendChild(mainHeading);

    const mangaTitle = document.createElement('div');
    mangaTitle.setAttribute('id', 'manga_title');
    mainHeading.appendChild(mangaTitle);

    const subHeading = document.createElement('div');
    subHeading.setAttribute('class', 'heading_subHeading__pBNZJ');
    headingContainer.appendChild(subHeading);

    const hr = document.createElement('hr');
    subHeading.appendChild(hr);

    const mangaTitleLow = document.createElement('div');
    mangaTitleLow.setAttribute('id', 'manga_title_low');
    subHeading.appendChild(mangaTitleLow);

    const mangaLeftSidebar = document.createElement('div');
    mangaLeftSidebar.setAttribute('class', 'manga_leftSidebar__RHamD');
    mangaWrap.appendChild(mangaLeftSidebar);

    const mangaCover = document.createElement('div');
    mangaCover.setAttribute('class', 'manga_mangaCover__RSWVt');
    mangaLeftSidebar.appendChild(mangaCover);

    const lightbox = document.createElement('span');
    lightbox.setAttribute('class', 'lightbox_lightbox__8mcKQ');
    mangaCover.appendChild(lightbox);

    const lightboxInner = document.createElement('span');
    lightboxInner.setAttribute('style', 'box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative');
    lightbox.appendChild(lightboxInner);

    const lightboxInner2 = document.createElement('span');
    lightboxInner2.setAttribute('style', 'box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:142%');
    lightboxInner.appendChild(lightboxInner2);

    const img = document.createElement('img');
    img.setAttribute('alt', '');
    img.onerror = function () {
        img.setAttribute('src', '/styles/errorimg.jpg');
    }
    img.setAttribute('src', `./Covers/${imgname}0.jpg`);
    img.setAttribute('decoding', 'async');
    img.setAttribute('data-nimg', 'responsive');
    img.setAttribute('class', 'img_img__fx8wR');
    img.setAttribute('style', 'position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain;');
    lightboxInner.appendChild(img);



    const slot = document.createElement('slot');
    slot.setAttribute('class', 'fade_fade__tyn_4');
    mangaCover.appendChild(slot);

    const copyright = document.createElement('span');
    copyright.setAttribute('id', 'Copyright');
    mangaCover.appendChild(copyright);

    const mangaContainer = document.createElement('div');
    mangaContainer.setAttribute('class', 'manga_container__whdYf');
    mangaLeftSidebar.appendChild(mangaContainer);

    const mangaInfos = document.createElement('div');
    mangaInfos.setAttribute('class', 'manga_mangaInfos__t8BCd');
    mangaContainer.appendChild(mangaInfos);

    const sidebarInfoBlockDe = document.createElement('div');
    sidebarInfoBlockDe.setAttribute('class', 'manga_sidebarInfoBlock__MPHQ4');
    mangaInfos.appendChild(sidebarInfoBlockDe);

    const titleDe = document.createElement('h2');
    titleDe.setAttribute('class', 'manga_mangaInfosTitle__VzOX6');
    titleDe.textContent = 'Deutsche Ausgabe';
    sidebarInfoBlockDe.appendChild(titleDe);

    const ContentDe = document.createElement('div');
    ContentDe.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockDe.appendChild(ContentDe);

    const deVerlag = document.createElement('span');
    deVerlag.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    deVerlag.textContent = 'Verlag';
    ContentDe.appendChild(deVerlag);

    const deVerlagValue = document.createElement('span')
    deVerlagValue.setAttribute('id', 'de_Verlag');
    deVerlagValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    ContentDe.appendChild(deVerlagValue);


    const statusDe = document.createElement('div');
    statusDe.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockDe.appendChild(statusDe);

    const statusDeLabel = document.createElement('span');
    statusDeLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    statusDeLabel.textContent = 'Status';
    statusDe.appendChild(statusDeLabel);

    const statusDeValue = document.createElement('span');
    statusDeValue.setAttribute('id', 'status_de');
    statusDeValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    statusDe.appendChild(statusDeValue);

    const deformat = document.createElement('div');
    deformat.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockDe.appendChild(deformat);

    const deFormatLabel = document.createElement('span');
    deFormatLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    deFormatLabel.innerText = 'Format';
    deformat.appendChild(deFormatLabel);

    const deFormatValue = document.createElement('span');
    deFormatValue.setAttribute('id', 'format');
    deFormatValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    deformat.appendChild(deFormatValue);

    const deSize = document.createElement('div');
    deSize.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockDe.appendChild(deSize);

    const deSizeLabel = document.createElement('span');
    deSizeLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    deSizeLabel.innerText = 'Maße';
    deSize.appendChild(deSizeLabel);


    const deSizeValue = document.createElement('span');
    deSizeValue.setAttribute('id', 'size');
    deSizeValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    deSize.appendChild(deSizeValue);

    const deVolumes = document.createElement('div');
    deVolumes.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockDe.appendChild(deVolumes);

    const deVolumesLabel = document.createElement('span');
    deVolumesLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    deVolumesLabel.innerText = 'Bände';
    deVolumes.appendChild(deVolumesLabel);

    const deVolumesLabelValue = document.createElement('span');
    deVolumesLabelValue.setAttribute('id', 'volumes_de');
    deVolumesLabelValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');

    deVolumes.appendChild(deVolumesLabelValue);

    const sidebarInfoBlockJp = document.createElement('div');
    sidebarInfoBlockJp.setAttribute('class', 'manga_sidebarInfoBlock__MPHQ4');
    mangaInfos.appendChild(sidebarInfoBlockJp);

    const titleJp = document.createElement('h2');
    titleJp.setAttribute('class', 'manga_mangaInfosTitle__VzOX6');
    titleJp.textContent = 'Erstveröffentlichung';
    sidebarInfoBlockJp.appendChild(titleJp);

    const StatusJp = document.createElement('div');
    StatusJp.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockJp.appendChild(StatusJp);

    const StatusjpLabel = document.createElement('span');
    StatusjpLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');

    StatusjpLabel.textContent = 'Status ';
    StatusJp.appendChild(StatusjpLabel);

    const StatusjpValue = document.createElement('span')
    StatusjpValue.setAttribute('id', 'status_jp');
    StatusjpValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    StatusJp.appendChild(StatusjpValue);

    const originjp = document.createElement('div');
    originjp.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockJp.appendChild(originjp);

    const originjpLabel = document.createElement('span');
    originjpLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    originjpLabel.textContent = 'Herkunft';
    originjp.appendChild(originjpLabel);

    const originjpValue = document.createElement('span')
    originjpValue.setAttribute('id', 'origin');
    originjpValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    originjp.appendChild(originjpValue);

    const typejp = document.createElement('div');
    typejp.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockJp.appendChild(typejp);

    const typejpLabel = document.createElement('span');
    typejpLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    typejpLabel.textContent = 'Typ';
    typejp.appendChild(typejpLabel);

    const typejpValue = document.createElement('span')
    typejpValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    typejpValue.setAttribute('id', 'jp_type');
    typejp.appendChild(typejpValue);

    const Verlagjp = document.createElement('div');
    Verlagjp.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockJp.appendChild(Verlagjp);

    const VerlagjpLabel = document.createElement('span');
    VerlagjpLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    VerlagjpLabel.textContent = 'Verlag';
    Verlagjp.appendChild(VerlagjpLabel);

    const VerlagjpValue = document.createElement('span')
    VerlagjpValue.setAttribute('id', 'jp_Verlag')
    VerlagjpValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    Verlagjp.appendChild(VerlagjpValue);

    const Magazinejp = document.createElement('div');
    Magazinejp.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockJp.appendChild(Magazinejp);

    const MagazinejpLabel = document.createElement('span');
    MagazinejpLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    MagazinejpLabel.textContent = 'Magazin';
    Magazinejp.appendChild(MagazinejpLabel);

    const MagazinejpValue = document.createElement('span')
    MagazinejpValue.setAttribute('id', 'magazin')
    MagazinejpValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    Magazinejp.appendChild(MagazinejpValue);

    const yearjp = document.createElement('div');
    yearjp.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockJp.appendChild(yearjp);

    const yearjpLabel = document.createElement('span');
    yearjpLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    yearjpLabel.textContent = 'Startjahr';
    yearjp.appendChild(yearjpLabel);

    const yearjpValue = document.createElement('span')
    yearjpValue.setAttribute('id', 'start_year')
    yearjpValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    yearjp.appendChild(yearjpValue);

    const Volumejp = document.createElement('div');
    Volumejp.setAttribute('class', 'manga_mangaInfoItem__meO0a');
    sidebarInfoBlockJp.appendChild(Volumejp);

    const VolumejpLabel = document.createElement('span');
    VolumejpLabel.setAttribute('class', 'manga_mangaInfoLabel__O1bfg');
    VolumejpLabel.innerText = 'Bände ';
    Volumejp.appendChild(VolumejpLabel);

    const VolumejpValue = document.createElement('span')
    VolumejpValue.setAttribute('id', 'jp_volumes')
    VolumejpValue.setAttribute('class', 'manga_mangaInfoValue__sPOMH');
    Volumejp.appendChild(VolumejpValue);

    const mangaMainArea = document.createElement('div');
    mangaMainArea.setAttribute('class', 'manga_mainArea__oURPo');
    mangaWrap.appendChild(mangaMainArea);

    const mangaMainContainer = document.createElement('div');
    mangaMainContainer.setAttribute('class', 'manga_container__whdYf');
    mangaMainArea.appendChild(mangaMainContainer);


    const mangaMainContainerheader = document.createElement('div');
    mangaMainContainerheader.setAttribute('class', 'manga_heading__g0Cgj');
    mangaMainContainer.appendChild(mangaMainContainerheader);

    const mangaMainContainerheadercontent = document.createElement('h6');
    mangaMainContainerheadercontent.innerText = 'Inhalt ';
    mangaMainContainerheader.appendChild(mangaMainContainerheadercontent);



    const mangaMainDescription = document.createElement('div');
    mangaMainDescription.setAttribute('class', 'manga_description__OkTnN');
    mangaMainContainer.appendChild(mangaMainDescription);


    const mangaMainDescriptionAuthor = document.createElement('ul');
    mangaMainDescriptionAuthor.setAttribute('id', 'Author');
    mangaMainDescriptionAuthor.setAttribute('class', 'manga_details__decnm');
    mangaMainDescription.appendChild(mangaMainDescriptionAuthor);

    const mangaMainDescriptionMangaka = document.createElement('ul');
    mangaMainDescriptionMangaka.setAttribute('id', 'Mangaka');
    mangaMainDescriptionMangaka.setAttribute('class', 'manga_details__decnm');
    mangaMainDescription.appendChild(mangaMainDescriptionMangaka);


    const mangaMainDescriptionDemografie = document.createElement('ul');
    mangaMainDescriptionDemografie.setAttribute('id', 'Demografie');
    mangaMainDescriptionDemografie.setAttribute('class', 'manga_details__decnm');
    mangaMainDescription.appendChild(mangaMainDescriptionDemografie);

    const mangaMainDescriptionGenres = document.createElement('ul');
    mangaMainDescriptionGenres.setAttribute('id', 'Genres');
    mangaMainDescriptionGenres.setAttribute('class', 'manga_details__decnm');
    mangaMainDescription.appendChild(mangaMainDescriptionGenres);

    const div = document.createElement('div');
    mangaMainDescription.appendChild(div);


    const mangaMainDescriptionSynopsis = document.createElement('div');
    mangaMainDescriptionSynopsis.setAttribute('id', 'Synopsis');
    mangaMainDescriptionSynopsis.setAttribute('class', 'manga_description__OkTnN');
    mangaMainDescription.appendChild(mangaMainDescriptionSynopsis);

    const MainAreadiv = document.createElement('div');
    mangaMainArea.appendChild(MainAreadiv);

    const MainAreadivcontainerhead = document.createElement('div');
    MainAreadivcontainerhead.setAttribute('class', 'tab-container_head__kvdCCcc');
    MainAreadiv.appendChild(MainAreadivcontainerhead);

    const MainAreadivcontainerscroll = document.createElement('div');
    MainAreadivcontainerscroll.setAttribute('class', 'tab-horizontalScrollContainer_outer__nZZo_');
    MainAreadivcontainerhead.appendChild(MainAreadivcontainerscroll);

    const MainAreadivcontainerinner = document.createElement('div');
    MainAreadivcontainerinner.setAttribute('class', 'tab-container_headInner__7ZHC8');
    MainAreadivcontainerscroll.appendChild(MainAreadivcontainerinner);

    const MainAreadivcontainerbutton = document.createElement('button');
    MainAreadivcontainerbutton.setAttribute('type', 'button');
    MainAreadivcontainerbutton.setAttribute('class', 'tab-container_button__o9nZD tab-container_active__aelUx button_input__3lBgD');
    MainAreadivcontainerinner.appendChild(MainAreadivcontainerbutton);

    const MainAreadivcontainerspan = document.createElement('span');
    MainAreadivcontainerspan.setAttribute('class', 'tab-container_label__xtsPM');
    MainAreadivcontainerspan.textContent = 'Bände';
    MainAreadivcontainerbutton.appendChild(MainAreadivcontainerspan);

    const MainAreamangacontainer = document.createElement('div');
    MainAreamangacontainer.setAttribute('class', 'manga_container');
    MainAreadiv.appendChild(MainAreamangacontainer);

    const MainAreamangacontainerstyle = document.createElement('div');
    MainAreamangacontainerstyle.setAttribute('style', 'display:block');
    MainAreamangacontainer.appendChild(MainAreamangacontainerstyle);

    const MainAreamangacontainervolumes = document.createElement('div');
    MainAreamangacontainervolumes.setAttribute('class', 'manga_volume_size manga_volumes');
    MainAreamangacontainerstyle.appendChild(MainAreamangacontainervolumes);








}

buildbody();

async function getTitles() {
    


    const response = await fetch(`https://api.manga-passion.de/editions/${edition}`);
    const data = await response.json();
    try {
        width = data.width;
        width = (width / 10).toFixed(1);
    } catch (error) {
        width = "";
    }
    try {
        height = data.height;
        height = (height / 10).toFixed(1);
    } catch (error) {
        height = "";
    } try {
        numVolumes_de = data.numVolumes;
    } catch (error) {
        numVolumes_de = "";
    }
    try {
        status_de = data.status;
    } catch (error) {
        status_de = "";
    }
    try {
        origin = data.sources[0].origin;
    } catch (error) {
        origin = "";
    }
    try {
        status_jp = data.sources[0].status;
    } catch (error) {
        status_jp = "";
    }
    try {
        title = data.title;
    } catch (error) {
        title = "";
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
        demo = data.sources[0].tags.map(tag => tag.name);
        remainingGenres = demo.slice(1);
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

    if (type === 0) {
        typetext = "Manga"
    } else if (type === 1) {
        typetext = "Lightnovel"
    }
    else if (type === 2) {
        typtetext = "Artbook"
    }

    if (romaji===undefined){
        romaji ="";
    }
    if (lower_title===undefined){
        lower_title ="";
    }

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



    document.title = `Tsubasa List - ${title}`;

    document.getElementById("Copyright").textContent = ` ©${start_year} by ${author},${mangaka}/${jp_Verlag}`;
    document.getElementById("volumes_de").textContent = `${numVolumes_de}${Voltext_de}`;
    document.getElementById("size").textContent = `${width} x ${height} cm`;
    document.getElementById("start_year").textContent = `${start_year}`;
    document.getElementById("jp_volumes").textContent = `${jp_volumes}${Voltext_jp}`;
    document.getElementById("format").textContent = `${formattext}`;
    document.getElementById("status_de").textContent = `${statustext_de}`;
    document.getElementById("status_jp").textContent = `${statustext_jp}`;
    document.getElementById("Synopsis").textContent = `${description}`;
    document.getElementById("de_Verlag").innerHTML = `<li>${de_verlag}</li>`;
    document.getElementById("manga_title").innerHTML = `<h1>${title}</h1>`;
    document.getElementById("manga_title_low").innerHTML = `<span>${romaji}|<span lang="ja">${lower_title}</span></span>  `;
    document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
    document.getElementById("Demografie").innerHTML = `Demografie <li>${demo[0]}</li>`;
    document.getElementById("Genres").innerHTML = `Genres ${remainingGenres.join("</li><li>")}`;
    document.getElementById("origin").innerHTML = `<li>${origintext}</li>`;
    document.getElementById("magazin").innerHTML = `<li>${magazin}</li>`;
    document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
    document.getElementById("jp_type").innerHTML = `<li>${typetext}</li>`;




    console.log(status);
    console.log(author);
    console.log(mangaka);
    console.log(demo);
    console.log(description);
}

getTitles();


async function fetchData() {
    var finished = false;
    var page = 1;
    var data = [];
    while (!finished) {
        const response = await apiCall(page);
        if (response.length == 0) {
            finished = true;
        } else {
            data.push.apply(data, response);
            page++;
        }
    }
    return data;
}

async function apiCall(index) {
  
    return await fetch(`https://api.manga-passion.de/editions/${edition}/volumes?itemsPerPage=100&page=${index}&order[arrangement]=asc&exclude[type]=3`, { method: "GET" }).then(async (response) => {
        return response.json();
    })
}


async function getdata() {
    const data = await fetchData();



    for (i = 0; i < data.length; i++) {

        k = i;


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
        const priceText = document.createElement("span");
        priceText.className = "manga_textborder";
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
        imageElement.src = `./Covers/${imgname}${[i]}.jpg`;

        imageElement.decoding = "async";
        imageElement.dataset.nimg = "responsive";
        imageElement.className = "img_img__fx8wR";
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
        } else {
            document.getElementById("pricemanga" + [k]).textContent = `Band ${Band} · ${priceInEuro}  €`;
            document.getElementById("datemanga" + [k]).textContent = `${formattedDate}`;
        }


    }


}
getdata();