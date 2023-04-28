import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const content = document.querySelector('.content');
const buttonEditProfile = content.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonCloseProfile = popupEditProfile.querySelector('.popup__close');
const buttonSaveProfile = document.querySelector('.popup__save-button');
const formElementEditProfile = document.querySelector('.popup__form_type_edit-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = content.querySelector('.profile__title');
const profileJob = content.querySelector('.profile__subtitle');
const buttonAddCard = content.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonCloseAddCard = popupAddCard.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');
const elements = content.querySelector('.elements');
const placeName = document.querySelector('.popup__input_type_place-name');
const linkPicture = document.querySelector('.popup__input_type_link-picture');
const formElementAddCard = document.querySelector('.popup__form_type_add-card');
const popupOpenImage = document.querySelector('.popup_type_open-image');
const bigImage = popupOpenImage.querySelector('.popup__open-image');
const titleImage = popupOpenImage.querySelector('.popup__image-title');
const buttonCloseImage = popupOpenImage.querySelector('.popup__close');
const popups = document.querySelectorAll('.popup');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Закрытия попапа кликом на оверлей
popups.forEach(item => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    }
  });
});

//функция закрытия попапа нажатием на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape)
};

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

buttonCloseProfile.addEventListener('click', () => { closePopup(popupEditProfile); });

const openCardImage = (cardName, cardLink) => {
  openPopup(popupOpenImage);
  bigImage.src = cardLink;
  bigImage.alt = cardName;
  titleImage.textContent = cardName;
};

const profileFormValidator = new FormValidator(validationConfig, popupEditProfile);
const newCardFormValidator = new FormValidator(validationConfig, popupAddCard);

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

function createCard(data) {
  const card = new Card(data, cardTemplate, openCardImage);
  const cardElement = card.generateCard();
  return cardElement
};

const addCard = (item) => {
  elements.prepend(createCard(item));
};

initialCards.forEach((item) => {
  addCard(item);
});

buttonCloseImage.addEventListener('click', () => { closePopup(popupOpenImage); });

// Обработчик «отправки» формы редактирования профиля
function submitEditProfileForm(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditProfile);
};

formElementEditProfile.addEventListener('submit', submitEditProfileForm);

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});
buttonCloseAddCard.addEventListener('click', () => { closePopup(popupAddCard); });

function handleFormCardSubmit(evt) {
  evt.preventDefault();

  addCard({ name: placeName.value, link: linkPicture.value });
  evt.target.reset();

  closePopup(popupAddCard);
};

formElementAddCard.addEventListener('submit', handleFormCardSubmit);


