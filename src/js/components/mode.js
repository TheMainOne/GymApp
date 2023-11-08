import iconSun from '../../img/icons.svg';
const iconDiv = document.querySelector('.btn__icon-container');

const iconMarkup = `<svg class="btn__icon">
              <use
                class="icon"
                href="${iconSun}#icon-brightness-contrast"
                width="14"
                height="14"
              ></use>
            </svg>`;
iconDiv.insertAdjacentHTML('beforeend', iconMarkup);

const body = document.querySelector('body');
const btn = document.querySelector('.btn');

const theme = localStorage.getItem('theme');
theme && document.body.classList.add(theme);

btn.addEventListener('click', handleThemeToggle);
function handleThemeToggle() {
  body.classList.toggle('darkmode');
  if (document.body.classList.contains('darkmode')) {
    localStorage.setItem('theme', 'darkmode');
  } else {
    localStorage.removeItem('theme');
  }
}
