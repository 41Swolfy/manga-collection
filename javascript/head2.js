function buildHead() {
    const head = document.querySelector('head');
  
  
    const metaCharset = document.createElement('meta'); // create meta tags
    metaCharset.setAttribute('charset', 'UTF-8'); // sets attributes
  
    const metaCompatible = document.createElement('meta');
    metaCompatible.setAttribute('http-equiv', 'X-UA-Compatible');
    metaCompatible.setAttribute('content', 'IE=edge');
  
    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

    const title = document.createElement('title');
    title.textContent = 'Tsubasa List';
    document.head.appendChild(title);
  
    const metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'all');
  
    const metaOGType = document.createElement('meta');
    metaOGType.setAttribute('property', 'og:type');
    metaOGType.setAttribute('content', 'website'); // indicate social media to webiste
  
    // create link tags
    const linkDropdown1 = document.createElement('link');
    linkDropdown1.setAttribute('rel', 'style');
    linkDropdown1.setAttribute('href', '/styles/List.css');
    linkDropdown1.setAttribute('as', 'stylesheet');
  
    const linkMangasite1 = document.createElement('link');
    linkMangasite1.setAttribute('rel', 'style');
    linkMangasite1.setAttribute('href', '/styles/Dropdown.css');
    linkMangasite1.setAttribute('as', 'stylesheet');
  
    const linkDropdown2 = document.createElement('link');
    linkDropdown2.setAttribute('rel', 'stylesheet');
    linkDropdown2.setAttribute('href', '/styles/List.css');
  
    const linkMangasite2 = document.createElement('link');
    linkMangasite2.setAttribute('rel', 'stylesheet');
    linkMangasite2.setAttribute('href', '/styles/Dropdown.css');
  
    const linkIcon = document.createElement('link');
    linkIcon.setAttribute('rel', 'icon');
    linkIcon.setAttribute('href', '/styles/Icon.png');
  
    const linkFont1 = document.createElement('link');
    linkFont1.setAttribute('rel', 'preconnect');
    linkFont1.setAttribute('href', 'https://fonts.googleapis.com');
  
    const linkFont2 = document.createElement('link');
    linkFont2.setAttribute('rel', 'preconnect');
    linkFont2.setAttribute('href', 'https://fonts.gstatic.com');
    linkFont2.setAttribute('crossorigin', '');
  
    const linkFontCSS = document.createElement('link');
    linkFontCSS.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&display=swap');
    linkFontCSS.setAttribute('rel', 'stylesheet');
  
    // append all tags to the head element
    head.appendChild(metaCharset);
    head.appendChild(metaCompatible);
    head.appendChild(metaViewport);
    head.appendChild(metaRobots);
    head.appendChild(metaOGType);
    head.appendChild(linkDropdown1);
    head.appendChild(linkMangasite1);
    head.appendChild(linkDropdown2);
    head.appendChild(linkMangasite2);
    head.appendChild(linkIcon);
    head.appendChild(linkFont1);
    head.appendChild(linkFont2);
    head.appendChild(linkFontCSS);
  }
  buildHead();