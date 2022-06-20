
import Swiper, { Navigation } from 'swiper';
import { newElement } from './Modules';
import { createSliderLists, swiperFrame } from './Modules';

function handleOpenPopup(datas){
    const modalWindow = document.querySelector('.modal-popup');
    const modalContainer = modalWindow.querySelector('.modal-container');
    const closeButton = newElement("button", "btn-close");
    const dimmed = modalWindow.querySelector('.dimmed')
    
    const swiper = swiperFrame();
    modalWindow.classList.add('open');
    modalContainer.innerHTML = swiper; 
    modalContainer.appendChild(closeButton);
    closeButton.innerText = "close"
    
    datas.map( data => {
        const sliderUL = modalWindow.querySelector('.swiper-wrapper');
        sliderUL.innerHTML += createSliderLists(data, false);
        dimmed.style.display = 'block';
    });
    //닫기
    closeButton.addEventListener('click', () => {
        modalContainer.innerHTML = ' ';
        modalWindow.classList.remove('open');
        dimmed.style.display = 'none';
    })
    new Swiper('.swiper-modal', {
        slidesPerView: 1,
        loop: true,
        observer: true,
        observeParents: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export default handleOpenPopup;