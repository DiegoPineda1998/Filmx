import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import colors from '../../res/colors';

import FilmsCardPoster from './FilmsCardPoster';

const FilmsList = ({ listFilms }) => {

    const renderItem = ({ item }) => {

        return <FilmsCardPoster item={item}/>;
    }

    return (
        <FlatList
            style={styles.list}
            data={listFilms}
            renderItem={renderItem}
            keyExtractor={(item) => item.imdbID}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: colors.black
    }
});

export default FilmsList;


