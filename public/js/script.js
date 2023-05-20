
document.addEventListener('DOMContentLoaded', function(){

  const allButtons = document.querySelectorAll('.searchBtn');
  const searchBar = document.querySelector('.searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');
  const editor = document.getElementById('markdown-editor');
  const preview = document.getElementById('preview');


  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
      searchBar.style.visibility = 'visible';
      searchBar.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
      searchInput.focus();
    });
  }

  searchClose.addEventListener('click', function() {
    searchBar.style.visibility = 'hidden';
    searchBar.classList.remove('open');
    this.setAttribute('aria-expanded', 'false');
  });
});



// SHOWDOWN, HTML TO MD IN PLACEHOLDER

// const Showdown = require('showdown');

// const converter = new Showdown.Converter();


// document.addEventListener('DOMContentLoaded', function() {
//   const editor = document.getElementById('markdown-editor');
//   const preview = document.getElementById('preview');

//   // Crear una instancia de Showdown.js
//   const converter = new showdown.Converter();

//   // Registrar evento de entrada de usuario
//   editor.addEventListener('input', function() {
//     const markdownContent = editor.innerText;
//     const htmlContent = converter.makeHtml(markdownContent);
//     preview.innerHTML = htmlContent;
//   });
// });




