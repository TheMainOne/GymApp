import { fetchExercise } from '../api';
import { renderExerciseModal } from './exercise-modal-template';
import { addClass, removeClass } from '../components/fn-helpers';
import { scrollController } from '../scrolls';
const refs = {
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  modal: document.querySelector('[data-exmodal]'),
  modalContentContainer: document.querySelector('.exercise-modal__content'),
  modalBackdrop: document.querySelector('.js-backdrop'),
};

const addToFavoritesButton = document.querySelector(
  '.exercise-modal-button__favorite'
);

const removeFromFavoritesButton = document.querySelector(
  '.exercise-modal-button__remove'
);

refs.modalBackdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    addClass(refs.modal, 'is-hidden');
    scrollController.enabledScroll();
  }
});

refs.closeModalBtn.addEventListener('click', closeModal);

export async function handleModalOpen(exId) {
  try {
    const data = await fetchExercise(exId);
    renderCard(data);
    scrollController.disabledScroll();
    if (!localStorage.getItem(data._id)) {
      removeClass(addToFavoritesButton, 'is-hidden');
      addClass(removeFromFavoritesButton, 'is-hidden');
    } else {
      removeClass(removeFromFavoritesButton, 'is-hidden');
      addClass(addToFavoritesButton, 'is-hidden');
    }

    removeFromFavoritesButton.addEventListener('click', removeFavorite);
    addToFavoritesButton.addEventListener('click', addToFavorite);
  } catch (error) {
    console.error(error.message);
  }
}

function renderCard(data) {
  const markup = renderExerciseModal(data);
  refs.modalContentContainer.innerHTML = markup;

  addClass(removeFromFavoritesButton, 'is-hidden');

  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
}

export function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
  scrollController.enabledScroll();
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

const addToFavorite = e => {
  const divExercises = document.querySelector('.exercise-modal-tumb');
  const id = divExercises.dataset;
  fetchExercise(id.id)
    .then(data => {
      localStorage.setItem(data._id, JSON.stringify(data));
    })
    .catch(error => console.log(error));
  addClass(addToFavoritesButton, 'is-hidden');
  removeClass(removeFromFavoritesButton, 'is-hidden');
};

const removeFavorite = event => {
  const divExercises = document.querySelector('.exercise-modal-tumb');
  const id = divExercises.dataset;
  localStorage.removeItem(id.id);
  addClass(removeFromFavoritesButton, 'is-hidden');
  removeClass(addToFavoritesButton, 'is-hidden');
};
