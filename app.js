const header=document.querySelector('.topbar');
const menu=document.querySelector('.menu');
if(header&&menu){
  menu.addEventListener('click',()=>{
    const open=header.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });
}
document.querySelectorAll('.topbar a').forEach(a=>a.addEventListener('click',()=>{
  if(header)header.classList.remove('open');
  if(menu)menu.setAttribute('aria-expanded','false');
}));
const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();
