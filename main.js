const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');
const modal = document.getElementById('fullscreenModal');
const modalViewer = document.getElementById('fullscreenViewer');
const closeModalBtn = document.getElementById('closeModalBtn');

fullscreenButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modelSrc = btn.getAttribute('data-src');
    const modelTitle = btn.getAttribute('data-title');

    modalViewer.setAttribute('src', modelSrc);
    modalViewer.setAttribute('alt', modelTitle);

    modal.classList.remove('hidden');
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalViewer.removeAttribute('src'); 
});
