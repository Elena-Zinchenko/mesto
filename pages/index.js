let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let saveButton = popup.querySelector('.popup__save-button');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');

// функция «открытия/закрытия» попапа
function popupСhange() {
  popup.classList.toggle('popup_opened');
};

editButton.addEventListener('click', popupСhange);
closeButton.addEventListener('click', popupСhange);

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInput.value;
  jobInput.value;

  let profileName = content.querySelector('.profile__title');
  let profileJob = content.querySelector('.profile__subtitle');

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit, popupСhange);

saveButton.addEventListener('click', popupСhange);
