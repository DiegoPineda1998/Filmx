import React from 'react';
import { Image, StyleSheet } from 'react-native';

const FilmDetailPoster = ({ film }) => {
    return (
        <Image
            style={styles.filmPoster}
            source={{ uri: film.Poster }}
        />
    );
}

const styles = StyleSheet.create({
    filmPoster: {
        width: '70%',
        height: 400
    }
});

export default FilmDetailPoster;
