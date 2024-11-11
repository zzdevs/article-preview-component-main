const shareIcon = document.querySelector('.share');
const shareOptions = document.querySelector('.shareOptions')


shareIcon.addEventListener('mouseenter', () => {
  shareOptions.classList.add('visible')
})
shareOptions.addEventListener('mouseleave', () => {
  shareOptions.classList.remove('visible')
})