function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
}
document.addEventListener('click', function(e){
  const nav = document.getElementById('navLinks');
  const toggle = document.querySelector('.menu-toggle');
  if(!nav || !toggle) return;
  if(nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)){
    nav.classList.remove('open');
  }
});
