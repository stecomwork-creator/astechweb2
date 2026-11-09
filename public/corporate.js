const header=document.querySelector('header');
const menu=document.querySelector('.main-nav');
const toggle=document.querySelector('.menu-toggle');
function syncHeader(){header.classList.toggle('is-scrolled',window.scrollY>36)}
window.addEventListener('scroll',syncHeader,{passive:true});syncHeader();
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open);toggle.textContent=open?'×':'☰';toggle.setAttribute('aria-label',document.documentElement.lang==='tr'?(open?'Menüyü kapat':'Menüyü aç'):(open?'Close menu':'Open menu'))});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}});
setTimeout(()=>document.querySelector('.brand-intro')?.remove(),1500);
const email=document.querySelector('#enquiry-email');
if(email){const params=new URLSearchParams(location.search);const isDemo=params.get('intent')==='demo';const solution=params.get('solution');const tr=document.documentElement.lang==='tr';const subject=isDemo?(tr?'Demo talebi':'Demo request'):(tr?'Proje görüşmesi':'Project enquiry');email.href='mailto:info@astechglobal.ltd?subject='+encodeURIComponent(subject+(solution&&/^[1-8]$/.test(solution)?' / '+solution:''));if(isDemo)email.textContent=(tr?'Demo talebi gönder':'Email a demo request')+' ↗'}
