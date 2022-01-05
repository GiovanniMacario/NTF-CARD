
const open = document.getElementById('open');
const win = document.getElementById('window');
const bg = document.getElementById('close');




 open.addEventListener('click', () =>{
    win.classList.toggle('window__close');
 })

 bg.addEventListener('click', () =>{
    win.classList.toggle('window__close');

 })