const sliders = document.querySelectorAll('.slide-in')

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
};
const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {
        entries.forEach(entry => {
            // if (!entry.isIntersecting) {
            //     return;
            // } else {
            //     entry.target.classList.add('appear');
            //     appearOnScroll.unobserve(entry.target)
            // }

            entry.target.classList.toggle('appear', entry.isIntersecting)
        })
    }, appearOptions
)


sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})





let currentScrollPosition = 0;
scrollAmount = 320;

const projectDivs = document.querySelectorAll('.project')
const hScroll = document.querySelector('.projects')
let projectDivsFullWidth = 0;
projectDivs.forEach(item => {

    projectDivsFullWidth += item.offsetWidth;
})

let maxScroll = -projectDivsFullWidth + hScroll.offsetWidth - projectDivs[0].offsetWidth;
const btnScrollLeft = document.querySelector('.scroll-btn-left');
const btnScrollRight = document.querySelector('.scroll-btn-right');



function scrollHorizontally(val) {
    // if (window.innerWidth >= 481 && window.innerWidth <= 768) {
    //     scrollAmount = document.querySelectorAll('.project')[0].offsetWidth;
    // } else {
    //     scrollAmount = 320;
    // }

    currentScrollPosition += (val * scrollAmount);

    if (currentScrollPosition > 0) {
        currentScrollPosition = 0;
    }
    if (currentScrollPosition < maxScroll) {
        currentScrollPosition = maxScroll;

    }

    projectDivs.forEach(item => {
        item.style.right = currentScrollPosition + "px";
    })

}







const hamburgerMenuBtn = document.querySelector('.hamburger-menu-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hambergurMenuList = document.querySelector('.hamburger-menu-list')
const closeHamburgerMenuIcon = document.querySelector('.close-hamburger-menu-icon')


hamburgerMenuBtn.addEventListener('click', showHamburgerMenu);
closeHamburgerMenuIcon.addEventListener('click', closeHamburgerMenu);


function showHamburgerMenu() {
    hamburgerMenu.style.display = 'block';
    hambergurMenuList.style.display = 'block';
    document.body.style.overflow = "hidden";
}


function closeHamburgerMenu() {
    hamburgerMenu.style.display = 'none';
    hambergurMenuList.style.display = 'none';
    document.body.style.overflowY = "auto";
}


document.addEventListener('click', function (event) {


    //if user clicked inside the hamburger menu do nothing
    if (event.target.closest('.hamburger-menu') && hamburgerMenu.style.display == 'block' && hambergurMenuList.style.display == 'block') {
        return
    }

    //if user clicked outside of the hamburger menu then close hamburger menu
    if (hambergurMenuList.style.display == 'block' && !event.target.closest('.hamburger-menu-btn')) {

        hamburgerMenu.style.display = 'none';
        document.body.style.overflowY = "auto";
    }


})


