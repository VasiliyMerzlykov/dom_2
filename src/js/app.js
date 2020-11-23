import collectionFilms from './data';

const sortTables = document.getElementsByClassName('sortTable')[0];
const titles = document.getElementsByClassName('title');

const sortIdDown = [...collectionFilms.sort((a, b) => (a.id > b.id ? 1 : -1))];
const sortIdUp = [...collectionFilms.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse()];
const sortTitleDown = [...collectionFilms.sort((a, b) => (a.title > b.title ? 1 : -1))];
const sortTitleUp = [...collectionFilms.sort((a, b) => (a.title > b.title ? 1 : -1)).reverse()];
const sortYearDown = [...collectionFilms.sort((a, b) => (a.year > b.year ? 1 : -1))];
const sortYearUp = [...collectionFilms.sort((a, b) => (a.year > b.year ? 1 : -1)).reverse()];
const sortImdbDown = [...collectionFilms.sort((a, b) => (a.imdb > b.imdb ? 1 : -1))];
const sortImdbUp = [...collectionFilms.sort((a, b) => (a.imdb > b.imdb ? 1 : -1)).reverse()];

const arrSort = [
  sortIdDown,
  sortIdUp, sortTitleDown, sortTitleUp, sortYearDown, sortYearUp, sortImdbDown, sortImdbUp,
];

function sortData(data) {
  sortTables.innerHTML = '';
  data.map((item) => sortTables.insertAdjacentHTML('beforeend', `<tr><td>${item.id}</td><td>${item.title}</td><td>(${item.year})</td><td>imdb: ${item.imdb.toFixed(2)}</td></tr>`));
}

sortData(collectionFilms);
titles[0].classList.add('down');

let counter = 1;

setInterval(() => {
  sortData(arrSort[counter]);
  if (counter % 2 === 0) {
    titles[0].classList.add('down');
  } else titles[0].classList.remove('down');
  if (counter % 2 !== 0) {
    titles[0].classList.add('up');
  } else titles[0].classList.remove('up');
  counter === (arrSort.length - 1) ? counter = 1 : counter += 1;
}, 2000);
