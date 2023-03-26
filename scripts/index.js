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
const cardTemplate = document.querySelector('#card-template');
const elements = content.querySelector('.elements');
const placeName = document.querySelector('.popup__input_type_place-name');
const linkPicture = document.querySelector('.popup__input_type_link-picture');
const formElementAddCard = document.querySelector('.popup__form_type_add-card');
const popupOpenImage = document.querySelector('.popup_type_open-image');
const bigImage = popupOpenImage.querySelector('.popup__open-image');
const titleImage = popupOpenImage.querySelector('.popup__image-title');
const buttonCloseImage = popupOpenImage.querySelector('.popup__close');
const buttonsClosePopup = document.querySelectorAll('.popup__close');
const popup = document.querySelectorAll('.popup');

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

// Закрытия попапа кликом на оверлей
popup.forEach(item => {
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    }
  });
});

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popup.classList.remove('popup_opened');
    }
  });
};

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

buttonCloseProfile.addEventListener('click', () => { closePopup(popupEditProfile); });

//Создание карточки
const createCard = (item) => {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardElementTitle = cardElement.querySelector('.element__title');
  cardElementTitle.textContent = (item.name);
  const cardElementImage = cardElement.querySelector('.element__image')
  cardElementImage.src = (item.link);
  cardElementImage.alt = (item.name);

  //Лайк карточки
  const buttonLike = cardElement.querySelector('.element__like-button');
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  //Удаление карточки
  const buttonDelete = cardElement.querySelector('.element__delete-image');
  buttonDelete.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  //Открытие попапа-изображие
  cardElementImage.addEventListener('click', function (evt) {
    openPopup(popupOpenImage);
    bigImage.src = evt.target.src;
    bigImage.alt = evt.target.alt;
    titleImage.textContent = evt.target.alt;
  });

  return cardElement;
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
  formElementAddCard.reset();
});
buttonCloseAddCard.addEventListener('click', () => { closePopup(popupAddCard); });

// Обработчик «отправки» формы создания карты
function handleFormCardSubmit(evt) {
  evt.preventDefault();

  addCard({ name: placeName.value, link: linkPicture.value });
  evt.target.reset();

  closePopup(popupAddCard);
};
formElementAddCard.addEventListener('submit', handleFormCardSubmit);


