const { initXMLHttpRequestClick } = require('./XMLHttpRequest');
// const { initJQ } = require('./jq');
// const { jsonp } = require('./jsAndJsonp');
// const { initFetch } = require('./fetch');
const {initAxios} = require('./axios');


initXMLHttpRequestClick();

// initJQ();


// jsonp('/jsonp/getData', function(data) {
//     console.log('jsandjsonp', data);
// });

// initFetch();

initAxios();