import React, { useEffect, useContext } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { ToastAndroid, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import colors from '../../res/colors';

import storage from '../../libs/storage';

import FilmContext from '../../context/Film/FilmContext';

const FilmDetailButtonFavorite = ({ film }) => {

    const stateFavoriteFilms = useContext(FilmContext);

    const [filmFavorite, setFilmFavorite] = useStateWithCallbackLazy(false);

    let favoriteIcon = filmFavorite ? 'star' : 'star-outline';

    const addToFavorites = async() => {

        const dataFilm = JSON.stringify(film);
        const idFilm = `${film.imdbID}`;

        const filmAdded = await storage.add(idFilm,dataFilm);

        if(filmAdded) {

            changeStateFavorite(true);
            stateFavoriteFilms.getFavoritesFilmsTotal();

        }

    }

    const removeToFavorites = async() => {

        const idFilm = `${film.imdbID}`;

        const filmRemoved = await storage.remove(idFilm);

        if(filmRemoved) {

            changeStateFavorite(false);
            stateFavoriteFilms.getFavoritesFilmsTotal();
            
        }
        
    }

    const changeStateFavorite = (state) => {

        setFilmFavorite(state, currentfilmFavorite => {

            let stateMessage = '';

            if (currentfilmFavorite) {
                stateMessage = `${film.Type.charAt(0).toUpperCase() + film.Type.slice(1)} added to your favorites list.`
            }
            else {
                stateMessage = `${film.Type.charAt(0).toUpperCase() + film.Type.slice(1)} removed to your favorites list.`
            }

            ToastAndroid.showWithGravityAndOffset(
                stateMessage,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                0,
                50
            );
        });
    }

    const loadStateFavoriteFilm = async() => {

        const dataFilm = await storage.get(`${film.imdbID}`);

        if(dataFilm) {

            setFilmFavorite(true);
           
        }
        else {

            setFilmFavorite(false);
            
        }
    }

    const handleFavoriteFilm = () => {

        filmFavorite ? removeToFavorites() : addToFavorites();

    }

    useEffect(() => {
        
        loadStateFavoriteFilm();

    });

    return (
        <Button
            buttonStyle={styles.buttonFavorite}
            icon={{ name: favoriteIcon, type: 'material-community', color: colors.gold, size: 35 }}
            onPress={handleFavoriteFilm}
        />
    );
}

const styles = StyleSheet.create({
    buttonFavorite: {
        backgroundColor: 'transparent',
        marginTop: 10
    }
});

export default FilmDetailButtonFavorite;
