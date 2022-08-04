export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  
export function getMovieDetail(imdbID) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ade60b12&i=${imdbID}`)
        .then(response => response.json())
        .then(data => {
          dispatch({ 
            type: "GET_MOVIES_DETAIL", 
            payload: data 
        });
        });
    }
  }

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ade60b12&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

export function removeMovieFavorite (imdbID) {
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        payload: imdbID
    }
}