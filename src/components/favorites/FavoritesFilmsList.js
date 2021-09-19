import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import colors from '../../res/colors';

import FavoritesFilmsCardPoster from './FavoritesFilmsCardPoster';

const FavoritesFilmsList = ({ listFavoritesFilms }) => {
    
    const renderItem = ({ item }) => {

        return <FavoritesFilmsCardPoster item={item}/>;
    }

    return (
        <FlatList
            style={styles.list}
            data={listFavoritesFilms}
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

export default FavoritesFilmsList;
