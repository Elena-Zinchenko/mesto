export class Card {
  constructor(data, templateSelector, openCardImage) {
    this._title = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = openCardImage;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('element__like-button_active')
  }

  _setEventListener() {
    this._buttonLike.addEventListener('click', () => {
      this._toggleLike()
    })

    this._buttonDelete.addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
    })

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    })
  }

  generateCard() {
    this._element = this._templateSelector.content.cloneNode(true)
    this._cardTitle = this._element.querySelector('.element__title');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._buttonLike = this._element.querySelector('.element__like-button');
    this._buttonDelete = this._element.querySelector('.element__delete-image');
    this._setEventListener();

    return this._element;
  }

}
