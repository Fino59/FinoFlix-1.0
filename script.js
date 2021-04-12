var movieList = ["https://walter.trakt.tv/images/movies/000/000/481/posters/thumb/373310d2ee.jpg.webp", "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://walter.trakt.tv/images/movies/000/000/120/posters/thumb/8369bf0d4a.jpg.webp", "https://walter.trakt.tv/images/movies/000/000/432/posters/thumb/7eb46b87e2.jpg.webp", "https://walter.trakt.tv/images/movies/000/016/662/posters/thumb/a7f71cbc67.jpg.webp", "https://walter.trakt.tv/images/movies/000/153/714/posters/thumb/acbd55a3f3.jpg.webp", 
"https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://walter.trakt.tv/images/movies/000/000/443/posters/thumb/84856b771d.jpg.webp", "https://walter.trakt.tv/images/movies/000/007/759/posters/thumb/8f2006123a.jpg.webp", "https://walter.trakt.tv/images/movies/000/007/729/posters/thumb/f83c750f88.jpg.webp", "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BY2YxNDczNGYtNmViNi00MDZiLWJiM2ItNGFlN2Q1NGExNGZhXkEyXkFqcGdeQXVyODE0OTU5Nzg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://walter.trakt.tv/images/movies/000/363/514/posters/thumb/8bb53c5eed.jpg.webp", "https://m.media-amazon.com/images/M/MV5BYjc1N2M1YjMtYzBiNi00NGFiLThkN2QtY2EwZGU5MDRkODAzXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://walter.trakt.tv/images/movies/000/087/329/posters/thumb/bed5a9b86f.jpg.webp", "https://walter.trakt.tv/images/movies/000/190/430/posters/thumb/9a8494f868.jpg.webp", "https://walter.trakt.tv/images/movies/000/211/396/posters/thumb/fcf02ce179.jpg.webp", "https://walter.trakt.tv/images/movies/000/000/014/posters/thumb/cdbaf1224d.jpg.webp", "https://walter.trakt.tv/images/movies/000/050/139/posters/thumb/ce0fc1b867.jpg.webp", "https://walter.trakt.tv/images/movies/000/343/180/posters/thumb/843d000f45.jpg.webp", "https://walter.trakt.tv/images/movies/000/348/846/posters/thumb/55e51bc1fd.jpg.webp", "https://walter.trakt.tv/images/movies/000/000/698/posters/thumb/2e34986380.jpg.webp", "https://walter.trakt.tv/images/movies/000/000/492/posters/thumb/a605540e9f.jpg.webp", "https://walter.trakt.tv/images/movies/000/000/236/posters/thumb/b0c675819e.jpg.webp", "https://walter.trakt.tv/images/movies/000/000/438/posters/thumb/fd6cae317a.jpg.webp", "https://walter.trakt.tv/images/movies/000/050/131/posters/thumb/9b49ef8668.jpg.webp",]

var movieListName = ["Matrix", "Jogo da Imitação", "Cavaleiro das Trevas", "Clube da Luta", "A Origem", "Whiplash", "Em Ritmo de Fuga", "Duro de Matar", "Gran Torino", "Watchmen", "Seven: Os Sete Crimes Capitais", "A Vastidão da Noite", "Jojo Rabbit", "Bacurau", "De Volta ao Jogo", "Samurai-X", "Deadpool", "Rogue One", "O Quinto Elemento", "Círculo de Fogo", "Parasita", "O Som do Silêncio", "Falcão Negro em Perigo", "O Ultimo Samurai", "O Exterminador do Futuro 2: O Julgamento Final", "Homem Aranha", "Django Livre"]

var movieLink = ["https://www.youtube.com/watch?v=D4eJx-0g3Do", "https://www.youtube.com/watch?v=j2jRs4EAvWM", "https://www.youtube.com/watch?v=TQfATDZY5Y4", "https://www.youtube.com/watch?v=dfeUzm6KF4g", "https://www.youtube.com/watch?v=zp_YGmAoht0", "https://www.youtube.com/watch?v=8J6JH-R-TN0", "https://www.youtube.com/watch?v=zTvJJnoWIPk", "https://www.youtube.com/watch?v=QIOX44m8ktc", "https://www.youtube.com/watch?v=Y_0088KD1_U", "https://www.youtube.com/watch?v=wdiHDzT6YbQ", "https://www.youtube.com/watch?v=vr3UZ-axauU", "https://www.youtube.com/watch?v=ZEiwpCJqMM0", "https://www.youtube.com/watch?v=tL4McUzXfFI", "https://www.youtube.com/watch?v=qlheaoLnewE", "https://www.youtube.com/watch?v=2AUmvWm5ZDQ", "https://www.youtube.com/watch?v=f8cFqHeUVMs", "https://www.youtube.com/watch?v=Xithigfg7dA", "https://www.youtube.com/watch?v=frdj1zb9sMY", "https://www.youtube.com/watch?v=FrEf8XHToGI", "https://www.youtube.com/watch?v=5guMumPFBag", "https://www.youtube.com/watch?v=5xH0HfJHsaY", "https://www.youtube.com/watch?v=VFOrGkAvjAE", "https://www.youtube.com/watch?v=V1UV3Vj4z0w", "https://www.youtube.com/watch?v=QZpQrc0R6J0", "https://www.youtube.com/watch?v=CRRlbK5w8AE", "https://www.youtube.com/watch?v=TYMMOjBUPMM", "https://www.youtube.com/watch?v=_iH0UBYDI4g" ]

for (var i = 0; i < movieList.length; i++) {
  document.write('<div class="catalog">' + '<a href="' + movieLink[i] +  '"' + 'target="_blank">' + '<img src=' +  movieList[i] + '>' + '</a>' + '<span class="title">' + movieListName[i] + '</span>' + '</div>')  
}
