"use strict";
var AppSettings = (function () {
    function AppSettings() {
        this.secret = "cualquiercosa";
    }
    return AppSettings;
}());
exports.AppSettings = AppSettings;
;
var AppUrls = (function () {
    function AppUrls() {
        this.key = "357a7cd84e31ba07c539d1d78c26662e";
        this.urlMovieBase = "http://api.themoviedb.org/3/discover/movie";
        this.urlImage = "http://image.tmdb.org/t/p/w500";
    }
    AppUrls.prototype.urlByMovieGenre = function (genre, year) {
        return this.urlMovieBase + "?with_genres=" + genre + "&primary_release_year=" + year + "&api_key=" + this.key;
    };
    AppUrls.prototype.urlByTopMovies = function (year) {
        return this.urlMovieBase + "??primary_release_year=" + year + "&sort_by=vote_average.desc&api_key=" + this.key;
    };
    AppUrls.prototype.urlbyImageId = function (img) {
        return this.urlImage + img;
    };
    return AppUrls;
}());
exports.AppUrls = AppUrls;
//# sourceMappingURL=settings.js.map