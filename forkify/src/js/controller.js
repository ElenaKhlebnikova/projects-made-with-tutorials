import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import { async } from 'regenerator-runtime/runtime';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

// import 'core-js/stable';

// if (module.hot) {
//   module.hot.accept();
// }

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    //2) Rendering recipe
    recipeView.render(model.state.recipe);

    resultsView.update(model.getSearchResultsPage());
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  //1) get search query
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;

    //2) load search results
    await model.loadSearchResults(query);

    //3) render results

    resultsView.render(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    //4) render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goTopage) {
  //3) render new results

  resultsView.update(model.getSearchResultsPage());

  resultsView.render(model.getSearchResultsPage(goTopage));

  //4) render initial pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // updaate the servings
  model.updateServings(newServings);

  //update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);
    console.log(newRecipe);

    recipeView.render(model.state.recipe);

    addRecipeView.renderMessage();

    bookmarksView.render(model.state.bookmarks);

    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
