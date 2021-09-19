import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../res/colors';

const FilmDetailDescription = ({ film }) => {

    const itemsFilm = ['Year','Released','Genre','Type','BoxOffice','Production','Director','Writer','Actors','Language','Country','Awards','Plot'];

    return (
        <View style={styles.descriptionFilm}>
            <Text style={styles.titleFilm}>{film.Title}</Text>
            {
                itemsFilm.map((item,index) => {
                    return <Text key={index} style={styles.textFilm}><Text style={styles.itemTextFilm}>{item}:</Text> {film[item]}</Text>;
                })
            }
            <View style={styles.finalContainer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleFilm: {
        color: colors.white,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        fontFamily: 'Montserrat-Black',
        fontSize: 40
    },
    descriptionFilm: {
        marginTop: 0
    },
    itemTextFilm: {
        fontFamily: 'Montserrat-Bold'
    },
    textFilm: {
        color: colors.white,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        fontFamily: 'Montserrat-Regular',
        fontSize: 15
    },
    finalContainer: {
        width: '100%',
        height: 100
    }
});

export default FilmDetailDescription;

