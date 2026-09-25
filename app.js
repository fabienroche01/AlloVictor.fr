const header=document.querySelector('.topbar');
const menu=document.querySelector('.menu');
if(header&&menu){menu.addEventListener('click',()=>header.classList.toggle('open'));}
document.querySelectorAll('.topbar a').forEach(a=>a.addEventListener('click',()=>header&&header.classList.remove('open')));
const year=document.getElementById('year');
if(year){year.textContent=new Date().getFullYear();}
