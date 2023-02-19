let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let saveButton = popup.querySelector('.popup__save-button');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');
let profileName = content.querySelector('.profile__title');
let profileJob = content.querySelector('.profile__subtitle');


// функция «открытия/закрытия» попапа
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

// функция закрытия» попапа
function closePopup() {
  popup.classList.remove('popup_opened');
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInput.value;
  jobInput.value;

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);
