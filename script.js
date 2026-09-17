const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}));
