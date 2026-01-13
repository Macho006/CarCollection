const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');
const modal = document.getElementById('fullscreenModal');
const modalViewer = document.getElementById('fullscreenViewer');
const closeModalBtn = document.getElementById('closeModalBtn');
const MODAL_ANIMATION_MS = 250;

const openModal = () => {
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.add('is-open');
  });
};

const closeModal = () => {
  modal.classList.remove('is-open');
  window.setTimeout(() => {
    modal.classList.add('hidden');
  }, MODAL_ANIMATION_MS);
  modalViewer.removeAttribute('src');
};

fullscreenButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modelSrc = btn.getAttribute('data-src');
    const modelTitle = btn.getAttribute('data-title');

    modalViewer.setAttribute('src', modelSrc);
    modalViewer.setAttribute('alt', modelTitle);

    openModal();
  });
});

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
