export const NETFLIX_BACKGROUND_BANNER = 'https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg';

export const NETFLIX_LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
  };

export const IMAGE_CDN_URL = 'https://image.tmdb.org/t/p/original/';

export const SUPPORTED_LANGUAGES = [
  {
    identifier:'en',
    name:'English'
  },
  {
    identifier:'telugu',
    name:'Telugu'
  },
  {
    identifier:'hindi',
    name:'Hindi'
  },
  {
    identifier:'malayalam',
    name:'Malayalam'
  },
  {
    identifier:'tamil',
    name:'Tamil'
  }
]

