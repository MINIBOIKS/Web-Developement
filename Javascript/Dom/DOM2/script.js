const animatedText = document.querySelector('.animated-text');

animatedText.addEventListener('click', () => {
  animatedText.classList.add('animate');
});

animatedText.addEventListener('animationend', () => {
  animatedText.classList.remove('animate');
});
