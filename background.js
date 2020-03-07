const body = document.querySelector("body");

const IMG_NUMBER = 3

// 기본값
const image = new Image();
image.src = `image/1.jpg`;
body.prepend(image);
image.classList.add("bgImage")
image.addEventListener("loadned", handleImgLoad) //로딩이 다 된 후 이미지 갱신

function handleImgLoad() {
    console.log("finish");
}

function paintImage(imgNum)
{
    image.src = `image/${imgNum}.jpg`;
    body.removeChild(image)
    body.prepend(image);
}

function getRandom() {
    const randomNumber = Math.floor(Math.random() * IMG_NUMBER + 1);
    return randomNumber;
}

function init(){
    const num = getRandom();
    paintImage(num);
}

setInterval('init()', 10000);
