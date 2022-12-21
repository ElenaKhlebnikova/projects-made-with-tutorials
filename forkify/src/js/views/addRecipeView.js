import View from './view';
import { uploadRecipe } from '../model';
import icons from 'url:../../img/icons.svg';
import { isGeneratorFunction } from 'regenerator-runtime';
let numb = 6;
class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded!';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnAddIng = document.querySelector('.add__btn');
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    this.newIng();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addIngredient() {
    const curNumb = function () {
      numb = numb + 1;

      return numb;
    };
    this.parentIng = document.querySelector('.upload__column__ing');
    let html = `  <label>Ingredient ${curNumb()}</label>
          <input
           value=""
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />`;

    this.parentIng.insertAdjacentHTML('beforeend', html);
  }

  newIng() {
    this._btnAddIng.addEventListener(
      'click',
      this.addIngredient,
      this.updateNumber
    );
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
  _generateMarkup() {}
}

export default new AddRecipeView();
