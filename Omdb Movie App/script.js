function searchMovie() {
    const apiKey = 'b2fd0493';
    const searchInput = document.getElementById('searchInput').value;

    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(searchInput)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovieData(data);
            } else {
                alert('Movie not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
        });
}

function displayMovieData(data) {
    const movieDataContainer = document.getElementById('movieData');
    movieDataContainer.innerHTML = `
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <img src="${data.Poster}" alt="${data.Title} Poster">
    `;
}
