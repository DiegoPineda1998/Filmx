import React from 'react';
import { View, StyleSheet } from 'react-native';

import FilmDetailButtonFavorite from './FilmDetailButtonFavorite';
import FilmDetailPoster from './FilmDetailPoster';

const FilmDetailContainerPoster = ({ film }) => {

    return (
        <View style={styles.containerFilmPoster}>
            <FilmDetailPoster film={film}/>
            <FilmDetailButtonFavorite film={film} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerFilmPoster: {
        width: '100%',
        alignItems: 'center'
    }
});

export default FilmDetailContainerPoster;

