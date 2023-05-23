

document.addEventListener('DOMContentLoaded', function() {
  
  editor.addEventListener('input', function () {
    const editor = document.getElementById('editor').value;
    const preview = document.getElementById('preview');
    
    converter = new showdown.Converter();
    html = converter.makeHtml(editor)

    preview.innerHTML = html
  })

})


// document.addEventListener('DOMContentLoaded', function() {
//   const editor = document.getElementById('editor');
//   const preview = document.getElementById('preview');

//   console.log(editor, preview)

//   // Crear una instancia de Showdown.js
//   const converter = new showdown.Converter();
  
//   // Registrar evento de entrada de usuario
//   editor.addEventListener('input', function() {
//     const markdownContent = editor.innerText;
//     const htmlContent = converter.makeHtml(markdownContent);
//     preview.innerHTML = htmlContent;
//   });
// });











// PLAIN TEXT TO HTML
// document.addEventListener('DOMContentLoaded', function() {
//   const editor = document.querySelector('.markdown-editor');
//   const preview = document.querySelector('.markdown-preview');

//   // Crear una instancia de Showdown.js
//   const converter = new showdown.Converter();

//   // Registrar evento de entrada de usuario
//   editor.addEventListener('input', function() {
  
//     const markdownContent = editor.value;

//     const htmlContent = converter.makeHtml(markdownContent);
//     preview.value = htmlContent;
//   });
// });










