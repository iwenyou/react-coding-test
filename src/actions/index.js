import $ from 'jquery';

const URL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

export const FETCHED_TERM = 'FETCHED_TERM';

export function fetchTerm(searchTerm){
  console.log('seatchTerm: ' + searchTerm);

  const request = $.getJSON({
    url: URL,
    dataType: 'jsonp',
    data: {"tag": searchTerm, "format": "json"}
  });

  console.log(request);

  return {
    type: FETCHED_TERM,
    payload: request
  };
}
