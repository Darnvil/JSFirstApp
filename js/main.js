"use strict";






const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : true,
    
    start : function()
    {
        let numberOfFilms;
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
        {
            numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
        }
        this.count = numberOfFilms;
    },
    rememberLastFilms : function()
    {
        let i = 0;
        while (i < 2)
        {
            const lastSeenMovie = prompt('Один из последних просмотренных фильмов?', '');
            const rating = prompt('На сколько оцените его?', '');
            if (lastSeenMovie != null && rating != null && lastSeenMovie != '' && rating != '' && lastSeenMovie.length < 50 )
            {
                this.movies[lastSeenMovie] = rating;
                i++; 
            }
            
        }
    },
    detectPersonalLevel : function()
    {
        if (this.count < 10)
        {
            console.log('Просмотрено довольно мало фильмов');
        }
        else if (this.count < 30)
        {
            console.log('Вы классический зритель');
        }
        else if (this.count >= 30)
        {
            console.log('Вы киноман');
        }
        else
        {
            console.log('Произошла ошибка');
        }
    },
    showMyDB : function()
    {
        if(!this.privat)
        {
            console.log(this);
        }
    },
    writeYourGenres : function()
    {
        for (let i = 1; i < 4; i++)
        {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if(genre === '' || genre == null )
            {
                i--;
            }
            this.genres[i-1] = genre;
            
        }
        this.genres.forEach((element, i) => {
            console.log(`любимый жанр #${i + 1} - ${element}`);                
        });
    },
    toggleVisibleMyDB : function()
    {
        this.privat = !this.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberLastFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();





//console.log(personalMovieDB);