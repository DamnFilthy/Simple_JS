
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        filmsList = document.querySelector('.promo__interactive-list'),
        btn = document.querySelector('button'),
        input = document.querySelector('.adding__input'),
        checkBox = document.querySelector('.yes').previousElementSibling,
        spam = document.querySelectorAll('.promo__adv img'),
        form = document.querySelector('.add');



    const deleteSpam = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    } 
    
    const makeChanges = () => {
        poster.style.backgroundImage = 'url("img/bg.jpg")';
        genre.textContent = 'Драма';
    }
    
    const sortArr = (arr) => {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            filmsList.innerHTML += `
                <li class="promo__interactive-item"> №${i +1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        btn.addEventListener('click', (event) => {
            event.preventDefault();
            
            if (input.value && input.value.trim() != ''){
                if (input.value.length > 21){
                    input.value = `${input.value.substring(0, 22)}...`;
                }
                movieDB.movies.push(input.value);
                sortArr(movieDB.movies);
                createMovieList(movieDB.movies, filmsList);
            } 
            
            if (checkBox.checked) {
                console.log('Добавлен любимый фильм')
            } else {
                console.log('не добавлен в любымые.');
            }
            form.reset();
        });
        
       
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });

    }
        
    deleteSpam(spam);
    makeChanges();
    createMovieList(movieDB.movies, filmsList);
});