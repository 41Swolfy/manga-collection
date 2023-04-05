let sum = 0;
const mangaAnzahlElements = document.querySelectorAll('.manga-anzahl');

mangaAnzahlElements.forEach((element) => {
  sum += parseInt(element.textContent);
});

// Store the sum in local storage with a unique key for each page
localStorage.setItem(window.location.href, sum.toString());
