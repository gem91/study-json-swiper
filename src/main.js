import { getJsonData, newElement, createSliderLists } from './js/Modules';
import handleOpenPopup from './js/popupModal';
import Swiper, { Navigation } from 'swiper';
// css
import 'swiper/css/navigation';
import './scss/main.scss'
import 'swiper/css';


const app = document.getElementById("app");
// modal창 html 만들기
app.innerHTML = `
<div class="modal-popup">
  <div class="modal-container">
  </div>
  <div class="dimmed"></div>
</div>
`
  
// 생성자 함수
function Sliders(datas){
    this.sliderContainer = newElement("div", "swiper");
    this.sliderUL = newElement("ul", "sliders swiper-wrapper");
    //swiper navigation
    this.sliderNavLeft = newElement("div", "swiper-button-next");
    this.sliderNavRight = newElement("div", "swiper-button-prev");

    app.appendChild(this.sliderContainer); 
    this.sliderContainer.appendChild(this.sliderUL);
    
    // JSON data 받으면 가진 데이터 갯수만큼 리스트 뿌리기
    datas.map( data => {
        this.sliderUL.innerHTML += createSliderLists(data, true)
    });
  
    //리스트 링크열기
    const sliderLink = this.sliderUL.querySelectorAll('.swiper-slide a'); // 데이터로 뿌린 li들
    sliderLink.forEach( link => {
        link.addEventListener('click', (e) => {
        e.preventDefault();
        handleOpenPopup(datas)   // modal popup창 띄우기
        })
    });
    
    new Swiper(this.sliderContainer, {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
};


getJsonData("posts1").then( result => new Sliders(result));
getJsonData("posts2").then( result => new Sliders(result));





