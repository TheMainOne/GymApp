import { capitalizeFirstLetter } from '../components/fn-helpers';
import icons from '../../img/icons.svg';

function returnMarkup() {
  return `<li class="exercises__item-card">
        <div class="card">
          <div class="card__top">
            <span class="card_tag">Workout</span>
            <span class="card_rating">
              <span>${rating}</span>
              <svg width="34" height="32">
                <use href="${icons}#icon-star-yellow"></use>
              </svg>
            </span>
            <button class="card__btn" data-exmod-open>
              Start
              <svg class="card__btn-arrow" width="32" height="32">
                <use href="${icons}#icon-right-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="card__middle">
            <svg class="card__title-svg" width="32" height="32">
              <use href="${icons}#icon-run-men2"></use>
            </svg>
            <h3 class="card__title">${capitalizeFirstLetter(name)}</h3>
          </div>
          <div class="card__bottom">
            <p class="card__text"><span>Burned calories:</span> ${burnedCalories} / 3 min</p>
            <p class="card__text"><span>Body part:</span> ${capitalizeFirstLetter(
              bodyPart
            )}</p>
            <p class="card__text"><span>Target:</span> ${capitalizeFirstLetter(
              target
            )}</p>
          </div>
        </div>
      </li>`;
}

// ! Створення картки по фільтрам
export function createCardsString(arr) {
  const cardsString = arr
    .map(({ bodyPart, name, target, rating, burnedCalories, time, _id }) => {
      const capName = capitalizeFirstLetter(name);
      const capBodyPart = capitalizeFirstLetter(bodyPart);
      const capTarget = capitalizeFirstLetter(target);
      const fixedRating = rating.toFixed(1);
      return `<li class="exercises__item-card" data-name="${_id}">
        <div class="card">
          <div class="card__top">
            <span class="card_tag">Workout</span>
            <span class="card_rating">
              <span class="span_rating">${fixedRating}</span>
              <svg class="star" width="18" height="18">
                <use href="${icons}#icon-star-yellow"></use>
              </svg>
              <span class="is-hidden"><button type="button" data-id="${_id}" data-name="fovourite-delete"><svg width="16" height="16">
                <use href="${icons}#icon-trash"></use>
              </svg></button></span>
            </span>
            <button data-id="${_id}" class="card__btn" data-exmod-open>
              Start
              <svg class="card__btn-arrow" width="32" height="32">
                <use href="${icons}#icon-right-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="card__middle">
            <svg class="card__title-svg" width="32" height="32">
              <use href="${icons}#icon-run-men2"></use>
            </svg>
            <h3 class="card__title">${capName}</h3>
          </div>
          <div class="card__bottom">
            <p class="card__text"><span>Burned calories:</span> ${burnedCalories} / ${time} min</p>
            <p class="card__text"><span>Body part:</span> ${capBodyPart}</p>
            <p class="card__text"><span>Target:</span> ${capTarget}</p>
          </div>
        </div>
      </li>`;
    })
    .join('');
  return cardsString;
}
