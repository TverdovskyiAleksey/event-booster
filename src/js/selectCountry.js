import getRefs from './get-Refs';
import eventTLP from '../tamplates/list.hbs';
import NewsApiService from './apiService';
import onFetchError from './errorFetch';
import { clearContainer, fetchHits, newsApiService } from './Search-event';
import NewApiService from './apiService';

const refs = getRefs();
// const newsApiService = new NewsApiService();

// export default function selectCountry(e) {
//   if (e.target.nodeName === 'LI') {
//     newsApiService.countryCode = e.target.dataset.countryCode;
//     fetchHits();
//   }
// }

// function fetchHits() {
//   newsApiService.fetchByCountries().then(events => {
//     if (!events) {
//       onFetchError();
//       return;
//     }
//     clearContainer();
//     appendMarkup(events);
//   });
// }

// function appendMarkup(events) {
//   refs.eventList.insertAdjacentHTML('beforeend', eventTLP(events));
// }

// function clearContainer() {
//   refs.eventList.innerHTML = '';
// }
