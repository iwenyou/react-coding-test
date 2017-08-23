import $ from 'jquery';

const URL = "https://api.flickr.com/services/feeds/photos_public.gne";

export const FETCHED_TERM = 'FETCHED_TERM';

export function fetchTerm(searchTerm){
  console.log(searchTerm);

  const request = $.ajax({
    url: URL,
    dataType: 'jsonp',
    data: searchTerm
  });

  console.log(request);

  return {
    type: FETCHED_TERM,
    payload: request
  };
}
