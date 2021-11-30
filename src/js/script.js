/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

// const { utils } = require("stylelint");

('use strict');
{
  const select = {
    templateOf: {
      bookTemplate: '#template-book',//adding reference to template
    },
    containerOf: {
      booksList: '.books-list',
    },
    booksImages: {
      images: '.books-list .book__image',
    }
  };

  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };

  function render() { //added new function render
    //const thisBook = this;

    for (let eachBook of dataSource.books){
      //generate HTML based on template
      const generatedHTML = templates.bookTemplate(eachBook);
      // generating Dom element
      const element = utils.createDOMFromHTML(generatedHTML);
      // adding generated element as child
      const bookListContainer = document.querySelector(select.containerOf.booksList);
      bookListContainer.appendChild(element);
    }
  }

  function initActions() {
    const thisBook = this;
    const favoriteBooks = [];
    const booksImg = document.querySelectorAll(select.booksImages.images);
    
    for (let image of booksImg) {
      image.addEventListener('dblclick', function(event) {
        event.preventDefault();
        image.classList.add('favorite');
        const bookId = thisBook.selec.containerOf.booksList.getAttribute('data-id');
        favoriteBooks.push(bookId);
      });
    }
    
      
  }

  render();
  initActions();
} 