
const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const img = document.getElementsByClassName('slider__img');
const btnPrev = document.querySelector('.btn-pref');
const btnNext = document.querySelector('.btn-next');

let position = 0;//начальная позиция
const slidesToShow = 3;//сколько слайдеров показывать
const slidesToScroll = 2;//сколько скролить
const imgWidth = container.clientWidth / slidesToShow;
let movePosition = slidesToScroll * imgWidth;//сдвигать слайды
let imgCount = img.length;//кол-во изображений

for(let elem of img) {
    elem.style.minWidth = imgWidth + 'px';
};

btnPrev.addEventListener('click', function(){
    const imgLeft = Math.abs(position) / imgWidth;
    position += imgLeft >= slidesToScroll ? movePosition : imgLeft * imgWidth;
    setPosition();
    checkBtns();
})

btnNext.addEventListener('click',function(){
    const imgLeft = imgCount - (Math.abs(position) + slidesToShow * imgWidth) / imgWidth;
    position -= imgLeft >= slidesToScroll ? movePosition : imgLeft * imgWidth ;
    setPosition();
    checkBtns();
})
/**
 * ф-ция для передвижения слайдов
 */
const setPosition = () => {
     track.style.transform = `translateX(${position}px)`;
}

/**
 * ф-ця отключения кнопок
 */
const checkBtns = () => {
    btnNext.disabled = position === -(imgCount - slidesToShow) * imgWidth;
    btnPrev.disabled = position === 0;
}

checkBtns();

