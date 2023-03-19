var edition;
var imgname;


//missing manga ; Rosario Vampire,Chainsawman Buddy stories; Artbooks ; Eva, Black Butler;One Piece Z,Naruto Massive,
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
                link.href = link.href.replace("/O_af", "/C_af");
                link.href = link.href.replace("/O_gl", "/C_gl");
                link.href = link.href.replace("/O_mq", "/C_mq");
                link.href = link.href.replace("/O_rs", "/C_rt");
                link.href = link.href.replace("/O_tz", "/C_uz");

                if (index === 3) {
                    link.text = "R-T";
                } else if (index === 4) {
                    link.text = "U-Z";
                }
            });
        } else if (i === 3) {
            links.forEach((link) => {
                link.href = link.href.replace("Ongoing", "Dropped");
                link.href = link.href.replace("/O_af", "/D_af");
                link.href = link.href.replace("/O_gl", "/D_gl");
                link.href = link.href.replace("/O_mq", "/D_mq");
                link.href = link.href.replace("/O_rs", "/D_rt");
                link.href = link.href.replace("/O_tz", "/D_uz");
            });
        }

        // create links and append to dropdown content
        links.forEach((link) => {
            const a = document.createElement("a");
            a.setAttribute("href", link.href);
            a.textContent = link.text;
            dropdownContent.appendChild(a);
        });
        if (i === 3) {
            const invincibleLink = document.createElement("a");
            invincibleLink.setAttribute("href", "/swolfy.html");

            dropdownContent.appendChild(invincibleLink);
        }




        // append button and dropdown content to dropdown
        dropdown.appendChild(button);
        dropdown.appendChild(dropdownContent);

        // append dropdown to body
        document.body.appendChild(dropdown);
    }
}

createDropdownMenu();

 function buildbody() {

    const body = document.getElementsByTagName('body')[0];

    const Main = document.createElement('div');// create a new div element and assign it to Main variable
    Main.setAttribute('id', 'Tsubasa-list-main');// set the id attribute to Tsubasa-list-main
    body.appendChild(Main);// append Main to the body element of the document

    const layoutWide = document.createElement('div');// append Main to the body element of the document
    layoutWide.setAttribute('class', 'manga_layout');// set class attribute to manga_layout
    Main.appendChild(layoutWide);// append layoutWide to the Main element

    const mangaWrap = document.createElement('div');// create a div element assign it to mangaWrap variable
    mangaWrap.setAttribute('class', 'manga_site_wrap');//  set class attribute to manga_site_wrap
    layoutWide.appendChild(mangaWrap);//append  mangaWrap to the layoutWide element

    const mangaTop = document.createElement('div');// create a new div element and assign it to mangaTop variable
    mangaTop.setAttribute('class', 'manga_header');// set class attribute to manga_header
    mangaWrap.appendChild(mangaTop);// append mangaTop to the mangaWrap element

    const headingContainer = document.createElement('div');// create a new div element and assign it to headingContainer variable
    headingContainer.setAttribute('class', 'title_header');// set class attribute to title_header
    mangaTop.appendChild(headingContainer);// append headingContainer to the mangaTop element

    const mainHeading = document.createElement('div');// create a new div element and assign it to mainHeading variable
    mainHeading.setAttribute('class', 'top_title_header');// set class attribute to top_title_header
    headingContainer.appendChild(mainHeading);// append mainHeading to the headingContainer element

    const mangaTitle = document.createElement('div');// append mainHeading to the headingContainer element
    mangaTitle.setAttribute('id', 'manga_title');// // set id attribute to manga_title
    mainHeading.appendChild(mangaTitle);

    const subHeading = document.createElement('div');// create a new div element and assign it to subHeading variable
    subHeading.setAttribute('class', 'sub_title_header');// set class attribute to sub_title_header
    headingContainer.appendChild(subHeading);// append subHeading to the headingContainer element

    const hr = document.createElement('hr');// create a new hr element
    subHeading.appendChild(hr);// append hr to the subHeading element

    const mangaTitleLow = document.createElement('div');// create a new div element and assign it to mangaTitleLow variable
    mangaTitleLow.setAttribute('id', 'manga_title_low');// set class attribute to manga_title_low
    subHeading.appendChild(mangaTitleLow);// append mangaTitleLow to the subHeading element

    const mangaLeftSidebar = document.createElement('div');// append mangaTitleLow to the subHeading element
    mangaLeftSidebar.setAttribute('class', 'manga_leftSidebar');// set class attribute to manga_leftSidebar
    mangaWrap.appendChild(mangaLeftSidebar);// append mangaLeftSidebar to the mangaWrap element

    const mangaCover = document.createElement('div');// create a new div element and assign it to mangaCover variable
    mangaCover.setAttribute('class', 'manga_cover');// set class attribute to manga_cover
    mangaLeftSidebar.appendChild(mangaCover);// Append the 'mangaCover' div element to the 'mangaLeftSidebar' div 

    const lightbox = document.createElement('span');// Create a span element
    lightbox.setAttribute('class', 'lightbox');// set class attribute to lightbox
    mangaCover.appendChild(lightbox);

    const lightboxInner = document.createElement('span');// Create a span element
    lightboxInner.setAttribute('style', 'box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative');
    lightbox.appendChild(lightboxInner);// Append the 'lightbox' span element to the 'mangaCover' div element

    const lightboxInner2 = document.createElement('span');// create a new span element
    lightboxInner2.setAttribute('style', 'box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:142%');//inline CSS style rules
    lightboxInner.appendChild(lightboxInner2); // append the new span element as a child of lightboxInner span element

    const img = document.createElement('img');
    img.setAttribute('alt', '');// set the alt attribute of the image to an empty string for later use
    img.onerror = function () {
        img.setAttribute('src', '/styles/errorimg.jpg');// if the image isn't available set to alternative img
    }
    img.setAttribute('src', `./Covers/${imgname}0.jpg`);//sets source of the mangacover
    img.setAttribute('decoding', 'async');// sets attribute for the image as async decoding
    img.setAttribute('data-nimg', 'responsive');// sets attribute as responsive for resizing

    img.setAttribute('style', 'position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain;');// set inline CSS style rules for the image
    lightboxInner.appendChild(img);// appends image to lightbox Inner


    const copyright = document.createElement('span');// create copyright span
    copyright.setAttribute('id', 'Copyright');// set id to Copyright
    mangaCover.appendChild(copyright);// appends copyright as child to mangaCover

    const mangaContainer = document.createElement('div');// create mangacontainer div
    mangaContainer.setAttribute('class', 'manga_info_container');// set class to manga_info_container
    mangaLeftSidebar.appendChild(mangaContainer);// appends copyright as child to mangaCover

    const mangaInfos = document.createElement('div');
    mangaInfos.setAttribute('class', 'manga_info');
    mangaContainer.appendChild(mangaInfos);// appends mangaInfos as child to mangaContainer

    const sidebarInfoBlockDe = document.createElement('div');
    sidebarInfoBlockDe.setAttribute('class', 'manga_info_section');
    mangaInfos.appendChild(sidebarInfoBlockDe);// appends sidebarInfoBlockDe as child to mangaInfos

    const titleDe = document.createElement('h2');
    titleDe.setAttribute('class', 'manga_section_title');
    titleDe.textContent = 'Deutsche Ausgabe';
    sidebarInfoBlockDe.appendChild(titleDe);// appends titleDe as child to sidebarInfoBlockDe

    const ContentDe = document.createElement('div');
    ContentDe.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(ContentDe);// appends ContentDe as child to sidebarInfoBlockDe

    const deVerlag = document.createElement('span');
    deVerlag.setAttribute('class', 'manga_info_label');
    deVerlag.textContent = 'Verlag';
    ContentDe.appendChild(deVerlag);// appends deVerlag as child to ContentDe

    const deVerlagValue = document.createElement('span')
    deVerlagValue.setAttribute('id', 'de_Verlag');
    deVerlagValue.setAttribute('class', 'manga_info_content');
    ContentDe.appendChild(deVerlagValue);// appends deVerlagValue as child to ContentDe


    const statusDe = document.createElement('div');
    statusDe.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(statusDe);// appends statusDe as child to sidebarInfoBlockDe

    const statusDeLabel = document.createElement('span');
    statusDeLabel.setAttribute('class', 'manga_info_label');
    statusDeLabel.textContent = 'Status';
    statusDe.appendChild(statusDeLabel);// appends statusDeLabel as child to statusDe

    const statusDeValue = document.createElement('span');
    statusDeValue.setAttribute('id', 'status_de');
    statusDeValue.setAttribute('class', 'manga_info_content');
    statusDe.appendChild(statusDeValue);// appends statusDeValue as child to statusDe

    const deformat = document.createElement('div');
    deformat.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(deformat);// appends deformat as child to sidebarInfoBlockDe

    const deFormatLabel = document.createElement('span');
    deFormatLabel.setAttribute('class', 'manga_info_label');
    deFormatLabel.innerText = 'Format';
    deformat.appendChild(deFormatLabel);// appends deFormatLabel as child to deformat

    const deFormatValue = document.createElement('span');
    deFormatValue.setAttribute('id', 'format');
    deFormatValue.setAttribute('class', 'manga_info_content');
    deformat.appendChild(deFormatValue);// appends deFormatValue as child to deformat

    const deSize = document.createElement('div');
    deSize.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(deSize);// appends deSize as child to sidebarInfoBlockDe

    const deSizeLabel = document.createElement('span');
    deSizeLabel.setAttribute('class', 'manga_info_label');
    deSizeLabel.innerText = 'Maße';
    deSize.appendChild(deSizeLabel);// appends deSizeLabel as child to deSize


    const deSizeValue = document.createElement('span');
    deSizeValue.setAttribute('id', 'size');
    deSizeValue.setAttribute('class', 'manga_info_content');
    deSize.appendChild(deSizeValue);// appends deSizeValue as child to deSize

    const deVolumes = document.createElement('div');
    deVolumes.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockDe.appendChild(deVolumes);// appends deVolumes as child to sidebarInfoBlockDe

    const deVolumesLabel = document.createElement('span');
    deVolumesLabel.setAttribute('class', 'manga_info_label');
    deVolumesLabel.innerText = 'Bände';
    deVolumes.appendChild(deVolumesLabel);// appends deVolumesLabel as child to deVolumes

    const deVolumesLabelValue = document.createElement('span');
    deVolumesLabelValue.setAttribute('id', 'volumes_de');
    deVolumesLabelValue.setAttribute('class', 'manga_info_content');
    deVolumes.appendChild(deVolumesLabelValue);// appends deVolumesLabelValue as child to deVolumes

    const sidebarInfoBlockJp = document.createElement('div');
    sidebarInfoBlockJp.setAttribute('class', 'manga_info_section');
    mangaInfos.appendChild(sidebarInfoBlockJp);// appends sidebarInfoBlockJp as child to mangaInfos

    const titleJp = document.createElement('h2');
    titleJp.setAttribute('class', 'manga_section_title');
    titleJp.textContent = 'Erstveröffentlichung';
    sidebarInfoBlockJp.appendChild(titleJp);// appends titleJp as child to sidebarInfoBlockJp

    const StatusJp = document.createElement('div');
    StatusJp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(StatusJp);// appends StatusJp as child to sidebarInfoBlockJp

    const StatusjpLabel = document.createElement('span');
    StatusjpLabel.setAttribute('class', 'manga_info_label');

    StatusjpLabel.textContent = 'Status ';
    StatusJp.appendChild(StatusjpLabel);// StatusjpLabel copyright as child to StatusJp

    const StatusjpValue = document.createElement('span')
    StatusjpValue.setAttribute('id', 'status_jp');
    StatusjpValue.setAttribute('class', 'manga_info_content');
    StatusJp.appendChild(StatusjpValue);// appends StatusjpValue as child to mangaCover

    const originjp = document.createElement('div');
    originjp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(originjp);// appends originjp as child to sidebarInfoBlockJp

    const originjpLabel = document.createElement('span');
    originjpLabel.setAttribute('class', 'manga_info_label');
    originjpLabel.textContent = 'Herkunft';
    originjp.appendChild(originjpLabel);// appends originjpLabel as child to originjp

    const originjpValue = document.createElement('span')
    originjpValue.setAttribute('id', 'origin');
    originjpValue.setAttribute('class', 'manga_info_content');
    originjp.appendChild(originjpValue);// appends originjpValue as child to originjp

    const typejp = document.createElement('div');
    typejp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(typejp);// appends typejp as child to sidebarInfoBlockJp

    const typejpLabel = document.createElement('span');
    typejpLabel.setAttribute('class', 'manga_info_label');
    typejpLabel.textContent = 'Typ';
    typejp.appendChild(typejpLabel);// appends typejpLabel as child to typejp

    const typejpValue = document.createElement('span')
    typejpValue.setAttribute('class', 'manga_info_content');
    typejpValue.setAttribute('id', 'jp_type');
    typejp.appendChild(typejpValue);// appends typejpValue as child to typejp

    const Verlagjp = document.createElement('div');
    Verlagjp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(Verlagjp);// appends Verlagjp as child to sidebarInfoBlockJp

    const VerlagjpLabel = document.createElement('span');
    VerlagjpLabel.setAttribute('class', 'manga_info_label');
    VerlagjpLabel.textContent = 'Verlag';
    Verlagjp.appendChild(VerlagjpLabel);// appends VerlagjpLabel as child to Verlagjp

    const VerlagjpValue = document.createElement('span')
    VerlagjpValue.setAttribute('id', 'jp_Verlag')
    VerlagjpValue.setAttribute('class', 'manga_info_content');
    Verlagjp.appendChild(VerlagjpValue);// appends VerlagjpValue as child to Verlagjp

    const Magazinejp = document.createElement('div');
    Magazinejp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(Magazinejp);// appends Magazinejp as child to sidebarInfoBlockJp

    const MagazinejpLabel = document.createElement('span');
    MagazinejpLabel.setAttribute('class', 'manga_info_label');
    MagazinejpLabel.textContent = 'Magazin';
    Magazinejp.appendChild(MagazinejpLabel);// appends MagazinejpLabel as child to Magazinejp

    const MagazinejpValue = document.createElement('span')
    MagazinejpValue.setAttribute('id', 'magazin')
    MagazinejpValue.setAttribute('class', 'manga_info_content');
    Magazinejp.appendChild(MagazinejpValue);// appends MagazinejpValue as child to Magazinejp

    const yearjp = document.createElement('div');
    yearjp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(yearjp);// appends yearjp as child to sidebarInfoBlockJp

    const yearjpLabel = document.createElement('span');
    yearjpLabel.setAttribute('class', 'manga_info_label');
    yearjpLabel.textContent = 'Startjahr';
    yearjp.appendChild(yearjpLabel);// appends yearjpLabel as child to yearjp

    const yearjpValue = document.createElement('span')
    yearjpValue.setAttribute('id', 'start_year')
    yearjpValue.setAttribute('class', 'manga_info_content');
    yearjp.appendChild(yearjpValue);// appends yearjpValue as child to yearjp

    const Volumejp = document.createElement('div');
    Volumejp.setAttribute('class', 'manga_info_title');
    sidebarInfoBlockJp.appendChild(Volumejp);// appends Volumejp as child to sidebarInfoBlockJp

    const VolumejpLabel = document.createElement('span');
    VolumejpLabel.setAttribute('class', 'manga_info_label');
    VolumejpLabel.innerText = 'Bände ';
    Volumejp.appendChild(VolumejpLabel);// appends VolumejpLabel as child to Volumejp

    const VolumejpValue = document.createElement('span')
    VolumejpValue.setAttribute('id', 'jp_volumes')
    VolumejpValue.setAttribute('class', 'manga_info_content');
    Volumejp.appendChild(VolumejpValue);// appends VolumejpValue as child to Volumejp

    const mangaMainArea = document.createElement('div');
    mangaMainArea.setAttribute('class', 'manga_mainArea');
    mangaWrap.appendChild(mangaMainArea);// appends mangaMainArea as child to mangaWrap

    const mangaMainContainer = document.createElement('div');
    mangaMainContainer.setAttribute('class', 'manga_info_container');
    mangaMainArea.appendChild(mangaMainContainer);// appends mangaMainContainer as child to mangaMainArea


    const mangaMainContainerheader = document.createElement('div');
    mangaMainContainerheader.setAttribute('class', 'manga_info_heading');
    mangaMainContainer.appendChild(mangaMainContainerheader);// appends mangaMainContainerheader as child to mangaMainContainer

    const mangaMainContainerheadercontent = document.createElement('h6');
    mangaMainContainerheadercontent.innerText = 'Inhalt ';
    mangaMainContainerheader.appendChild(mangaMainContainerheadercontent);// appends mangaMainContainerheadercontent as child to mangaMainContainerheader



    const mangaMainDescription = document.createElement('div');
    mangaMainDescription.setAttribute('class', 'manga_description');
    mangaMainContainer.appendChild(mangaMainDescription);// appends mangaMainDescription as child to mangaMainContainer


    const mangaMainDescriptionAuthor = document.createElement('ul');
    mangaMainDescriptionAuthor.setAttribute('id', 'Author');
    mangaMainDescriptionAuthor.setAttribute('class', 'manga_details');
    mangaMainDescription.appendChild(mangaMainDescriptionAuthor);// appends mangaMainDescriptionAuthor as child to mangaMainDescription

    const mangaMainDescriptionMangaka = document.createElement('ul');
    mangaMainDescriptionMangaka.setAttribute('id', 'Mangaka');
    mangaMainDescriptionMangaka.setAttribute('class', 'manga_details');
    mangaMainDescription.appendChild(mangaMainDescriptionMangaka);// appends mangaMainDescriptionMangaka as child to mangaMainDescription


    const mangaMainDescriptionDemografie = document.createElement('ul');
    mangaMainDescriptionDemografie.setAttribute('id', 'Demografie');
    mangaMainDescriptionDemografie.setAttribute('class', 'manga_details');
    mangaMainDescription.appendChild(mangaMainDescriptionDemografie);// appends mangaMainDescriptionDemografie as child to mangaMainDescription

    const mangaMainDescriptionGenres = document.createElement('ul');
    mangaMainDescriptionGenres.setAttribute('id', 'Genres');
    mangaMainDescriptionGenres.setAttribute('class', 'manga_details');
    mangaMainDescription.appendChild(mangaMainDescriptionGenres);// appends mangaMainDescriptionGenres as child to mangaMainDescription

    const div = document.createElement('div');
    mangaMainDescription.appendChild(div);// appends div as child to mangaMainDescription


    const mangaMainDescriptionSynopsis = document.createElement('div');
    mangaMainDescriptionSynopsis.setAttribute('id', 'Synopsis');
    mangaMainDescriptionSynopsis.setAttribute('class', 'manga_description');
    mangaMainDescription.appendChild(mangaMainDescriptionSynopsis);// appends mangaMainDescriptionSynopsis as child to mangaMainDescription

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

(async () => {
    await getdata();
  })();
  

  

buildbody();

async function getTitles() {



    const response = await fetch(`https://api.manga-passion.de/editions/${edition}`);// api request to get title data
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
    switch (type) {
        case 0:
            typetext = "Manga"
            break;
        case 1:
            typetext = "Lightnovel"
            break;
        case 2:
            typtetext = "Artbook"
            break;
        default:
            typtetext = "unkown"

    }

    // checking for origin value to assign the correct origin


    switch (origin) {
        case 0:
            origintext = "Japan";
            break;
        case 1:
            origintext = "SüdKorea";
            break;
        case 2:
            origintext = "China";
            break;
        case 3:
            origintext = "Taiwan";
            break;
        case 4:
            origintext = "Deutschland";
            break;
        case 5:
            origintext = "Frankreich";
            break;
        case 6:
            origintext = "USA";
            break;
        case 7:
            origintext = "UK";
            break;
        case 8:
            origintext = "Spanien";
            break;
        default:
            origintext = "Unbekannter Status";
            break;

    }

    // checking for status_jp value to assign the correct status
    switch (status_jp) {
        case 0:
            statustext_jp = "Announced";
            break;
        case 1:
            statustext_jp = "Laufend";
            break;
        case 2:
            statustext_jp = "Beendet";
            break;
        default:
            statustext_jp = "Unbekannter Status";
            break;
    }

    switch (status_de) {
        case 0:
            statustext_de = "Announced";
            break;
        case 1:
            statustext_de = "Laufend";
            break;
        case 2:
            statustext_de = "Beendet";
            break;
        default:
            statustext_de = "Unbekannter Status";
            break;
    }

    switch (status_de) {
        case 0:
            Voltext_de = "+";
            break;
        case 1:
            Voltext_de = "+";
            break;
        default:
            Voltext_de = " ";
            break;
    }



    switch (status_de) {
        case 0:
            Voltext_jp = "+";
            break;
        case 1:
            Voltext_jp = "+";
            break;
        default:
            Voltext_jp = " ";
            break;
    }


    switch (format) {
        case 0:
            formattext = "Softcover";
            break;
        case 1:
            formattext = "Hardcover";
            break;
        case 5:
            formattext = "Digital";
            break;
        default:
            formattext = "Unknown";
            break;
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
    } else if (author === undefined) {
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
    } else {
        document.getElementById("Copyright").textContent = ` ©${start_year} by ${author},${mangaka}/${jp_Verlag}`;
        document.getElementById("Author").innerHTML = ` Autor<li>${author}</li>`;
        document.getElementById("Mangaka").innerHTML = ` Zeichner<li>${mangaka}</li>`;
        document.getElementById("jp_Verlag").innerHTML = `<li>${jp_Verlag}</li>`;
        document.getElementById("start_year").textContent = `${start_year}`;
    }

    // instead sets text to"undefined" if its undefined it sets it to another text

    switch (title) {
        case undefined:
            document.title = `Tsubasa List - unbekannt`;
            document.getElementById("manga_title").innerHTML = `<h1>unbekannt</h1>`;
            break;
        default:
            document.title = `Tsubasa List - ${title}`;
            document.getElementById("manga_title").innerHTML = `<h1>${title}</h1>`;
            break

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

    switch (formattext) {
        case undefined:
            document.getElementById("format").textContent = `unbekannt`;
            break;
        default:
            document.getElementById("format").textContent = `${formattext}`;
            break;
    }

    switch (statustext_de) {
        case undefined:
            document.getElementById("status_de").textContent = `unbekannt`;
            break;
        default:
            document.getElementById("status_de").textContent = `${statustext_de}`;
            break;
    }

    switch (statustext_jp) {
        case undefined:
            document.getElementById("status_jp").textContent = `unbekannt`;
            break;
        default:
            document.getElementById("status_jp").textContent = `${statustext_jp}`;
            break;
    }

    switch (description) {
        case undefined:
            document.getElementById("Synopsis").textContent = `unbekannt`;
            break;
        default:
            document.getElementById("Synopsis").textContent = `${description}`;
            break;
    }



    // instead sets text to"undefined" if its undefined it sets it to another text




    switch (de_verlag) {
        case undefined:
            document.getElementById("de_Verlag").textContent = `<li>unbekannt</li>`;
            break;
        default:
            document.getElementById("de_Verlag").innerHTML = `<li>${de_verlag}</li>`;
            break;

    }

    
    switch (demo) {
        case undefined:
            document.getElementById("Demografie").textContent = `<li>unbekannt</li>`;
            break;
        default:
            document.getElementById("Demografie").innerHTML = `Demografie <li>${demo[0]}</li>`;
            break;

    }

  

    switch (remainingGenres) {
        case undefined:
            document.getElementById("Genres").textContent = `<li>unbekannt</li>`;
            break;
        default:
            document.getElementById("Genres").innerHTML = `Genres<li> ${remainingGenres.join("</li><li>")}`;
            break;

    }

 

    switch (magazin) {
        case undefined:
            document.getElementById("magazin").innerHTML = `<li>unbekannt</li>`;
            break;
        default:
            document.getElementById("magazin").innerHTML = `<li>${magazin}</li>`;
            break;

    }

  

    switch (typetext) {
        case undefined:
            document.getElementById("jp_type").textContent = `<li>unbekannt</li>`;
            break;
        default:
            document.getElementById("jp_type").innerHTML = `<li>${typetext}</li>`;
            break;

    }

  

    switch (origintext) {
        case undefined:
            document.getElementById("origin").textContent = `<li>unbekannt</li>`;
            break;
        default:
            document.getElementById("origin").innerHTML = `<li>${origintext}</li>`;
        
    
            break;

    }

 

      

}

getTitles();


async function fetchData() {
    var finished = false;
    var page = 1;
    var data = [];
    while (!finished) { // Iterate till no data is returend
        const response = await apiCall(page);
        if (response.length == 0) { // If no data is returned set finished to boolean true
            finished = true;
        } else {// otherwise push returned data to the array and increment page for next data
            data.push.apply(data, response);
            page++;
        }
    }
    return data; //returned all fetched data
}

// API call at (page) and return response
async function apiCall(index) {

    return await fetch(`https://api.manga-passion.de/editions/${edition}/volumes?itemsPerPage=100&page=${index}&order[arrangement]=asc&exclude[type]=3`, { method: "GET" }).then(async (response) => {
        return response.json();
    })
}

// gets data array by calling fetchData
async function getdata() {
    const data = await fetchData();


    // iterate each item in data array
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
