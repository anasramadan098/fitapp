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


const stepsContent = {
    0 : {
        "title" : "Select First Match",
        "src" : 'imgs/step-1.png'
    } , 
    1 : {
        "title" : "Select  Match",
        "src" : 'imgs/step-1.png'
    } , 
    2 : {
        "title" : "Select First ",
        "src" : 'imgs/step-1.png'
    } , 
    3 : {
        "title" : "Select First Match",
        "src" : 'imgs/step-1.png'
    } , 
    4 : {
        "title" : "Select First Match",
        "src" : 'imgs/step-1.png'
    } , 
    5 : {
        "title" : "Select First Match",
        "src" : 'imgs/step-1.png'
    } , 

}


steps.forEach((step , i) => {
    step.addEventListener('click' , () => {

        // Change Class
        steps.forEach(step => step.classList.remove('active'));
        step.classList.add('active');


        // Opacity 0
        stepImg.style.opacity = 0;
        
        // Change Content
        stepImg.querySelector('h3').textContent = stepsContent[i].title;
        stepImg.querySelector('img').src = stepsContent[i].src;

        // Opacity 1
        stepImg.style.opacity = 1;
    })

})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 4,
        },
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
  });


questions.forEach(question => {
    question.addEventListener('click' , () => {
        question.classList.toggle('active');
        const answer = question.querySelector('.answer');
        if(question.classList.contains('active')){
            answer.style.maxHeight = answer.scrollHeight + "px";
        }else{
            answer.style.maxHeight = 0;
        }
    })
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

// menuIcon.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });


if (window.innerWidth <= 768) {
    document.querySelector('.hero').classList.add('no-img')
}