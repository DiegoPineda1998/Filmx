import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import colors from '../../res/colors';

import films from '../../libs/films';

import FilmDetailContainerPoster from './FilmDetailContainerPoster';
import FilmDetailDescription from './FilmDetailDescription';

const FilmDetailScreen = ({ route }) => {

    const [film, setFilm] = useState('');

    const { item } = route.params;

    const loadFilm = async () => {

        const film = await films.get(item.imdbID);
        setFilm(film);

    }

    useEffect(() => {

        loadFilm();

    }, []);

    return (
        <ScrollView style={styles.containerFilmDetail}>
            <FilmDetailContainerPoster film={film} />
            <FilmDetailDescription film={film} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerFilmDetail: {
        flex: 1,
        backgroundColor: colors.black
    }
});

export default FilmDetailScreen;
