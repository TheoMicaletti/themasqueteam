let i = 0;
let images = [src ="https://picsum.photos/600/300?random=1", "https://picsum.photos/600/300?random=2", "https://picsum.photos/600/300?random=3", "https://picsum.photos/600/300?random=4"];
let time = 6000;

function changeImg(){
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout ("changeImg()", time);
}

window.onload = changeImg;