var offsetStart = 0;
var offsetEnd = 0;

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
console.log('scroll:' + scroll);