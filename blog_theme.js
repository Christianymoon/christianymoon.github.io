// Original file of Christian VR
// Last modification = 11/04/2023
// Copyright VR Cibersecurity 


const toggleSwitch = document.querySelector('#toggle-theme');
const body_object = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const changeThemeButton = document.querySelector('.change-theme-button');
const blogElements = [
    '.super-container .category-col h4',
    '.super-container .row',
    '.super-container .block-blog',
    '.super-container .block-blog h1',
    '.super-container',
    '#searchbar'
]

const containerBlogNavbarElements = [
    '.containter-blog-navbar i',
    '.containter-blog-navbar a'

]

toggleSwitch.addEventListener( 'change', () => {
    changeBlogSvg('.main-svg .fil0');
    changeBlogNavbar('.nav-link')
    modifyBlogBlock(blogElements)
    modifyContainerBlogNavbarElements(containerBlogNavbarElements)
    changeThemeButton.classList.toggle('black');
    body_object.classList.toggle('light-theme');
    navbar.classList.toggle('light-theme');
})

function changeBlogSvg(object) {
    var svgOBject = document.querySelectorAll(object);
    svgOBject.forEach(element => {
        element.classList.toggle('black-mode');
    });
}

function changeBlogNavbar(object) {
    var nav_link = document.querySelectorAll(object);
    nav_link.forEach(element => {
        element.classList.toggle('light-theme')
    })
}

function modifyBlogBlock(object) {
    for(var i = 0; i < object.length; i++) {
        var element = document.querySelectorAll(object[i]);
        element.forEach(item => {
            item.classList.toggle('black');
        });
    }
}

function modifyContainerBlogNavbarElements(object) {
    for(var i = 0; i < object.length; i++) {
        var elements = document.querySelectorAll(object[i]);
        elements.forEach(item => {
            item.classList.toggle('black');
        });
    }
}



