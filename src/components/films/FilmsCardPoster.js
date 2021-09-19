import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FilmsCardPoster = ({ item }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.containerPosterFilm}
            onPress={() => navigation.navigate('HomeFilmDetail', { item })}
        >
            <Image
                style={{ width: '100%', height: 280 }}
                source={{ uri: item.Poster }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerPosterFilm: {
        width: '48.9%',
        margin: 2
    }
});

export default FilmsCardPoster;
