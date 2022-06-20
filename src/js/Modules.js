// JSON data 불러오기 function
export function getJsonData(postName) {
    return fetch(`http://localhost:4000/${postName}`)
    .then( response => response.json())
 }

// Element 만들기
export function newElement(tagName, className) {
    const el = document.createElement(tagName);
    el.className = className;
    return el;
}

export function swiperFrame(){
    return `
    <div class="swiper swiper-modal">
        <ul class="swiper-wrapper">
        </ul>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    `
}

// swiper lists 만들기 "link lists or lists"
export function createSliderLists(data, isLink) {
    return isLink ? linkLists(data) : nomalLists(data);
}

 function linkLists(data){
    return `
    <li class="swiper-slide">
        <a class="slide-link" href="#" title="슬라이드 창 열기">
            <span class="img-box">
                <img src="${data.img}" alt="${data.modal.alt}">
            </span>
            <div class="text-box">
                <h3 class="title">${data.postId}_${data.tit}</h3>
                <p class="desc">${data.description}</p>
            </div>
        </a>
    </li>
   `;
 }

 function nomalLists(data){
    return `
    <li class="swiper-slide">
        <span class="img-box">
            <img src="${data.img}" alt="${data.modal.alt}">
        </span>
        <div class="text-box">
            <h3 class="title">${data.postId}_${data.tit}</h3>
            <p class="desc">${data.description}</p>
        </div>
    </li>
   `;
 }