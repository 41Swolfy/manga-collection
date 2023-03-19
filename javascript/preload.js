
function loadpictures(){
const images = [];
const preloadImages = (path) => {
    const dir = new Directory(path);
    const files = dir.getFiles();
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.isImage()) {
            images.push(file);
        }
    }
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const img = new Image();
        img.src = image.getPath();
    }
    preloadImages('./Covers/');
};

}
loadpictures();