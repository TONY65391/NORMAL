const header = document.querySelector('header');
const menu = document.querySelector('header nav');
menu.onclick = function(){
    if (menu.classList.contains('active')){
        menu.classList.remove('active');
    }
    else{
        menu.classList.add('active')
    }
    header.classList.toggle('open');
}

const scrollTop = document.querySelector('.top button');
scrollTop.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var scrollPosition = 0;

const secondSection = document.querySelectorAll('main section')[1];
const about = secondSection.querySelector('.about');
const counters = about.querySelectorAll('aside .counter');
const speed = 100;

function update(){
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if(count < target){
                counter.innerText = inc + count;
                setTimeout(updateCounter, 200)
            }else{
                count.innerText = target;
            }
        }
        updateCounter();
    });
};


window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
    
    const secondSectionItems = secondSection.querySelector('.items');
    const secondSectionItemsRect = secondSectionItems.getBoundingClientRect();
    const aboutRect = about.getBoundingClientRect();

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        scrollTop.style.display = '';
    }
    else{
        scrollTop.style.display = "none";
        console.log('None');
    }
    if (scrollPosition <= 20){
        document.querySelector('header').classList.remove('grey')
        document.querySelector('header').style.top = '20px';
        scrollTop.style.display = "block";
    }
    if (scrollPosition--){
        document.querySelector('header').classList.add('grey')
        document.querySelector('header').style.top = '0px';
    }
    if (secondSectionItemsRect.top <= 300){
        secondSectionItems.classList.add('active');
    }
    if (aboutRect.top <= 300){
        about.classList.add('active');
        update();
    }

    if (window.innerWidth <= 700){
        document.querySelector('header').style.top = '0px';
        console.log("MOBILE")
    }
});

window.addEventListener('load', () => {
    if (window.innerWidth <= 700){
        document.querySelector('header').style.top = '0px';
    }
})

