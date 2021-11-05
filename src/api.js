export var api = (function(){

    module.getSearchResults = async (searchName) => {
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c3ee9a5d6e60eabef5fe7da95a178b83&language=en-US&query=${searchName}&page=1&include_adult=false`;
        
        let res = await fetch(url);
        let data = await res.json();
        return data.results.map((movie) => {
            return {
                id: movie.id,
                title: movie.title,
                rating: movie.vote_average,
                overview: movie.overview,
                poster_path: movie.poster_path,
                release_date: movie.release_date
            }
        });
    };

    return module;

})();