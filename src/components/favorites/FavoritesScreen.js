import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../res/colors';

import storage from '../../libs/storage';

import FavoritesFilmsNotFound from './FavoritesFilmsNotFound';
import FavoritesFilmsList from './FavoritesFilmsList';

const FavoritesScreen = () => {

    const [listFavoritesFilms, setListFavoritesFilms] = useState([]);

    const loadFavoritesFilms = async () => {

        let allKeys = await storage.getAllKeys();
        let allFavoritesFilms = await storage.getAll(allKeys);
        let allFavoritesFilmsInJson = allFavoritesFilms.map(film => JSON.parse(film[1]));
        setListFavoritesFilms(allFavoritesFilmsInJson);

    }

    useEffect(() => {

        loadFavoritesFilms();

    });

    return (
        <View style={styles.containerFavoritesFilms}>
            <View style={styles.headerTitle}>
                <Text style={styles.title}>Favorites</Text>
            </View>
            {
                listFavoritesFilms.length == 0
                ?
                <FavoritesFilmsNotFound />
                :
                <FavoritesFilmsList listFavoritesFilms={listFavoritesFilms} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerFavoritesFilms: {
        flex: 1,
        backgroundColor: colors.black
    },
    headerTitle: {
        width: '100%',
        height: 75,
        borderBottomWidth: 2,
        backgroundColor: colors.black,
        borderBottomColor: colors.red,
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontFamily: 'Montserrat-Black',
        fontSize: 45,
        marginTop: 1
    }
});

export default FavoritesScreen;