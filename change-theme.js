const toggleSwitch = document.querySelector('#toggle-theme');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const nav_link = document.querySelectorAll('.nav-link');
const hero_sup = document.querySelector('.hero-sup');
const hero_icon = document.querySelector('.hero-icon');
const hero_inf = document.querySelector('.hero-inf');
const exp_label = document.querySelector('.exp-label');
const exp = document.querySelector('.exp');
const exp_icons = document.querySelectorAll('.exp-icons');
const exprows = document.querySelectorAll('.exp .row div');
const project_label = document.querySelector('.projects-label');
const category = document.querySelectorAll('.category-col');
const projects = document.querySelectorAll('.projects .column-proyect');
const more_projects = document.querySelectorAll('.more-projects a');
const overlay_btn = document.querySelectorAll('.overlay .btn a');
const contact_col = document.querySelectorAll('.contactcol');
const contact_mail = document.querySelector('.contactcol .mail-icon a');
const foot = document.querySelector('.foot');
const foot_text = document.querySelectorAll('.foot h5');
const foot_icon = document.querySelectorAll('.foot i');
const changeThemeButton = document.querySelector('.change-theme-button');

toggleSwitch.addEventListener('change', () => {
  body.classList.toggle('light-theme');
  navbar.classList.toggle('light-theme');
  changeThemeButton.classList.toggle('black');
  hero_sup.classList.toggle('light-theme');
  hero_icon.classList.toggle('light-theme');
  hero_inf.classList.toggle('light-theme');
  exp_label.classList.toggle('light-theme');
  exp.classList.toggle('light-theme');
  contact_mail.classList.toggle('light-theme');
  foot.classList.toggle('light-theme');


  nav_link.forEach(item => {
    item.classList.toggle('light-theme')
  });

  exp_icons.forEach(icon => {
    icon.classList.toggle('light-theme');
  });

  exprows.forEach(text => {
    text.classList.toggle('light-theme')
  });

  project_label.classList.toggle('light-theme');

  category.forEach(item => {
    item.classList.toggle('light-theme')
  });

  projects.forEach(item => {
    item.classList.toggle('light-theme')
  });

  overlay_btn.forEach(item => {
    item.classList.toggle('light-theme')
  });

  contact_col.forEach(item => {
    item.classList.toggle('light-theme')
  });

  more_projects.forEach(item => {
    item.classList.toggle('light-theme');
  });

  foot_text.forEach(item => {
    item.classList.toggle('light-theme');
  });

  foot_icon.forEach(item => {
    item.classList.toggle('light-theme')
  });

  changeSvgColor('.main-svg .fil0', 'black');
  quitObject('.hero-sup img');

});


function changeSvgColor(object, color) {
  var svgElement = document.querySelectorAll(object);
  svgElement.forEach(item => {
  item.classList.toggle('black-mode');
  });
}

function quitObject(object) {
 const item = document.querySelector(object);
 item.classList.toggle("quit");
}
