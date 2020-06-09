var arrOfLabels = [
  {
    imgUrl: 'img/lenovo.png',
    text: 'lenovo',
  },
  {
    imgUrl: 'img/samsung.png',
    text: 'samsung',
  },
  {
    imgUrl: 'img/apple.png',
    text: 'apple',
  },
  {
    imgUrl: 'img/viewsonic.png',
    text: 'viewsonic',
  },
  {
    imgUrl: 'img/bosch.png',
    text: 'bosch',
  },
  {
    imgUrl: 'img/hp.png',
    text: 'hp',
  },
  {
    imgUrl: 'img/acer.png',
    text: 'acer',
  },
  {
    imgUrl: 'img/sony.png',
    text: 'sony',
  },
  {
    imgUrl: 'img/lenovo.png',
    text: 'lenovo',
  },
  {
    imgUrl: 'img/samsung.png',
    text: 'samsung',
  },
  {
    imgUrl: 'img/apple.png',
    text: 'apple',
  }
];

var createElem = function (tagName, className) {
  var elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
};

var createCard = function (pictures) {

  for(var i = 0; i < pictures.length; i++) {
      var swiper = document.querySelector('.swiper-wrapper');
  
      // Получаем шаблон карточки
      var template = document.querySelector('.slide').content;
      var element = template.querySelector('div');
  
      // Клонируем элемент
      var clonedElement = element.cloneNode(false);
      swiper.appendChild(clonedElement); 
  }
  var labels = document.querySelectorAll('.card');
  return labels;
};

var addLabel = function (arrLabels){
    var sliders = createCard(arrLabels);
     for(var j = 0; j < sliders.length; j++) {
       
         var pic = createElem('img', 'label-image');
         pic.src = arrLabels[j].imgUrl;
         pic.alt = arrLabels[j].text;
         sliders[j].appendChild(pic);
     }
}
addLabel(arrOfLabels);



const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesOffsetAfter: 0,
      setWrapperSize: true,
      width: 240,
      spaceBetween: 16,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();


window.addEventListener('resize', () => {
  mobileSlider();
})


var wrapp = document.querySelector('.swiper-wrapper');
var changeText = document.querySelector('.swiper-wrapper--height');
var buttonViewAll = document.querySelector('.read-more-button');
var buttonText = document.querySelector('.read-more-button__text');
var textHide = 'Скрыть';
var text = 'Показать всё';


var isSlideShow = true;
buttonViewAll.addEventListener("click", function() {
    if (isSlideShow)
{
    wrapp.classList.add('swiper-wrapper--height');
    buttonViewAll.classList.add('arrowUp');
    buttonText.textContent = 'Скрыть';
    isSlideShow  = false;
}
else
{
    wrapp.classList.remove('swiper-wrapper--height');
    buttonViewAll.classList.remove('arrowUp');
    buttonText.textContent = 'Показать всё';
    isSlideShow  = true;
}
});










