import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';

import colors from '../../res/colors';

const FilmsNotFound = () => {
    return (
        <View style={styles.containerNotFound}>
            <Text style={styles.textNotFound}>¡Sorry!</Text>
            <Text style={styles.textNotFound}>No results found</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerNotFound: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.black,
        alignItems: 'center',
        paddingTop: 20
    },
    textNotFound: {
        color: colors.white,
        fontFamily: 'Montserrat-Regular'
    }
});

export default FilmsNotFound;
