const slider = document.querySelector('.carousel-product');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


const slider2 = document.querySelector('.mode-description');
let isDown2 = false;
let startY;
let scrollTop;

slider2.addEventListener('mousedown', (e) => {
  isDown2 = true;
  slider2.classList.add('active');
  startY = e.pageY - slider2.offsetTop;
  scrollTop = slider2.scrollTop;
});
slider2.addEventListener('mouseleave', () => {
  isDown2 = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mouseup', () => {
  isDown2 = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mousemove', (e) => {
  if(!isDown2) return;
  e.preventDefault();
  const y = e.pageY - slider2.offsetTop;
  const walk = (y - startY) * 3; //scroll-fast
  slider2.scrollTop = scrollTop - walk;
  console.log(walk);
});