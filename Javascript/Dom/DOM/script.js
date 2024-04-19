const button = document.querySelector('button');
const animatedText = document.querySelector('.animated-text');

button.addEventListener('click', () => {
  animatedText.classList.add('animate');
});

animatedText.addEventListener('animationend', () => {
  animatedText.classList.remove('animate');
});
