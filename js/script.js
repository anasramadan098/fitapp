const header = document.querySelector('header');
const up = document.querySelector('.up');
const steps = document.querySelectorAll('section.steps ul.steps li');
const stepImg = document.querySelector('.step-img');
const questions = document.querySelectorAll('section.questions .holder .container');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('header nav');


window.addEventListener('scroll' , () => {
    header.classList.toggle('scrolled' , window.scrollY > 0);

})

up.addEventListener('click' , () => {
    window.scrollTo(0,0);
})


// Sign Up Boxes
const holder = document.querySelector('.login-pop-up');


const signUpHolder = document.querySelector('.sign-up');
const loginHolder = document.querySelector('.login-up');
const toogleBtns = document.querySelectorAll('.login-pop-up .btns .button');


function closeHolder() {
    holder.classList.remove('active');
}

function openHolder() {
    
}



function openSignUpHolder() {
    toogleBtns[0].classList.add('active');
    toogleBtns[1].classList.remove('active');

    holder.classList.contains('active') ? console.log('active') : holder.classList.add('active');
    signUpHolder.classList.add('active');
    loginHolder.classList.remove('active');
}

function openLoginHolder() {
    toogleBtns[1].classList.add('active');
    toogleBtns[0].classList.remove('active');
    holder.classList.contains('active') ? console.log('active') : holder.classList.add('active');

    loginHolder.classList.add('active');
    signUpHolder.classList.remove('active');
}

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}


if (window.innerWidth <= 768) {
    document.querySelector('.hero').classList.add('no-img')
}