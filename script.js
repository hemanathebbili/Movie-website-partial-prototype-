function searchMovies() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        let title = movie.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
}
