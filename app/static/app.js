const menu = document.querySelector('header nav');
menu.onclick = function(){
    if (menu.classList.contains('active')){
        menu.classList.remove('active');
    }
    else{
        menu.classList.add('active')
    }
}

var scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
    const secondSection = document.querySelectorAll('main section')[1];
    const secondSectionItems = secondSection.querySelector('.items');
    const secondSectionItemsRect = secondSectionItems.getBoundingClientRect();

    if (scrollPosition <= 20){
        document.querySelector('header').classList.remove('grey')
        document.querySelector('header').style.top = '20px';
    }
    if (scrollPosition--){
        document.querySelector('header').classList.add('grey')
        document.querySelector('header').style.top = '0px';
    }
    if (secondSectionItemsRect.top <= 300){
        secondSectionItems.classList.add('active');
    }
});

