import { capitalizeFirstLetter } from '../components/fn-helpers';

export function renderExerciseModal({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  time,
  popularity,
}) {
  const capitName = capitalizeFirstLetter(name);
  const fixRating = rating.toFixed(1);
  const capitTarget = capitalizeFirstLetter(target);
  const capitBodPart = capitalizeFirstLetter(bodyPart);
  const capitEq = capitalizeFirstLetter(equipment);
  const capitDescr = capitalizeFirstLetter(description);
  return ` 
    <div class="exercise-modal-tumb" data-id="${_id}">
            <img
              class="exercise-modal__img"
              src="${gifUrl}" 
              alt="exercise"
              width="295"
              height="259"
            />
            <div class="exercise-modal-tumb_card">
              <h2 class="exercise-modal__title">${capitName}</h2>
            
             <div class="exercises-modal__rating-body">
               <p class="exercise-modal-rating__number">${fixRating}</p>
             <div class="exercise-modal__rating_active" style="width: ${
               rating / 0.05
             }%"></div>
             
             </div>   

              <div class='exercise-modal-tumb_list'>
              <ul class="exercise-modal-list">
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Target</h3>
                  <p class="exercise-modal-list__text">${capitTarget}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Body Part</h3>
                  <p class="exercise-modal-list__text">${capitBodPart}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Equipment</h3>
                  <p class="exercise-modal-list__text">${capitEq}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Popular</h3>
                  <p class="exercise-modal-list__text">${popularity}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Burned calories</h3>
                  <p class="exercise-modal-list__text">${burnedCalories}/${time}min</p>
                </li>
              </ul>
              </div>
              <p class="exercise-modal__description">
               ${capitDescr}
              </p>
            </div>
          </div>`;
}
