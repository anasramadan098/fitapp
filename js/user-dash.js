const userLinks = document.querySelectorAll('.user-links li a');
let contentSections = document.querySelectorAll('.statics > *:not(.user-info) ');



userLinks.forEach((link , i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        userLinks.forEach(navLink => navLink.classList.remove('active'));
        // Add active class to the clicked link
        e.target.classList.add('active');

        contentSections.forEach(section => section.classList.remove('active'));

        // Show the corresponding content section
        contentSections.forEach((section, index) => {
            if (index === i) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});


function specifClick(clickElement , sectionElement) {
    clickElement.addEventListener('click' , e => {
        contentSections.forEach(section => section.classList.remove('active'));
        sectionElement.classList.add('active');
    })
}






// Set initial active state for Dashboard
document.addEventListener('DOMContentLoaded', () => {
    const initialLink = document.querySelector('.user-links li a[data-target="dashboard-content"]');
    if (initialLink) {
        initialLink.click();
    }
});