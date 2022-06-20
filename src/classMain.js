import { jsonData } from './js/jsonData';
import Swiper, { Navigation } from 'swiper';
import handleModal from './js/modal';
// css
import 'swiper/css/navigation';
import './scss/main.scss'
import 'swiper/css';


const app = document.getElementById("app");
// modal html 만들기
const modalHTML = createAsidePopup()
app.innerHTML = modalHTML;

class CreateSwipeSliders{
    constructor(){
        this.slideContainer = newElement("div", "swiper");
        this.SlideUl = newElement("ul", "sliders swiper-wrapper");
        this.swiperNavLeft = newElement("div", "swiper-button-next");
        this.swiperNavRight = newElement("div", "swiper-button-prev");
    }
    createFrame(result) {
        app.appendChild(this.slideContainer); 
        this.slideContainer.appendChild(this.SlideUl);
        this.slideContainer.appendChild(this.swiperNavLeft);
        this.slideContainer.appendChild(this.swiperNavRight);
        console.log(this.slideContainer);
        
        // posts1 받으면 가진 데이터 갯수만큼 리스트 뿌리기
        result.map( data => this.SlideUl.innerHTML += createSwiperLists(data));
    
        const sliders = this.SlideUl.querySelectorAll('li'); // 데이터로 뿌린 li들
        sliders.forEach( li => {
           li.addEventListener('click', (e) => {
            e.preventDefault();
            handleModal()   // modal popup창 띄우기
           })
        });
        
        new Swiper('.swiper', {
            slidesPerView: 3,
            modules: [Navigation],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

jsonData("posts1").then( result => {
    const swiperSliders = new CreateSwipeSliders();
    swiperSliders.createFrame(result)
   
 });
 jsonData("posts2").then( result => {
    const swiperSliders = new CreateSwipeSliders();
    swiperSliders.createFrame(result)
   
 });



function createSwiperLists(data) {
   return `
    <li class="swiper-slide">
        <a href="#" title="슬라이드 창 열기">
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

function createAsidePopup() {
    return `
    <div class="modal">
        <h1>모달창 오픈</h1>
        <button class="btn-close">close</button>
    </div>
    `;
 }

function newElement(tagName, className) {
   const el = document.createElement(tagName);
   el.className = className;
   return el;
}
