var edition  ;
var imgname;



function createDropdownMenu() {
    // create header element
    const header = document.createElement("header");
    header.classList.add("heading");
  
    // create link element
    const link = document.createElement("a");
    link.classList.add("head-link");
    link.setAttribute("href", "/index.html");
  
    // create h1 element
    const h1 = document.createElement("h1");
    h1.textContent = "Tsubasa List";
  
    // append h1 to link and link to header
    link.appendChild(h1);
    header.appendChild(link);
  
    // append header to body
    document.body.appendChild(header);
  
    // create dropdowns
    for (let i = 1; i <= 3; i++) {
      // create dropdown element
      const dropdown = document.createElement("div");
      dropdown.classList.add("dropdown");
      dropdown.setAttribute("id", `dropdown-${i}`);
  
      // create button element
      const button = document.createElement("button");
      button.classList.add("drop-btn");
      button.textContent = i === 1 ? "Ongoing ▼" : i === 2 ? "Completed ▼" : "Dropped ▼";
  
      // create dropdown content element
      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown-content");
  
      // create links for dropdown content
      const links = [
        { href: `/Ongoing/O_af.html`, text: "A-F" },
        { href: `/Ongoing/O_gl.html`, text: "G-L" },
        { href: `/Ongoing/O_mq.html`, text: "M-Q" },
        { href: `/Ongoing/O_rs.html`, text: "R-S" },
        { href: `/Ongoing/O_tz.html`, text: "T-Z" },
      ];
  
      if (i === 2) {
        links.forEach((link, index) => {
          link.href = link.href.replace("Ongoing", "Completed");
          if (index === 3) {
            link.text = "R-T";
          } else if (index === 4) {
            link.text = "U-Z";
          }
        });
      } else if (i === 3) {
        links.forEach((link) => {
          link.href = link.href.replace("Ongoing", "Dropped");
        });
      }
  
      // create links and append to dropdown content
      links.forEach((link) => {
        const a = document.createElement("a");
        a.setAttribute("href", link.href);
        a.textContent = link.text;
        dropdownContent.appendChild(a);
      });
  
      // append button and dropdown content to dropdown
      dropdown.appendChild(button);
      dropdown.appendChild(dropdownContent);
  
      // append dropdown to body
      document.body.appendChild(dropdown);
    }
  }
  
  createDropdownMenu();

async function buildbody() {

    const body = document.getElementsByTagName('body')[0];

    const mangaPassionMain = document.createElement('div');
    mangaPassionMain.setAttribute('id', 'Tsubasa-list-main');
    body.appendChild(mangaPassionMain);

    const layoutWide = document.createElement('div');
    layoutWide.setAttribute('class', 'manga_layout');
    mangaPassionMain.appendChild(layoutWide);

    const mangaWrap = document.createElement('div');
    mangaWrap.setAttribute('class', 'manga_site_wrap');
    layoutWide.appendChild(mangaWrap);

    const mangaTop = document.createElement('div');
    mangaTop.setAttribute('class', 'manga_header');
    mangaWrap.appendChild(mangaTop);

    const headingContainer = document.createElement('div');
    headingContainer.setAttribute('class', 'title_header');
    mangaTop.appendChild(headingContainer);

    const mainHeading = document.createElement('div');
    mainHeading.setAttribute('class', 'top_title_header');
    headingContainer.appendChild(mainHeading);

    const mangaTitle = document.createElement('div');
    mangaTitle.setAttribute('id', 'manga_title');
    mainHeading.appendChild(mangaTitle);

    const subHeading = document.createElement('div');
    subHeading.setAttribute('class', 'sub_title_header');
    headingContainer.appendChild(subHeading);

    const hr = document.createElement('hr');
    subHeading.appendChild(hr);

    const mangaTitleLow = document.createElement('div');
    mangaTitleLow.setAttribute('id', 'manga_title_low');
    subHeading.appendChild(mangaTitleLow);

    const mangaLeftSidebar = document.createElement('div');
    mangaLeftSidebar.setAttribute('class', 'manga_leftSidebar');
    mangaWrap.appendChild(mangaLeftSidebar);

    const mangaCover = document.createElement('div');
    mangaCover.setAttribute('class', 'manga_cover');
    mangaLeftSidebar.appendChild(mangaCover);

    const lightbox = document.createElement('span');
    lightbox.setAttribute('class', 'lightbox');
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


    const copyright = document.createElement('span');
    copyright.setAttribute('id', 'Copyright');
    mangaCover.appendChild(copyright);

    const mangaContainer = document.createElement('div');
    mangaContainer.setAttribute('class', 'manga_info_container');
    mangaLeftSidebar.appendChild(mangaContainer);

    const mangaInfos = document.createElement('div');
    mangaInfos.setAttribute('class', 'manga_info');
    mangaContainer.appendChild(mangaInfos);

    const sidebarInfoBlockDe = document.createElement('div');
    sidebarInfoBlockDe.setAttribute('class', 'manga_info_section');
    mangaInfos.appendChild(sidebarInfoBlockDe);

    const titleDe = document.createElement('h2');
    titleDe.setAttribute('class', 'manga_section_title');
    titleDe.textContent = 'Deutsche Ausgabe';
    sidebarInfoBlockDe.appendChild(titleDe);

    const ContentDe = document.createElement('div');
    ContentDe.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(ContentDe);

    const deVerlag = document.createElement('span');
    deVerlag.setAttribute('class', 'manga_info_label');
    deVerlag.textContent = 'Verlag';
    ContentDe.appendChild(deVerlag);

    const deVerlagValue = document.createElement('span')
    deVerlagValue.setAttribute('id', 'de_Verlag');
    deVerlagValue.setAttribute('class', 'manga_info_content');
    ContentDe.appendChild(deVerlagValue);


    const statusDe = document.createElement('div');
    statusDe.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(statusDe);

    const statusDeLabel = document.createElement('span');
    statusDeLabel.setAttribute('class', 'manga_info_label');
    statusDeLabel.textContent = 'Status';
    statusDe.appendChild(statusDeLabel);

    const statusDeValue = document.createElement('span');
    statusDeValue.setAttribute('id', 'status_de');
    statusDeValue.setAttribute('class', 'manga_info_content');
    statusDe.appendChild(statusDeValue);

    const deformat = document.createElement('div');
    deformat.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(deformat);

    const deFormatLabel = document.createElement('span');
    deFormatLabel.setAttribute('class', 'manga_info_label');
    deFormatLabel.innerText = 'Format';
    deformat.appendChild(deFormatLabel);

    const deFormatValue = document.createElement('span');
    deFormatValue.setAttribute('id', 'format');
    deFormatValue.setAttribute('class', 'manga_info_content');
    deformat.appendChild(deFormatValue);

    const deSize = document.createElement('div');
    deSize.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(deSize);

    const deSizeLabel = document.createElement('span');
    deSizeLabel.setAttribute('class', 'manga_info_label');
    deSizeLabel.innerText = 'Maße';
    deSize.appendChild(deSizeLabel);


    const deSizeValue = document.createElement('span');
    deSizeValue.setAttribute('id', 'size');
    deSizeValue.setAttribute('class', 'manga_info_content');
    deSize.appendChild(deSizeValue);

    const deVolumes = document.createElement('div');
    deVolumes.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(deVolumes);

    const deVolumesLabel = document.createElement('span');
    deVolumesLabel.setAttribute('class', 'manga_info_label');
    deVolumesLabel.innerText = 'Bände';
    deVolumes.appendChild(deVolumesLabel);

    const deVolumesLabelValue = document.createElement('span');
    deVolumesLabelValue.setAttribute('id', 'volumes_de');
    deVolumesLabelValue.setAttribute('class', 'manga_info_content');

    deVolumes.appendChild(deVolumesLabelValue);

    const sidebarInfoBlockJp = document.createElement('div');
    sidebarInfoBlockJp.setAttribute('class', 'manga_info_section');
    mangaInfos.appendChild(sidebarInfoBlockJp);

    const titleJp = document.createElement('h2');
    titleJp.setAttribute('class', 'manga_section_title');
    titleJp.textContent = 'Erstveröffentlichung';
    sidebarInfoBlockJp.appendChild(titleJp);

    const StatusJp = document.createElement('div');
    StatusJp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(StatusJp);

    const StatusjpLabel = document.createElement('span');
    StatusjpLabel.setAttribute('class', 'manga_info_label');

    StatusjpLabel.textContent = 'Status ';
    StatusJp.appendChild(StatusjpLabel);

    const StatusjpValue = document.createElement('span')
    StatusjpValue.setAttribute('id', 'status_jp');
    StatusjpValue.setAttribute('class', 'manga_info_content');
    StatusJp.appendChild(StatusjpValue);

    const originjp = document.createElement('div');
    originjp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(originjp);

    const originjpLabel = document.createElement('span');
    originjpLabel.setAttribute('class', 'manga_info_label');
    originjpLabel.textContent = 'Herkunft';
    originjp.appendChild(originjpLabel);

    const originjpValue = document.createElement('span')
    originjpValue.setAttribute('id', 'origin');
    originjpValue.setAttribute('class', 'manga_info_content');
    originjp.appendChild(originjpValue);

    const typejp = document.createElement('div');
    typejp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(typejp);

    const typejpLabel = document.createElement('span');
    typejpLabel.setAttribute('class', 'manga_info_label');
    typejpLabel.textContent = 'Typ';
    typejp.appendChild(typejpLabel);

    const typejpValue = document.createElement('span')
    typejpValue.setAttribute('class', 'manga_info_content');
    typejpValue.setAttribute('id', 'jp_type');
    typejp.appendChild(typejpValue);

    const Verlagjp = document.createElement('div');
    Verlagjp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(Verlagjp);

    const VerlagjpLabel = document.createElement('span');
    VerlagjpLabel.setAttribute('class', 'manga_info_label');
    VerlagjpLabel.textContent = 'Verlag';
    Verlagjp.appendChild(VerlagjpLabel);

    const VerlagjpValue = document.createElement('span')
    VerlagjpValue.setAttribute('id', 'jp_Verlag')
    VerlagjpValue.setAttribute('class', 'manga_info_content');
    Verlagjp.appendChild(VerlagjpValue);

    const Magazinejp = document.createElement('div');
    Magazinejp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(Magazinejp);

    const MagazinejpLabel = document.createElement('span');
    MagazinejpLabel.setAttribute('class', 'manga_info_label');
    MagazinejpLabel.textContent = 'Magazin';
    Magazinejp.appendChild(MagazinejpLabel);

    const MagazinejpValue = document.createElement('span')
    MagazinejpValue.setAttribute('id', 'magazin')
    MagazinejpValue.setAttribute('class', 'manga_info_content');
    Magazinejp.appendChild(MagazinejpValue);

    const yearjp = document.createElement('div');
    yearjp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(yearjp);

    const yearjpLabel = document.createElement('span');
    yearjpLabel.setAttribute('class', 'manga_info_label');
    yearjpLabel.textContent = 'Startjahr';
    yearjp.appendChild(yearjpLabel);

    const yearjpValue = document.createElement('span')
    yearjpValue.setAttribute('id', 'start_year')
    yearjpValue.setAttribute('class', 'manga_info_content');
    yearjp.appendChild(yearjpValue);

    const Volumejp = document.createElement('div');
    Volumejp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(Volumejp);

    const VolumejpLabel = document.createElement('span');
    VolumejpLabel.setAttribute('class', 'manga_info_label');
    VolumejpLabel.innerText = 'Bände ';
    Volumejp.appendChild(VolumejpLabel);

    const VolumejpValue = document.createElement('span')
    VolumejpValue.setAttribute('id', 'jp_volumes')
    VolumejpValue.setAttribute('class', 'manga_info_content');
    Volumejp.appendChild(VolumejpValue);

    const mangaMainArea = document.createElement('div');
    mangaMainArea.setAttribute('class', 'manga_mainArea');
    mangaWrap.appendChild(mangaMainArea);

    const mangaMainContainer = document.createElement('div');
    mangaMainContainer.setAttribute('class', 'manga_info_container');
    mangaMainArea.appendChild(mangaMainContainer);


    const mangaMainContainerheader = document.createElement('div');
    mangaMainContainerheader.setAttribute('class', 'manga_info_heading');
    mangaMainContainer.appendChild(mangaMainContainerheader);

    const mangaMainContainerheadercontent = document.createElement('h6');
    mangaMainContainerheadercontent.innerText = 'Inhalt ';
    mangaMainContainerheader.appendChild(mangaMainContainerheadercontent);



    const mangaMainDescription = document.createElement('div');
    mangaMainDescription.setAttribute('class', 'manga_description');
    mangaMainContainer.appendChild(mangaMainDescription);


    const mangaMainDescriptionAuthor = document.createElement('ul');
    mangaMainDescriptionAuthor.setAttribute('id', 'Author');
    mangaMainDescriptionAuthor.setAttribute('class', 'manga_details');
    mangaMainDescription.appendChild(mangaMainDescriptionAuthor);

    const mangaMainDescriptionMangaka = document.createElement('ul');
    mangaMainDescriptionMangaka.setAttribute('id', 'Mangaka');
    mangaMainDescriptionMangaka.setAttribute('class', 'manga_details');
    mangaMainDescription.appendChild(mangaMainDescriptionMangaka);


    const mangaMainDescriptionDemografie = document.createElement('ul');
    mangaMainDescriptionDemografie.setAttribute('id', 'Demografie');
    mangaMainDescriptionDemografie.setAttribute('class', 'manga_details');
    mangaMainDescription.appendChild(mangaMainDescriptionDemografie);

    const mangaMainDescriptionGenres = document.createElement('ul');
    mangaMainDescriptionGenres.setAttribute('id', 'Genres');
    mangaMainDescriptionGenres.setAttribute('class', 'manga_details');
    mangaMainDescription.appendChild(mangaMainDescriptionGenres);

    const div = document.createElement('div');
    mangaMainDescription.appendChild(div);


    const mangaMainDescriptionSynopsis = document.createElement('div');
    mangaMainDescriptionSynopsis.setAttribute('id', 'Synopsis');
    mangaMainDescriptionSynopsis.setAttribute('class', 'manga_description');
    mangaMainDescription.appendChild(mangaMainDescriptionSynopsis);

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
    MainAreadivcontainerbutton.setAttribute('class', ' button_input__3lBgD');
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
   
    if (romaji === undefined & lower_title === undefined) {
        document.getElementById("manga_title_low").innerHTML = ` `;
    } else if(romaji === undefined){
        document.getElementById("manga_title_low").innerHTML = `<span><span lang="ja">${lower_title}</span></span>  `;
    } else if(lower_title === undefined){
        document.getElementById("manga_title_low").innerHTML = `<span>${romaji}</span>  `;
    }else{
        document.getElementById("manga_title_low").innerHTML = `<span>${romaji}|<span lang="ja">${lower_title}</span></span>  `;
    }

   
    
    if(start_year === undefined & author === undefined & mangaka === undefined & jp_Verlag === undefined ){
        document.getElementById("Copyright").textContent = ` © by unbekannt`; 
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("start_year").textContent = `unbekannt`;
    }else if(start_year === undefined & mangaka === undefined & jp_Verlag === undefined){
        document.getElementById("Copyright").textContent = ` © by ${author}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }
    else if(start_year === undefined & mangaka === undefined & author === undefined  ){
        document.getElementById("Copyright").textContent = ` © by ${jp_Verlag}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
    }
    else if (start_year === undefined & jp_Verlag === undefined & author=== undefined){
        document.getElementById("Copyright").textContent = ` © by ${mangaka}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;

    }
    else if(mangaka === undefined & jp_Verlag === undefined & author=== undefined ){
        document.getElementById("Copyright").textContent = ` ©${start_year} by unbekannt`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
    }else if(start_year === undefined & mangaka === undefined){
        document.getElementById("Copyright").textContent = ` © by ${author}/${jp_Verlag}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }else if (start_year === undefined & jp_Verlag === undefined ){
        document.getElementById("Copyright").textContent = ` © by ${author},${mangaka}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }else if (start_year === undefined & author === undefined ){
        document.getElementById("Copyright").textContent = ` © by ${mangaka}/${jp_Verlag}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
    }else if(jp_Verlag === undefined  & mangaka === undefined ){
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author}`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }else if(author=== undefined & mangaka === undefined){
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${jp_Verlag}`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`
        document.getElementById("start_year").textContent = `${start_year}`;;
    }else if(jp_Verlag === undefined & author=== undefined){
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${mangaka}`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;

    }
    else if(author === undefined){
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${mangaka}/${jp_Verlag}`;
        document.getElementById("Author").innerHTML = ` Autor<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
    }else if (mangaka == undefined){
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>unbekannt</li>`;
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author}/${jp_Verlag}`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }else if (jp_Verlag === undefined){
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author},${mangaka}`;
        document.getElementById("jp_Verlag").innerHTML = `<li>unbekannt</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }else if(start_year === undefined){
        document.getElementById("Copyright").textContent = ` © by ${author},${mangaka}/${jp_Verlag}`;
        document.getElementById("start_year").textContent = `unbekannt`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
    }
    else{
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author},${mangaka}/${jp_Verlag}`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
    }

    
if(title===undefined){
    document.title = `Tsubasa List - unbekannt`; 
    document.getElementById("manga_title").innerHTML = `<h1>unbekannt</h1>`;
}else{
    document.title = `Tsubasa List - ${title}`; 
    document.getElementById("manga_title").innerHTML = `<h1>${title}</h1>`;
}

if(numVolumes_de===undefined & Voltext_de===undefined ){
    document.getElementById("volumes_de").textContent = `?`;
}else if (numVolumes_de===undefined){
    document.getElementById("volumes_de").textContent = `?`;
}else if(Voltext_de===undefined){
    document.getElementById("volumes_de").textContent = `${numVolumes_de}`;
}else{
    document.getElementById("volumes_de").textContent = `${numVolumes_de}${Voltext_de}`;
}


if(width===undefined & height===undefined ){
    document.getElementById("size").textContent = `? x $? cm`;
}else if (width===undefined){
    document.getElementById("size").textContent = `? x ${height} cm`;
}else if(height===undefined){
    document.getElementById("size").textContent = `${width} x ? cm`;
}else{
    document.getElementById("size").textContent = `${width} x ${height} cm`;
}

if(jp_volumes===undefined & Voltext_jp===undefined ){
    document.getElementById("jp_volumes").textContent = `?`;
}else if (jp_volumes===undefined){
    document.getElementById("jp_volumes").textContent = `?`;
}else if(Voltext_jp===undefined){
    document.getElementById("jp_volumes").textContent = `${jp_volumes}`;
}else{
    document.getElementById("jp_volumes").textContent = `${jp_volumes}${Voltext_jp}`;
}

if(formattext == undefined){
    document.getElementById("format").textContent = `unbekannt`;

}else{
    document.getElementById("format").textContent = `${formattext}`;
}


if(statustext_de == undefined){
    document.getElementById("format").textContent = `unbekannt`;

}else{
    document.getElementById("status_de").textContent = `${statustext_de}`;
}
if(statustext_jp == undefined){
    document.getElementById("format").textContent = `unbekannt`;

}else{
    document.getElementById("status_jp").textContent = `${statustext_jp}`;
}
if(description == undefined){
    document.getElementById("format").textContent = `unbekannt`;

}else{
    document.getElementById("Synopsis").textContent = `${description}`;
}

if(de_verlag == undefined){
    document.getElementById("format").textContent = `<li>unbekannt</li>`;

}else{
   
    document.getElementById("de_Verlag").innerHTML = `<li>${de_verlag}</li>`;
}
XMLDocument
if(demo == undefined){
    document.getElementById("format").textContent = `<li>unbekannt</li>`;

}else{
   
    document.getElementById("Demografie").innerHTML = `Demografie <li>${demo[0]}</li>`;
}
if(remainingGenres == undefined){
    document.getElementById("format").textContent = `<li>unbekannt</li>`;

}else{
   
    document.getElementById("Genres").innerHTML = `Genres ${remainingGenres.join("</li><li>")}`;
}
if(magazin == undefined){
    document.getElementById("magazin").innerHTML = `<li>unbekannt</li>`;

}else{
   
    document.getElementById("magazin").innerHTML = `<li>${magazin}</li>`;
}
if(origintext == undefined){
    document.getElementById("format").textContent = `<li>unbekannt</li>`;

}else{
   
    document.getElementById("jp_type").innerHTML = `<li>${typetext}</li>`;
}
if(origintext == undefined){
    document.getElementById("format").textContent = `<li>unbekannt</li>`;

}else{
   
    document.getElementById("origin").innerHTML = `<li>${origintext}</li>`;
}



   
   





   
    


    
   
  
    
   
   
   
    
    

    
    
    
   
   
 




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